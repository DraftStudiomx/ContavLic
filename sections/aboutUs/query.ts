import { groq } from "next-sanity";
import { IMG } from "@/sanity/utils/query";
export const query = groq`
    _type == "aboutUs" => {
        _type,
        _key,
        title,
        description,
        subtitle,
        image {
            ${IMG}
        },
        backgroundImage {
            ${IMG}
        },
    }
`;