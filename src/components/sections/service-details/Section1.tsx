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
import IntroCard from "./IntroCard";
import ClipCard from "./ClipCard";



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
            <section>
             <div className="carousel-section">
                <Carousel service={service} />
             </div>
            </section>
            
            {/* 2. NEW GRID LAYOUT - Intro + Introduction + Contact */}
            <section className="intro-contact-section">
                <div className="intro-contact-grid">
                    {/* Left Side - Hello/Intro */}
                    <div className="intro-left-section">
                        <IntroCard service={service} />
                    </div>
                    
                    {/* Upper Right - Introduction */}
                    <div className="intro-upper-right-section">
                        <ShortCard service={service} />
                    </div>
                    
                    {/* Lower Right - Get In Touch */}
                    <div className="intro-lower-right-section">
                        <div className="contact-section">
                            <h3 className="section-title">Get In Touch</h3>
                            <div className="contact-grid">
                                <div className="contact-card email-card">
                                    <div className="contact-icon">📧</div>
                                    <div className="contact-info">
                                        <span>dhossain143@gmail.com</span>
                                    </div>
                                </div>
                                
                                <div className="contact-card phone-card">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-info">
                                        <span>917-745-0549</span>
                                    </div>
                                </div>
                                
                                <div className="contact-card location-card">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-info">
                                        <span>New York, NY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Services Grid */}
            <section id="services" className="services-grid-section">
                        <div className="services-grid">

                            {/* Expertise Column */}
                            <div className="services-column">
                                <h3 className="column-title">Expertise</h3>
                                <p className="expertise-text">Insurance Coverage, Tax Planning, Financial Advisory, Risk Assessment, Investment Planning, Business Consulting</p>
                                
                                <h3 className="column-title">Hard Skills</h3>
                                <div className="skills-card">
                                    <div className="skills-grid">
                                        <div className="skill-item">📊</div>
                                        <div className="skill-item">💰</div>
                                        <div className="skill-item">📋</div>
                                        <div className="skill-item">📈</div>
                                        <div className="skill-item">🛡️</div>
                                        <div className="skill-item">📝</div>
                                    </div>
                                </div>
                                
                                <h3 className="column-title">Soft Skills</h3>
                                <div className="soft-skills">
                                    <span className="skill-tag">#Communication</span>
                                    <span className="skill-tag">#Problem_Solving</span>
                                    <span className="skill-tag">#Analytical</span>
                                    <span className="skill-tag">#Trustworthy</span>
                                    <span className="skill-tag">#Professional</span>
                                </div>
                            </div>

                            {/* Experience Column */}
                            <div className="services-column">
                                <h3 className="column-title">Experience</h3>
                                <div className="experience-cards">
                                    <ClipCard service={service} />
                                </div>
                            </div>

                            {/* Education Column */}
                            <div className="services-column">
                                <h3 className="column-title">Education</h3>
                                <div className="education-cards">
                                    <div className="education-card">
                                        <ContactCard 
                                    name="Delowar Hassan" 
                                    title="Finance & Investment. (BBA) , Baruch College CUNY"
                                    email="dhossain143@gmail.com"
                                    phoneNumber="917-745-0549"
                                    image="/assets/imgs/team/delowar-hossain.jpg"
                                    service={service}
                                />
                                    </div>
                                    <div className="education-card">
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
