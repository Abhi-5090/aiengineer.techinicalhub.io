import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";

gsap.registerPlugin(ScrollTrigger);

const ClockIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BadgeIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 13.5L7.5 21L12 18.5L16.5 21L15 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DocCheckIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3H14L19 8V21H6V3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 13.5L11 15.5L15.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PeopleIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 20C2.5 16.5 5 14 8.5 14C12 14 14.5 16.5 14.5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 14.2C18.4 14.6 20.5 16.8 20.5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const MonitorIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4.5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 16.5V20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const CodeIcon = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 8L4.5 12L9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8L19.5 12L15 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const highlights = [
    { icon: ClockIcon, title: "Comprehensive 200-Hour Learning Journey", description: "200 hours of structured, hands-on training across the full AI stack." },
    { icon: BadgeIcon, title: "Training by AI-Certified Experts", description: "Every module taught by Claude-certified practitioners." },
    { icon: DocCheckIcon, title: "Internship Completion Letter", description: "An official completion letter issued by our AI partners." },
    { icon: PeopleIcon, title: "Industry-Ready AI Engineers", description: "Mentored by working engineers, so you graduate job-ready." },
    { icon: MonitorIcon, title: "AIRE Learning Platform Access", description: "Live classes, assessments and progress tracking in one portal." },
    { icon: CodeIcon, title: "AI Projects", description: "Build and ship real AI products, from prompt to deployment." },
];

export default function OurWork() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".highlight-card");
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

    return (<section ref={sectionRef} className="xl:py-150 sm:py-80 py-40 bg-black noice-overlay relative overflow-hidden">
        <div className="container">
            <h2 className="xl:text-6xl md:text-5xl text-4xl mb-30 sm:mb-45">
                Program <span className="text-primary">Highlights</span>
            </h2>
            <div className="grid grid-cols-12 gap-20 sm:gap-30">
                {highlights.map((item, index) => (
                    <div className="md:col-span-6 col-span-12" key={index}>
                        <div className="highlight-card bg-white/10 rounded-2lg h-full flex sm:gap-24 gap-16 items-start sm:p-40 p-25">
                            <div className="shrink-0 size-60 sm:size-80 rounded-full border-2 border-primary text-primary flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold text-white mb-8">{item.title}</h3>
                                <p className="text-sm sm:text-lg text-white/60">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Image
            loading="lazy"
            src={IMAGES.bg6}
            alt="Background 6"
            className="absolute top-[-8%] left-[-47%] -z-1 pointer-events-none"
        />
        <Image
            loading="lazy"
            src={IMAGES.bg10}
            alt="Background 10"
            className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"
        />
        </section>);
}
