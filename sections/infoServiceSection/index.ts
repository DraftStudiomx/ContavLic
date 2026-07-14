import InfoService from './Component';
import schema from './schema';
import { query } from './query';
import { InfoServiceSection } from './types';

export const infoServiceSectionModule: SectionModule<InfoServiceSection> = {
    name: 'infoServiceSection',
    schema,
    query,
    Component: InfoService,
    usableIn: ['service'],
};
