import ApproachSectionComponent from './Component';
import schema from './schema';
import { query } from './query';
import { ContactSection } from './type';

export const contactSectionModule: SectionModule<ContactSection> = {
    name: 'contactSection',
    schema,
    query,
    Component: ApproachSectionComponent,
    usableIn: ['home', 'page'],
};