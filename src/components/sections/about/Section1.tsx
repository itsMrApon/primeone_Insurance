import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-about/img-1.jpg";

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-about section 1*/}
            <section className="insurance-consultancy-about-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mb-8">
                                <div className="position-relative bg-white icon-shape icon-160 rounded-circle">
                                    <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={43} height={50} viewBox="0 0 43 50" fill="none">
                                        <g clipPath="url(#clip0_454_1335)">
                                            <path d="M4.09544 39.8806V14.9169L21.4982 4.79938L38.9052 14.9169V35.0812L21.4982 45.2006L12.2857 39.8437V19.7525L21.4982 14.3962L30.7143 19.7525V30.245L21.4982 35.6019L20.4766 35.0081V24.5894L25.6255 21.5944L21.4982 19.1956L16.3812 22.1725V37.425L21.4982 40.4012L34.8097 32.6619V17.3356L21.4982 9.59875L8.19089 17.3356V42.2606L21.4982 50L43 37.5V12.5L21.4982 0L0 12.5V37.5L4.09544 39.8806Z" fill="#794AFF" />
                                        </g>
                                    </svg>
                                    <div className="position-absolute top-50 start-50 translate-middle w-100">
                                        <h6 className="circle-text rotateme text-primary">prime one serve base on nyc - Queens</h6>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-primary-2 mb-4 text-anime-style-3">Professional insurance company can trust.</h2>
                            <nav>
                                <div className="nav nav-tabs border-bottom-0 mb-5" id="nav-tab" role="tablist">
                                    <button aria-label="about us" data-aos="fade-left" data-aos-delay={0} className="nav-link position-relative btn-text active" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="true">
                                        about us
                                    </button>
                                    <button aria-label="our mission" data-aos="fade-left" data-aos-delay={200} className="nav-link position-relative btn-text" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">
                                        our mission
                                    </button>
                                    <button aria-label="our vision" data-aos="fade-left" data-aos-delay={400} className="nav-link position-relative btn-text" id="nav-values-tab" data-bs-toggle="tab" data-bs-target="#nav-values" type="button" role="tab" aria-controls="nav-values" aria-selected="false">
                                        our vision
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-values" role="tabpanel" aria-labelledby="nav-values-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                </div>
                            </div>
                            <Link href="/contact" className="btn btn-primary bg-primary-2 mt-6 hover-up">
                                <span>get a quote</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_1580_2694)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-6 ms-auto text-lg-end mt-lg-0 mt-8 d-none d-lg-block">
                            <Image className="wow img-custom-anim-top" src={img1} alt="PrimeOne" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
