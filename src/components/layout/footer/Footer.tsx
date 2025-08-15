import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="section-footer-15 position-relative overflow-hidden">
                    <div className="container-fluid">
                        <div className="container position-relative z-2">
                            <div className="bg-white h-100 position-absolute end-100 top-50 translate-middle-y d-flex align-items-center d-none d-lg-flex">
                                <div className="rotate-90">
                                    <p className="mb-0 text-nowrap">
                                        Design by © &nbsp;
                                        <Link href="https://instagram.com/sudotechserve" className="text-dark fw-medium">
                                            <span className="text-dark fw-bold">sudotechserve</span>
                                        </Link>
                                        &nbsp;{new Date().getFullYear()}, All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="border-4 pt-120 bg-primary-2 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle-y w-100 h-100 bg-primary-2" />
                                <div className="position-absolute top-50 end-100 translate-middle-y w-100 h-100 bg-primary-2 d-lg-none d-block" />
                                <div className="row pb-110">
                                    <div className="col-lg-3 offset-lg-1 col-12">
                                        <Link href="/" className="d-flex align-items-center gap-2 d-inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <g>
                                                    <path className="fill-primary" d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z" />
                                                    <path className="fill-primary" d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z" />
                                                    <path className="fill-primary" d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z" />
                                                    <path className="fill-primary" d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z" />
                                                    <path className="fill-primary" d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z" />
                                                    <path className="fill-primary" d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z" />
                                                </g>
                                            </svg>
                                            <h5 className="mb-0 text-white">PrimeOne</h5>
                                        </Link>
                                        <p className="text-white opacity-75 fw-regular py-3">
                                            PrimeOne embarks on a journey of <br />
                                            learning &amp; solving insurance issues today.
                                        </p>
                                        <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8" className="d-flex gap-2">
                                            <p className="text-white">
                                                69-03 Woodside Ave Woodside, <br />
                                                 NY 11377, USA
                                            </p>
                                        </Link>
                                        <Link href="#" className="d-flex gap-2">
                                            <p className="text-white">Delowar Hossain</p>
                                        </Link>
                                        <div className="social-icons d-none d-md-flex gap-2 mt-4">
                                            <Link href="https://www.facebook.com/100050273034759/mentions/?_rdrhttps://share.google/c1NKmbY2MjDQlQjEN" className="border border-opacity-10 border-white icon-shape icon-md">
                                                <i className="bi bi-facebook" />
                                            </Link>
                                            <Link href="http://youtube.com/@primeoneofficial" className="border border-opacity-10 border-white icon-shape icon-md">
                                                <i className="bi bi-youtube" />
                                            </Link>
                                            <Link href="agents.farmers.com/ny/woodside/delowar-hossain" className="border border-opacity-10 border-white icon-shape icon-md">
                                                <i className="bi bi-linkedin" />
                                            </Link>
                                            <Link href="https://twitter.com/intent/user?screen_name=primeoneofficial" className="border border-opacity-10 border-white icon-shape icon-md">
                                                <i className="bi bi-twitter-x" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mt-lg-0 mt-8">
                                        <div className="row">
                                            <div className="col-lg-5 offset-lg-1 col-md-5 col-6">
                                                <h6 className="pb-3 text-white border-bottom pb-4 mb-4 border-white border-opacity-25">Company</h6>
                                                <div className="row">
                                                    <div className="col-6 d-flex flex-column align-items-start">
                                                        <Link href="/about">
                                                            <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">About</p>
                                                        </Link>
                                                        <Link href="/contact">
                                                            <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Get In Touch</p>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6 col-md-5 d-flex flex-column align-items-start">
                                                        <Link href="#">
                                                            <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">How It Works</p>
                                                        </Link>
                                                        <Link href="#">
                                                            <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Terms &amp; Conditions</p>
                                                        </Link>
                                                        <Link href="#">
                                                            <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Refund Policy</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-md-2 col-md-5">
                                                <h6 className="pb-3 text-white border-bottom pb-4 mb-4 border-white border-opacity-25">Our Speciality</h6>
                                                <div className="d-flex flex-column align-items-start">
                                                    <Link href="#">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">TLC services</p>
                                                    </Link>
                                                    <Link href="#">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">DDC</p>
                                                    </Link>
                                                    <Link href="/insurance">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Insurance</p>
                                                    </Link>
                                                    <Link href="/other">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Tax</p>
                                                    </Link>
                                                    <Link href="/about">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">Mortgage</p>
                                                    </Link>
                                                    <Link href="#">
                                                        <p className="hover-effect text-white text-opacity-50 text-capitalize text-nowrap">DMV express</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative">
                                    <div className="position-absolute bottom top-50 start-100 translate-middle-y w-100 h-100" />
                                    <div className="position-absolute bottom top-50 end-100 translate-middle-y w-100 h-100 d-lg-none d-block" />
                                    <div className="bottom d-flex flex-column flex-md-row gap-3 align-items-center py-4 ps-lg-10">
                                        <div className="d-flex align-items-center justify-content-center flex-wrap gap-md-5 gap-3">
                                            <Link href="/about">
                                                <span className="btn-text text-white">About</span>
                                            </Link>
                                            <Link href="/insurance">
                                                <span className="btn-text text-white">Solutions</span>
                                            </Link>
                                            <Link href="/contact">
                                                <span className="btn-text text-white">Pricing</span>
                                            </Link>
                                            <Link href="/other">
                                                <span className="btn-text text-white">Resources</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-4 d-flex align-items-center justify-content-center flex-wrap d-lg-none d-block">
                                    <p className="text-white opacity-50 mb-0">©</p>
                                    <Link href="https://instagram.com/sudotechserve" className="text-white">
                                        <span className="text-white opacity-100 fw-medium">&nbsp; sudotechserve &nbsp;</span>
                                    </Link>
                                    <p className="text-white opacity-50 mb-0">{new Date().getFullYear()}, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
