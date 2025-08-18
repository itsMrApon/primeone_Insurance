"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const [insuranceCategories, setInsuranceCategories] = useState<{[key: string]: Service[]}>({});
    const [taxCategories, setTaxCategories] = useState<{[key: string]: Service[]}>({});
    const [otherCategories, setOtherCategories] = useState<{[key: string]: Service[]}>({});

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    const handleLinkClick = () => {
        // Close mobile menu when navigating to a page
        if (isMobileMenu) {
            handleMobileMenu();
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Fetch Insurance categories
                const insuranceResponse = await getServicesByType("insurance");
                if (insuranceResponse.success && insuranceResponse.data?.services_by_category) {
                    setInsuranceCategories(insuranceResponse.data.services_by_category);
                }

                // Fetch Tax categories
                const taxResponse = await getServicesByType("tax");
                if (taxResponse.success && taxResponse.data?.services_by_category) {
                    setTaxCategories(taxResponse.data.services_by_category);
                }

                // Fetch Other categories
                const otherResponse = await getServicesByType("other");
                if (otherResponse.success && otherResponse.data?.services_by_category) {
                    setOtherCategories(otherResponse.data.services_by_category);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}
            <div className={`mobile-header-active mobile-header-wrapper-style ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={35} height={40} viewBox="0 0 35 40" fill="none">
                                <g clipPath="url(#clip0_349_1513)">
                                    <path d="M3.3335 31.9045V11.9335L17.4985 3.8395L31.667 11.9335V28.065L17.4985 36.1605L10 31.875V15.802L17.4985 11.517L25 15.802V24.196L17.4985 28.4815L16.667 28.0065V19.6715L20.858 17.2755L17.4985 15.3565L13.3335 17.738V29.94L17.4985 32.321L28.3335 26.1295V13.8685L17.4985 7.679L6.667 13.8685V33.8085L17.4985 40L35 30V10L17.4985 0L0 10V30L3.3335 31.9045Z" fill="#794AFF" />
                                </g>
                            </svg>
                            <h5 className="mb-0">PrimeOne</h5>
                        </Link>
                        <div className={`burger-icon burger-icon-white border rounded-circle ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu ps-0">
                                        <li>
                                            <Link href="/" onClick={handleLinkClick}>Homepages</Link>
                                        </li>
                                        <li>
                                            <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                                        </li>
                                        <li className="has-children">
                                            <span className="menu-expand" onClick={() => handleAccordion(1)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <Link href="/insurance" onClick={handleLinkClick}>Insurance</Link>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/insurance" onClick={handleLinkClick}>All Insurance</Link>
                                                </li>
                                                {Object.keys(insuranceCategories).map((categoryName, index) => (
                                                    <li key={categoryName} className="has-children">
                                                        <span className="menu-expand" onClick={() => handleAccordion(1000 + index)}>
                                                            <i className="arrow-small-down" />
                                                        </span>
                                                        <span className="dropdown-item text-capitalize">{String(index + 1).padStart(2, '0')}. {categoryName}</span>
                                                        <ul className="sub-menu" style={{ display: `${isAccordion == 1000 + index ? "block" : "none"}` }}>
                                                            {insuranceCategories[categoryName]?.map((service) => (
                                                                <li key={service.id}>
                                                                    <Link href={`/service-details/${service.id}`} onClick={handleLinkClick}>{service.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <span className="menu-expand" onClick={() => handleAccordion(2)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <Link href="/tax" onClick={handleLinkClick}>Tax</Link>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/tax" onClick={handleLinkClick}>All Tax Services</Link>
                                                </li>
                                                {Object.keys(taxCategories).map((categoryName, index) => (
                                                    <li key={categoryName} className="has-children">
                                                        <span className="menu-expand" onClick={() => handleAccordion(2000 + index)}>
                                                            <i className="arrow-small-down" />
                                                        </span>
                                                        <span className="dropdown-item text-capitalize">{String(index + 1).padStart(2, '0')}. {categoryName}</span>
                                                        <ul className="sub-menu" style={{ display: `${isAccordion == 2000 + index ? "block" : "none"}` }}>
                                                            {taxCategories[categoryName]?.map((service) => (
                                                                <li key={service.id}>
                                                                    <Link href={`/service-details/${service.id}`} onClick={handleLinkClick}>{service.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="/other" onClick={handleLinkClick}>Other</Link>
                                            <span className="menu-expand" onClick={() => handleAccordion(3)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/other" onClick={handleLinkClick}>All Services</Link>
                                                </li>
                                                {Object.keys(otherCategories).map((categoryName, index) => (
                                                    <li key={categoryName} className="has-children">
                                                        <span className="menu-expand" onClick={() => handleAccordion(3000 + index)}>
                                                            <i className="arrow-small-down" />
                                                        </span>
                                                        <span className="dropdown-item text-capitalize">{String(index + 1).padStart(2, '0')}. {categoryName}</span>
                                                        <ul className="sub-menu" style={{ display: `${isAccordion == 3000 + index ? "block" : "none"}` }}>
                                                            {otherCategories[categoryName]?.map((service) => (
                                                                <li key={service.id}>
                                                                    <Link href={`/service-details/${service.id}`} onClick={handleLinkClick}>{service.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/signin" onClick={handleLinkClick}>SIGN IN</Link>
                                        </li>
                                        <li>
                                            <Link href="/signup" onClick={handleLinkClick}>SIGN UP</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tgmobile__menu-bottom mt-auto">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li>
                                    <span className="opacity-50">Mail:</span> <Link href="/mailto:dhossain143@yahoo.com">dhossain143@yahoo.com</Link>
                                </li>
                                <li>
                                    <span className="opacity-50">Phone:</span> <Link href="/tel:(917)745-0549">+1(917)745-0549</Link>
                                </li>
                                <li>
                                    <span className="opacity-50">Address:</span> <Link href="/https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">69-03 Woodside Ave Woodside, <br />
                                                 NY 11377, USA</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <div className="social-icons gap-4 mt-4">
                                <Link href="https://www.facebook.com/100050273034759/mentions/?_rdr
https://share.google/c1NKmbY2MjDQlQjEN" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link href="https://twitter.com/intent/user?screen_name=primeoneofficial" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link href="agents.farmers.com/ny/woodside/delowar-hossain" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-linkedin" />
                                </Link>
                                <Link href="https://www.youtube.com/@dhossain143" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-youtube" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
