'use client'

import { useEffect, useState } from 'react';
import ImageComponent from '@/components/ImageComponent';
import { HeroServicesSection } from './types';
import AnimateOnView from '@/components/AnimateOnView';


export default function HeroServices(section: HeroServicesSection) {
    const [isMobileViewport, setIsMobileViewport] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);
        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);
    return (
        <section className="hero-services">
            <AnimateOnView className="container-fluid relative h-[500px] md:h-[600px]">
                {section.backgroundImage && (
                    <div className="absolute top-0 left-0 w-full h-full">
                        {
                            section.mobileImage && (
                                <ImageComponent
                                    image={section.mobileImage}
                                    optionalAlt={section.title}
                                    classContainer="md:hidden w-full h-full overflow-hidden"
                                    classImg="w-full h-full object-cover"
                                    loading={isMobileViewport ? "eager" : "lazy"}
                                />
                            )
                        }
                        
                        {
                            section.backgroundImage && (
                                <ImageComponent
                            image={section.backgroundImage}
                            optionalAlt={section.title}
                                    classContainer={`  w-full h-full overflow-hidden ${section.mobileImage ? 'hidden md:block' : ''}`}
                                    classImg="w-full h-full object-cover"
                                    loading={isMobileViewport ? "lazy" : "eager"}
                                />
                            )
                        }
                    </div>
                )}
                <div className="relative h-full flex flex-col justify-end md:justify-center pb-red">
                    <div className="row justify-center text-center">
                        <div className="w-full md:w-10/12 lg:w-6/12 animate">
                            <p className="link text-white">{section.subtitle}</p>
                            <h1 className="display text-white pt-2">{section.title}</h1>
                            {section.description && (
                                <div className="pt-red">
                                     <p className="text-white pt-6 border-t border-gray/30 w-full">{section.description}</p>
                                </div>    
                            )}
                        </div>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}
