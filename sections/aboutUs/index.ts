import AboutUsSection from './Component';
import schema from './schema';
import { query } from './query';
import { AboutUsSection as AboutUsSectionType } from './types';

export const aboutUsModule: SectionModule<AboutUsSectionType> = {
    name: 'aboutUs',
    schema,
    query,
    Component: AboutUsSection ,
    usableIn: ['home'],
};