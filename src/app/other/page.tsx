import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/other/Section1";
import PageHeader from "@/components/sections/PageHeader";
import Pagination from "@/components/elements/Pagination";
import Section2 from "@/components/sections/insurance/Section2";
import Section4 from "@/components/sections/about/Section4";

export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our &nbsp;&nbsp;  👨‍🔧Services" current_page="Other" />
                <Section1 />
                <Pagination />
                <Section2 />
                <Section4 />
            </Layout>
        </>
    );
}
