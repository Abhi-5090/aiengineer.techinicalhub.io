import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "@/components/common/Image";
export default function TeamSwiper() {
    const techTools = [
        {
            title: "Figma",
            img: "/images/technologytools/figma.png",
        },
        {
            title: "WordPress",
            img: "/images/technologytools/wordpress.png",
        },
        {
            title: "HTML",
            img: "/images/technologytools/html.png",
        },
        {
            title: "Sketch",
            img: "/images/technologytools/sketch.png",
        },
    ];
    return (<div className="xl:mb-100 mb-40">
            <h5 className="text-2xl dark:text-white font-semibold mb-32">Tools & Technology</h5>
            <Swiper modules={[Autoplay]} loop={true} slidesPerView={4} spaceBetween={30} autoplay={{
            delay: 0,
            disableOnInteraction: false,
        }} speed={3000} breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        }} className="brand-swiper3">
                {[...techTools, ...techTools].map((item, index) => (<SwiperSlide key={index} className="">
                    <div className="py-30 mx-auto text-center dark:bg-white/10 bg-black/10">
                        <Image loading="lazy" src={item.img} className="mx-auto mb-20 size-60 object-contain" alt={item.title} height={60} width={60}/>
                        <span className="dark:text-white">{item.title}</span>
                    </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>);
}
