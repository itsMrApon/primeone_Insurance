import Link from "next/link";

const services = [
    {
        delay: "0",
        link: "/portfolio-details",
        img: "img-1.png",
        icon: "icon-1.png",
        title: "Life Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        delay: "200",
        link: "/portfolio-details",
        img: "img-2.png",
        icon: "icon-2.png",
        title: "Home Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        delay: "400",
        link: "/portfolio-details",
        img: "img-3.png",
        icon: "icon-3.png",
        title: "Car Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        delay: "0",
        link: "/portfolio-details",
        img: "img-4.png",
        icon: "icon-4.png",
        title: "Business Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        delay: "200",
        link: "/portfolio-details",
        img: "img-5.png",
        icon: "icon-5.png",
        title: "Education Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        delay: "400",
        link: "/portfolio-details",
        img: "img-6.png",
        icon: "icon-6.png",
        title: "Emergency Insurance",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
];

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-services section 1*/}
            <section className="insurance-consultancy-services-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center g-5">
                        {services.map((service, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card-services bg-white d-flex flex-column h-100" data-aos="fade-up" data-aos-delay={service.delay}>
                                    <Link href={service.link} className="position-relative">
                                        <div className="zoom-img">
                                            <img className="w-100" src={`/assets/imgs/pages/insurance-consultancy/page-services/${service.img}`} alt={service.title} />
                                        </div>
                                        <div className="position-absolute top-100 end-0 translate-middle-y me-5 icon-shape icon-80 bg-white shadow-1">
                                            <img src={`/assets/imgs/pages/insurance-consultancy/page-services/${service.icon}`} alt={service.title} />
                                        </div>
                                    </Link>
                                    <Link href={service.link}>
                                        <h6 className="mt-5 mb-3">{service.title}</h6>
                                    </Link>
                                    <p className="mb-5">{service.description}</p>
                                    <Link href={service.link} className="link-article text-uppercase fs-7 fw-bold text-primary-2">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
