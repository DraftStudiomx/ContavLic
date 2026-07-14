export type PracticaSection = {
    _type: "practicaSection";
    _key: string;
    title: string;
    subtitle: string;
    backgroundImage: Image;
    items: {
        _key: string;
        title: string;
        description: string;
    }[];
    image: Image;
};
