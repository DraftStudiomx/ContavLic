import Servicios from './Component';
import schema from './schema';
import { query } from './query';
import { ServiciosSection } from './types';

export const serviciosModule: SectionModule<ServiciosSection> = {
    name: 'servicios',
    schema,
    query,
    Component: Servicios,
    usableIn: ['home', 'page'],
};