import { groq } from "next-sanity";
import { LINK, IMG } from "@/sanity/utils/query";

export const query = groq`
    _type == "team" => {
        _type,
        _key,
        headline,
        title,
        team[] {
            _type,
            _key,
            name,
            role,
            image {
                ${IMG}
            },
        },
    }
`