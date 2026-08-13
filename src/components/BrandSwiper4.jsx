import Image from "@/components/common/Image";
import { IMAGES } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function BrandSwiper() {
    return (<Swiper className="brand-swiper4" modules={[Autoplay]} speed={1500} slidesPerView={5} spaceBetween={30} loop={true} autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }} breakpoints={{
            300: { slidesPerView: 1 },
            360: { slidesPerView: 2 },
            767: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        }}>
            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.figma} alt="figma" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">Figma</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.ps} alt="ps" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">Photoshop</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.html5} alt="html" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">HTML</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.js} alt="js" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">JavaScript</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.wordpress} alt="wp" className="mx-auto mb-10"/>
                <span className="dark:text-white text-black">WordPress</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.figma} alt="figma" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">Figma</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.ps} alt="ps" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">Photoshop</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.html5} alt="html" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">HTML</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.js} alt="js" className="mx-auto mb-10 size-80"/>
                <span className="dark:text-white text-black">JavaScript</span>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dark:bg-white/10 bg-black/10 rounded-2lg text-center py-30">
                <Image loading="lazy" src={IMAGES.wordpress} alt="wp" className="mx-auto mb-10"/>
                <span className="dark:text-white text-black">WordPress</span>
                </div>
            </SwiperSlide>
        </Swiper>);
}
