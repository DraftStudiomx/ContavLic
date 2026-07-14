import { groq } from "next-sanity";
import { IMG } from "@/sanity/utils/query";

export const query = groq`
    _type == "approachSection" => {
        _type,
        _key,
        title,
        description,
        subtitle,
        accordion[] {
            _key,
            title,
            description,
        },
        image {
            ${IMG}
        },
    }
`;