"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";

interface CategoryServicesProps {
    serviceType: string;
    categoryName: string;
}

export default function CategoryServices({ serviceType, categoryName }: CategoryServicesProps) {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryServices = async () => {
            try {
                const response = await getServicesByType(serviceType);
                if (response.success && response.data?.services_by_category) {
                    const categoryServices = response.data.services_by_category[categoryName] || [];
                    setServices(categoryServices);
                }
            } catch (error) {
                console.error('Error fetching category services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryServices();
    }, [serviceType, categoryName]);

    if (loading) {
        return (
            <section className="py-120">
                <div className="container">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (services.length === 0) {
        return (
            <section className="py-120">
                <div className="container">
                    <div className="text-center">
                        <h3>No services found in this category</h3>
                        <p>Please check back later or explore other categories.</p>
                        <Link href={`/${serviceType}`} className="btn btn-primary">
                            View All {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-5">
                            <h2>Services in {categoryName}</h2>
                            <p>Explore our comprehensive {categoryName.toLowerCase()} services</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {services.map((service) => (
                        <div key={service.id} className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description || 'Professional service tailored to your needs.'}</p>
                                    <Link 
                                        href={`/service-details/${service.id}`} 
                                        className="btn btn-primary"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Link href={`/${serviceType}`} className="btn btn-outline-primary">
                            View All {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
