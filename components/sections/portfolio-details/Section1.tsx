import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-single-portfolio section 1*/}
            <section className="insurance-consultancy-single-portfolio-section-1 py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <img className="wow img-custom-anim-top" src="assets/imgs/pages/insurance-consultancy/page-blog-details/img-1.png" alt="AstraX" />
                            <p className="mt-6 mb-3 wow img-custom-anim-top">
                                Welcome to astrax finance &amp; consultancy agency, where we specialize in providing comprehensive business and finance services tailored to empower individuals and organizations to achieve their financial goals. Our expertise spans financial planning, investment management, tax optimization, business consulting, and strategic advisory services, all designed to help you navigate the complexities of today’s financial landscape. We work closely with you to understand your unique needs, delivering personalized solutions that foster growth, stability, and long-term success. Whether you’re an entrepreneur seeking to optimize your business strategy, an investor aiming to maximize returns, or an individual planning for a secure financial future, our team of
                                seasoned professionals is here to guide you every step of the way.
                            </p>
                            <p className="mb-6 wow img-custom-anim-top">At astrax, we are committed to building lasting relationships based on trust, integrity, and results, ensuring that you have the tools, insights, and support needed to thrive in a competitive world. Let us partner with you to turn your financial vision into reality.</p>
                            <div className="row g-5 mb-6">
                                <div className="col-md-6">
                                    <img className="w-100 wow img-custom-anim-top" src="assets/imgs/pages/insurance-consultancy/page-blog-details/img-2.png" alt="AstraX" />
                                </div>
                                <div className="col-md-6">
                                    <img className="w-100 wow img-custom-anim-top" src="assets/imgs/pages/insurance-consultancy/page-blog-details/img-3.png" alt="AstraX" />
                                </div>
                            </div>
                            <h5 className="mb-3 text-anime-style-2">Core level case</h5>
                            <p className="mb-6 wow img-custom-anim-top">We are dedicated to being your trusted partner in navigating the dynamic world of business and finance. With an unwavering commitment to excellence, we provide a comprehensive suite of services designed to address the diverse needs of individuals, small businesses, and large enterprises. Our solutions encompass everything from strategic financial planning and wealth management to tax compliance, risk assessment, and business advisory services. We pride ourselves on offering innovative, forward-thinking strategies that help our clients seize opportunities, mitigate risks, and achieve sustainable growth.</p>
                            <h5 className="mb-3 text-anime-style-2">Case summary</h5>
                            <p className="wow img-custom-anim-top">At astrax, we are committed to building lasting relationships based on trust, integrity, and results, ensuring that you have the tools, insights, and support needed to thrive in a competitive world. Let us partner with you to turn your financial vision into reality.</p>
                            <p className="wow img-custom-anim-top">We are dedicated to being your trusted partner in navigating the dynamic world of business and finance. With an unwavering commitment to excellence, we provide a comprehensive suite of services designed to address the diverse needs of individuals, small businesses, and large enterprises. Our solutions encompass everything from strategic financial planning and wealth management to tax compliance, risk assessment, and business advisory services. We pride ourselves on offering innovative, forward-thinking strategies that help our clients seize opportunities, mitigate risks, and achieve sustainable growth.</p>
                        </div>
                        <div className="col-lg-3 ps-lg-7 mt-lg-0 mt-8">
                            <h6 className="border-bottom border-primary pb-3">About project</h6>
                            <p className="fs-7 fw-regular mb-2 mt-4">Client</p>
                            <Link href="#">
                                <h6 className="fs-20 text-anime-style-2">Rosalina D. William</h6>
                            </Link>
                            <p className="fs-7 fw-regular mb-2 mt-4">Service</p>
                            <Link href="#">
                                <h6 className="fs-20 text-anime-style-2">Web development</h6>
                            </Link>
                            <p className="fs-7 fw-regular mb-2 mt-4">Duration</p>
                            <Link href="#">
                                <h6 className="fs-20 text-anime-style-2">06 months</h6>
                            </Link>
                            <p className="fs-7 fw-regular mb-2 mt-4">Website</p>
                            <Link href="#">
                                <h6 className="fs-20 text-anime-style-2">www.google.com</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
