import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import modulesData from "@/data/programmodules.json";
import ProgramModuleNode from "@/components/cards/ProgramModuleNode";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramModules() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                const section = sectionRef.current;
                const container = section?.querySelector(".container");
                const track = section?.querySelector(".modules-track");
                const spine = section?.querySelector(".modules-spine");
                const spineFill = section?.querySelector(".modules-spine-fill");
                const startImg = section?.querySelector(".syllabus-start-image");
                const endImg = section?.querySelector(".syllabus-end-image");
                const startImgInner = startImg?.querySelector("img");
                const endImgInner = endImg?.querySelector("img");

                if (!section || !container || !track || !spine || !spineFill || !startImg || !endImg || !startImgInner || !endImgInner) return;

                let tween = null;

                // Pop the bookend illustrations in/out as they near or leave the
                // centered position — eased scale + fade, not a hard cut. The scale
                // lands on the inner <img>, not the wrapper: the wrapper's box is what
                // all the centering math above measures, so it has to stay a stable,
                // unscaled reference. Only the last/first 15% of the scroll range is
                // "their moment"; outside that window they're fully settled in or out.
                const POP_WINDOW = 0.15;
                const popEase = gsap.parseEase("power2.out");
                gsap.set(startImgInner, { transformOrigin: "center bottom" });
                gsap.set(endImgInner, { transformOrigin: "center bottom" });

                // The "what should I learn" illustration rests centered on screen;
                // scrolling drags the whole timeline leftward through all 16 modules
                // until the "became an engineer" image lands centered, then hands off
                // to the next section. Rebuilding on every track resize (not just once
                // at mount) means this stays correct even if the module count changes
                // later without a full remount — same fix used on the cards section above.
                const build = () => {
                    tween?.scrollTrigger?.kill();
                    tween?.kill();

                    const nodes = Array.from(track.children).filter((el) => el.classList.contains("module-node"));
                    const first = nodes[0];
                    const last = nodes[nodes.length - 1];
                    if (!first || !last) return;

                    gsap.set(track, { x: 0 });

                    const trackRect = track.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const containerCenterX = containerRect.left + containerRect.width / 2;

                    const startRect = startImg.getBoundingClientRect();
                    const endRect = endImg.getBoundingClientRect();
                    const firstRect = first.getBoundingClientRect();
                    const lastRect = last.getBoundingClientRect();

                    const initialX = containerCenterX - (startRect.left + startRect.width / 2);
                    const finalX = containerCenterX - (endRect.left + endRect.width / 2);
                    const distance = initialX - finalX;
                    if (distance <= 0) return;

                    const spineLeft = firstRect.left - trackRect.left;
                    const spineWidth = lastRect.right - firstRect.left;

                    gsap.set(spine, { left: spineLeft, width: spineWidth });
                    gsap.set(spineFill, { left: spineLeft, width: 0 });
                    gsap.set(track, { x: initialX });

                    // Rest state (progress 0): the start illustration is fully popped
                    // in since it's the very first thing on screen; the end one hasn't
                    // arrived yet.
                    gsap.set(startImgInner, { scale: 1, opacity: 1 });
                    gsap.set(endImgInner, { scale: 0.7, opacity: 0 });

                    tween = gsap.to(track, { x: finalX, ease: "none" });

                    // Built via ScrollTrigger.create() + animation:, not the tween's own
                    // scrollTrigger vars — a trigger created that second way never lands
                    // in ScrollTrigger's own registry (confirmed by direct testing: it
                    // vanishes from ScrollTrigger.getAll() within milliseconds), so it can
                    // never be recalculated again after this. Since this section pins and
                    // resizes the whole document, every trigger further down the page
                    // (benefit cards, the rocket, the appointment form) needs to be
                    // refreshable against that new height — which only works if it's
                    // actually sitting in the registry ScrollTrigger.refresh() walks.
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top top",
                        end: () => `+=${distance}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        animation: tween,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            spineFill.style.width = `${progress * spineWidth}px`;

                            const startT = gsap.utils.clamp(0, 1, 1 - progress / POP_WINDOW);
                            const endT = gsap.utils.clamp(0, 1, (progress - (1 - POP_WINDOW)) / POP_WINDOW);
                            const startEase = popEase(startT);
                            const endEase = popEase(endT);

                            gsap.set(startImgInner, { scale: 0.7 + 0.3 * startEase, opacity: startEase });
                            gsap.set(endImgInner, { scale: 0.7 + 0.3 * endEase, opacity: endEase });
                        },
                    });

                    // This section pins, which inserts/resizes a spacer and shifts the
                    // height of the whole document. Every other ScrollTrigger further
                    // down the page (rocket, benefit cards, the appointment form) caches
                    // its own start/end in pixels the moment it's created and never
                    // re-checks them on its own — so a rebuild here after they've already
                    // mounted leaves their cached numbers pointing at stale positions.
                    // sort() first: killing and recreating this trigger just now moved
                    // it to the end of ScrollTrigger's internal order (creation order,
                    // not document order), and refresh() resolves pin-spacer heights by
                    // walking that order — without re-sorting by trigger position first,
                    // sections below this one would get refreshed against a page height
                    // that doesn't yet include this trigger's own (possibly changed) pin
                    // distance.
                    ScrollTrigger.sort();
                    ScrollTrigger.refresh();
                };

                build();

                // Guard against redundant rebuilds: pinning inserts/reverts a
                // pin-spacer around the section, which can itself trigger a spurious
                // resize signal on the track even though its content width never
                // actually changed — rebuilding on every one of those would kill and
                // recreate the ScrollTrigger (and its pin-spacer) in a tight loop.
                // Only rebuild when the width has genuinely moved.
                let lastWidth = track.getBoundingClientRect().width;
                const ro = new ResizeObserver((entries) => {
                    const width = entries[0].contentRect.width;
                    if (Math.abs(width - lastWidth) < 1) return;
                    lastWidth = width;
                    build();
                });
                ro.observe(track);

                // One more rebuild once web fonts finish loading — the usual cause
                // of content above this section growing after our first measurement
                // (a font swap can make headings/paragraphs taller), shifting this
                // section down without ever resizing the track itself, so the
                // ResizeObserver above doesn't catch it. Tied to an actual event
                // rather than a fixed delay on purpose: a blind timer fires at some
                // arbitrary point in the user's *own* scrolling, and rebuilding while
                // they're already mid-scroll shifts the page out from under them —
                // document.fonts.ready always resolves early, well before that's
                // realistically possible.
                let cancelled = false;
                document.fonts.ready.then(() => {
                    if (!cancelled) build();
                });

                return () => {
                    ro.disconnect();
                    cancelled = true;
                };
            });

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="xl:pt-75 xl:pb-150 sm:pt-40 sm:pb-80 pt-20 pb-40 bg-black noice-overlay relative overflow-hidden"
        >
            <div className="container">
                <h2 className="xl:text-6xl md:text-5xl text-4xl mb-30 sm:mb-45">
                    Program <span className="text-primary">Syllabus Modules</span>
                </h2>
                <div className="modules-track relative xl:flex xl:items-center xl:gap-30 xl:w-fit xl:h-[460px] grid grid-cols-12 gap-20 sm:gap-30 max-xl:!w-full">
                    <div className="modules-spine absolute top-1/2 -translate-y-1/2 h-[2px] bg-white/10 z-0 max-xl:hidden" />
                    <div className="modules-spine-fill absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary z-0 max-xl:hidden" style={{ width: 0 }} />

                    <div className="syllabus-start-image hidden xl:flex xl:h-[500px] w-[500px] shrink-0 items-center justify-center relative z-10 translate-y-[0%]">
                        <Image
                            loading="lazy"
                            src="/Assets/Module Syllabus starting.png"
                            alt="A student wondering what to learn to become an AI Ready Engineer"
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    {modulesData.map((item, index) => (
                        <ProgramModuleNode key={index} module={item} index={index} />
                    ))}

                    <div className="syllabus-end-image hidden xl:flex xl:h-[500px] w-[500px] shrink-0 items-center justify-center relative z-10 translate-y-[0%]">
                        <Image
                            loading="lazy"
                            src="/Assets/Modules Successfully Completed.png"
                            alt="A student celebrating having successfully become an industry-ready AI engineer"
                            className="h-full w-auto object-contain"
                        />
                    </div>
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
        </section>
    );
}
