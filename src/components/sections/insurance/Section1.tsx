"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";
import '@/assets/css/FilterButton.css';

export default function Section1() {
    const [services, setServices] = useState<Service[]>([]);
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("*");
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchInsuranceServices();
    }, []);

    const fetchInsuranceServices = async () => {
        try {
            setLoading(true);
            setError(null);
            
            console.log('Fetching insurance services...');
            const response = await getServicesByType("insurance");
            
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
                        console.log(`Category: "${categoryName}", Services:`, servicesArray);
                        
                        allServices.push(...servicesArray);
                        if (!categoryNames.includes(categoryName)) {
                            categoryNames.push(categoryName);
                        }
                    });
                    
                    setServices(allServices);
                    setFilteredServices(allServices);
                    setCategories(categoryNames);
                    
                    console.log('All services loaded:', allServices);
                    console.log('Categories extracted:', categoryNames);
                    console.log('Services with their categories:', allServices.map(s => ({
                        id: s.id,
                        title: s.title,
                        category_id: s.category_id,
                        category_name: s.category?.name
                    })));
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
            console.log('Filtering by category:', categoryName);
            console.log('Available services:', services);
            
            // Filter by category name
            const filtered = services.filter(service => {
                const match = service.category.name === categoryName;
                console.log(`Service "${service.title}" category: "${service.category.name}" matches "${categoryName}": ${match}`);
                return match;
            });
            
            console.log('Filtered services:', filtered);
            setFilteredServices(filtered);
        }
    };

    const getIconPath = (sortOrder: number) => {
        return `/assets/imgs/pages/insurance-consultancy/page-services/icon-${sortOrder}.png`;
    };

    const getDefaultImage = () => "/assets/imgs/pages/insurance-consultancy/page-details/img-3.png";

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
                                    fetchInsuranceServices();
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
                        {filteredServices.map((service) => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="card-services bg-white d-flex flex-column h-100" data-aos="fade-up" data-aos-delay={service.price ? 0 : 200}>
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`}  className="position-relative">
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
                                        <div className="position-absolute top-100 end-0 translate-middle-y me-5 icon-shape icon-80 bg-white shadow-1">
                                            <Image
                                                src={getIconPath(service.sort_order)}
                                                alt={service.title}
                                                width={80}
                                                height={80}
                                                onError={() => {
                                                    console.log(`Icon not found for sort_order: ${service.sort_order}, expected path: ${getIconPath(service.sort_order)}`);
                                                }}
                                            />
                                        </div>
                                    </Link>
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`}>
                                        <h6 className="mt-5 mb-3">{service.title}</h6>
                                    </Link>
                                    <p className="mb-5">{service.description}</p>
                                    <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`} className="link-article text-uppercase fs-7 fw-bold text-primary-2">
                                        Read More
                                    </Link>
                                </div>
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

