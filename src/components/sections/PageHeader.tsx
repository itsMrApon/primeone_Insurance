import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            {/*tax-software section header*/}
            <section className="insurance-consultancy-home-section-1">
                <div className="bg-primary-2 position-relative pb-150 pt-250-keep">
                    <div className="line-bg"></div>
                    <div className="container position-relative z-1">
                        <div className="row">
                            <div className="col text-center">
                                <div className="text-center">
                                    <h1 className="mb-0 mb-5 ds-1 text-white text-anime-style-2">{title}</h1>
                                    <Breadcrumb page={current_page} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
