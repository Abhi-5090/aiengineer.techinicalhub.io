import { useLayoutEffect, useRef } from "react";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Button from "./Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AppointmentForm() {
    const groupRef = useRef(null);
    const logoRef = useRef(null);
    const creditRef = useRef(null);
    const partnersRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([logoRef.current, creditRef.current, partnersRef.current], { scale: 0.75, opacity: 0 });

            const tl = gsap.timeline({ paused: true });
            tl.to(logoRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }, 0)
                .to(creditRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }, 1)
                .to(partnersRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }, 2);

            // Built via ScrollTrigger.create() + animation:, not the timeline's own
            // scrollTrigger vars — a trigger created that second way never lands in
            // ScrollTrigger's own registry (confirmed by direct testing: it vanishes
            // from ScrollTrigger.getAll() within milliseconds), so it can never be
            // recalculated once a pinned section further up the page finishes
            // resizing after this one mounts, leaving it anchored to the wrong
            // scroll position for good.
            ScrollTrigger.create({
                trigger: groupRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                animation: tl,
            });
        }, groupRef);
        return () => ctx.revert();
    }, []);

    return (<section className="main-banner overflow-hidden sm:pt-145 pt-100 sm:pb-145 pb-80 bg-secondary z-0 noice-overlay">
            <div className="container">
                <div className="grid grid-cols-12 gap-20">
                    <div className="lg:col-span-6 col-span-12">
                        <div ref={groupRef} className="w-full relative lg:mb-0 mb-30 lg:pe-50 flex flex-col items-center gap-30 sm:gap-40">
                            <Image ref={logoRef} loading="lazy" src="/Assets/AI ready engineer logo white.png" alt="AI Ready Engineer" className="w-full max-w-750 h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"/>
                            <div ref={creditRef} className="text-center">
                                <span className="block text-primary text-4xl font-bold">Designed and Developed</span>
                                <span className="block text-primary text-4xl font-bold">by</span>
                            </div>
                            <div ref={partnersRef} className="flex items-center sm:gap-30 gap-18">
                                <Image loading="lazy" src="/Assets/claude partner.png" alt="Claude Partner Network" className="h-112 w-auto rounded-lg shadow-lg"/>
                                <Image loading="lazy" src="/Assets/open ai partner.jpeg" alt="OpenAI Select Partner" className="h-112 w-auto rounded-lg shadow-lg"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="xl:pt-0 lg:ps-20">
                            <div className="xl:mb-50 mb-20">
                                <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-semibold text-white mb-10">Share Your Interest With Us</h2>
                                <p className="text-2xl font-light text-white/60">Get in touch with us by filling the form.</p>
                            </div>
                            <form className="dz-form dzForm" action="https://formsubmit.co/support@technicalhub.io" method="POST">

                                <input type="hidden" name="_subject" value="New Contact Us Submission"/>
                                <input type="hidden" name="_template" value="table"/>
                                <input type="hidden" name="_captcha" value="false"/>
                                <div className="dzFormMsg"></div>

                                <div className="row">
                                    <div className="sm:w-1/2 w-full">
                                        <div className="mb-30">
                                            <label htmlFor="fullname" className="block text-label font-normal mb-10 text-white">Full name*</label>
                                            <input required type="text" name="name" id="fullname" placeholder="John carter" className="py-11 text-lg border-b-2 border-white/30 h-50 w-full text-white placeholder:text-white/40"/>
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 w-full">
                                        <div className="mb-30">
                                            <label htmlFor="emailaddress" className="block text-label font-normal mb-10 text-white">Email address*</label>
                                            <input required type="email" name="email" id="emailaddress" placeholder="info@example.com" className="py-11 text-lg border-b-2 border-white/30 h-50 w-full text-white placeholder:text-white/40"/>

                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 w-full">
                                        <div className="mb-30">
                                            <label htmlFor="Phone" className="block text-label font-normal mb-10 text-white">Phone*</label>
                                            <input required type="number" name="phone" id="Phone" placeholder="(123) 456 7890" className="py-11 text-lg border-b-2 border-white/30 h-50 w-full text-white placeholder:text-white/40"/>
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 w-full">
                                        <div className="mb-30">
                                            <label htmlFor="message" className="block text-label font-normal mb-10 text-white">Message*</label>
                                            <input required type="text" placeholder="Write here" name="message" id="message" className="py-11 text-lg border-b-2 border-white/30 h-50 w-full text-white placeholder:text-white/40"/>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <Button label="Submit Now" type="white" button/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-8%] left-[-20%] -z-1 max-xl:hidden pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg9} alt="bg9" width={35} height={35} className="absolute w-35 bottom-[10%] right-[6%] -z-1 animate-move max-xl:hidden pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg3} alt="bg3" width={86} height={83} className="absolute w-86 h-83 top-[15%] right-[20%] -z-1 animate-move max-xl:hidden pointer-events-none"/>
        </section>);
}
