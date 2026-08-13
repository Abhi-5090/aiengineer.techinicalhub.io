import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function ServiceDetailBanner({ service }) {
    return (<section id="creativedesign" className="main-banner overflow-hidden bg-linear-(--banner-gradient) z-0 h-full noice-overlay">
            <div className="container">
                <div className="grid grid-cols-12 gap-20">
                    <div className="lg:col-span-6 col-span-12 lg:order-[0] order-1">
                        <div className="lg:pt-75 pt-10 xl:pe-120">
                            <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-semibold text-black sm:mb-25 mb-10">{service.title}</h2>
                            <p className="sm:text-xl/30 text-lg font-normal text-black/60">In today’s fast-paced digital world, having a strong online presence is no longer optional—it’s essential. Whether you’re a small business looking to grow or an established company aiming to scale, our digital marketing services are tailored to meet your unique needs.</p>
                            <div className="lg:mt-90 mt-30">
                                <Image loading="lazy" src={IMAGES.servicedetail2} alt="Service Detail"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="lg:w-[50vw] lg:float-left xl:ps-50 lg:h-full sm:h-500 h-300">
                            <Image loading="lazy" src={IMAGES.servicedetail1} alt="Service Detail" className="size-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg2} alt="bg2" className="absolute z-1 animate-move 3xl:w-127 3xl:h-148 w-77 h-98 top-[15%] left-[8%] mix-blend-luminosity max-xl:hidden"/>
        </section>);
}
