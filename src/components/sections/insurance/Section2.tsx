"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*insurance-consultancy services section 2*/}
            <section className="insurance-consultancy-services-section-2 position-relative overflow-hidden pb-120">
                <div className="container position-relative z-1 bg-primary-2 py-120 overflow-hidden">
                    <div className="text-center">
                        <div className="position-relative z-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                <path d="M24.7266 31.7578H35.2734V35.2734H24.7266V31.7578Z" fill="white" />
                                <path d="M48.6772 35.2742H38.7891V37.032C38.7891 38.0034 38.0026 38.7898 37.0312 38.7898H22.9688C21.9974 38.7898 21.2109 38.0034 21.2109 37.032V35.2742H11.3228C9.04999 35.2742 7.03995 33.8254 6.32034 31.6693L0 12.7051V51.0945C0 54.0022 2.36572 56.368 5.27344 56.368H54.7266C57.6343 56.368 60 54.0022 60 51.0945V12.7065L53.6792 31.6693C52.9601 33.8254 50.95 35.2742 48.6772 35.2742Z" fill="white" />
                                <path opacity="0.4" d="M37.0312 3.63281H22.9687C20.061 3.63281 17.6953 5.99854 17.6953 8.90625V10.6641H3.02441L9.65421 30.5562C9.89453 31.2753 10.5656 31.7578 11.3228 31.7578H21.2109V30C21.2109 29.0286 21.9973 28.2422 22.9687 28.2422H37.0312C38.0026 28.2422 38.789 29.0286 38.789 30V31.7578H48.6772C49.4343 31.7578 50.1054 31.2753 50.3457 30.5562L56.976 10.6641H42.3047V8.90625C42.3047 5.99854 39.9389 3.63281 37.0312 3.63281ZM21.2109 10.6641V8.90625C21.2109 7.93625 21.9987 7.14844 22.9687 7.14844H37.0312C38.0012 7.14844 38.789 7.93625 38.789 8.90625V10.6641H21.2109Z" fill="white" />
                            </svg>
                            <h2 className="text-white pt-4 text-anime-style-3">
                                PrimeOne on a journey of <br />
                                learning and career-solving today
                            </h2>
                            <p className="text-white py-3">We help you with Insurance, Tax conceltation, Applying to different type of Applications like visa, immigration, Job courses fast &amp; easy</p>
                            <div className="d-flex align-items-center flex-wrap gap-4 justify-content-center">
                                <Link
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="https://www.youtube.com/watch?v=gXFATcwrO-U"
                                    className="btn btn-primary popup-video"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(true);
                                    }}
                                >
                                    How to Guide 
                                </Link>
                                <Link data-aos="fade-up" data-aos-delay={400} href="/contact" className="btn btn-dark">
                                    Go to our Channel
                                </Link>
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 end-0 me-lg-10 z-0" data-aos="fade-up" data-aos-delay={600}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={679} height={525} viewBox="0 0 679 525" fill="none">
                                <path d="M64.6699 618.947V231.51L339.471 74.4863L614.34 231.51V544.461L339.471 701.514L194 618.375V306.559L339.471 223.43L485 306.559V469.402L339.471 552.541L323.34 543.326V381.627L404.645 335.145L339.471 297.916L258.67 344.117V580.836L339.471 627.027L549.67 506.912V269.049L339.471 148.973L129.34 269.049V655.885L339.471 776L679 582V194L339.471 0L0 194V582L64.6699 618.947Z" fill="#025E61" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setIsOpen(false)} />
        </>
    );
}
