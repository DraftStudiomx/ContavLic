'use client';

import { useState, useEffect, useRef } from 'react';
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";
import AnimateOnView from './AnimateOnView';


export default function Header({ links, mail, image }: { links: Link[], mail: string, image: Image }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const menuLinksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const insideButton = menuButtonRef.current?.contains(e.target as Node);
            const insideLinks = menuLinksRef.current?.contains(e.target as Node);
            if (!insideButton && !insideLinks) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <header className="fixed top-12 left-0 w-full z-50 pointer-events-none">
                <AnimateOnView className="container-fluid ">
                    <div className="flex justify-between items-center pointer-events-auto">
                        <LinkComponent
                            page={{ _type: "home", slug: "" }}
                            linkType="page"
                            className="text-black"
                        >
                            <div className="w-full h-[40px] md:h-[45px] lg:h-[70px]">

                                <ImageComponent image={image} optionalAlt="Header Image" classContainer="ms-[10px] h-full " classImg="w-auto! h-full object-cover" />
                            </div>
                        </LinkComponent>
                        <div className="flex">
                            {
                                links && links.map((link, index) => (
                                    <LinkComponent
                                        key={link._key}
                                        {...link}
                                        className={`hidden lg:block text-black px-8 py-4 link bg-white border-r border-t border-b border-gray ${index === links.length - 1 ? "border-r-0" : ""} ${index === 0 ? "border-l" : ""}`}
                                    >
                                        {link.label}
                                    </LinkComponent>
                                ))
                            }
                            {mail && (
                                <a href={`mailto:${mail}`} className="hidden md:block bg-black text-white px-8 py-4 link border border-black">
                                    Contacto
                                </a>
                            )}
                            <div ref={menuButtonRef}>
                                <button
                                    className="menu-button flex gap-x-4 lg:hidden text-black px-6 md:px-8 py-4 link bg-white border-l border-t border-b border-r border-gray cursor-pointer pointer-events-auto"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {!menuOpen ? (<p>Menu</p>) : (<p>Cerrar</p>)}
                                    <div className="flex flex-col items-center justify-center gap-[4px] relative w-[14px] h-[14px]">
                                        <span className={`block w-[14px] h-px bg-black absolute transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-1/2' : 'top-[3px]'}`}></span>
                                        <span className={`block w-[14px] h-px bg-black absolute top-1/2 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                        <span className={`block w-[14px] h-px bg-black absolute transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-1/2' : 'top-[calc(100%-3px)]'}`}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={menuLinksRef} className={`menu-links flex flex-col border-t lg:hidden border-gray mt-8 transform-gpu transition-[opacity,visibility] duration-300 ${menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                        {
                            links && links.map((link) => (
                                <LinkComponent
                                    key={link._key}
                                    {...link}
                                    onClickAction={() => setMenuOpen(false)}
                                    className="block lg:hidden w-full text-black px-6 md:px-8 py-4 link bg-white border-x border-b border-gray text-center"
                                >
                                    {link.label}
                                </LinkComponent>
                            ))
                        }
                        {mail && (
                            <a href={`mailto:${mail}`} className="block md:hidden w-full text-center bg-black text-white px-8 py-4 link border border-black">
                                Contacto
                            </a>
                        )}
                    </div>

                </AnimateOnView>


            </header>
            <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 transform-gpu transition-[opacity,visibility] duration-300 ${menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`} onClick={() => setMenuOpen(false)}></div>

        </>
    );
}