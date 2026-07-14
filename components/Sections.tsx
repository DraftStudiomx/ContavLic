import type { Section, SectionMap } from "@/sections/types";
import { SECTIONS } from "@/sections/registry";

const componentMap = Object.fromEntries(
  SECTIONS.map((s) => [s.name, s.Component])
) as SectionMap;

export default function Sections({ sections }: { sections?: Section[] }) {
  if (!sections?.length) {
    return <p>No section included in this page</p>;
  }
  return (
    <>
      {sections.map((section) => {
        const Component = componentMap[section._type] as React.FC<Section>;
        if (!Component) {
          return (
            <div data-type={section._type} key={section._key}>
              Unknown section type: {section._type}
            </div>
          );
        }
        return <Component key={section._key} {...section} />;
      })}
    </>
  );
}