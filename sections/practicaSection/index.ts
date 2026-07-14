import schema from './schema';
import { query } from './query';
import { PracticaSection } from './type';
import Practica from './Component';

export const practicaSectionModule: SectionModule<PracticaSection> = {
    name: 'practicaSection',
    schema,
    query,
    Component: Practica,
    usableIn: ['service'],
};
