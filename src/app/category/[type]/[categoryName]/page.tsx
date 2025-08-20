import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import CategoryServices from "@/components/sections/CategoryServices";

interface CategoryPageProps {
    params: {
        type: string;
        categoryName: string;
    };
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { type, categoryName } = params;
    
    // Decode the category name from URL
    const decodedCategoryName = decodeURIComponent(categoryName);
    
    return (
        <Layout>
            <PageHeader 
                title={decodedCategoryName} 
                current_page={`${type}-category`} 
            />
            <CategoryServices 
                serviceType={type} 
                categoryName={decodedCategoryName} 
            />
        </Layout>
    );
}
