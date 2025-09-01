"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import PageHeader from "@/components/sections/PageHeader";

function ServiceDetailsContent() {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get('id');
    
    return (
        <Layout>

            <Section1 serviceId={serviceId} />
        </Layout>
    );
}

export default function ServiceDetailsPage() {
    return (
        <Suspense fallback={
            <Layout>
                <PageHeader title="Loading..." current_page="Service Details" />
                <div className="container py-5">
                    <div className="text-center">
                        <p>Loading service details...</p>
                    </div>
                </div>
            </Layout>
        }>
            <ServiceDetailsContent />
        </Suspense>
    );
}
