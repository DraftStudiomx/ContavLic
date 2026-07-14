import { defineField, defineType } from "sanity";

export default defineType({
    name: 'heroServices',
    title: 'Hero Services',
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
            name: 'backgroundImage',
            title: 'Background Image (Desktop)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt', type: 'string' }),
            ],
        }),
        defineField({
            name: 'mobileImage',
            title: 'Background Image (Mobile)',
            description: 'If empty, the desktop image will be used on all screen sizes.',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt', type: 'string' }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: "Hero Services" };
        }
    }
});
