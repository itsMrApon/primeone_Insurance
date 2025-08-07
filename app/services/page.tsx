import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/services/Section1";
import Section2 from "@/components/sections/services/Section2";
import Section5 from "@/components/sections/home/Section5";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our expertise" current_page="Our services" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
