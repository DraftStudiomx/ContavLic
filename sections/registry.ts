import {homeHeroModule} from './homeHero/index';
import {serviciosModule} from './servicios/index';
import {aboutUsModule} from './aboutUs/index';
import {approachSectionModule} from './approachSection/index';
import { contactSectionModule } from './contactSection/index';
import { heroServicesModule } from './heroServices/index';
import { infoServiceSectionModule } from './infoServiceSection';
import { ctaSectionModule } from './ctaSection/index';
import { teamModule } from './team/index';
import { practicaSectionModule } from './practicaSection/index';

export const SECTIONS = [
    homeHeroModule,
    serviciosModule,
    aboutUsModule,
    approachSectionModule,
    contactSectionModule,
    heroServicesModule,
    infoServiceSectionModule,
    ctaSectionModule,
    teamModule,
    practicaSectionModule,
] as const;

export type SectionName = (typeof SECTIONS)[number]["name"];

export function sectionsForDocument(doc: "home" | "page" | "service") {
    return SECTIONS.filter((s) =>
      (s.usableIn as readonly string[]).includes(doc)
    );
  }

export function sectionQueriesForDocument(doc: "home" | "page" | "service") {
return sectionsForDocument(doc)
    .map((s) => s.query)
    .join(",\n");
}