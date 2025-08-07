import Link from "next/link";

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
                            <p className="text-anime-style-1">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach, our team will develop a practical.</p>
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
                                        <img src="assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-1.svg" alt="AstraX" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Call or email us
                                    </Link>
                                    <p className="mb-0">We offer a wide range of digital marketing services.</p>
                                </div>
                            </div>
                            <div className="card-process d-flex align-items-center" data-aos="fade-left" data-aos-delay={200}>
                                <div>
                                    <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-3 me-3">
                                        <img src="assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-2.svg" alt="AstraX" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Get a call by our agent
                                    </Link>
                                    <p className="mb-0">We offer a wide range of digital marketing services.</p>
                                </div>
                            </div>
                            <div className="card-process d-flex align-items-center mb-4" data-aos="fade-left" data-aos-delay={400}>
                                <div>
                                    <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-3 me-3">
                                        <img src="assets/imgs/pages/insurance-consultancy/page-home/home-section-4/icon-3.svg" alt="AstraX" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                        Get free quote
                                    </Link>
                                    <p className="mb-0">We offer a wide range of digital marketing services.</p>
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
                                <img src="assets/imgs/pages/insurance-consultancy/page-home/home-section-4/img-1.png" alt="AstraX" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
