import Link from "next/link";

const portfolioItems = [
    {
        link: "/portfolio-details",
        type: "car medical",
        img: "img-1.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        link: "/portfolio-details",
        type: "life",
        img: "img-2.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        link: "/portfolio-details",
        type: "business",
        img: "img-3.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        link: "/portfolio-details",
        type: "life car",
        img: "img-4.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        link: "/portfolio-details",
        type: "business medical",
        img: "img-5.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },
    {
        link: "/portfolio-details",
        type: "life",
        img: "img-6.png",
        title: "Astro family insurance service",
        description: "We offer a wide range of digital market services that catering is ready.",
    },

];

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-portfolio section 1*/}
            <section className="insurance-consultancy-portfolio-section-1 py-120 overflow-hidden">
                <div className="container">
                    <div className="text-center mb-3">
                        <div className="button-group filter-button-group filter-menu-active">
                            <button aria-label="All" className="btn btn-md btn-filter mb-2 me-2 active" data-filter="*">
                                all tax
                            </button>
                            <button aria-label="Car" className="btn btn-md btn-filter mb-2 me-2" data-filter=".car">
                                Personal
                            </button>
                            <button aria-label="Life" className="btn btn-md btn-filter mb-2 me-2" data-filter=".life">
                                Business
                            </button>
                        </div>
                    </div>
                    <div className="row g-5">
                        {portfolioItems.map((item, index) => (
                            <div className={`filter-item col-md-6 col-12 ${item.type}`} key={index}>
                                <div className="card-portfolio bg-white d-flex flex-column h-100">
                                    <Link href={item.link} className="position-relative">
                                        <div className="zoom-img">
                                            <img className="w-100" src={`/assets/imgs/pages/insurance-consultancy/page-portfolio/${item.img}`} alt={item.title} />
                                        </div>
                                    </Link>
                                    <Link href={item.link}>
                                        <h6 className="mt-4 mb-2">{item.title}</h6>
                                    </Link>
                                    <p className="mb-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
