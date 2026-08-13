import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import { useEffect, useRef } from "react";
export default function ContentBox3() {
    const wrapperRef = useRef(null);
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper)
            return;
        const handleMouseOver = (e) => {
            const target = e.target;
            const card = target.closest(".service-card");
            if (!card || !wrapper.contains(card))
                return;
            wrapper
                .querySelectorAll(".service-card.active")
                .forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        };
        wrapper.addEventListener("mouseover", handleMouseOver);
        return () => {
            wrapper.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
    return (<section>
            <div className="container-full">
                <div className="flex flex-wrap items-center services-wrapper" ref={wrapperRef}>
                    <div className="service-card active">
                        <div className="relative service-img after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:bg-black after:duration-500 after:opacity-30 lg:h-800 h-500">
                            <Image loading="lazy" src={IMAGES.service4} alt="service4" className="object-cover size-full"/>
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 sm:w-538 w-300 max-w-full duration-500 content">
                            <h3 className="text-7xxl/[1] mb-35 text-white">Mission</h3>
                            <div className="h-20 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:block after:bg-linear-(--divider-gradient)"></div>
                            <p className="sm:text-xl/30 text-lg text-white mt-15">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 service-text">
                            <h4 className="md:text-[190px]/[1] text-8xl text-white/30 font-bold uppercase">Mission</h4>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="relative service-img after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:bg-black after:duration-500 after:opacity-30 lg:h-800 h-500">
                            <Image loading="lazy" src={IMAGES.service5} alt="service5" className="object-cover size-full"/>
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 sm:w-538 w-300 max-w-full duration-500 content">
                            <h3 className="text-7xxl/[1] mb-35 text-white">Vision</h3>
                            <div className="h-20 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:block after:bg-linear-(--divider-gradient)"></div>
                            <p className="sm:text-xl/30 text-lg text-white mt-15">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 service-text">
                            <h4 className="md:text-[190px]/[1] text-8xl text-white/30 font-bold uppercase">Vision</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
