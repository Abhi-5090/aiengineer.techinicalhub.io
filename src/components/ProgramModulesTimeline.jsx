import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import modulesData from "@/data/programmodules.json";

gsap.registerPlugin(ScrollTrigger);

const SLOT_WIDTH = 130;
const NODE_OFFSET = 70;
// Must fully contain the tallest possible node (stub + badge + tooltip) on BOTH sides of the
// centerline — overflow-x:auto forces overflow-y to clip too (a CSS spec quirk), so anything
// taller than this box gets silently cut off instead of overflowing.
const TRACK_HEIGHT = 480;

export default function ProgramModulesTimeline({ active }) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        if (!active) return;
        if (window.innerWidth < 1200) return; // mobile uses the plain list below, no pin needed

        let st;
        const raf = requestAnimationFrame(() => {
            const section = sectionRef.current;
            const track = trackRef.current;
            const container = section?.closest(".container");
            if (!section || !track || !container) return;

            const lastBadge = track.lastElementChild?.querySelector(".module-badge");
            if (!lastBadge) return;
            const distance = lastBadge.getBoundingClientRect().right - container.getBoundingClientRect().right;

            const tween = gsap.to(track, {
                x: -distance,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${distance}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
            st = tween.scrollTrigger;
        });

        return () => {
            cancelAnimationFrame(raf);
            st?.kill();
            gsap.set(trackRef.current, { x: 0 });
        };
    }, [active]);

    const handleEnter = (e) => {
        const badge = e.currentTarget;
        const tooltip = badge.querySelector(".module-tooltip");
        gsap.to(badge, { scale: 1.15, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(
            tooltip,
            { autoAlpha: 0, scale: 0.85 },
            { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
    };

    const handleLeave = (e) => {
        const badge = e.currentTarget;
        const tooltip = badge.querySelector(".module-tooltip");
        gsap.to(badge, { scale: 1, duration: 0.25, ease: "power2.out" });
        gsap.to(tooltip, { autoAlpha: 0, scale: 0.85, duration: 0.2, ease: "power2.in" });
    };

    return (
        <div className="program-modules-timeline">
            {/* Desktop: pinned section, vertical scroll drives horizontal reveal through all 16 modules */}
            <div ref={sectionRef} className="max-xl:hidden relative" style={{ minHeight: TRACK_HEIGHT }}>
                <div
                    ref={trackRef}
                    className="relative flex items-center"
                    style={{ width: modulesData.length * SLOT_WIDTH, height: TRACK_HEIGHT }}
                >
                    <div
                        className="absolute left-0 h-[2px] bg-white/15"
                        style={{ top: "50%", width: modulesData.length * SLOT_WIDTH }}
                    />
                    {modulesData.map((mod, i) => {
                        const above = i % 2 === 0;
                        return (
                            <div key={i} className="module-node relative shrink-0" style={{ width: SLOT_WIDTH, height: TRACK_HEIGHT }}>
                                {/* dot marking this module's point on the centerline */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 size-10 rounded-full bg-primary z-10"
                                    style={{ top: "50%", marginTop: -5 }}
                                />
                                {/* stub connecting the badge to the centerline */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/20"
                                    style={{
                                        top: above ? `calc(50% - ${NODE_OFFSET}px)` : "50%",
                                        height: NODE_OFFSET,
                                    }}
                                />
                                {/* number badge — the hover target */}
                                <button
                                    type="button"
                                    onMouseEnter={handleEnter}
                                    onMouseLeave={handleLeave}
                                    className="module-badge absolute left-1/2 size-50 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold text-lg bg-black z-20 cursor-pointer"
                                    style={{
                                        top: "50%",
                                        transform: above
                                            ? `translate(-50%, calc(-${NODE_OFFSET}px - 50%))`
                                            : `translate(-50%, calc(${NODE_OFFSET}px - 50%))`,
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                    <div
                                        className="module-tooltip absolute left-1/2 -translate-x-1/2 opacity-0 invisible bg-white text-black rounded-lg p-16 shadow-lg z-30 pointer-events-none text-left"
                                        style={{
                                            width: 210,
                                            [above ? "bottom" : "top"]: "calc(100% + 18px)",
                                        }}
                                    >
                                        <h4 className="font-bold text-sm mb-4">{mod.title}</h4>
                                        <p className="text-xs leading-relaxed text-black/60">{mod.excerpt}</p>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile / tablet fallback: numbered list, matches the reference layout */}
            <div className="xl:hidden grid sm:grid-cols-2 grid-cols-1 gap-x-40">
                {modulesData.map((mod, i) => (
                    <div key={i} className="flex items-start gap-20 py-18 border-b border-white/10">
                        <span className="text-primary font-bold text-2xl shrink-0" style={{ width: 40 }}>
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">{mod.title}</h4>
                            <p className="text-white/50 text-sm">{mod.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
