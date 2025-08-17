"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/contact/Section1";
import PageHeader from "@/components/sections/PageHeader";

function ServiceDetailsContent() {
    const searchParams = useSearchParams();
    const serviceTitle = searchParams.get('title') || 'Service Details';
    const serviceId = searchParams.get('id');
    
    return (
        <Layout>
            <PageHeader 
                title={serviceTitle} 
                current_page={serviceTitle} 
            />
            <Section1 serviceId={serviceId} />
            <Section2 />
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
