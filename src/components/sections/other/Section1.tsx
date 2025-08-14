import Link from "next/link";

const blogPosts = [
    {
        delay: "0",
        link: "/blog-details",
        linkAuthor: "#",
        category: "pet",
        img: "img-1.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Save Money on Insurance Without Losing Coverage",
    },
    {
        delay: "200",
        link: "/blog-details",
        linkAuthor: "#",
        category: "family",
        img: "img-2.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Understanding Insurance Jargon Made Easy",
    },
    {
        delay: "400",
        link: "/blog-details",
        linkAuthor: "#",
        category: "accident",
        img: "img-3.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "How to Choose the Right Life Insurance",
    },
    {
        delay: "0",
        link: "/blog-details",
        linkAuthor: "#",
        category: "pet",
        img: "img-4.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Top Ways to Lower Your Insurance Premiums",
    },
    {
        delay: "200",
        link: "/blog-details",
        linkAuthor: "#",
        category: "family",
        img: "img-5.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Essential Insurance Policies You Can’t Ignore",
    },
    {
        delay: "400",
        link: "/blog-details",
        linkAuthor: "#",
        category: "accident",
        img: "img-6.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "How to Avoid Underinsuring Your Home or Business",
    },
    {
        delay: "0",
        link: "/blog-details",
        linkAuthor: "#",
        category: "pet",
        img: "img-7.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Life Insurance: How Much Do You Really Need?",
    },
    {
        delay: "200",
        link: "/blog-details",
        linkAuthor: "#",
        category: "family",
        img: "img-8.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Common Insurance Myths Debunked",
    },
    {
        delay: "400",
        link: "/blog-details",
        linkAuthor: "#",
        category: "accident",
        img: "img-9.png",
        date: "December 21, 2025",
        author: "Admin",
        title: "Why Regular Policy Reviews Are a Must",
    },
];

export default function Section1() {
    return (
        <>
            {/*insurance-consultancy-services section 1*/}
            <section className="insurance-consultancy-services-section-1 pt-120 overflow-hidden">
                <div className="container">
                    <div className="row g-3 align-items-end mb-8">
                        <div className="col-lg-5">
                            <h2 className="text-anime-style-3">
                                Every single <span className="text-primary">updates</span> from here.
                            </h2>
                        </div>
                        <div className="col-lg-3 text-lg-end ms-lg-auto">
                            <Link href="/contact" className="btn btn-primary bg-primary-2 hover-up">
                                subscribe newsletter
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row g-lg-5 g-4">
                        {blogPosts.map((post, index) => (
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={post.delay} key={index}>
                                <div className="card-news card h-100 position-relative hover-up">
                                    <Link href={post.link} className="card-news-img position-relative d-block">
                                        <img className="w-100" src={`/assets/imgs/pages/insurance-consultancy/page-blog/${post.img}`} alt={post.title} />
                                        <span className="text-uppercase fw-bold fs-8 text-white bg-primary-2 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">{post.category}</span>
                                    </Link>
                                    <div className="card-news-body p-4 d-flex flex-column justify-content-between h-100">
                                        <div className="d-flex card-news-information gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-calendar-days text-primary"></i>
                                                <p className="mb-0">{post.date}</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-regular fa-user text-primary"></i>
                                                <span className="opacity-50">By</span>
                                                <Link href={post.linkAuthor} className="mb-0 text-primary-2">
                                                    {post.author}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2 mb-4">
                                            <h6 className="fw-semibold text-primary-2">
                                                <Link href={post.link}> {post.title} </Link>
                                            </h6>
                                        </div>
                                        <Link href={post.link} className="text-dark opacity-50 fs-7 fw-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
