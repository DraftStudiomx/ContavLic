import ButtonComponent from '@/components/ButtonComponent';
import { ContactSection } from './type';
import ImageComponent from '@/components/ImageComponent';
import AnimateOnView from '@/components/AnimateOnView';
import LinkComponent from '@/components/LinkComponent';
export default function ContactSectionComponent(section: ContactSection) {
    return (
        <section className="contact-section pt-blue">
            <AnimateOnView className="container-fluid">
                <div className="row justify-center">
                    <div className="w-full md:w-10/12 lg:w-6/12 text-center animate">
                        <p className="link text-blue">{section.subtitle}</p>
                        <h2 className="h1 pt-[5px]">{section.title}</h2>
                    </div>
                    <div className="w-full">
                        <div className="row justify-center pt-red">
                            <div className="w-full md:w-10/12 lg:w-6/12 flex flex-col justify-betwee animate">
                                <div className='text-center lg:text-left'>
                                    {section.items.map((item, index) => (
                                        <div key={item._key} className={` ${index > 0 ? 'pt-yellow' : ''}`}>
                                            <div className="border-t border-(--color-gray) w-full pb-[10px] md:pb-[15px]"></div>
                                            <h3 className="link text-blue">{item.title}</h3>
                                            {
                                                item.link && (
                                                    <LinkComponent {...item.link}>
                                                        {item.link.label}
                                                    </LinkComponent>
                                                )
                                            }
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center lg:justify-start pt-yellow animate">
                                    <ButtonComponent {...section.cta} />
                                </div>
                            </div>
                            <div className="w-full md:w-10/12 lg:w-6/12 pt-red lg:pt-0! ">
                                <ImageComponent image={section.image} optionalAlt="Contact Section Image" classContainer="w-full h-full object-cover" classImg="w-full h-full object-cover rounded-[15px] md:rounded-[25px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}