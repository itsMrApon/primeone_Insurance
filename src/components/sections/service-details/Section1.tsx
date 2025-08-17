"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServiceById } from "@/util/api";
import { Service } from "@/types/service";

interface Section1Props {
    serviceId: string | null;
}

export default function Section1({ serviceId }: Section1Props) {
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (serviceId) {
            fetchServiceDetails(parseInt(serviceId));
        } else {
            setLoading(false);
            setError("No service ID provided");
        }
    }, [serviceId]);

    const fetchServiceDetails = async (id: number) => {
        try {
            setLoading(true);
            const response = await getServiceById(id);
            
            console.log('Service API Response:', response);
            
            if (response.success && response.data) {
                console.log('Service Data Received:', response.data);
                setService(response.data);
            } else {
                console.error('API Error:', response.error);
                setError(response.error || "Service not found");
            }
        } catch (err) {
            console.error('Error fetching service:', err);
            setError(err instanceof Error ? err.message : "An error occurred while fetching service details");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="insurance-consultancy-blog-details-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <p>Loading service details...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !service) {
        return (
            <section className="insurance-consultancy-blog-details-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <div className="alert alert-warning">
                            <h5>Service Not Found</h5>
                            <p>{error || "The requested service could not be found."}</p>
                            <Link href="/tax" className="btn btn-primary">
                                Back to Tax Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/*insurance-consultancy-service-details section 1*/}
            <section className="insurance-consultancy-blog-details-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="border overflow-hidden">
                                <Image 
                                    className="wow img-custom-anim-top w-100" 
                                    src={service.image_1 || "/assets/imgs/pages/insurance-consultancy/page-details/img-1.png"} 
                                    alt={service.title}
                                    width={800}
                                    height={400}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="px-md-5 px-2 pb-6">
                                    <div className="d-flex flex-wrap align-items-center gap-3 justify-content-between py-5 border-bottom wow img-custom-anim-left">
                                        <div className="d-flex flex-wrap gap-3 align-items-center">
                                            <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 me-3">
                                                {service.type || 'TYPE'}
                                            </span>
                                            <div className="d-flex card-news-information gap-4">
                                                <div className="d-flex align-items-center gap-1">
                                                    <i className="fa-solid fa-calendar-days text-primary" />
                                                    <p className="mb-0">{new Date(service.created_at).toLocaleDateString()}</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-1">
                                                    <i className="fa-solid fa-dollar-sign text-primary" />
                                                    <span className="opacity-50">Price:</span>
                                                    <span className="mb-0 text-primary-2 fw-bold">
                                                        ${service.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icons gap-2">
                                            <Link href="#" className="border icon-shape icon-md">
                                                <i className="bi bi-facebook" />
                                            </Link>
                                            <Link href="#" className="border icon-shape icon-md">
                                                <i className="bi bi-twitter-x" />
                                            </Link>
                                            <Link href="#" className="border icon-shape icon-md">
                                                <i className="bi bi-linkedin" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-5 wow img-custom-anim-top">
                                        <h3>{service.title}</h3>
                                        <p className="mb-3">{service.details_short || 'No short description available.'}</p>
                                        
                                        <div className="service-details">
                                            <h5>Service Description</h5>
                                            <p>{service.details_long || 'No detailed description available.'}</p>
                                            
                                            <div className="row g-4 mt-4">
                                                <div className="col-md-6">
                                                    <div className="border p-4 rounded">
                                                        <h6 className="text-primary-2">Service Category</h6>
                                                        <p className="mb-0">{service.type || 'General Service'}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="border p-4 rounded">
                                                        <h6 className="text-primary-2">Price</h6>
                                                        <p className="mb-0 fs-4 fw-bold text-primary">${service.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {(service.image_2 || service.image_3) && (
                                                <div className="row g-5 mb-5 mt-5">
                                                    {service.image_2 && (
                                                        <div className="col-md-6">
                                                            <Image 
                                                                className="w-100 wow img-custom-anim-top" 
                                                                src={service.image_2} 
                                                                alt={service.title}
                                                                width={400}
                                                                height={300}
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    )}
                                                    {service.image_3 && (
                                                        <div className="col-md-6">
                                                            <Image 
                                                                className="w-100 wow img-custom-anim-top" 
                                                                src={service.image_3} 
                                                                alt={service.title}
                                                                width={400}
                                                                height={300}
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="mt-5">
                                            <Link href="/contact" className="btn btn-primary bg-primary-2 me-3">
                                                Get This Service
                                            </Link>
                                            <Link href="/tax" className="btn btn-outline-primary">
                                                Back to Tax Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary-2 p-lg-6 p-4 mt-5">
                                <div className="d-flex justify-content-between border-bottom pb-4 wow img-custom-anim-left">
                                    <h6 className="fs-20">Leave a comment</h6>
                                    <div className="group-start">
                                        <Link href="#">
                                            <i className="bi bi-star me-1 fs-7 text-primary" />
                                        </Link>
                                        <Link href="#">
                                            <i className="bi bi-star me-1 fs-7 text-primary" />
                                        </Link>
                                        <Link href="#">
                                            <i className="bi bi-star me-1 fs-7 text-primary" />
                                        </Link>
                                        <Link href="#">
                                            <i className="bi bi-star me-1 fs-7 text-primary" />
                                        </Link>
                                        <Link href="#">
                                            <i className="bi bi-star me-1 fs-7 text-primary" />
                                        </Link>
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="row mt-5 wow img-custom-anim-left">
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text" className="form-control rounded-0 py-3 bg-white username" placeholder="Your name" aria-label="username" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3 mt-md-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control rounded-0 py-3 bg-white email" placeholder="info@webmail.com" aria-label="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3 mt-md-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control rounded-0 py-3 bg-white phone" placeholder="Website" aria-label="website" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group mt-3">
                                                <textarea className="form-control rounded-0 borders py-3 bg-white pb-10 message-2" placeholder="Message" aria-label="With textarea" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button aria-label="submit" type="submit" className="btn btn-primary bg-primary-2 border-dark mt-3">
                                                Submit
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_1337_1709)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-4 d-flex justify-content-between wow img-custom-anim-left">
                                <Link href="#" className="text-start">
                                    <span className="d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M0.183312 7.55759C0.1835 7.5574 0.183657 7.55719 0.183875 7.557L3.44963 4.307C3.69428 4.06353 4.09 4.06444 4.33353 4.30912C4.57703 4.55378 4.57609 4.9495 4.33144 5.193L2.13881 7.375H15.375C15.7202 7.375 16 7.65481 16 8C16 8.34519 15.7202 8.625 15.375 8.625H2.13884L4.33141 10.807C4.57606 11.0505 4.577 11.4462 4.3335 11.6909C4.08997 11.9356 3.69422 11.9364 3.44959 11.693L0.183844 8.443C0.183656 8.44281 0.183499 8.44259 0.183281 8.4424C-0.0615005 8.19809 -0.0607185 7.80109 0.183312 7.55759Z" fill="#005153" />
                                        </svg>
                                        <p className="mb-0 text-dark fw-semibold">Prev Service</p>
                                    </span>
                                    <h6 className="fs-6">
                                        Browse Other <br />
                                        Tax Services
                                    </h6>
                                </Link>
                                <Link href="#" className="text-end">
                                    <span className="d-flex gap-2 align-items-center justify-content-end">
                                        <p className="mb-0 text-dark fw-semibold">Next Service</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#005153" />
                                        </svg>
                                    </span>
                                    <h6 className="fs-6">
                                        Explore More <br />
                                        Tax Solutions
                                    </h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
