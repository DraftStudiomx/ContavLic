import { groq } from "next-sanity";
import { IMG } from "@/sanity/utils/query";

export const query = groq`
    _type == "heroServices" => {
        _type,
        _key,
        title,
        subtitle,
        description,
        backgroundImage {
            ${IMG}
        },
        mobileImage {
            ${IMG}
        },
    }
`;
