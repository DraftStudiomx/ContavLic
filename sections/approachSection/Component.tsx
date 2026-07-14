'use client';

import { useState } from 'react';
import ImageComponent from '@/components/ImageComponent';
import { ApproachSection } from './type';
import AnimateOnView from '@/components/AnimateOnView';

export default function ApproachSectionComponent(section: ApproachSection) {
    const [openKey, setOpenKey] = useState<string | null>(section.accordion[0]?._key ?? null);

    return (
        <section className="approach-section pt-blue" id="enfoque">
            <AnimateOnView className="container-fluid">
                <div className="row justify-center">
                    <div className="w-full md:w-10/12 lg:w-7/12 lg:pt-0! pt-red order-2 lg:order-1 animate">
                        <ImageComponent image={section.image} optionalAlt="Approach Section Image" classContainer="w-full h-full object-cover" classImg="w-full h-full object-cover rounded-[15px] md:rounded-[25px]" />
                    </div>
                    <div className="w-full md:w-10/12 lg:w-5/12 order-1 lg:order-2 animate">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className="link text-blue lg:text-left text-center">{section.subtitle}</p>
                                <h2 className="h1 pt-[5px] lg:text-left text-center">{section.title}</h2>
                            </div>
                            <div className='pt-red'>
                                {section.accordion.map((item, index) => {
                                    const isOpen = openKey === item._key;
                                    return (
                                        <div className={`${index > 0 ? 'pt-yellow' : '' }`} key={item._key}>
                                            <div className="border-t border-(--color-gray) w-full"></div>
                                            <button
                                                className="flex items-center justify-between w-full text-left cursor-pointer pt-[15px] md:pt-[20px] gap-x-[15px]"
                                                onClick={() => setOpenKey(isOpen ? null : item._key)}
                                            >
                                                <h3 className="h2">{item.title}</h3>
                                                <div className={`h-[24px] w-[24px] transition-all duration-300 border flex border-blue rounded-[50%] relative shrink-0 ${isOpen ? 'bg-blue' : ''}`}>
                                                    <span className={`h-px w-[10px] border-t absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'border-blue' : 'border-white'}"`}></span>
                                                    <span className={`h-px w-[10px] border-t border-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 border-white' : 'rotate-90 border-blue'}`}></span>
                                                </div>
                                            </button>
                                            <div className={`grid transition-all duration-300 lg:w-4/5 md:w-9/10 w-full ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                                <div className='overflow-hidden'>
                                                    <p className="pt-[5px]">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}
