'use client';

import { useState } from 'react';
import ImageComponent from '@/components/ImageComponent';
import type { PracticaSection } from './type';
import AnimateOnView from '@/components/AnimateOnView';

export default function PracticaSection(section: PracticaSection) {
    const [activeKey, setActiveKey] = useState(section.items[0]?._key ?? null);
    const activeItem = section.items.find((item) => item._key === activeKey);
    const descriptionItems = activeItem?.description
        ?.split(/\n|•|·/)
        .map((line) => line.trim())
        .filter(Boolean) ?? [];

    return (
        <section className="practica-section pt-blue">
            <AnimateOnView className="container-fluid">
                <div className="row justify-center">
                    <div className="w-full md:w-10/12 lg:w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {
                                section.image && (
                                    <div className="col-span-1">
                                        <ImageComponent image={section.image} optionalAlt="Image" classContainer="w-full h-full object-cover rounded-t-[25px] lg:rounded-none lg:rounded-l-[25px] overflow-hidden" classImg="w-full h-full object-cover"/>
                                    </div>
                                )
                            }
                            <div className="col-span-1 relative h-full p-lg-[40px] p-[30px]">
                                <div className='relative z-10 text-white h-full flex flex-col justify-between'>
                                    <div>
                                        <div className='lg:text-left text-center animate'>
                                            <p className="link pb-[5px]">{section.subtitle}</p>
                                            <h2 className="h1">{section.title}</h2>
                                        </div>
                                        <div className='flex overflow-x-scroll md:flex-wrap justify-start md:justify-center lg:justify-start lg:gap-[10px] gap-[5px] pt-[30px] md:pt-[40px] scrollbar-hide'>
                                            {section.items.map((item) => {
                                                const isActive = item._key === activeKey;
                                                return (
                                                    <div className='animate' key={item._key}>
                                                        <button
                                                        onClick={() => setActiveKey(item._key)}
                                                        className={`whitespace-nowrap lg:px-[16px] lg:py-[6px] md:px-[10px] py-[4px] px-[8px] rounded-[30px] border cursor-pointer transition-colors duration-300  ${isActive ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white'}`}
                                                    >
                                                        {item.title}
                                                    </button>
                                                    </div>
                                                    
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className='lg:text-left text-center lg:pt-0 md:pt-[40px] pt-[30px] animate'>
                                        <div className='border-t border-white/50 w-full pb-[15px] md:pb-[20px]'></div>
                                        {activeItem && descriptionItems.length > 0 && (
                                            <ul className="flex flex-col pt-2">
                                                {descriptionItems.map((line, index) => (
                                                    <li key={index} className="flex items-start gap-[8px] text-left">
                                                        <span className="shrink-0 w-[5px] h-[5px] rounded-full bg-white mt-[9px]" aria-hidden="true" />
                                                        <p className="flex-1">{line}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <ImageComponent image={section.backgroundImage} optionalAlt="About Us Background Image" classContainer="w-full h-full object-cover rounded-b-[25px] lg:rounded-none lg:rounded-r-[25px] overflow-hidden" classImg="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}