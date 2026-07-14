import { InfoServiceSection } from './types';
import AnimateOnView from '@/components/AnimateOnView';

export default function InfoService(section: InfoServiceSection) {
    return (
        <section  className="info-service-section pt-blue">
            <div className="container-fluid">
                <div className="row justify-center lg:justify-between align-baseline">
                    <div className="w-full md:w-10/12 lg:w-5/12 lg:sticky top-[140px] lg:text-left text-center">
                        <AnimateOnView className="sticky top-[140px]">
                            <p className="link text-blue">{section.subtitle}</p>
                            <h2 className="h1 pt-2">{section.title}</h2>
                        </AnimateOnView>
                    </div>
                    <div className="w-full md:w-10/12 lg:w-6/12 pt-red lg:pt-0!">
                        <div className="flex flex-col md:gap-[40px] gap-[30px] ">
                            {section.items.map((item) => (
                                <AnimateOnView key={item._key} className="w-full border-t border-gray md:pt-[20px] pt-[15px]">
                                    <h3 className="link text-blue">{item.title}</h3>
                                    <p className="text-left pt-2">{item.description}</p>
                                </AnimateOnView>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}