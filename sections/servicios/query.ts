import { groq } from "next-sanity";
import { LINK, IMG } from "@/sanity/utils/query";
export const query = groq`
    _type == "servicios" => {
        _type,
        _key,
        headline,
        title,
        servicios[] {
            _type,
            _key,
            title,
            description,
            image {
                ${IMG}
            },
            link {
                ${LINK}
            },
        },
    }
`;