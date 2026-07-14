import { groq } from "next-sanity";
import { IMG, LINK } from "@/sanity/utils/query";

export const query = groq`
    _type == "contactSection" => {
        _type,
        _key,
        title,
        subtitle,
        items[] {
            _key,
            title,
            link {
                ${LINK}
            },
        },
        cta {
            ${LINK}
        },
        image {
            ${IMG}
        },
    }
`;