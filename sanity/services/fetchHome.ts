import { sanityFetch } from "@/sanity/lib/live";
import { HOME } from "@/sanity/query/page";
import type { Section } from "@/sections/types";

type Home = {
    _type: "home";
    _key: string;
    title: string;
    description: string;
    cta: Link;
    sections: Section[];
    metadata: SeoMetadata;
};

export const fetchHome = async (): Promise<Home> => {
    const { data } = await sanityFetch({
      query: HOME,
    });
    return data as Home;
  }
  