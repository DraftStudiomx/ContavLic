import { defineType } from "sanity";
import { contentGroup, seoGroup } from "@/sanity/utils/groups";
import { sectionsField } from "@/sanity/utils/sections";
import { seoFields } from "@/sanity/utils/seo";

export default defineType({
  name: "home",
  type: "document",
  title: "Home Page",
  groups: [contentGroup, seoGroup],
  fields: [sectionsField("home"), ...seoFields()],
  preview: {
    select: {
      media: "ogImage",
    },
    prepare({ media }) {
      return {
        title: `Home`,
        media: media,
      };
    },
  },
});