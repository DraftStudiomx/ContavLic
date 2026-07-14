import { defineField, defineType } from "sanity";

export default defineType({
    name: 'infoServiceSection',
    title: 'Info Service Section',
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
    ],
    preview: {
        prepare() {
            return {
                title: "Info Service Section",
            }
        }
    }
})