import LinkComponent from "./LinkComponent";
import ImageComponent from "./ImageComponent";

export default function Footer({ address, phone, mail, links, image, socialLinks }: { address: Link, phone: string, mail: string, links: Link[], image: Image, socialLinks: Link[] }) {
    return (
        <footer className="mt-blue">
            <div className="bg-black relative">
                <div className="container-fluid text-white">
                    <div className="row md:relative">
                        <div className="w-full md:w-5/12 lg:w-6/12 pt-red pb-red">
                            <div className="md:px-6 lg:px-0 md:text-left text-center flex flex-col lg:w-1/2">
                                <p className="link">CONTACTO</p>
                                <div className="md:pt-[15px] pt-[10px] flex flex-col ">
                                    {address && (
                                        <LinkComponent {...address}>
                                            {address.label}
                                        </LinkComponent>
                                    )}
                                    {
                                        phone && (
                                            <a href={`tel:${phone.replace(/[\s+]/g, "")}`} className="text-white">
                                                Tel: {phone}
                                            </a>
                                        )
                                    }
                                    {
                                        mail && (
                                            <a href={`mailto:${mail}`} className="text-white">
                                                {mail}
                                            </a>
                                        )
                                    }
                                </div>
                                <div className="hidden md:flex pt-blue">
                                    <LinkComponent
                                        page={{ _type: "home", slug: "" }}
                                        linkType="page"
                                        className="text-white"
                                    >
                                        <ImageComponent image={image} optionalAlt="Footer Image" classContainer="w-full md:w-2/3 h-full object-cover" classImg="w-full h-full object-cover" />
                                    </LinkComponent>
                                </div>
                            </div>
                            <div className="border-b md:border-b-0 border-white/50 absolute left-0 right-0 mt-12"/>
                        </div>
                        <div className="w-6/12 md:w-4/12 lg:w-3/12 lg:border-l bml-auto pt-red pb-red border-r border-white/50 md:border-r-0">
                            <div className="md:border-l lg:border-l-0 h-full top-0 border-white/50 absolute"></div>
                            <div className="lg:px-6 md:px-12 px-0 md:text-left text-center">
                                <p className="link">SITEMAP</p>
                                <div className="flex flex-col md:pt-[15px] pt-[10px]">
                                    {
                                        links?.map((link) => (
                                            <LinkComponent className="link text-white" key={link._key} {...link}>
                                                {link.label}
                                            </LinkComponent>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 md:w-3/12 lg:border-l border-white/50 pt-red pb-red text-white">
                            <div className="md:border-l lg:border-l-0 h-full top-0 border-white/50 absolute translate-x-[-25px]"></div>
                            <div className="lg:px-6 md:text-left text-center">
                                <p className="link">SOCIALES</p>
                                <div className="flex flex-col md:pt-[15px] pt-[10px]">
                                    {
                                        socialLinks?.map((link) => (
                                            <LinkComponent className="link text-white" key={link._key} {...link}>
                                                {link.label}
                                            </LinkComponent>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b md:border-b-0 border-white/50 absolute left-0 right-0"/>
                    <div className="flex md:hidden pt-red pb-red justify-center">
                        <LinkComponent
                            page={{ _type: "home", slug: "" }}
                            linkType="page"
                            className="text-white"
                        >
                            <ImageComponent image={image} optionalAlt="Footer Image" classContainer="w-full h-full object-cover" classImg="w-full h-full object-cover" />
                        </LinkComponent>
                    </div>
                </div>
            </div>
        </footer>
    );
}