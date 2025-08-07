import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*insurance-consultancy-home section 7*/}
            <section className="insurance-consultancy-home-section-7 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-1">
                    <div>
                        <h2 className="text-primary-2 text-anime-style-2">
                            Every single <span className="text-primary">updates</span>
                            <br />
                            from here.
                        </h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-news position-relative mb-lg-0 mb-8 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-1.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">pet</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: brace for the 'big one' cyber attack. </Link>
                                        </h6>
                                    </div>
                                    <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
                            <div className="card-news position-relative mb-lg-0 mb-8 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-2.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">family</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: brace for the 'big one' cyber attack. </Link>
                                        </h6>
                                    </div>
                                    <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={600}>
                            <div className="card-news position-relative mb-lg-0 mb-8 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-3.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">accident</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: brace for the 'big one' cyber attack. </Link>
                                        </h6>
                                    </div>
                                    <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
