import CTASection from "./Component";
import schema from "./schema";
import { query } from "./query";
import { CTASectionType } from "./type";

export const ctaSectionModule: SectionModule<CTASectionType> = {
    name: 'ctaSection',
    schema,
    query,
    Component: CTASection,
    usableIn: ['home', 'page', 'service'],
};