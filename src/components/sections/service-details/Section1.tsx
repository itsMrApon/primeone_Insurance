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
import Carousel from "./Carousel";
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
                                        <a href="mailto:dhossain143@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <span>dhossain143@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-card phone-card">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-info">
                                        <a href="tel:+19177450549" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>
                                            <span>917-745-0549</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-card location-card">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-info">
                                        <a href="https://maps.google.com/?q=69-03+Woodside+Ave+Woodside,+NYC" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <span>69-03 Woodside Ave Woodside, NYC</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. LONG CARD - FULL WIDTH OUTSIDE CONTAINER */}
            <section>
            <div className={`long-card-section ${service ? 'loaded' : ''}`}>
                <LongCard service={service} />
            </div>
            </section>

            {/* 4. Services Grid */}
            <section id="services" className="services-grid-section">
                        <div className="services-grid">

                            {/* Expertise Column */}
                            <div className="services-column">
                                <h3 className="column-title">Expertise</h3>
                                <p className="expertise-text">Extensive industry expertise with proficiency in both automated and manual processes.</p>
                                <div className="experience-cards">
                                    <QuoteCard service={service} customCallToAction="FAQ Quote" customTitle="FAQ" />
                                </div>
                                <p className="expertise-text">With our portal, you can manage your account with ease .</p>
                                <div className="experience-cards">
                                    <QuoteCard service={service} customCallToAction="Portal Quote" customTitle="Portal" />
                                </div>
                                
                            </div>

                            {/* Experience Column */}
                            <div className="services-column">
                                <h3 className="column-title">Visualization</h3>
                                <p className="expertise-text">We provide in-depth explanations of our services through our YouTube channel.</p>
                                
                                <div className="experience-cards">
                                    <ClipCard service={service} />
                                </div>
                            </div>

                            {/* Education Column */}
                            <div className="services-column">
                                <h3 className="column-title">Who We Are</h3>
                                <p className="expertise-text">Bringing more than 20 years of industry experience.</p>
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
                                <h3 className="column-title">Communication</h3>
                                <div className="soft-skills">
                                    <span className="skill-tag">#IndividualCare</span>
                                    <span className="skill-tag">#EasySolutions</span>
                                    <span className="skill-tag">#Analytical</span>
                                    <span className="skill-tag">#Bangali</span>
                                    <span className="skill-tag">#Professional</span>
                                    <span className="skill-tag">#RealTimeTracking</span>
                                </div>
                            </div>
                        </div>
            </section>
            
            {/* 5. PDF Carousel Section */}
            <section className="pdf-carousel-section">
                        <h3 className="section-title">Documents & Resources</h3>
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
                                    <div className="pdf-card-slide">
                                        <PdfCard service={service} />
                                    </div>
                                </div>
                                
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
            </section>

            {/* 6. PRICE CARDS */}
            <section className="details-page-section final-section">
                <div className="section-container">
                <h3 className="section-title">Get Started</h3>
                {/* 7. PRICE CARDS */}
                <div className="price-cards-section">
                    <div className="grid-responsive-3">
                        <div className="card-container card-hover-up">
                            <PriceCard 
                                service={service} 
                                customCallToAction="Calculate"
                                customTitle="With Portal"
                                customDescription="Get instant quotes and automated calculations for your insurance needs with our advanced calculator system."
                                customFeatures={[
                                    { icon: 'calculator', text: 'Instant Quotes' },
                                    { icon: 'chart', text: 'Real-time Analysis' },
                                    { icon: 'time', text: 'Quick Results' },
                                    { icon: 'checkmark', text: 'Accurate Pricing' }
                                ]}
                                showPrice={false}
                            />
                        </div>
                        <div className="card-container card-hover-up">
                            <PriceCard 
                                service={service} 
                                customCallToAction="Payment"
                                customTitle="Minimum Transition"
                                customDescription="Start with our minimum payment option and get essential coverage with flexible payment terms."
                                customFeatures={[
                                    { icon: 'heart', text: 'Basic Coverage' },
                                    { icon: 'users', text: 'Family Protection' },
                                    { icon: 'phone', text: '24/7 Support' },
                                    { icon: 'calendar', text: 'Flexible Terms' }
                                ]}
                                showPrice={true}
                            />
                        </div>
                        <div className="card-container card-hover-up">
                            <PriceCard 
                                service={service} 
                                customCallToAction="Manual"
                                customTitle="Custom Service"
                                customDescription="Get personalized service with manual processing and expert consultation for your specific requirements."
                                customFeatures={[
                                    { icon: 'star', text: 'Personalized Service' },
                                    { icon: 'support', text: 'Expert Consultation' },
                                    { icon: 'document', text: 'Manual Processing' },
                                    { icon: 'shield', text: 'Premium Support' }
                                ]}
                                showPrice={false}
                            />
                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
    );
}
