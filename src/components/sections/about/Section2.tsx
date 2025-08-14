import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-about/icon-1.png";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-about/icon-2.png";
import img3 from "@/assets/imgs/pages/insurance-consultancy/page-about/icon-3.png";

export default function Section2() {
    return (
        <>
            {/*insurance-consultancy about section 2*/}
            <section className="insurance-consultancy-about-section-2 position-relative overflow-hidden pt-120 pb-120 bg-secondary-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-lg-auto text-center">
                            <h2 className="text-anime-style-3">
                                Meet with our quality and <br />
                                exceptional expertise
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4 mt-6 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-6 d-flex flex-column h-100 text-center" data-aos="fade-up" data-aos-delay={0}>
                                <div>
                                    <Image src={img1} alt="PrimeOne" />
                                </div>
                                <h6 className="mt-5 mb-3 text-anime-style-2">Life Insurance</h6>
                                <p className="mb-5">We offer a wide range of digital market services that cater.</p>
                                <Link href="/portfolio-details" className="text-uppercase fs-7 fw-bold text-primary-2 hover-up">
                                    read more
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-6 d-flex flex-column h-100 text-center" data-aos="fade-up" data-aos-delay={200}>
                                <div>
                                    <Image src={img2} alt="PrimeOne" />
                                </div>
                                <h6 className="mt-5 mb-3 text-anime-style-2">Home Insurance</h6>
                                <p className="mb-5">We offer a wide range of digital market services that cater.</p>
                                <Link href="/portfolio-details" className="text-uppercase fs-7 fw-bold text-primary-2 hover-up">
                                    read more
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white p-6 d-flex flex-column h-100 text-center" data-aos="fade-up" data-aos-delay={400}>
                                <div>
                                    <Image src={img3} alt="PrimeOne" />
                                </div>
                                <h6 className="mt-5 mb-3 text-anime-style-2">Car Insurance</h6>
                                <p className="mb-5">We offer a wide range of digital market services that cater.</p>
                                <Link href="/portfolio-details" className="text-uppercase fs-7 fw-bold text-primary-2 hover-up">
                                    read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
