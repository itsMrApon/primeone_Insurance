import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-1.svg";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-2.svg";
import img3 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-3.svg";
import img4 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-4/img-1.jpg";



export default function Section4() {
    return (
        <>
            {/*insurance-consultancy-home home section 4*/}
            <section className="insurance-consultancy-home-section-4 position-relative pb-120 overflow-hidden">
                <div className="container pt-120 border-top">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5">
                            <h2 className="text-primary-2 text-anime-style-3">
                                Get the quote you need for a <span className="text-primary">insurance</span> that is in demand.
                            </h2>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <p className="text-anime-style-1">We offer a wide range of digital and paperwork services that cater to business of all sizes. With both online and office options, our team will develop a practical.</p>
                            <div className="mt-5">
                                <Link href="/about">
                                    <span className="text-primary-2 btn-text text-decoration-underline">how it works?</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-10">
                        <div className="col-lg-4">
                            <div className="card-process d-flex align-items-center" data-aos="fade-left" data-aos-delay={0}>
                                <div>
                                    <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-3 me-3">
                                        <Image src={img1} alt="PrimeOne" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Call or email us
                                    </Link>
                                    <p className="mb-0">We provide instant solutions for a wide range of Insurance, TLC, DMV services.</p>
                                </div>
                            </div>
                            <div className="card-process d-flex align-items-center" data-aos="fade-left" data-aos-delay={200}>
                                <div>
                                    <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-3 me-3">
                                        <Image src={img2} alt="PrimeOne" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Get a online account 
                                    </Link>
                                    <p className="mb-0">You can get a free consultation for Application services through online.</p>
                                </div>
                            </div>
                            <div className="card-process d-flex align-items-center mb-4" data-aos="fade-left" data-aos-delay={400}>
                                <div>
                                    <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-3 me-3">
                                        <Image src={img3} alt="PrimeOne" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Get free quote
                                    </Link>
                                    <p className="mb-0">Just fill out the form and you will get an price estimate.</p>
                                </div>
                            </div>
                            <p>
                                Let us know about your interest &nbsp;
                                <Link href="/contact" className="text-primary-2 fw-bold">
                                    Get In Touch
                                </Link>
                            </p>
                        </div>
                        <div className="col offset-lg-1 mt-lg-0 mt-8">
                            <div className="position-relative" data-aos="fade-up">
                                <div data-aos="zoom-in" data-aos-delay={500}>
                                    <div className="position-absolute top-0 start-50 translate-middle bg-primary py-4 px-6 d-none d-md-block">
                                        <div className="d-flex gap-5">
                                            <div className="d-flex align-items-center gap-md-4 gap-3 border-end border-opacity-25 border-white pe-5">
                                                <h2 className="count mb-0 text-white text-nowrap">
                                                    <span className="odometer text-nowrap" data-count={1000} />
                                                    +
                                                </h2>
                                                <p className="mb-0 text-white text-opacity-75 text-nowrap">
                                                    Active <br className="d-block" />
                                                    live cases
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-md-4 gap-3">
                                                <h2 className="count mb-0 text-white">
                                                    <span className="odometer text-nowrap" data-count={40} />
                                                </h2>
                                                <p className="mb-0 text-white text-opacity-75 text-nowrap">
                                                    Multicultural <br className="d-block" />
                                                    Clients
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Image src={img4} alt="Primeone" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
