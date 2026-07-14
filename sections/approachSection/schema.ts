import { defineField, defineType } from "sanity";

export default defineType({
    name: 'approachSection',
    title: 'Approach Section',
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
            name: 'accordion',
            title: 'Accordion',
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
            }],
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
                title: "Approach Section",
            }
        }
    }
}) 