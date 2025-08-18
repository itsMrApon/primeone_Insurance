import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-1.jpeg";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-2.png";
import img3 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-3.jpeg";
import img4 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-4.jpeg";
import img5 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-5.jpeg";
import img6 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-7/img-6.jpeg";

export default function Section7() {
    return (
        <>
            {/*insurance-consultancy-home section 7*/}
            <section className="insurance-consultancy-home-section-7 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-1">
                    <div>
                        <h2 className="text-primary-2 text-anime-style-2">
                            Highlight of other <span className="text-primary">services </span>
                            <br/>&nbsp;from PrimeOne.
                        </h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-news position-relative mb-lg-0 mb-8 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <Image className="w-100" src={img1} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">Notary</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">All over NYC</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An</span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: We do notary publication </Link>
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
                                    <Image className="w-100" src={img4} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">TAX</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">All over NYC</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An </span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>  
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: We do tax conceltation. </Link>
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
                                    <Image className="w-100" src={img2} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">TRAVEL</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">All over World</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An</span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: We do International and National air tickets. </Link>
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
                                    <Image className="w-100" src={img5} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">COURSES</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">All over NYC</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An </span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: We do Courses of Security and Driving. </Link>
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
                                    <Image className="w-100" src={img6} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">MORTGAGE</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">All over US</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An </span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: We do Mortgage Consulting. </Link>
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
                                    <Image className="w-100" src={img3} alt="PrimeOne" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">accident</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-home text-primary" />
                                            <p className="mb-0">Youtube</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">Get An </span>
                                            <Link href="/contact" className="mb-0 text-primary-2">
                                                Appointment
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <h6 className="fw-semibold text-primary-2">
                                            <Link href="/blog-details"> 2025: End the hassle with our youtube videos. </Link>
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
