"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";

export default function Section1() {
    const [services, setServices] = useState<Service[]>([]);
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("*");
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTaxServices();
    }, []);

    const fetchTaxServices = async () => {
        try {
            setLoading(true);
            setError(null);
            
            console.log('Fetching tax services...');
            const response = await getServicesByType("tax");
            
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

    const getDefaultImage = () => "/assets/imgs/pages/insurance-consultancy/page-details/img-1.png";

    if (loading) {
        return (
            <section className="insurance-consultancy-portfolio-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <p>Loading tax services...</p>
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
                                    fetchTaxServices();
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
                            <button 
                                aria-label="All" 
                                className={`btn btn-md btn-filter mb-2 me-2 ${activeFilter === "*" ? "active" : ""}`} 
                                onClick={() => handleFilter("*")}
                            >
                                all tax
                            </button>
                            {categories.map((category, index) => (
                                <button 
                                    key={index}
                                    aria-label={category} 
                                    className={`btn btn-md btn-filter mb-2 me-2 ${activeFilter === category ? "active" : ""}`} 
                                    onClick={() => handleFilter(category, category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="row g-5">
                        {filteredServices.map((service) => (
                            <div className={`filter-item col-md-6 col-12 ${service.type}`} key={service.id}>
                                <div className="card-portfolio bg-white d-flex flex-column h-100">
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`} className="position-relative">
                                        <div className="zoom-img">
                                            <Image 
                                                className="w-100" 
                                                src={service.image_1 || getDefaultImage()} 
                                                alt={service.title}
                                                width={600}
                                                height={400}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </Link>
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`}>
                                        <h6 className="mt-4 mb-2">{service.title}</h6>
                                    </Link>
                                    <p className="mb-2">{service.description}</p>
                                    <div className="mt-auto">
                                        <p className="fw-bold text-primary-2 mb-0">${service.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredServices.length === 0 && !loading && (
                        <div className="text-center">
                            <p>No tax services found.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
