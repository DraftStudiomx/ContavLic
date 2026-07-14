import { defineField, defineType } from "sanity";

export default defineType({
    name: 'ctaSection',
    title: 'CTA Section',
    type: 'object',
    fields: [
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({
                        name: 'cta',
                        title: 'CTA',
                        type: 'link',
                    }),
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
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                        fields: [
                            defineField({
                                name: 'alt',
                                title: 'Alt',
                                type: 'string',
                            }),
                        ],
                    }),
                ],
            }],
        }),
        defineField({
            name: 'ctaContact',
            title: 'CTA Contact',
            type: 'link',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Seccion CTA",
            }
        }
    }
});