import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import PageHeader from "@/components/sections/PageHeader";
import Pagination from "@/components/elements/Pagination";
import Section2 from "@/components/sections/services/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Inside" current_page="Blog" />
                <Section1 />
                <Pagination />
                <Section2 />
            </Layout>
        </>
    );
}
