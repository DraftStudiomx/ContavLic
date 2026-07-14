
import { HomeHeroSection } from './types';
import ImageComponent from '@/components/ImageComponent';
import ButtonComponent from '@/components/ButtonComponent';
import AnimateOnView from '@/components/AnimateOnView';

export default function HomeHero(section: HomeHeroSection) {

    return (
        <section className="home-hero">
            <AnimateOnView className="container-fluid h-[500px] md:h-[768px] lg:h-[600px] relative pb-red">
                <div className="absolute top-0 left-0 w-full h-full">
                    <ImageComponent 
                        image={section.backgroundImage} 
                        optionalAlt="Background Image Hero" 
                        classContainer='w-full h-full object-cover' 
                        classImg='h-full object-cover' 
                        loading="eager"
                        sizes="100vw"
                    />
                </div>
                <div className="relative h-full w-full flex flex-col justify-end">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full">
                        <div className="row ">
                            <div className="w-full md:w-10/12 lg:w-6/12">
                                <h1 className="display text-left text-white animate">{section.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row items-end justify-between pt-[15px] md:pt-[20px]"> 
                        <div className="w-full pb-[15px] md:pb-[20px]">
                            <div className="border-t border-white/50 w-full"></div>
                        </div>   
                        <div className="w-full md:w-8/12 lg:w-5/12 text-left">
                            <p className="text-left text-white animate">{section.description}</p>
                        </div>
                        <div className="w-full md:w-4/12 lg:w-5/12 text-left">
                            <div className="flex md:justify-end justify-start animate">
                                <ButtonComponent {...section.cta} className='mt-[20px] md:mt-0' />
                            </div>
                        </div>       
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}