import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-details/Section1";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Case details" current_page="single portfolio" />
                <Section1 />
            </Layout>
        </>
    );
}
