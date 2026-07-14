export type InfoServiceSection = {
    _type: "infoServiceSection";
    _key: string;
    title: string;
    subtitle: string;
    items: {
        _key: string;
        title: string;
        description: string;
    }[];
};
