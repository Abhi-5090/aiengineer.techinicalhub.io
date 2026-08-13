import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import HistoryCarousel from "./Historycarousel";
export default function ContentSlider() {
    return (<section className="xl:py-100 sm:py-80 py-40 noice-overlay relative">
            <div className="container-lg">
                <div className="sm:mb-14 text-center max-w-600 mx-auto relative z-3 pxl-heading-scroll-effect">
                    <h2 className="md:text-5xl text-[40px]/50 heading-text">Our Journey Through Time</h2>
                </div>
                <HistoryCarousel />
                <Image loading="lazy" src={IMAGES.bg3} alt="bg3" className="absolute z-1 animate-move w-86 h-83 top-[50%] left-[5%] max-xl:hidden"/>
                <Image loading="lazy" src={IMAGES.bg1} alt="bg1" className="absolute z-1 animate-move w-86 h-83 bottom-[10%] right-[5%] max-xl:hidden"/>
            </div>
        </section>);
}
