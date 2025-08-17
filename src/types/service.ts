export interface Category {
  id: number;
  name: string;
  type: string;
  description: string;
  icon: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  title: string;
  type: string;
  category_id: number;
  description: string;
  details_short: string;
  details_long: string;
  price: string;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
  category: Category;
}

export interface ServicesResponse {
  success: boolean;
  type: string;
  services_by_category: {
    [categoryName: string]: Service[];
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
