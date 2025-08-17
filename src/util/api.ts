import { ServicesResponse, ApiResponse, Service } from '@/types/service';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.keyatra.com/api';
const USE_PROXY = true; // Re-enable proxy to handle CORS

class ApiClient {
  private baseURL: string;
  private proxyURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.proxyURL = '/api/proxy';
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    // Use proxy for API calls to avoid CORS issues
    const url = USE_PROXY 
      ? `${this.proxyURL}${endpoint}`
      : `${this.baseURL}${endpoint}`;
    
    try {
      const config: RequestInit = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        ...options,
      };

      console.log('Making API request to:', url);
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        console.error('API Response Error:', response.status, response.statusText);
        const errorText = await response.text().catch(() => 'Unknown error');
        console.error('Error details:', errorText);
        return {
          success: false,
          error: `HTTP error! status: ${response.status} - ${response.statusText}`,
        };
      }

      const data = await response.json();
      console.log('API Response data:', data);

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('API Request failed:', error);
      
      // If using direct API failed due to CORS, the proxy should handle it
      if (error instanceof TypeError && error.message.includes('Load failed')) {
        return {
          success: false,
          error: 'Network Error: Unable to connect to the API. Please check your internet connection or try again later.',
        };
      }
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  // Get services by type (tax, insurance, other)
  async getServicesByType(type: string): Promise<ApiResponse<ServicesResponse>> {
    // Use the correct endpoint format that works in Postman
    const endpoint = `/services/type/${type}`;
    
    console.log(`🔍 Using correct endpoint: ${endpoint}`);
    try {
      const response = await this.request<ServicesResponse>(endpoint);
      if (response.success && response.data) {
        console.log(`✅ SUCCESS with endpoint: ${endpoint}`);
        console.log('📦 Response data:', response.data);
        return response;
      }
      console.log(`❌ No success flag or data for: ${endpoint}`, response);
    } catch (error) {
      console.log(`💥 Exception with endpoint ${endpoint}:`, error);
    }
    
    return {
      success: false,
      error: `🚫 Failed to fetch services for type: ${type} from endpoint: ${endpoint}`,
    };
  }

  // Get all services
  async getAllServices(): Promise<ApiResponse<ServicesResponse>> {
    // Try the main services endpoint
    const endpoint = '/services';
    
    console.log(`🔍 Getting all services from: ${endpoint}`);
    try {
      const response = await this.request<ServicesResponse>(endpoint);
      if (response.success && response.data) {
        console.log(`✅ SUCCESS with endpoint: ${endpoint}`);
        console.log('📦 Response data:', response.data);
        return response;
      }
      console.log(`❌ No success flag or data for: ${endpoint}`, response);
    } catch (error) {
      console.log(`💥 Exception with endpoint ${endpoint}:`, error);
    }
    
    return {
      success: false,
      error: `🚫 Failed to fetch all services from endpoint: ${endpoint}`,
    };
  }

  // Get service by ID
  async getServiceById(id: number): Promise<ApiResponse<Service>> {
    try {
      console.log(`Looking for service with ID: ${id}`);
      
      // Since most service details are for tax services, try that first
      console.log('Calling tax services API...');
      const taxServicesResponse = await this.getServicesByType('tax');
      
      console.log('Tax services response:', taxServicesResponse);
      
      if (taxServicesResponse.success && taxServicesResponse.data?.services_by_category) {
        // Search in tax services first
        for (const categoryName in taxServicesResponse.data.services_by_category) {
          const servicesInCategory = taxServicesResponse.data.services_by_category[categoryName];
          console.log(`Tax category "${categoryName}" has ${servicesInCategory.length} services:`, servicesInCategory.map(s => ({id: s.id, title: s.title})));
          
          const service = servicesInCategory.find((s: Service) => {
            const match = s.id == id || String(s.id) === String(id);
            console.log(`Checking service "${s.title}" (ID: ${s.id}, type: ${typeof s.id}) against target ${id} (type: ${typeof id}) - Match: ${match}`);
            return match;
          });
          
          if (service) {
            console.log('Found service in tax category:', service);
            return {
              success: true,
              data: service,
            };
          }
        }
      }
      
      // If not found in tax services, try all services
      console.log('Service not found in tax services, trying all services...');
      const allServicesResponse = await this.getAllServices();
      
      console.log('All services response:', allServicesResponse);
      
      if (allServicesResponse.success && allServicesResponse.data?.services_by_category) {
        for (const categoryName in allServicesResponse.data.services_by_category) {
          const servicesInCategory = allServicesResponse.data.services_by_category[categoryName];
          console.log(`All services category "${categoryName}" has ${servicesInCategory.length} services:`, servicesInCategory.map(s => ({id: s.id, title: s.title})));
          
          const service = servicesInCategory.find((s: Service) => {
            const match = s.id == id || String(s.id) === String(id);
            console.log(`Checking service "${s.title}" (ID: ${s.id}) against target ${id} - Match: ${match}`);
            return match;
          });
          
          if (service) {
            console.log('Found service in all services:', service);
            return {
              success: true,
              data: service,
            };
          }
        }
      }
      
      console.error(`Service with ID ${id} not found in any category`);
      return {
        success: false,
        error: `Service with ID ${id} not found`,
      };
    } catch (error) {
      console.error('Error in getServiceById:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }
}

// Export a singleton instance
const apiClient = new ApiClient();

// Export individual methods for convenience
export const getServicesByType = (type: string) => apiClient.getServicesByType(type);
export const getAllServices = () => apiClient.getAllServices();
export const getServiceById = (id: number) => apiClient.getServiceById(id);

export { apiClient };
