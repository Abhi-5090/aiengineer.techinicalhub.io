import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const brandLogo = [
    {
        "lightimg": IMAGES.awwards,
        "darkimg": IMAGES.awwardsdark,
    },
    {
        "lightimg": IMAGES.colorlib,
        "darkimg": IMAGES.colorlibdark,
    },
    {
        "lightimg": IMAGES.envato,
        "darkimg": IMAGES.envatodark,
    },
    {
        "lightimg": IMAGES.fwa,
        "darkimg": IMAGES.fwadark,
    },
    {
        "lightimg": IMAGES.awwards,
        "darkimg": IMAGES.awwardsdark,
    },
    {
        "lightimg": IMAGES.colorlib,
        "darkimg": IMAGES.colorlibdark,
    },
    {
        "lightimg": IMAGES.envato,
        "darkimg": IMAGES.envatodark,
    },
    {
        "lightimg": IMAGES.fwa,
        "darkimg": IMAGES.fwadark,
    }
];
export default function BrandLogo() {
    return (<div className="container">
            <div className="py-30">
                <div className="grid grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-3 col-span-12 lg:mb-0 sm:mb-30 mb-10">
                        <div className="sm:pe-50">
                            <h3 className="text-2xxl/35 font-medium">
                                Trusted by industry leaders for 20 years
                            </h3>
                        </div>
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <Swiper className="brand-swiper2" modules={[Autoplay]} speed={1500} parallax={true} slidesPerView={4} spaceBetween={30} loop={true} autoplay={{
            delay: 3000,
        }} breakpoints={{
            300: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            }
        }}>
                            {brandLogo.map((item, index) => (<SwiperSlide key={index} className="lg:text-end">
                                <Image loading="lazy" src={item.lightimg} alt="Brand Logo" className="dark:block hidden"/>
                                <Image loading="lazy" src={item.darkimg} alt="Brand Logo" className="dark:hidden block"/>
                                </SwiperSlide>))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>);
}
