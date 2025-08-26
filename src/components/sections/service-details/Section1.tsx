"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getServiceById } from "@/util/api";
import { Service } from "@/types/service";
import PriceCard from "./PriceCard";
import QuoteCard from "./QuoteCard";
import PdfCard from "./PdfCard";
import LongCard from "./LongCard";
import ShortCard from "./ShortCard";
import ContactCard from "./ContactCard";
import ThemeCard from "./ThemeCard";
import LogoCard from "./LogoCard";
import Carousel from "./Carousel";
import CallCard from "./CallCard";
import EmailCard from "./EmailCard";


import '../../../assets/css/Loading.css';
import '../../../assets/css/Section1.css';



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
            <section className="service-details-loading-section py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                        <div className="loading-card">
                            <div className="loading-loader">
                                <p>Loading</p>
                                <div className="loading-words">
                                    <span className="loading-word">services</span>
                                    <span className="loading-word">details</span>
                                    <span className="loading-word">pricing</span>
                                    <span className="loading-word">quotes</span>
                                    <span className="loading-word">services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !service) {
        return (
            <section className="service-details-error-section py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <div className="alert alert-warning">
                            <h5>Service Not Found</h5>
                            <p>{error || "The requested service could not be found."}</p>
                            <Link href="/" className="btn btn-primary">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* 1. CAROUSEL - FULL HEIGHT, NO CONTAINER */}
            <div className="carousel-section">
                <Carousel service={service} />
            </div>
            
            <section className="details-page-section">
                <div className="section-container">
                
                    {/* 2. CONTACT CARDS + THEME + LOGO SECTION */}
                <div className="contact-cards-section card-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
                        {/* Contact Cards Row */}
                        <div className="grid-responsive-2">
                            <div className="card-container card-hover-up">
                                <ContactCard 
                                    name="Delowar Hassan" 
                                    title="Finance & Investment. (BBA) , Baruch College CUNY"
                                    email="dhossain143@gmail.com"
                                    phoneNumber="917-745-0549"
                                    image="/assets/imgs/team/delowar-hossain.jpg"
                                    service={service}
                                />
                            </div>
                            <div className="card-container card-hover-up">
                                <ContactCard 
                                    name="Kamrun Bithi" 
                                    title="Accounting. (BBA), Monroe College"
                                    email="helpfortax@gmail.com"
                                    phoneNumber="917-745-0550"
                                    image="/assets/imgs/team/kamrun_bithi.jpg"
                                    service={service}
                                />
                            </div>
                        </div>
                        {/* Call and Email Cards - Right side */}
                    <div className="card-container card-hover-up">
                        <div className="flex items-center justify-center gap-4">
                            <CallCard service={service} />
                            <EmailCard service={service} />
                            <EmailCard service={service} />
                        </div>
                    </div>
                        {/* Theme and Logo Cards */}
                        <div className="grid-responsive-2">
                            <div className="card-container card-hover-up">
                                <ThemeCard service={service} />
                            </div>
                            
                            <div className="card-container card-hover-up">
                                <LogoCard 
                                    image="/assets/imgs/logo/dark.png"
                                    service={service}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. SHORT CARD - SEPARATE ROW */}
                <div className="w-full short-card-section">
                    <div className="card-container card-hover-up">
                        <ShortCard service={service} />
                    </div>
                </div>

                {/* 4. THREE COLUMN LAYOUT WITH SEPARATORS */}
                <div className="w-full three-column-section">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                        {/* Column 1 - Left (Empty) */}
                        <div className="border-r border-gray-300 dark:border-gray-600 pr-4 min-h-[400px]">
                            {/* Left column - empty */}
                        </div>
                        
                        {/* Column 2 - Middle (Empty) */}
                        <div className="border-r border-gray-300 dark:border-gray-600 pr-4 min-h-[400px]">
                            {/* Middle column - empty */}
                        </div>

                        {/* Column 3 - Right: 3 QuoteCards stacked vertically */}
                        <div className="flex flex-col gap-4">
                            <div className="card-container card-hover-up">
                                <QuoteCard service={service} />
                            </div>
                            <div className="card-container card-hover-up">
                                <QuoteCard service={service} />
                            </div>
                            <div className="card-container card-hover-up">
                                <QuoteCard service={service} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. PDF CARDS CAROUSEL - FULL WIDTH */}
                <div className="w-full pdf-quote-section">
                    <div className="pdf-carousel-container">
                        <div className="pdf-carousel-wrapper">
                            <div className="pdf-carousel-track" id="pdfCarouselTrack">
                                <div className="pdf-card-slide">
                                    <PdfCard service={service} />
                                </div>
                                <div className="pdf-card-slide">
                                    <PdfCard service={service} />
                                </div>
                                <div className="pdf-card-slide">
                                    <PdfCard service={service} />
                                </div>
                                <div className="pdf-card-slide">
                                    <PdfCard service={service} />
                                </div>
                                <div className="pdf-card-slide">
                                    <PdfCard service={service} />
                                </div>
                            </div>
                            
                            {/* Navigation buttons */}
                            <button 
                                className="carousel-nav-btn carousel-prev-btn"
                                onClick={() => {
                                    const track = document.getElementById('pdfCarouselTrack');
                                    if (track) {
                                        track.scrollBy({ left: -368, behavior: 'smooth' });
                                    }
                                }}
                            >
                                ‹
                            </button>
                            <button 
                                className="carousel-nav-btn carousel-next-btn"
                                onClick={() => {
                                    const track = document.getElementById('pdfCarouselTrack');
                                    if (track) {
                                        track.scrollBy({ left: 368, behavior: 'smooth' });
                                    }
                                }}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                </div>
            </section>

            {/* 6. LONG CARD - FULL WIDTH OUTSIDE CONTAINER */}
            <div className={`long-card-section ${service ? 'loaded' : ''}`}>
                <LongCard service={service} />
            </div>

            <section className="details-page-section final-section">
                <div className="section-container">
                
                {/* 7. PRICE CARDS */}
                <div className="price-cards-section">
                    <div className="grid-responsive-3">
                        <div className="card-container card-hover-up">
                            <PriceCard service={service} />
                        </div>
                        <div className="card-container card-hover-up">
                            <PriceCard service={service} />
                        </div>
                        <div className="card-container card-hover-up">
                            <PriceCard service={service} />
                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
    );
}
