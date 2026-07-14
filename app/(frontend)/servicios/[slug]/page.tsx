import { fetchService } from "@/sanity/services/fetchService";
import Sections from "@/components/Sections";
import { notFound } from "next/navigation";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import { fetchServicesSlugs } from "@/sanity/services/fetchService";
import {generatePageMetadata} from "@/lib/generateMetadata";

export async function generateStaticParams() {
    const services = await fetchServicesSlugs();
    return services.map((service) => ({
        slug: service,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await fetchService(slug);
    if (!data){
        return notFound();
    }
    return generatePageMetadata({
        metadata: data.metadata,
        slug: data.slug,
        title: data.title,
    });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    const data = await fetchService(slug);
    if (!data) return notFound();

    return (
        <main>
            <PageTransitionLoader />
            {data.sections && <Sections sections={data.sections} />}
        </main>
    );
}
