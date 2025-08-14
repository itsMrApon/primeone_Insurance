import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-3/img-1.png";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-3/img-2.png";
import img3 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-3/img-3.png";

export default function Section3() {
    return (
        <>
            {/*insurance-consultancy-home-section-3*/}
            <section className="insurance-consultancy-home-section-3 overflow-hidden">
                <div className=" pt-120 pb-80">
                    <div className="custom-container">
                        <div className="card-scroll">
                            <div className="cards">
                                <div className="card-custom">
                                    <div className="card__inner overflow-hidden">
                                        <div className="card-service-1 py-120 rounded-5">
                                            <div className="container position-relative">
                                                <div className="position-absolute top-0 start-50 translate-middle z-0 ms-7 mt-10 d-none d-md-block">
                                                    <span className="stroke ds-60">01</span>
                                                </div>
                                                <div className="row g-5 position-relative z-1">
                                                    <div className="col-lg-5">
                                                        <div className="d-flex flex-column h-100">
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="line-primary" />
                                                                <span className="btn-text text-primary">01</span>
                                                            </div>
                                                            <h2 className="text-anime-style-2 text-primary-2 my-3">Insurance</h2>
                                                            <p>We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                                            <div className="mt-lg-auto mt-6">
                                                                <Link href="/insurance" className="btn btn-white hover-up">
                                                                    <span className="text-primary-2">read more</span>
                                                                    <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                                        <g clipPath="url(#clip0_1092_959)">
                                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#005153" />
                                                                        </g>
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-lg-end ms-auto d-none d-lg-block">
                                                        <Image src={img1} alt="PrimeOne" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-custom">
                                    <div className="card__inner overflow-hidden">
                                        <div className="card-service-2 bg-primary-2 py-120 rounded-5">
                                            <div className="container position-relative">
                                                <div className="position-absolute top-0 start-50 translate-middle z-0 ms-7 mt-10 d-none d-md-block">
                                                    <span className="stroke ds-60 text-primary-2">02</span>
                                                </div>
                                                <div className="row g-5 position-relative z-1">
                                                    <div className="col-lg-5">
                                                        <div className="d-flex flex-column h-100">
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="line-primary" />
                                                                <span className="btn-text text-primary">02</span>
                                                            </div>
                                                            <h2 className="text-anime-style-2 text-white my-3">Tax Concentration</h2>
                                                            <p className="text-white">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                                            <div className="mt-lg-auto mt-6">
                                                                <Link href="/tax" className="btn btn-primary hover-up">
                                                                    <span className="text-white">read more</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                                        <g clipPath="url(#clip0_1092_959)">
                                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                                        </g>
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-lg-end ms-auto d-none d-lg-block">
                                                        <Image src={img2} alt="PrimeOne" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-custom">
                                    <div className="card__inner overflow-hidden">
                                        <div className="card-service-2 bg-primary py-120 rounded-5">
                                            <div className="container position-relative">
                                                <div className="position-absolute top-0 start-50 translate-middle z-0 ms-7 mt-10 d-none d-md-block">
                                                    <span className="stroke ds-60 text-primary">03</span>
                                                </div>
                                                <div className="row g-5 position-relative z-1">
                                                    <div className="col-lg-5">
                                                        <div className="d-flex flex-column h-100">
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="line-primary bg-white" />
                                                                <span className="btn-text text-white">03</span>
                                                            </div>
                                                            <h2 className="text-anime-style-2 text-white my-3">Other Services</h2>
                                                            <p className="text-white">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                                            <div className="mt-lg-auto mt-6">
                                                                <Link href="/other" className="btn btn-white hover-up">
                                                                    <span className="text-primary-2">read more</span>
                                                                    <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                                        <g clipPath="url(#clip0_1092_959)">
                                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#005153" />
                                                                        </g>
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-lg-end ms-auto d-none d-lg-block">
                                                        <Image src={img3} alt="PrimeOne" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-move-right position-relative py-120 d-none d-md-block">
                    <div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
                        <h3 className="fs-120 pb-1 stroke">Latest cases</h3>
                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={68} height={78} viewBox="0 0 68 78" fill="none">
                            <g clipPath="url(#clip0_349_636)">
                                <path d="M6.47651 62.2138V23.2703L33.9971 7.48703L61.5245 23.2703V54.7267L33.9971 70.513L19.4286 62.1562V30.8139L33.9971 22.4581L48.5714 30.8139V47.1822L33.9971 55.5389L32.3816 54.6127V38.3594L40.5241 33.6872L33.9971 29.9452L25.9051 34.5891V58.383L33.9971 63.0259L55.0479 50.9525V27.0436L33.9971 14.974L12.953 27.0436V65.9266L33.9971 78L68 58.5V19.5L33.9971 0L0 19.5V58.5L6.47651 62.2138Z" fill="#0D6EFD" />
                            </g>
                        </svg>
                        <h3 className="fs-120 pb-1 text-nowrap text-primary-2">Let’s talk</h3>
                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={68} height={78} viewBox="0 0 68 78" fill="none">
                            <g clipPath="url(#clip0_349_636)">
                                <path d="M6.47651 62.2138V23.2703L33.9971 7.48703L61.5245 23.2703V54.7267L33.9971 70.513L19.4286 62.1562V30.8139L33.9971 22.4581L48.5714 30.8139V47.1822L33.9971 55.5389L32.3816 54.6127V38.3594L40.5241 33.6872L33.9971 29.9452L25.9051 34.5891V58.383L33.9971 63.0259L55.0479 50.9525V27.0436L33.9971 14.974L12.953 27.0436V65.9266L33.9971 78L68 58.5V19.5L33.9971 0L0 19.5V58.5L6.47651 62.2138Z" fill="#0D6EFD" />
                            </g>
                        </svg>
                        <h3 className="fs-120 pb-1 stroke">About insurance</h3>
                    </div>
                </div>
            </section>
        </>
    );
}
