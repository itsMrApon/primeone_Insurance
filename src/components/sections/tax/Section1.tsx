"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";
import '@/assets/css/TaxCard.css';
import '@/assets/css/FilterButton.css';

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
                                data-text="all tax"
                            >
                                all tax
                            </button>
                        </div>
                    </div>
                    <div className="row g-4">
                        {filteredServices.map((service) => (
                            <div className={`filter-item col-lg-4 col-md-6 col-12 ${service.type}`} key={service.id}>
                                <Link href={`/service-details?id=${service.id}&title=${encodeURIComponent(service.title)}`}>
                                    <div className="tax-card">
                                        <div className="tax-card__img">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 128 128">
                                                <rect y="24.7" x="13.1" width="101.2" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" height="78.6" className="st1"></rect>
                                                <rect y="24.7" x="13.1" width="101.2" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" height="78.6" className="st53"></rect>
                                                <polygon points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107" className="st16"></polygon>
                                                <polygon points="97.2,23 10,23 10,102 111,102 111,36.8" className="st1"></polygon>
                                                <polygon points="97.2,23 10,23 10,102 111,102 111,36.8" className="st53"></polygon>
                                                <g>
                                                    <rect y="34" x="20" width="80" height="58" className="st7"></rect>
                                                    <g>
                                                        <polygon points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92" className="st9"></polygon>
                                                        <circle r="11" cy="52" cx="57" className="st18"></circle>
                                                        <polygon points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2" className="st1"></polygon>
                                                        <path d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z" className="st1"></path>
                                                        <polygon points="73.1,44.2 83.6,92 100.2,92" className="st15"></polygon>
                                                        <polyline points="100.2,91.9 73.1,44.1 39.7,91.9" className="st2"></polyline>
                                                        <polyline points="51.2,75.4 40,58.5 20.2,91.9" className="st2"></polyline>
                                                        <polygon points="51.2,75.4 40,58.5 47,81.3" className="st15"></polygon>
                                                        <polyline points="51.5,91.9 67.1,70.5 80.4,91.9" className="st2"></polyline>
                                                        <polygon points="72.3,92 67.1,70.7 80.4,92" className="st15"></polygon>
                                                    </g>
                                                    <rect y="34" x="20" width="80" height="58" className="st53"></rect>
                                                </g>
                                                <polygon points="111,37 97,37 97,23" className="st18"></polygon>
                                                <polygon points="111,37 97,37 97,23" className="st53"></polygon>
                                            </svg>
                                        </div>
                                        <div className="tax-card__subtitle">{service.category.name}</div>
                                        <div className="tax-card__wrapper">
                                            <div className="tax-card__title">{service.title}</div>
                                            <div className="tax-card__icon">
                                                <svg color="rgb(224, 223, 220)" style={{userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(224, 223, 220)', flexShrink: 0, cursor: 'auto'}} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                                    <g color="rgb(224, 223, 220)">
                                                        <circle opacity="0.2" r="96" cy="128" cx="128"></circle>
                                                        <circle strokeWidth="16" strokeMiterlimit="10" stroke="rgb(224, 223, 220)" fill="none" r="96" cy="128" cx="128"></circle>
                                                        <polyline strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" stroke="rgb(224, 223, 220)" fill="none" points="134.1 161.9 168 128 134.1 94.1"></polyline>
                                                        <line strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" stroke="rgb(224, 223, 220)" fill="none" y2="128" x2="168" y1="128" x1="88"></line>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="tax-card__price">${service.price}</div>
                                    </div>
                                </Link>
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
