import HeroServices from './Component';
import schema from './schema';
import { query } from './query';
import { HeroServicesSection } from './types';

export const heroServicesModule: SectionModule<HeroServicesSection> = {
    name: 'heroServices',
    schema,
    query,
    Component: HeroServices,
    usableIn: ['service'],
};
