import Equipo from './Component';
import schema from './schema';
import { query } from './query';
import { TeamSection } from './types';

export const teamModule: SectionModule<TeamSection> = {
    name: 'team',
    schema,
    query,
    Component: Equipo,
    usableIn: ['home', 'page'],
};