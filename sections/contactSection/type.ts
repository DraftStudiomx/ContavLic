export type ContactSection = {
    _type: "contactSection";
    _key: string;
    title: string;  
    subtitle: string;
    items: {
        _key: string;
        title: string;
        link: Omit<Link, 'children'>;
    }[];
    cta: Link;
    image: Image;
};