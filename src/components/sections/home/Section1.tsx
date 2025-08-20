"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-1/img-1.png";
import { submitContactForm } from "@/util/api";
import { ContactFormData } from "@/types/service";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
        terms: false,
        categories: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            
            if (name === 'terms') {
                setFormData(prev => ({
                    ...prev,
                    [name]: checked
                }));
            } else if (name === 'category') {
                // Handle multiple category selection
                setFormData(prev => {
                    const currentCategories = prev.categories || [];
                    if (checked) {
                        // Add category if not already present
                        if (!currentCategories.includes(value)) {
                            return {
                                ...prev,
                                categories: [...currentCategories, value]
                            };
                        }
                    } else {
                        // Remove category
                        return {
                            ...prev,
                            categories: currentCategories.filter(cat => cat !== value)
                        };
                    }
                    return prev;
                });
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation - only name and email required for quick quote
        if (!formData.name.trim() || !formData.email.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in your name and email.'
            });
            return;
        }

        if (!formData.terms) {
            setSubmitStatus({
                type: 'error',
                message: 'Please accept the terms and conditions.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Create form data with default message for quick quote
            const submitData: ContactFormData = {
                name: formData.name,
                email: formData.email,
                message: formData.message || 'Quick quote request from home page',
                categories: formData.categories, // Keep original array format
                terms: formData.terms
            };
            
            const response = await submitContactForm(submitData);
            
            // The response has nested success data
            if (response.success && response.data?.success) {
                setSubmitStatus({
                    type: 'success',
                    message: response.data.message || 'Thank you! Your message has been sent successfully.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    terms: false,
                    categories: []
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: response.error || response.data?.message || 'Failed to send message. Please try again.'
                });
            }
        } catch {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            {/*insurance-consultancy-home section 1*/}
            <section className="insurance-consultancy-home-section-1">
                <div className="bg-primary-2 position-relative pb-150 pt-250">
                    <div className="line-bg" />
                    <div className="container position-relative z-1">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <h1 className="mt-3 mb-0 mb-7 ds-1 text-opacity-25 text-white text-anime-style-2">
                                    Delowar<br className="d-block" />
                                    Insuranc<br className="d-block" />
                                    <span className="text-white text-opacity-100">Agency</span>
                                </h1>
                                <div className="d-flex align-items-center gap-5">
                                    <Link href="/contact" className="btn btn-primary bg-primary" data-aos="fade-up" data-aos-delay={200}>
                                        <span className="text-nowrap">let’s talk</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_816_117)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="popup-video w-100 fs-7"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        <span className="icon-shape icon-50 rounded-circle border border-white hover-up play-btn bg-transparent">
                                            <i className="ri-play-fill text-white" />
                                        </span>
                                        <span className="text-white fw-bold ms-2">Intro story </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-10 position-relative pt-lg-0 pt-8">
                                <div className="form-request bg-white border-top border-primary border-4 position-relative z-1 px-lg-6 px-md-4 px-3 py-7" data-aos="fade-up">
                                    <form onSubmit={handleSubmit} action="#" className="input-group position-relative">
                                        {submitStatus.type && (
                                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                                            {submitStatus.message}
                                        </div>)
                                        }
                                        <div className="row g-3">
                                            <h5 className="mb-3 text-primary-2">Get a free quote</h5>
                                            
                                            <div className="col-md-6">
                                                <div className="bg-secondary-2 py-2">
                                                    <label htmlFor="username" className="text-sm-medium text-primary-2 ms-2">
                                                        your name
                                                    </label>
                                                    <input type="text" className="form-control border-0 bg-secondary-2 py-0" name="name" placeholder="Enter here" 
                                                    id="username"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bg-secondary-2 py-2">
                                                    <label htmlFor="email" className="text-sm-medium text-primary-2 ms-2" >
                                                        your email
                                                    </label>
                                                    <input type="text" className="form-control border-0 bg-secondary-2 py-0" name="email" placeholder="Enter here" 
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap align-items-center gap-3 pb-5 mb-4 mt-2 border-bottom">
                                                    <span className="text-primary-2 fw-semibold">
                                                        Select <br className="d-block" />
                                                        category
                                                    </span>
                                                    <div className="form-element">
                                                        <input 
                                                        type="checkbox" 
                                                        className="favorite" name="category" 
                                                        value="Personal Insurance"
                                                        id="personal_insurance"
                                                        checked={formData.categories.includes('Personal Insurance')}
                                                        onChange={handleInputChange}
                                                        />
                                                        <label className="favorite icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="personal_insurance">
                                                            <i className="fa-solid fa-heart text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                    <div className="form-element">
                                                        <input type="checkbox" className="car" name="category" 
                                                        value="Commercial Vehicle Insurance"
                                                        id="commercial_vehicle_insurance"
                                                        checked={formData.categories.includes('Commercial Vehicle Insurance')}
                                                        onChange={handleInputChange}
                                                        style={{'--color': '#28a745'} as React.CSSProperties}
                                                        />
                                                        <label className="car icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="commercial_vehicle_insurance">
                                                            <i className="fa-solid fa-car text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                    <div className="form-element">
                                                        <input type="checkbox" className="tax" 
                                                        name="category" 
                                                        value="Tax Services"
                                                        id="tax_services"
                                                        checked={formData.categories.includes('Tax Services')}
                                                        onChange={handleInputChange}
                                                        style={{'--color': '#fd7e14'} as React.CSSProperties} 
                                                        />
                                                        <label className="tax icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="tax_services">
                                                            <i className="fa-solid fa-calculator text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                    <div className="form-element">
                                                        <input type="checkbox" className="briefcase" name="category" 
                                                        value="TLC & Transportation Services"
                                                        id="tlc_transportation_services"
                                                        checked={formData.categories.includes('TLC & Transportation Services')}
                                                        onChange={handleInputChange}
                                                        style={{'--color': '#dc3545'} as React.CSSProperties} />
                                                        <label className="briefcase icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="tlc_transportation_services">
                                                            <i className="fa-solid fa-briefcase text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                    <div className="form-element">
                                                        <input type="checkbox" className="laptop" name="category" 
                                                        value="DMV Services"
                                                        id="dmv_services"
                                                        checked={formData.categories.includes('DMV Services')}
                                                        onChange={handleInputChange}
                                                        style={{'--color': '#6f42c1'} as React.CSSProperties} />
                                                        <label className="laptop icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="dmv_services">
                                                            <i className="fa-solid fa-laptop-medical text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                    <div className="form-element">
                                                        <input type="checkbox" className="mortgage" name="category" 
                                                        value="Professional Services"
                                                        id="professional_services"
                                                        checked={formData.categories.includes('Professional Services')}
                                                        onChange={handleInputChange}
                                                        style={{'--color': '#20c997'} as React.CSSProperties} />
                                                        <label className="mortgage icon-shape icon-60 rounded-circle bg-secondary-2" htmlFor="professional_services">
                                                            <i className="fa-solid fa-house text-primary-2 fs-20" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="d-flex align-items-start gap-2">
                                                    <input type="checkbox" className="form-check-input" name="terms" 
                                                    id="terms"
                                                    checked={formData.terms}
                                                    onChange={handleInputChange}
                                                    required 
                                                    />
                                                    <label htmlFor="terms" className="fs-6 text-secondary ms-2"
                                                    
                                                    >
                                                        I agree
                                                        <Link href="#" className="text-primary-2 fw-bold">
                                                            Terms of service
                                                        </Link>
                                                        &amp;
                                                        <Link href="#" className="text-primary-2 fw-bold">
                                                            Privacy policy
                                                        </Link>
                                                        <br />
                                                        of primeone.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button aria-label="get a quote" className="btn btn-primary bg-primary-2 rounded-0 w-100 mt-4"
                                                 type="submit"  data-aos="fade-zoom-in" data-aos-delay={100} disabled={isSubmitting}>
                                                    <span>{isSubmitting ? 'getting quote...' : 'get a quote'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative text-center picture-bg d-none d-lg-block">
                    <Image className="wow img-custom-anim-left" src={img1} alt="PrimeOne" />
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="giRprhhW8mU" onClose={() => setIsOpen(false)} />
        </>
    );
}
