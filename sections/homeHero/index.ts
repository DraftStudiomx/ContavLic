import HomeHero from './Component';
import schema from './schema';
import { query } from './query';
import { HomeHeroSection } from './types';

export const homeHeroModule: SectionModule<HomeHeroSection> = {
    name: 'homeHero',
    schema,
    query,
    Component: HomeHero,
    usableIn: ['home'],
};