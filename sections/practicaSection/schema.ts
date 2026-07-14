import { defineField, defineType } from "sanity";

export default defineType({
    name: 'practicaSection',
    title: 'Practica Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt', type: 'string' }),
            ],
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
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
                ],
            }]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt', type: 'string' }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Seccion Practica",
            }
        }
    }
});