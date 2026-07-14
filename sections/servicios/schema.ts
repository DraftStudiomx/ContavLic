import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: 'servicios',
    title: 'Servicios',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Titulo',
            type: 'string',
        }),
        defineField({
            name: 'servicios',
            title: 'Servicios',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Titulo',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'description',
                        title: 'Descripcion',
                        type: 'text',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'image',
                        title: 'Imagen',
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
                        name: 'link',
                        title: 'Link',
                        type: 'link',
                    }),
                ],
            }]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Seccion Servicios",
            }
        }
    }
});