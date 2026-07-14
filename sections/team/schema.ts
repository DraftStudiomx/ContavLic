import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: 'team',
    title: 'Team',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({
                        name: 'name',
                        title: 'Name',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'role',
                        title: 'Role',
                        type: 'string',
                    }),
                    defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        validation: (Rule) => Rule.required(),
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
                        preview: {
                            select: {
                                title: 'name',
                                media: 'image',
                            },
                        },
                    }),
                ],
            }],
            validation: (Rule) => Rule.required().min(6),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Equipo Section",
            }
        }
    }
});