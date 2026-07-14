export type ServiciosSection = {
    _type: "servicios";
    _key: string;
    headline: string;
    title: string;
    servicios: {
        _type: "servicio";
        _key: string;
        title: string;
        description: string;
        image: Image;
        link: Link;
    }[];
};
