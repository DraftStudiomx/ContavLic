export type ApproachSection = {
    _type: "approachSection";
    _key: string;
    title: string;  
    subtitle: string;
    accordion: {
        _key: string;
        title: string;
        description: string;
    }[];
    image: Image;
};