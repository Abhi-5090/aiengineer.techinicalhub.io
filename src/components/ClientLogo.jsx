import Image from "@/components/common/Image";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Ordered so a success-story card and a plain-logo card always alternate —
// there are exactly 3 of each, so this keeps the strip visually even instead
// of clustering all 3 success stories together.
const campusLogos = [
    { name: "Aditya University", src: "/images/colleges/aditya-university.webp", link: "https://claude.adityauniversity.in/" },
    { name: "Geeta University", src: "/images/colleges/geeta-university-cropped.png" },
    { name: "Nagarjuna College of Engineering & Technology", src: "/images/colleges/nagarjuna-college.png", link: "https://claude.ncet.co.in/" },
    { name: "YCCE", src: "/images/colleges/ycce.png" },
    { name: "Torii", src: "/Assets/torii-cropped.png", link: "https://toriiminds.com/success-story/", scale: 0.8 },
    { name: "F.A.B", src: "/Assets/FAB.png", scale: 1.8 },
];

const slides = [...campusLogos, ...campusLogos];

export default function ClientLogo() {
    return (<section className="noice-overlay bg-black z-2">
            <div className="sm:py-50 py-30">
                <div className="container-fluid">
                    {/* flex-col on mobile, centered — flex-wrap alone never
                    actually triggered here: the swiper's min-w-0 lets it
                    shrink arbitrarily instead of wrapping, so the heading's
                    shrink-0 width just squeezed it down to a sliver (each
                    "2-up" slide was rendering at ~66px wide). Explicit
                    row/column per breakpoint fixes that at the source. */}
                    <div className="flex flex-col items-center text-center gap-20 sm:flex-row sm:items-center sm:text-left sm:gap-50">
                        <h4 className="text-4xl/44 text-white font-bold shrink-0">Partnered<br/><span className="text-primary">Clients</span></h4>
                        <div className="w-full sm:flex-1 sm:min-w-0">
                            <Swiper className="brand-swiper [&_.swiper-wrapper]:items-center" modules={[Autoplay]} speed={1500} slidesPerView={2} spaceBetween={20} loop={true} autoplay={{
            delay: 3000,
        }} breakpoints={{
            360: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }}>
                                {slides.map((logo, index) => (<SwiperSlide key={index}>
                                    <div className="flex flex-col items-center gap-15">
                                        <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-120 w-full px-30 py-20 overflow-hidden">
                                            <Image loading="lazy" src={logo.src} alt={logo.name} className="max-w-full max-h-full w-auto h-auto object-contain" style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}/>
                                        </div>
                                        {/* Every slide reserves this row's space, even logos with no
                                        success story — otherwise slides without a button are shorter,
                                        and centering the row then pulls their logo card out of line
                                        with the others. */}
                                        <div className={logo.link ? "" : "invisible pointer-events-none"}>
                                            <Button label="Success Story" href={logo.link ?? "#"} target="_blank" type="primary"/>
                                        </div>
                                    </div>
                                    </SwiperSlide>))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
