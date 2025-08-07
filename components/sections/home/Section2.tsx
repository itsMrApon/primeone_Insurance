import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*insurance-consultancy-home home section 2*/}
            <section className="insurance-consultancy-home-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="border-top border-primary-2 border-2 d-flex flex-column h-100 wow img-custom-anim-top">
                                <p className="mb-4 mt-4">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach. Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems.</p>
                                <Link href="#" className="text-primary btn-text">
                                    read more
                                </Link>
                                <img className="mt-8" src="assets/imgs/pages/insurance-consultancy/page-home/home-section-2/img-1.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-center mb-8">
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
                            <h2 className="text-primary-2 mb-4 text-anime-style-3">We are a reliable and professional insurance company you can trust.</h2>
                            <p className="wow img-custom-anim-top">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach, our team will develop a practical.</p>
                            <Link href="/contact" className="btn btn-outline-secondary mt-6" data-aos="fade-up" data-aos-delay={0}>
                                <span>get in touch</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#005153" />
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <div className="client">
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={0}>
                                    <div>
                                        <h5 className="text-primary-2">99.9%</h5>
                                        <p className="fs-10 text-uppercase mb-0">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={200}>
                                    <div>
                                        <h5 className="text-primary-2">10+</h5>
                                        <p className="fs-10 text-uppercase mb-0">worldwide capture</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={400}>
                                    <div>
                                        <h5 className="text-primary-2">99.9%</h5>
                                        <p className="fs-10 text-uppercase mb-0">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={600}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 80 80" fill="none">
                                            <g clipPath="url(#clip0_480_885)">
                                                <path d="M12.8137 51.436L5.24779 66.5654C4.88402 67.2924 4.92309 68.156 5.34972 68.8469C5.77758 69.5372 6.53075 69.9578 7.34313 69.9578H18.7244L25.553 79.0624C25.9967 79.6562 26.6931 79.9999 27.4261 79.9999C28.3996 79.9999 29.1669 79.4188 29.5233 78.7047L36.6528 64.4451C27.0135 63.5234 18.515 58.6357 12.8137 51.436Z" fill="#FF652E" />
                                                <path d="M74.7097 66.5654L67.1438 51.436C61.4425 58.6357 52.944 63.5234 43.3047 64.4451L50.4348 78.7047C50.7906 79.4188 51.5579 79.9999 52.5314 79.9999C53.2644 79.9999 53.9614 79.6562 54.4052 79.0624L61.2332 69.9578H72.6144C73.4268 69.9578 74.1799 69.5372 74.6078 68.8469C75.0344 68.156 75.0735 67.2924 74.7097 66.5654Z" fill="#FF652E" />
                                                <path d="M43.9019 23.0695L39.9791 16.803L36.0576 23.0695C35.736 23.5834 35.2275 23.9526 34.6398 24.0997L27.4688 25.8936L32.2161 31.5601C32.6055 32.0245 32.7996 32.6221 32.7574 33.2269L32.2466 40.6012L39.1027 37.8375C39.4286 37.7063 40.0951 37.5311 40.855 37.8375L47.7117 40.6012L47.2014 33.2269C47.1599 32.6221 47.354 32.0245 47.7434 31.5601L52.4907 25.8936L45.3197 24.0997C44.7319 23.9526 44.2235 23.5834 43.9019 23.0695Z" fill="#FF652E" />
                                                <path
                                                    d="M69.9385 29.9585C69.9385 13.4393 56.4991 0 39.98 0C23.4608 0 10.0215 13.4393 10.0215 29.9585C10.0215 46.4771 23.4608 59.917 39.98 59.917C56.4991 59.917 69.9385 46.4777 69.9385 29.9585ZM58.4895 26.0333L51.9441 33.8458L52.6472 44.0131C52.7028 44.8187 52.3402 45.5963 51.6871 46.0712C51.0334 46.5454 50.182 46.6504 49.4331 46.3489L39.98 42.5385L30.5269 46.3489C30.2736 46.4508 29.2646 46.7914 28.2728 46.0712C27.6198 45.5963 27.2572 44.8187 27.3127 44.0131L28.0171 33.8458L21.4717 26.0339C20.9529 25.4144 20.7893 24.5721 21.0389 23.8043C21.2886 23.0365 21.916 22.4506 22.6997 22.2546L32.5862 19.7815L37.9933 11.142C38.4218 10.4578 39.1725 10.0421 39.98 10.0421C40.7875 10.0421 41.5382 10.4578 41.9667 11.142L47.375 19.7815L57.2615 22.2546C58.0452 22.4506 58.6726 23.0365 58.9222 23.8043C59.1719 24.5721 59.0083 25.4144 58.4895 26.0333Z"
                                                    fill="#005153"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
