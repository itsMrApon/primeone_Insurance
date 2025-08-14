import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-contact/img-4.jpg";

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-contact section 1*/}
            <section className="insurance-consultancy-contact-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="row g-5 position-relative">
                        <div className="col-lg-6">
                            <Image className="wow img-custom-anim-top" src={img1} alt="PrimeOne" />
                        </div>
                        <div className="col-lg-6 ps-lg-6">
                            <div className="d-flex flex-md-row flex-column gap-5 pe-lg-8">
                                <div data-aos="fade-up" data-aos-delay={0}>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <path d="M41.25 25C48.845 25 55 30.0375 55 36.25C55 39.7425 53.055 42.8625 50 44.925V50L45.09 47.055C43.8317 47.3522 42.543 47.5015 41.25 47.5C33.655 47.5 27.5 42.4625 27.5 36.25C27.5 30.0375 33.655 25 41.25 25Z" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M27.9925 39.245C26.2675 39.735 24.4175 40 22.5 40C20.2785 40.0048 18.0717 39.6398 15.97 38.92L10 42.5V35.4975C6.9075 32.7925 5 29.0875 5 25C5 16.715 12.835 10 22.5 10C31.955 10 39.6575 16.425 40 24.4625V25.045" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25 20H25.025" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.5 20H17.525" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M37.5 35H37.525" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M45 35H45.025" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Link href="mailto:dhossain143@yahoo.com">
                                        <h6 className="mt-5 mb-3 fs-20">dhossain143@yahoo.com</h6>
                                    </Link>
                                    <p className="mb-0">Provide us your documents Media & encapsulates your intentions.</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <path d="M29.8325 12.5H12.5V52.5H45V32.5" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M35 42.5H22.5" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5 32.5H35V22.5H22.5V32.5Z" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M37.5 12.5V7.5" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M45 15L50 10" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M47.5 22.5H52.5" stroke="#001D21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Link href="telto:(917)745-0549">
                                        <h6 className="mt-5 mb-3 fs-20">+(917)745-0549</h6>
                                    </Link>
                                    <Link href="telto:(347)400-7830">
                                        <h6 className="mt-5 mb-3 fs-20">+(347)400-7830</h6>
                                    </Link>
                                    <p className="mb-0">Expert in this industry for nearly two decades.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 position-lg-absolute z-2 top-50 end-0 mt-8 wow img-custom-anim-top pb-5">
                            <div className="shadow p-lg-7 p-4 bg-white">
                                <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1">Insurance</span>
                                <h4 className="mt-3 text-anime-style-2">Tell us about your project</h4>
                                <p className="pb-5 border-bottom border-primary">Let’s Create Something Amazing Together</p>
                                <form action="#" className="input-group mb-3 mt-4 position-relative wow img-custom-anim-left">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="username" className="fs-7 fw-bold mb-3 text-uppercase">
                                                Full name
                                            </label>
                                            <input type="text" className="py-3 form-control rounded-0 username" name="name" placeholder="Enter here" id="username" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="fs-7 fw-bold mb-3 text-uppercase">
                                                Email address
                                            </label>
                                            <input type="text" className="py-3 form-control rounded-0 email" name="name" placeholder="Enter here" id="email" />
                                        </div>
                                        <div className="col-12 mt-5">
                                            <label htmlFor="message" className="fs-7 fw-bold mb-3 text-uppercase">
                                                Message
                                            </label>
                                            <textarea name="message" id="message" cols={30} rows={8} className="py-3 form-control rounded-0 website" placeholder="Enter here" defaultValue={""} />
                                        </div>
                                        <div className="col-12 mt-5">
                                            <button aria-label="submit" className="btn btn-primary" type="submit" data-aos="fade-zoom-in" data-aos-delay={100}>
                                                <span>submit</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_886_362)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="pb-lg-650 position-relative ps-10 pt-10 d-none ms-10 d-lg-block">
                        <div className="position-relative bg-white icon-shape icon-160 rounded-circle">
                            <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={43} height={50} viewBox="0 0 43 50" fill="none">
                                <g clipPath="url(#clip0_454_1335)">
                                    <path d="M4.09544 39.8806V14.9169L21.4982 4.79938L38.9052 14.9169V35.0812L21.4982 45.2006L12.2857 39.8437V19.7525L21.4982 14.3962L30.7143 19.7525V30.245L21.4982 35.6019L20.4766 35.0081V24.5894L25.6255 21.5944L21.4982 19.1956L16.3812 22.1725V37.425L21.4982 40.4012L34.8097 32.6619V17.3356L21.4982 9.59875L8.19089 17.3356V42.2606L21.4982 50L43 37.5V12.5L21.4982 0L0 12.5V37.5L4.09544 39.8806Z" fill="#794AFF" />
                                </g>
                            </svg>
                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                <h6 className="circle-text rotateme text-primary">we serve quality service base nyc - nyc</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
