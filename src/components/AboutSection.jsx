import { useLayoutEffect, useRef } from "react";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { number: "200+", label: "Hours Training" },
    { number: "16", label: "Modules" },
    { number: "50+", label: "AI Tools and Platforms" },
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const headingRef = useRef(null);
    const partnersRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const targets = [statsRef.current, headingRef.current, partnersRef.current];
            gsap.set(targets, { y: 70, opacity: 0 });

            const tl = gsap.timeline({ paused: true });
            targets.forEach((target, index) => {
                tl.to(target, { y: 0, opacity: 1, duration: 1.6, ease: "power3.inOut" }, index * 0.4);
            });

            // Built via ScrollTrigger.create() + animation:, not the timeline's own
            // scrollTrigger vars — see ServiceBox.jsx for why that shorthand form
            // silently drops out of ScrollTrigger's registry and can never be
            // recalculated again.
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

    return (<section ref={sectionRef} className="xl:pb-40 pb-30">
            <div className="container relative">
                <div className="grid grid-cols-12 md:gap-60 gap-20 mt-40">
                    <div className="3xl:col-span-5 lg:col-span-4 col-span-12 lg:pt-100">
                        <div className="my-sticky !top-150 3xl:w-425 w-full sm:h-557 h-450 after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:bg-primary after:opacity-80 after:rounded-2lg after:mix-blend-soft-light">
                                <video className="size-full object-cover rounded-2lg" autoPlay loop muted playsInline webkit-playsinline="true" preload="auto">
                                <source src={`${import.meta.env.BASE_URL}video/AIRE Video.mp4`} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div className="3xl:col-span-7 lg:col-span-8 col-span-12 lg:pt-100">
                        <div ref={statsRef} className="dark:bg-white/10 bg-black/10 rounded-2lg p-25 sm:p-40 xl:mb-62 mb-25">
                            <div className="grid grid-cols-12 3xl:gap-60 gap-20">
                                {stats.map((stat, index) => (
                                    <div className="col-span-4 text-center" key={index}>
                                        <h2 className="xl:text-8xl/70 text-4xl sm:text-6xl text-primary md:mb-30 mb-10">{stat.number}</h2>
                                        <span className="sm:text-2xl text-lg dark:text-white text-dark block font-title font-thin">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={headingRef} className="mb-40">
                            <h3 className="xl:text-6xl md:text-5xl text-4xl mb-7">Let's conquer the future with our <span className="text-primary">AI partners</span></h3>
                            <p className="sm:text-2xl text-lg">Empower your brand with cutting-edge digital solutions, drive engagement, and accelerate growth with our innovative marketing strategies.</p>
                        </div>
                        <div ref={partnersRef} className="grid grid-cols-12 gap-20">
                            <div className="col-span-6">
                                <div className="dark:bg-white/10 bg-black/10 rounded-2lg h-full flex items-center justify-center p-24">
                                    <Image loading="lazy" src="/Assets/claude partner.png" alt="Claude Partner Network" className="max-w-198 sm:max-w-252 w-full h-auto mx-auto" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="dark:bg-white/10 bg-black/10 rounded-2lg h-full flex items-center justify-center p-24">
                                    <Image loading="lazy" src="/Assets/open ai partner.jpeg" alt="OpenAI Select Partner" className="max-w-198 sm:max-w-252 w-full h-auto mx-auto rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image loading="lazy" src={IMAGES.bg5} alt="bg5" className="absolute top-[14%] left-[-4%] -z-1 max-xl:hidden pointer-events-none"/>
                <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-8%] left-[-47%] -z-1 max-xl:hidden pointer-events-none"/>
            </div>
        </section>);
}
