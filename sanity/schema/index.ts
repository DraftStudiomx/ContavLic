import home from '@/sanity/documents/home'
import settings from '@/sanity/documents/settings'
import service from '@/sanity/documents/service'
import link from '@/sanity/objects/link';

import { SECTIONS } from '@/sections/registry';

const sections = SECTIONS.map((s) => s.schema);
const documents = [home, settings, service];
const objects = [link];

export const schema = [
  ...documents,
  ...objects,
  ...sections,
]
