import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Contact Us" current_page="Contact" />
                <Section1 />
            </Layout>
        </>
    );
}
