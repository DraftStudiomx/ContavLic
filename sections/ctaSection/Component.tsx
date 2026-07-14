import type { CTASectionType } from './type';
import Image from 'next/image';
import ImageComponent from '@/components/ImageComponent';
import imgContact from '@/public/contact.png';
import LinkComponent from '@/components/LinkComponent';
import AnimateOnView from '@/components/AnimateOnView';

export default function CTASection(section: CTASectionType) {
    return (
        <section className="cta-section">
            <AnimateOnView className="container-fluid pt-blue">
                <div className="row justify-center lg:justify-start gap-y-[15px]  md:gap-y-[30px]">
                    {section.items.map((item) => (
                        <div  key={item._key} className='w-1/2 md:w-5/12 lg:w-1/3 animate'>
                            <LinkComponent {...item.cta} className="p-[10px] md:p-[15px] lg:p-[20px] border border-gray rounded-[20px] flex flex-col lg:flex-row gap-[15px] items-start relative h-full">
                                {item.image && (
                                    <ImageComponent 
                                    image={item.image} 
                                    optionalAlt={item.title} 
                                    classContainer=" rounded-[10px] overflow-hidden w-full md:w-1/2! lg:w-[32.94%]! aspect-square flex-none" classImg="w-full h-full!" 
                                    sizes="(max-width: 993px) 50vw, 20vw" />
                                )}
                                <div className="flex flex-col items-start w-full self-stretch">
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="link text-blue text-center md:text-left">{item.title}</h3>
                                        <div className="w-[30px] h-[30px] bg-blue rounded-full flex items-center justify-center text-white absolute right-[15px] top-[15px] lg:static flex-none">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.494872 0.699951L8.49487 0.699951L8.49487 8.69995M8.49487 0.699951L0.494873 8.69995" stroke="currentColor" strokeWidth="1.4"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-left pt-[5px] mt-auto hidden md:block">{item.description}</p>
                                </div>
                            </LinkComponent>
                        </div>
                    ))}
                    <div className="w-full md:w-10/12 lg:w-1/3 animate">
                        <LinkComponent {...section.ctaContact} className="relative rounded-[20px] overflow-hidden h-full p-[15px] lg:p-[20px] block">
                            <div className="absolute left-0 top-0 w-full h-full">
                                <Image src={imgContact} alt="Contact" width={345} height={160} className="w-full h-full object-cover" sizes="(max-width: 993px) 50vw, 33vw" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-center">
                                    <p className="link text-white">Contáctanos</p>
                                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-blue">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.494872 0.699951L8.49487 0.699951L8.49487 8.69995M8.49487 0.699951L0.494873 8.69995" stroke="currentColor" strokeWidth="1.4"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-white mt-auto w-full md:w-[58.204%] lg:w-[75.777%] pt-[70px] lg:pt-4 ">
                                    Tienes alguna duda o hay algo en lo que podamos ayudarte, por favor contáctanos
                                </div>
                            </div>
                        </LinkComponent>
                      
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}