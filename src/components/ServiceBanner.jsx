import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function ServiceBanner() {
    return (<section className="main-banner overflow-hidden lg:pt-200 sm:pt-160 pt-120 z-0 h-auto noice-overlay">
            <div className="container">
                <div className="grid grid-cols-12 gap-20 lg:mb-106 mb-50">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="xl:pe-50">
                            <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-medium">Service we offer is 
                                specifically designed to meet your needs.</h2>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="flex items-center gap-14">
                            <div>
                                <Image loading="lazy" src={IMAGES.avatar1} alt="Avatar 1" className="inline-block sm:size-60 size-40 -me-13 last:me-0 rounded-full border-2 border-card relative object-cover duration-500 hover:z-1"/>
                                <Image loading="lazy" src={IMAGES.avatar2} alt="Avatar 2" className="inline-block sm:size-60 size-40 -me-13 last:me-0 rounded-full border-2 border-card relative object-cover duration-500 hover:z-1"/>
                                <Image loading="lazy" src={IMAGES.avatar3} alt="Avatar 3" className="inline-block sm:size-60 size-40 -me-13 last:me-0 rounded-full border-2 border-card relative object-cover duration-500 hover:z-1"/>
                            </div>
                            <div>
                                <span className="sm:text-xl text-lg/24 dark:text-white text-dark block font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                <span className="sm:text-xl text-lg/24 dark:text-white text-dark block font-light">the world</span>
                            </div>
                        </div>
                        <hr className="border-t dark:border-white/20 border-black/20 my-30"/>
                        <p className="sm:text-xl text-lg">With Benefits from web design agecny, Earn rewards & Score discounts on purchases* Foryourself and your customers.</p>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="Background 6" className="absolute top-[-90%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="Background 10" className="absolute top-[-80%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
