import { groq } from "next-sanity";
import { METADATA } from "@/sanity/utils/query";
import { sectionQueriesForDocument } from "@/sections/registry";
const homeSectionProjections = sectionQueriesForDocument("home");
const pageSectionProjections = sectionQueriesForDocument("page");
const serviceSectionProjections = sectionQueriesForDocument("service");

export const HOME = groq`
*[_type == "home"][0] {
  ${METADATA},
  sections[] {
    ${homeSectionProjections}
  }
}`;

export const SERVICE_BY_SLUG = groq`
*[_type == "service" && slug.current == $slug][0] {
  ${METADATA},
  title,
  "slug": slug.current,
  sections[] {
    ${serviceSectionProjections}
  }
}`;

export const SERVICES_SLUGS = groq`
*[_type == "service"].slug.current
`;