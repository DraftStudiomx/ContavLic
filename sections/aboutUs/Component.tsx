import { AboutUsSection } from './types';
import ImageComponent from '@/components/ImageComponent';
import AnimateOnView from '@/components/AnimateOnView';

export default function AboutUs(section: AboutUsSection) {
    return (
        <section className="about-us pt-blue" id="nosotros">
            <div className="container-fluid">
                <div className="row justify-center">
                    <AnimateOnView className="w-full md:w-10/12 lg:w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="col-span-1 relative h-full p-md-[40px] p-[30px]">
                                <div className='relative z-10 text-white h-full flex flex-col justify-between animate'>
                                    <div className='lg:text-left text-center'>
                                        <p className="link pb-[5px]">{section.subtitle}</p>
                                        <h2 className="h1">{section.title}</h2>
                                    </div>
                                    <div className='lg:text-left text-center lg:pt-0 md:pt-[40px] pt-[30px]'>
                                        <div className='border-t border-white/50 w-full pb-[15px] md:pb-[20px]'></div>
                                        <p>{section.description}</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <ImageComponent image={section.backgroundImage} optionalAlt="About Us Background Image" classContainer="w-full h-full object-cover rounded-t-[25px] lg:rounded-none lg:rounded-l-[25px] overflow-hidden" classImg="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <ImageComponent image={section.image} optionalAlt="About Us Image" classContainer="w-full h-full object-cover rounded-b-[25px] lg:rounded-none lg:rounded-r-[25px] overflow-hidden" classImg="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </AnimateOnView>
                </div>
            </div>
        </section>
    );
}