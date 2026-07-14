import { defineField, defineType } from "sanity";
import { sectionsField } from "@/sanity/utils/sections";
import { contentGroup, seoGroup } from "@/sanity/utils/groups";

export default defineType({
    name: "service",
    title: "Servicios",
    type: "document",
    groups: [contentGroup, seoGroup],
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: Rule => Rule.required(),
        }),
        sectionsField("service"),
        defineField({
            name: "metaTitle",
            title: "Meta Title",
            type: "string",
            group: "seo",
           
          }),
          defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            group: "seo",
          }),
          defineField({
              name: "noIndex",
              title: "No Index",
              type: "boolean",
              initialValue: false,
              group: "seo",
            }),
          defineField({
            name: "ogImage",
            title: "Open Graph Image - [1200x630]",
            type: "image",
            group: "seo",
          }),
          defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
          }),
    ],
    preview: {
        select: { title: "title", subtitle: "slug.current" },
    },
});
