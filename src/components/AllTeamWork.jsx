import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import TeamCard from "@/components/cards/TeamCard";
import teamData from "@/data/team.json";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AllTeamWork() {
    const handleTeamHover = () => {
        let destroyFn = null;
        ScrollTrigger.matchMedia({
            "(min-width: 567px)": () => {
                const boxes = document.querySelectorAll(".pxl-team-list .box-item");
                const cleanups = [];
                boxes.forEach((box) => {
                    const reveal = box.querySelector(".item-image");
                    const revealImg = reveal?.querySelector(".reveal-image");
                    if (!reveal || !revealImg)
                        return;
                    const positionElement = (ev) => {
                        const parent = ev.currentTarget;
                        const parentRect = parent.getBoundingClientRect();
                        const parentWidth = parent.offsetWidth;
                        const revealWidth = reveal.offsetWidth;
                        const mouseX = ev.clientX - parentRect.left;
                        const padding = 60;
                        const finalX = mouseX + padding;
                        reveal.style.top = "50%";
                        reveal.style.transform = "translateY(-50%)";
                        if (finalX + revealWidth > parentWidth) {
                            const rightDistance = parentWidth - mouseX;
                            reveal.style.right = `${rightDistance + padding}px`;
                            reveal.style.left = "auto";
                        }
                        else {
                            reveal.style.left = `${finalX}px`;
                            reveal.style.right = "auto";
                        }
                    };
                    const showImage = () => {
                        gsap.killTweensOf(revealImg);
                        gsap
                            .timeline()
                            .set(reveal, { opacity: 1, zIndex: 50 })
                            .fromTo(revealImg, { scaleX: 0, opacity: 0, transformOrigin: "left center" }, { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
                    };
                    const hideImage = () => {
                        gsap.killTweensOf(revealImg);
                        gsap
                            .timeline()
                            .to(revealImg, {
                            scaleX: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in",
                            transformOrigin: "right center",
                        })
                            .set(reveal, { opacity: 0, zIndex: "" });
                    };
                    const mouseEnter = (e) => {
                        positionElement(e);
                        showImage();
                    };
                    const mouseMove = (e) => {
                        positionElement(e);
                    };
                    box.addEventListener("mouseenter", mouseEnter);
                    box.addEventListener("mousemove", mouseMove);
                    box.addEventListener("mouseleave", hideImage);
                    cleanups.push(() => {
                        box.removeEventListener("mouseenter", mouseEnter);
                        box.removeEventListener("mousemove", mouseMove);
                        box.removeEventListener("mouseleave", hideImage);
                    });
                });
                destroyFn = () => {
                    cleanups.forEach((fn) => fn());
                };
            },
        });
        return () => {
            destroyFn?.();
        };
    };
    useEffect(() => {
        const cleanup = handleTeamHover();
        return () => {
            cleanup?.();
        };
    }, []);
    return (<section className="noice-overlay">
            <div className="xl:pt-120 sm:pt-80 pt-40 pb-50">
                <div className="container">
                    <div className="flex items-center justify-between sm:mb-80 mb-20">
                        <div className="max-w-580 pxl-heading-scroll-effect flex-1">
                            <h2 className="xl:text-7xl/80 md:text-5xl text-4xl heading-text">
                                The Faces Behind the Work
                            </h2>
                        </div>
                        <Link href="/team" className="lg:size-129 sm:size-100 size-70 sm:p-15 p-8 flex items-center justify-center rounded-full bg-card text-primary border border-primary lg:text-lg/20 sm:text-base text-xs gradient-hover sm:ms-auto magneticBtn">
                            <span className="text-center">
                                View All Team
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="pxl-team-list">
                        {teamData.map((item, index) => (<TeamCard key={index} team={item}/>))}
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-50%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-40%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
