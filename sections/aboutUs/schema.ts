import { defineField, defineType } from "sanity";

export default defineType({
    name: 'aboutUs',
    title: 'About Us',
    type: 'object',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
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
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
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
                title: "Seccion About Us",
            }
        }
    }
});