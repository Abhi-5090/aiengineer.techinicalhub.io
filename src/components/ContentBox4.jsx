import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function ContentBox4() {
    return (<section id="Comprehensive" className="noice-overlay">
            <div className="lg:pt-30 xl:pb-150 py-80">
                <div className="container">
                    <div className="grid grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-4 col-span-12">
                            <Image loading="lazy" src={IMAGES.servicedetail3} alt="servicedetail3"/>
                        </div>
                        <div className="lg:col-span-8 col-span-12">
                            <div className="xl:px-110 sm:px-30 sm:py-20 pxl-heading-scroll-effect">
                                <h2 className="md:text-[50px]/65 text-4xl font-semibold sm:mb-25 mb-10 heading-text">Comprehensive Digital Marketing Services for Your Brand</h2>
                                <p className="sm:text-xl text-lg">In today’s fast-paced digital world, having a strong online presence is no longer optional—it’s essential. Whether you’re a small business looking to grow or an established company aiming to scale, our digital marketing services are tailored to meet your unique needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
