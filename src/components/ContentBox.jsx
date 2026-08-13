import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import contentData from "@/data/contentbox.json";
import ContentBoxCard from "./cards/ContentBoxCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from "react";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
export default function ContentBox() {
    const initRocketAnimation = () => {
        let cleanupFn = null;
        ScrollTrigger.matchMedia({
            "(min-width: 991px)": function () {
                const rocket = document.getElementById("rocket");
                const blast = document.getElementById("blast");
                const path = document.querySelector("#rocket-path");
                const pathPrimary = document.querySelector("#green-path");
                const rocketSection = document.querySelector(".rocket-section");
                const animeRows = document.querySelectorAll(".anime-row");
                if (!rocket || !blast || !path || !pathPrimary || !rocketSection)
                    return;
                const thresholds = [0.25, 0.45, 0.65, 0.85];
                const rocketTween = gsap.to(rocket, {
                    motionPath: {
                        path: path,
                        align: path,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                    },
                    ease: "none",
                });
                const blastTween = gsap.to(blast, {
                    motionPath: {
                        path: path,
                        align: path,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: false,
                    },
                    ease: "none",
                });

                // Built via ScrollTrigger.create() + animation:, not the tween's own
                // scrollTrigger vars — a trigger created that second way never lands
                // in ScrollTrigger's own registry (confirmed by direct testing: it
                // vanishes from ScrollTrigger.getAll() within milliseconds), so it can
                // never be recalculated once a pinned section further up the page
                // (Program Includes / Program Syllabus Modules) finishes resizing
                // after this one mounts — which is exactly what made the rocket look
                // frozen or badly out of sync with the actual scroll position.
                const rocketTrigger = ScrollTrigger.create({
                    trigger: rocketSection,
                    start: "top+=80% bottom",
                    end: "bottom+=50% bottom",
                    scrub: true,
                    invalidateOnRefresh: true,
                    animation: rocketTween,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const isEnd = progress >= 0.99;
                        pathPrimary.style.height = `${progress * 116}%`;
                        rocket.style.opacity = isEnd ? "0" : "1";
                        blast.style.opacity = isEnd ? "1" : "0";
                        animeRows.forEach((row, index) => {
                            row.classList.toggle("active", progress >= thresholds[index]);
                        });
                    },
                });
                const blastTrigger = ScrollTrigger.create({
                    trigger: rocketSection,
                    start: "top top",
                    end: "bottom+=50% bottom",
                    scrub: true,
                    animation: blastTween,
                });
                cleanupFn = () => {
                    rocketTrigger.kill();
                    rocketTween.kill();
                    blastTrigger.kill();
                    blastTween.kill();
                };
            },
        });
        return () => {
            if (cleanupFn)
                cleanupFn();
            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger &&
                    st.trigger.classList?.contains("rocket-section")) {
                    st.kill();
                }
            });
            // ScrollTrigger.matchMedia() registers its condition globally and stays
            // registered until explicitly cleared — killing the tweens/triggers it
            // created isn't enough. Under React StrictMode (mount → cleanup → mount,
            // intentional in dev), or any real remount, the previous registration
            // survives and a second one stacks on top of it. Both then fire on every
            // future refresh, creating duplicate motionPath tweens that fight over
            // the same rocket element's transform — which looks exactly like the
            // animation being permanently frozen.
            ScrollTrigger.clearMatchMedia();
        };
    };
    useEffect(() => {
        const cleanup = initRocketAnimation();
        return () => cleanup && cleanup();
    }, []);
    return (<>
            <section className="noice-overlay rocket-section">
                <div className="xl:py-148 sm:py-80 py-40">
                    <div className="container">
                        <div className="sm:mb-50 mb-20 text-center max-w-900 mx-auto pxl-heading-scroll-effect">
                            <h2 className="xl:text-6xl md:text-5xl text-4xl heading-text">How It Work</h2>
                            <p className="text-lg/50">Our Step-by-Step Process</p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 h-full max-lg:hidden">
                                <svg width="202" height="744" viewBox="0 0 202 744" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_29543_1305)">
                                    <path className="dark:stroke-white stroke-black" id="rocket-path" d="M186 -15L50.3294 90.0353C24.7048 109.874 24.4322 148.473 49.7742 168.672L152.943 250.9C178.058 270.917 178.058 309.083 152.943 329.1L49.0571 411.9C23.9423 431.917 23.9423 470.083 49.0572 490.1L152.943 572.9C178.058 592.917 178.058 631.083 152.943 651.1L0 773" strokeOpacity="0.2" strokeDasharray="10 8"/>
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_29543_1305" x1="101" y1="-32" x2="101" y2="773" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.03" stopColor="white" stopOpacity="0"/>
                                    <stop offset="0.159946" stopColor="white"/>
                                    <stop offset="0.865591" stopColor="white"/>
                                    <stop offset="0.966398" stopColor="white" stopOpacity="0"/>
                                    </linearGradient>
                                    <clipPath id="clip0_29543_1305">
                                    <rect width="202" height="744" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 overflow-hidden max-lg:hidden h-0" id="green-path">
                                <svg width="202" height="744" viewBox="0 0 202 744" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_29543_13051)">
                                    <path d="M186 -15L50.3294 90.0353C24.7048 109.874 24.4322 148.473 49.7742 168.672L152.943 250.9C178.058 270.917 178.058 309.083 152.943 329.1L49.0571 411.9C23.9423 431.917 23.9423 470.083 49.0572 490.1L152.943 572.9C178.058 592.917 178.058 631.083 152.943 651.1L0 773" stroke="url(#paint0_linear_29541_1283)" strokeDasharray="10 8"/>
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_29541_1283" x1="101" y1="-32" x2="101" y2="773" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.04" stopColor="#ABFF84" stopOpacity="0"/>
                                    <stop offset="0.159946" stopColor="#ABFF84"/>
                                    <stop offset="0.865591" stopColor="#ABFF84"/>
                                    <stop offset="0.966398" stopColor="#ABFF84" stopOpacity="0"/>
                                    </linearGradient>
                                    <clipPath id="clip0_29543_13051">
                                    <rect width="202" height="744" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <Image loading="lazy" id="rocket" alt="rocket" src={IMAGES.rocket} className="absolute z-10 max-lg:hidden left-1/2 !top-0 rotate-[140deg]" style={{ top: "8%" }}/>

                            <Image loading="lazy" id="blast" alt="blast" src={IMAGES.blast} className="size-40 absolute top-0 left-1/2 z-20 hidden"/>
                            {contentData.map((item, index) => (<ContentBoxCard index={index} key={index} content={item}/>))}
                            
                        </div>
                    </div>
                    <Image loading="lazy" src={IMAGES.bg3} alt="bg3" className="absolute w-64 top-[30%] right-[8%] -z-1 animate-move max-xl:hidden"/>
                    <Image loading="lazy" src={IMAGES.bg4} alt="bg4" className="absolute w-48 bottom-[24%] left-[8%] -z-1 animate-move max-xl:hidden"/>
                    <Image loading="lazy" src={IMAGES.bg9} alt="bg9" className="absolute w-35 bottom-[14%] right-[8%] -z-1 animate-move max-xl:hidden"/>
                </div>
                <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-8%] left-[-47%] -z-1"/>
                <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1"/>
            </section>
            <section className="noice-overlay bg-bg8 bg-cover bg-no-repeat bg-position-[center_top]">
                <div className="xl:py-82 sm:py-80">
                    <div className="container">
                        <div className="text-center">
                            <h4 className="text-4xl/35 sm:mb-35 mb-10">Start your dream project today</h4>
                            <Button label="Let's talk" href="/home" type="primary"/>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}
