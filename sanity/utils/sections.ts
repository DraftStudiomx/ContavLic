import { defineField } from "sanity";
import { SECTIONS, sectionsForDocument } from "@/sections/registry";

export type DocumentWithSections = "home" | "page" | "service";

export const sectionSchemas = SECTIONS.map((s) => s.schema);

export function sectionsField(doc: DocumentWithSections) {
  return defineField({
    name: "sections",
    type: "array",
    group: "content",
    of: sectionsForDocument(doc).map((s) => ({ type: s.name })),
    options: {
      insertMenu: {
        views: [
          {
            name: "grid",
            previewImageUrl: (sectionType: string) => `/cms/${sectionType}.jpg`,
          },
          { name: "list" },
        ],
      },
    },
  });
}