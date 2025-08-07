import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio/Section1";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Case study" current_page="portfolio" />
                <Section1 />
            </Layout>
        </>
    );
}
