"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
import Image from "next/image";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-about/img-2.jpg";

export default function Section3() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*insurance-consultancy-about-section-3*/}
            <section className="insurance-consultancy-about-section-3 position-relative z-0 overflow-hidden py-120">
                <div className="container">
                    <div className="row pt-lg-10">
                        <div className="col-lg-4">
                            <h2 className="mb-5 text-anime-style-3">Get the quote you need for a kind insurance.</h2>
                            <p className="text-anime-style-1">We offer a wide range of digital Insurance services that cater to business of all sizes.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-left" data-aos-delay={0}>
                                    <div className="position-relative">
                                        <i className="fa-solid fa-check text-primary" />
                                    </div>
                                    <p className="mb-0 text-primary-2 fw-semibold">We offer a wide range of Insurance services</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-left" data-aos-delay={200}>
                                    <div className="position-relative">
                                        <i className="fa-solid fa-check text-primary" />
                                    </div>
                                    <p className="mb-0 text-primary-2 fw-semibold">Services that cater to business</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-left" data-aos-delay={400}>
                                    <div className="position-relative">
                                        <i className="fa-solid fa-check text-primary" />
                                    </div>
                                    <p className="mb-0 text-primary-2 fw-semibold">On-time &amp; on-demand insurance solution</p>
                                </li>
                            </ul>
                            <Link
                                href="#"
                                className="popup-video w-100 d-flex align-items-center gap-3 hover-up mt-5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(true);
                                }}
                            >
                                <span className="icon-shape icon-xxl rounded-circle bg-primary-2">
                                    <i className="fa-solid fa-play text-white" />
                                </span>
                                <span className="text-primary fs-7 fw-bold">Play video</span>
                            </Link>
                        </div>
                        <div className="col offset-lg-1 mt-lg-0 mt-8 d-none d-lg-block">
                            <div className="position-relative">
                                <Image data-aos="fade-up" src={img2} alt="PrimeOne" />
                                <div className="position-absolute top-0 start-50 translate-middle d-none d-md-block">
                                    <div className="bg-primary py-4 px-6" data-aos="zoom-in" data-aos-delay={500}>
                                        <div className="d-flex gap-5">
                                            <div className="d-flex align-items-center gap-md-4 gap-3 border-end border-opacity-25 border-white pe-5">
                                                <h2 className="count mb-0 text-white text-nowrap">
                                                    <span className="odometer text-nowrap" data-count={5} />
                                                    k+
                                                </h2>
                                                <p className="mb-0 text-white text-opacity-75 text-nowrap">
                                                    Active <br className="d-block" />
                                                    live cases
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-md-4 gap-3">
                                                <h2 className="count mb-0 text-white">
                                                    <span className="odometer text-nowrap" data-count={10} />
                                                </h2>
                                                <p className="mb-0 text-white text-opacity-75 text-nowrap">
                                                    Worldwide <br className="d-block" />
                                                    bases
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="pooiudQ4_rs" onClose={() => setIsOpen(false)} />
        </>
    );
}
