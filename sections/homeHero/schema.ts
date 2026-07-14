import { defineField, defineType } from "sanity";

export default defineType({
    name: 'homeHero',
    title: 'Home Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'link',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Texto alternativo',
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Seccion Home Hero",
            }
        }
    }
});