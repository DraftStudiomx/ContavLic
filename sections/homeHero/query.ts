import { groq } from "next-sanity";
import { LINK, IMG } from "@/sanity/utils/query";
export const query = groq`
    _type == "homeHero" => {
        _type,
        _key,
        title,
        description,
        cta {
            ${LINK}
        },
        backgroundImage {
            ${IMG}
        },
    }
`;