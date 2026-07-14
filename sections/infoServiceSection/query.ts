import { groq } from "next-sanity";
import { IMG } from "@/sanity/utils/query"; 

export const query = groq`
    _type == "infoServiceSection" => {
        _type,
        _key,
        title,
        subtitle,
        items[] {
            _type,
            _key,
            title,
            description,
        },
    }
`;