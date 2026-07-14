import { IMG, LINK } from "@/sanity/utils/query";
import { groq } from "next-sanity";

export const query = groq`
    _type == "ctaSection" => {
        _type,
        _key,
        ctaContact {
            ${LINK}
        },
        items[] {
            _key,
            cta {
                ${LINK}
            },
            title,
            description,
            image {
                ${IMG}
            },
        },
    }
`;