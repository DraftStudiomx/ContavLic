import { fetchHome } from "@/sanity/services/fetchHome";
import Sections from "@/components/Sections";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import { generatePageMetadata } from "@/lib/generateMetadata";

export async function generateMetadata() {
    const data = await fetchHome();
    return generatePageMetadata({
        metadata: data.metadata,
        slug: "home",
        title: data.title,
    });
}

export default async function Home() {
    const data = await fetchHome();
    
    return(
        <main>
            <PageTransitionLoader />
            {data.sections && <Sections sections={data.sections} />}
        </main>
    );
}