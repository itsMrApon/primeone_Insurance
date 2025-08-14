"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-1.png";
import img2 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-2.png";
import img3 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-3.png";
import img4 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-4.png";
import img5 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-5.png";
import img6 from "@/assets/imgs/pages/insurance-consultancy/page-home/home-section-5/avatar-6.png";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section5() {
    return (
        <>
            {/*insurance-consultancy-home home section 5*/}
            <section className="insurance-consultancy-home-section-5 pt-120 pb-120 bg-secondary-3 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-primary-2 wow img-custom-anim-left">
                            You can see happy <br />
                            <div className="picture icon-shape icon-lg rounded-circle border border-white border-2 overflow-hidden">
                                <Image src={img1} alt="PrimeOne" />
                            </div>
                            <div className="picture icon-shape icon-lg rounded-circle border border-white border-2 overflow-hidden">
                                <Image src={img2} alt="PrimeOne" />
                            </div>
                            <div className="picture icon-shape icon-lg rounded-circle border border-white border-2 overflow-hidden">
                                <Image src={img3} alt="PrimeOne" />
                            </div>
                            clients feedback
                        </h2>
                    </div>
                </div>
                <div className="">
                    <div className="row mt-80">
                        <div className="wow img-custom-anim-top">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-5 overflow-visible">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">100% satisfied</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ He’s very nice person, who know about insurance policies. He help me lots about insurance. He provide me and my friend to very good policy. He gave me great deals. I’m strongly recommend him. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img1} alt="PrimeOne" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">Mohammad Zia</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Quality desk</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Professional, helpful and nice people they know how to do things right and fast. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img2} alt="PrimeOne" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">Ahmed B. Hassan</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Crm ready</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Really awesome person! Willing to take his time and explain everything, when I do not understand something. Also did my taxes with him and such a big and awesome help. I even got insurance under him for 2 years and gave me the best rate possible. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img3} alt="Primeone" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">Mohammed Naseruddin</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Good support</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ He is one of best Insurance Agent in this area. He is very knowledgeable about Insurance. He also do DDC for people. I really appreciate him  to being able to give me best insurance policy.. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img4} alt="PrimeOne" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">alam uddin</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Language support</h6>
                                            </Link>
                                            
                                            <p className="mb-0 mt-4 ">“ Nice office environment. Delowar Hossain is very helpful and cooperative. Management is highly appreciable !!!! “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img5} alt="PrimeOne" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">RG Lifestyle</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white p-5 rounded-4 bg-white border">
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_489_1035)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#E6EDEE" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#E6EDEE" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                <h6 className=" mt-2">Elderly support</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Delowar HOSSAIN is very good and friendly.  I did my insurance by him. He solved my issues quickly. I am very satisfied and pleased with his customer support. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                    <Image className="rounded-circle icon-shape icon-50" src={img6} alt="PrimeOne" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="https://maps.app.goo.gl/MBxj5gZr5hLE6Ckf8">
                                                        <span className="btn-text ">Jamshed Saddam</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center mt-8">
                            <div className="position-relative mx-auto">
                                <div className="d-inline-flex border border-custom h-100 d-flex align-items-center gap-1 mx-auto bg-white position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative border-0">
                                        <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                    <div className="swiper-button-next mt-0 position-relative border-0">
                                        <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span className="border-top border-custom position-absolute top-50 start-50 translate-middle w-100 z-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
