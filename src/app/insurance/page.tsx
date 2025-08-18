import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/insurance/Section1";
import Section2 from "@/components/sections/insurance/Section2";
import Section5 from "@/components/sections/home/Section5";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our   👨‍💼Expertise" current_page="Our insurance" />
                <Section1 />
                <Section2 />
                <Section5 />
            </Layout>
        </>
    );
}
