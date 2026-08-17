import { useLayoutEffect, useRef } from "react";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import gsap from "gsap";

export default function HeroBanner() {
    const sectionRef = useRef(null);
    const techHubRef = useRef(null);
    const logoRef = useRef(null);
    const aiPartnersRef = useRef(null);
    const assocPartnerRef = useRef(null);
    const aiPartnersMobileRef = useRef(null);
    const assocPartnerMobileRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                { isMobile: "(max-width: 639px)", isDesktop: "(min-width: 640px)" },
                (context) => {
                    const { isMobile } = context.conditions;
                    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
                    tl.fromTo(techHubRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.8 }, 0)
                        .fromTo(logoRef.current, { opacity: 0, scale: 0.7, y: 60 }, { opacity: 1, scale: 1, y: 0, duration: 2.2 }, 0.4);

                    if (isMobile) {
                        // Separate stacked-and-centered markup for mobile
                        // (see the mobile-only block in the JSX below) — so
                        // these come in one after the other, both sliding in
                        // from the right toward center, rather than the
                        // desktop's simultaneous left/right pop from
                        // opposite edges.
                        tl.fromTo(aiPartnersMobileRef.current, { opacity: 0, x: 140 }, { opacity: 1, x: 0, duration: 1.4 }, 1.8)
                            .fromTo(assocPartnerMobileRef.current, { opacity: 0, x: 140 }, { opacity: 1, x: 0, duration: 1.4 }, 2.5);
                    } else {
                        tl.fromTo(aiPartnersRef.current, { opacity: 0, x: -140 }, { opacity: 1, x: 0, duration: 1.8 }, 1.8)
                            .fromTo(assocPartnerRef.current, { opacity: 0, x: 140 }, { opacity: 1, x: 0, duration: 1.8 }, 1.8);
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (<div className="noice-overlay">
            <section ref={sectionRef} className="main-banner overflow-hidden bg-secondary z-0 relative min-h-screen">
                <div ref={techHubRef} className="absolute top-20 left-20 sm:top-40 sm:left-40 z-10">
                    <Image loading="eager" src="/Assets/Technical Hub white.png" alt="Technical Hub" className="h-32 sm:h-44 w-auto" />
                </div>

                <div ref={logoRef} className="absolute inset-x-0 top-[25%] z-2 flex justify-center px-2">
                    <Image loading="eager" src="/Assets/AI ready engineer logo white.png" alt="AI Ready Engineer" className="w-full max-w-[83%] sm:max-w-765 xl:max-w-900 h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]" />
                </div>

                {/* Desktop: side by side at the left/right edges — unchanged */}
                <div ref={aiPartnersRef} className="hidden sm:flex absolute sm:left-60 sm:top-[72%] z-10 flex-col items-center gap-8">
                    <h4 className="text-lg font-semibold text-white text-center">AI Partners</h4>
                    <div className="flex items-center gap-16">
                        <Image loading="lazy" src="/Assets/claude-white.png" alt="Claude" className="h-40 w-auto" />
                        <Image loading="lazy" src="/Assets/openai-white.png" alt="OpenAI" className="h-40 w-auto" />
                    </div>
                </div>
                <div ref={assocPartnerRef} className="hidden sm:flex absolute sm:right-60 sm:top-[72%] z-10 flex-col items-center gap-10">
                    <h4 className="text-xl font-semibold text-white text-center">Association Partner</h4>
                    <Image loading="lazy" src="/Assets/torii-white.png" alt="Torii" className="h-48 w-auto" />
                </div>

                {/* Mobile: stacked and centered, bottom-anchored so the two
                blocks stack with a fixed gap instead of guessed top-%
                positions that overlapped once "Association Partner"'s wider
                logo pushed into "AI Partners". */}
                <div className="sm:hidden absolute inset-x-0 bottom-30 z-10 flex flex-col items-center gap-24 px-20">
                    <div ref={aiPartnersMobileRef} className="flex flex-col items-center gap-8">
                        <h4 className="text-sm font-semibold text-white text-center">AI Partners</h4>
                        <div className="flex items-center gap-12">
                            <Image loading="lazy" src="/Assets/claude-white.png" alt="Claude" className="h-34 w-auto" />
                            <Image loading="lazy" src="/Assets/openai-white.png" alt="OpenAI" className="h-34 w-auto" />
                        </div>
                    </div>
                    <div ref={assocPartnerMobileRef} className="flex flex-col items-center gap-10">
                        <h4 className="text-base font-semibold text-white text-center">Association Partner</h4>
                        <Image loading="lazy" src="/Assets/torii-white.png" alt="Torii" className="h-40 w-auto" />
                    </div>
                </div>

                <Image loading="lazy" src={IMAGES.bg1} alt="bg1" width={114} height={89} className="absolute z-1 animate-move w-114 h-89 3xl:bottom-[40%] bottom-[30%] right-[10%] max-xl:hidden"/>
                <Image loading="lazy" src={IMAGES.bg2} alt="bg2" width={127} height={148} className="absolute z-1 animate-move w-127 h-148 3xl:top-[12%] top-[5%] left-[20%] max-xl:hidden"/>
                <Image loading="lazy" src={IMAGES.bg3} alt="bg3" width={86} height={83} className="absolute z-1 animate-move w-86 h-83 top-[50%] left-[5%] max-xl:hidden"/>
                <Image loading="lazy" src={IMAGES.bg4} alt="bg4" width={80} height={88} className="absolute z-1 animate-move w-80 h-88 top-[12%] right-[40%] max-xl:hidden"/>
                <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-10%] left-[-30%] -z-1 pointer-events-none"/>
                <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-15%] right-[-10%] max-xl:w-[60%] -z-1 pointer-events-none"/>
                <Image loading="lazy" src={IMAGES.bg9} alt="bg9" width={35} height={35} className="absolute w-35 bottom-[8%] left-[8%] -z-1 animate-move max-xl:hidden pointer-events-none"/>
            </section>
        </div>);
}
