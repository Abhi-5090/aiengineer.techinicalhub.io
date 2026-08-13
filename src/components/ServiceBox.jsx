import { useLayoutEffect, useRef } from "react";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import serviceData from "@/data/servicebox.json";
import ServcieBoxCard from "./cards/ServiceBoxCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceBox() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".benefit-card");
            const tl = gsap.timeline({
                paused: true,
                defaults: { ease: "power3.inOut", duration: 1.4 },
            });
            cards.forEach((card, index) => {
                tl.fromTo(
                    card,
                    { scale: 0.75, opacity: 0 },
                    { scale: 1, opacity: 1 },
                    index * 0.25
                );
            });

            // Built via ScrollTrigger.create() + animation:, not the tween's own
            // scrollTrigger vars — a trigger created that second way never lands in
            // ScrollTrigger's own registry, so it can never be recalculated once a
            // pinned section further up the page (Program Includes/Syllabus Modules)
            // finishes resizing after this one mounts. That left it permanently
            // anchored to whatever the page height happened to be at creation,
            // firing thousands of pixels off from where the section actually sits.
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                animation: tl,
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (<section ref={sectionRef} className="xl:py-120 sm:py-80 py-40 noice-overlay z-2">
            <div className="container relative">
                <div className="pxl-heading-scroll-effect text-center mb-50">
                    <h2 className="xl:text-7xxl md:text-5xl text-4xl heading-text">
                        Find Our Best Benefits
                    </h2>
                </div>
                <div className="grid grid-cols-12 xl:gap-40 gap-20">
                    {serviceData.map((item, index) => (<ServcieBoxCard key={index} service={item}/>))}
                </div>
                <Image loading="lazy" src={IMAGES.bg6} alt="Background 6" className="absolute top-[-8%] left-[-47%] -z-1 pointer-events-none"/>
            </div>
        </section>);
}
