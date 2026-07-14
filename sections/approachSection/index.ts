import ApproachSectionComponent from './Component';
import schema from './schema';
import { query } from './query';
import { ApproachSection } from './type';

export const approachSectionModule: SectionModule<ApproachSection> = {
    name: 'approachSection',
    schema,
    query,
    Component: ApproachSectionComponent,
    usableIn: ['home', 'page'],
};