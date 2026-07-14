import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_BY_SLUG, SERVICES_SLUGS } from "@/sanity/query/page";
import type { Section } from "@/sections/types";

type Service = {
    _type: "service";
    metadata: SeoMetadata;
    title: string;
    slug: string;
    sections: Section[];
};

export const fetchService = async (slug: string): Promise<Service | null> => {
    const { data } = await sanityFetch({
        query: SERVICE_BY_SLUG,
        params: { slug },
    });
    return data as Service | null;
};

export const fetchServicesSlugs = async (): Promise<string[]> => {
    const { data } = await sanityFetch({
        query: SERVICES_SLUGS,
        perspective: "published",
        stega: false,
    });
    return data as string[];
};