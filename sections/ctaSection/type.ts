export type CTASectionType = {
    _type: "ctaSection";    
    _key: string;
    ctaContact: Link;
    items: {
        _key: string;
        cta: Link;
        title: string;
        description: string;
        image: Image;   
    }[];
};