"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const pathname = usePathname();

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);
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
                                            <Link href="/">Homepages</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li className="has-children">
                                            <span className="menu-expand" onClick={() => handleAccordion(1)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <Link href="#">Insurance</Link>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/insurance">All Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">01. Life Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">02. Home Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">03. Car Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">04. Business Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">05. Education Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio-details">06. Emergency Insurance</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/tax">Tax</Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#">Other</Link>
                                            <span className="menu-expand" onClick={() => handleAccordion(2)}>
                                                <i className="arrow-small-down" />
                                            </span>
                                            <ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                                <li>
                                                    <Link href="/other">All Services</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">01.Mortgage</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">02. Notary</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">03. Air Ticket</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/signin">SIGN IN</Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">SIGN UP</Link>
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
                                    <span className="opacity-50">Phone:</span> <Link href="/tel:(917)745-0549">+(917)745-0549</Link>
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
                                <Link href="http://youtube.com/@primeoneofficial" className="border border-opacity-10 border-white icon-shape icon-md">
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
