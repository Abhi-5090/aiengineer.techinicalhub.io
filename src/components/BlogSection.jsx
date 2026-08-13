import ourworkData from "@/data/ourwork.json";
import BlogCard from "./cards/BlogCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const featuredOrder = ["ai-ready-engineer", "owl-code", "myna", "prompt-kaizen", "torii", "tag"];

// Partnership shoutout, not one of "our" built projects — kept out of ourwork.json
// so it doesn't leak into the internal /portfolio listing and detail pages.
const claudeTechnicalHub = {
    title: "Claude X Technical Hub",
    titleLines: [
        { text: "Claude", className: "text-[#D97757]" },
        { text: "X", className: "text-white" },
        // 20% smaller than the other two lines (30px) so "Technical Hub" fits
        // on one line instead of wrapping within its row.
        { text: "Technical Hub", className: "text-[#088744] text-[24px]" },
    ],
    img: "/Assets/Claude X Technical Hub.png",
    link: "https://claude.technicalhub.io/",
    excerpt: "Our official Claude x Technical Hub partnership — bringing Claude-powered tools and training to campus.",
};

const featuredProjects = [
    ...featuredOrder.map((slug) => ourworkData.find((item) => item.slug === slug)).filter(Boolean),
    claudeTechnicalHub,
];

export default function BlogSection() {
    useEffect(() => {
        let cleanupFn;
        ScrollTrigger.matchMedia({
            "(min-width: 1200px)": () => {
                const cards = gsap.utils.toArray(".stackCard");
                if (!cards.length)
                    return;
                const triggers = [];
                const animations = [];
                const updateOpacity = (currentIndex) => {
                    cards.forEach((card, index) => {
                        gsap.to(card, {
                            opacity: index === currentIndex ? 1 : index < currentIndex ? 0.5 : 1,
                            duration: 0.2,
                        });
                    });
                };
                cards.forEach((card, index) => {
                    const scale = 1 - (cards.length - index) * 0.025;
                    const scaleDown = gsap.to(card, {
                        scale,
                        ease: "none",
                        paused: true,
                    });
                    const st = ScrollTrigger.create({
                        trigger: card,
                        start: "bottom-=20% center",
                        end: () => {
                            const lastCard = cards[cards.length - 1];
                            return (ScrollTrigger.getById("last-card")?.start ||
                                ScrollTrigger.create({
                                    trigger: lastCard,
                                    start: "bottom-=20% center",
                                    id: "last-card",
                                }).start);
                        },
                        pin: true,
                        pinSpacing: false,
                        animation: scaleDown,
                        toggleActions: "restart none none reverse",
                        onEnter: () => updateOpacity(index),
                        onEnterBack: () => updateOpacity(index),
                        onLeaveBack: () => updateOpacity(index - 1),
                    });
                    triggers.push(st);
                    animations.push(scaleDown);
                });
                cleanupFn = () => {
                    triggers.forEach((t) => t.kill());
                    animations.forEach((a) => a.kill());
                };
            },
        });
        return () => {
            if (cleanupFn)
                cleanupFn();
            ScrollTrigger.clearMatchMedia();
        };
    }, []);
    return (<section className="noice-overlay cardStacking">
            <div className="xl:py-108 sm:py-80 py-40">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-86 gap-15">
                        <div className="3xl:col-span-5 lg:col-span-4 col-span-12">
                            <div className="3xl:pe-80 my-sticky !top-100 pxl-heading-scroll-effect">
                                <h2 className="xl:text-6xl md:text-5xl text-4xl md:mb-46 mb-10 heading-text">Our Latest
                                    Projects by <span className="text-primary">AI Experts</span></h2>
                                <p className="sm:text-xl text-lg md:mb-46 mb-10">Real platforms designed, built, and shipped by our AI engineers — live products, not mockups.</p>
                            </div>
                        </div>
                        <div className="3xl:col-span-7 lg:col-span-8 col-span-12 lg:mt-0 mt-20">
                            <div className="grid grid-cols-12 xl:gap-0 gap-15">
                                <div className="cardStacking__cards xl:block hidden"></div>
                                {featuredProjects.map((item, index) => (<BlogCard key={index} project={item}/>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
