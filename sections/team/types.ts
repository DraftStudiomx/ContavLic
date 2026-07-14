export type TeamSection = {
    _type: "team";
    _key: string;
    headline: string;
    title: string;
    team: {
        _key: string;
        name: string;
        role: string;
        image: Image;
    }[];
}