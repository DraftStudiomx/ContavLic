import type { HomeHeroSection } from "./homeHero/types";
import type { ServiciosSection } from "./servicios/types";
import type { HeroServicesSection } from "./heroServices/types";
import type { TeamSection } from "./team/types";
import type { InfoServiceSection } from "./infoServiceSection/types";

export type Section = | HomeHeroSection | ServiciosSection | HeroServicesSection | TeamSection | InfoServiceSection;

export type SectionMap = {
    [K in Section["_type"]]: React.FC<Extract<Section, { _type: K }>>;
  };