"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";
import '@/assets/css/OtherCard.css';
import '@/assets/css/FilterButton.css';

export default function Section1() {
    const [services, setServices] = useState<Service[]>([]);
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("*");
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOtherServices();
    }, []);

    const fetchOtherServices = async () => {
        try {
            setLoading(true);
            setError(null);
            
            console.log('Fetching other services...');
            const response = await getServicesByType("other");
            
            console.log('API Response:', response);
            
            if (response.success && response.data) {
                console.log('Response data structure:', response.data);
                
                // Check if services_by_category exists and is not null
                if (response.data.services_by_category && typeof response.data.services_by_category === 'object') {
                    const allServices: Service[] = [];
                    const categoryNames: string[] = [];
                    
                    // Extract all services and categories
                    Object.entries(response.data.services_by_category).forEach(([categoryName, categoryServices]) => {
                        const servicesArray = categoryServices as Service[];
                        allServices.push(...servicesArray);
                        if (!categoryNames.includes(categoryName)) {
                            categoryNames.push(categoryName);
                        }
                    });
                    
                    setServices(allServices);
                    setFilteredServices(allServices);
                    setCategories(categoryNames);
                    
                    console.log('Services loaded:', allServices.length);
                    console.log('Categories:', categoryNames);
                } else {
                    console.error('Invalid response structure - services_by_category is missing or null:', response.data);
                    setError("Invalid API response structure");
                }
            } else {
                console.error('API call failed:', response.error);
                setError(response.error || "Failed to load services");
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = (filter: string, categoryName?: string) => {
        setActiveFilter(filter);
        
        if (filter === "*") {
            setFilteredServices(services);
        } else if (categoryName) {
            const filtered = services.filter(service => service.category.name === categoryName);
            setFilteredServices(filtered);
        }
    };

    if (loading) {
        return (
            <section className="insurance-consultancy-portfolio-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <p>Loading professional services...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error && services.length === 0) {
        return (
            <section className="insurance-consultancy-portfolio-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <div className="alert alert-warning" role="alert">
                            <h5>⚠️ API Connection Issue</h5>
                            <p>{error}</p>
                            <button 
                                className="btn btn-primary mt-2" 
                                onClick={() => {
                                    setError(null);
                                    fetchOtherServices();
                                }}
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <>
            {/*insurance-consultancy-portfolio section 1*/}
            <section className="insurance-consultancy-portfolio-section-1 py-120 overflow-hidden">
                <div className="container">
                    {error && (
                        <div className="alert alert-warning mb-4" role="alert">
                            <small>{error}</small>
                        </div>
                    )}
                    <div className="text-center mb-3">
                        <div className="button-group filter-button-group filter-menu-active">
                            {categories.map((category, index) => (
                                <button 
                                    key={index}
                                    aria-label={category} 
                                    className={`filter-btn ${activeFilter === category ? "active" : ""}`} 
                                    onClick={() => handleFilter(category, category)}
                                    data-text={category}
                                >
                                    {category}
                                </button>
                            ))}
                            <button 
                                aria-label="All" 
                                className={`filter-btn ${activeFilter === "*" ? "active" : ""}`} 
                                onClick={() => handleFilter("*")}
                                data-text="all Services"
                            >
                                all Services
                            </button>
                        </div>
                    </div>
                    <div className="row g-5">
                        {filteredServices.map((service, index) => (
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100} key={service.id}>
                                <section className="other-container">
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`}>
                                        <div className="other-card">
                                            <div className="other-content">
                                                <p className="other-logo">{service.title}</p>
                                                <div className="other-h6">{service.category?.name || 'Professional Service'}</div>
                                                <div className="other-hover-content">
                                                    <p>{service.description || 'Professional service tailored to meet your specific business needs and requirements.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </section>
                            </div>
                        ))}
                    </div>
                    {filteredServices.length === 0 && !loading && (
                        <div className="text-center">
                            <p>No other services found.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}