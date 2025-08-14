import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/other/Section1";
import PageHeader from "@/components/sections/PageHeader";
import Pagination from "@/components/elements/Pagination";
import Section2 from "@/components/sections/insurance/Section2";
import Section7 from "@/components/sections/home/Section7";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Services" current_page="Other" />
                <Section7 />
                <Section1 />
                <Pagination />
                <Section2 />
            </Layout>
        </>
    );
}
