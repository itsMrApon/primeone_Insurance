import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/tax/Section1";
import PageHeader from "@/components/sections/PageHeader";
import Section4 from "@/components/sections/about/Section4";
import Section2 from "@/components/sections/insurance/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Tax 👩‍💼Case" current_page="tax" />
                <Section1 />
                <Section2 />
                <Section4 />
            </Layout>
        </>
    );
}
