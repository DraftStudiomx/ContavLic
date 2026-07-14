import { groq } from "next-sanity";
import { IMG } from "@/sanity/utils/query";

export const query = groq`
    _type == "practicaSection" => {
        _type,
        _key,
        title,
        subtitle,
        backgroundImage {
            ${IMG}
        },
        items[] {
            _key,
            title,
            description,
        },
        image {
            ${IMG}
        },
    }
`;