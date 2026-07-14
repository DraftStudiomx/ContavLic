import { defineField, defineType } from "sanity";

export default defineType({
    name: 'contactSection',
    title: 'Contact Section',
    type: 'object',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
                        name: 'link',
                        title: 'Link',
                        type: 'link',
                    }),
                ],
            }],
        }),
        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'link',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Seccion Contacto",
            }
        }
    }
})