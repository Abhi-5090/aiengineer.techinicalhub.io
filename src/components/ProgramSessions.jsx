import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import sessionsData from "@/data/programsessions.json";
import ProgramSessionCard from "@/components/cards/ProgramSessionCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramSessions() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                const section = sectionRef.current;
                const container = section?.querySelector(".container");
                const track = section?.querySelector(".horizontal-wrapper");
                const circle = section?.querySelector(".progress-ring");
                const text = section?.querySelector(".progress-text");
                const wrapper = section?.querySelector(".circle-progress");

                if (!section || !container || !track || !circle || !text || !wrapper) return;

                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                circle.style.strokeDasharray = `${circumference}`;
                circle.style.strokeDashoffset = `${circumference}`;

                let tween = null;

                // Rebuilds the pin/scrub tween from scratch against however many
                // cards are actually in the DOM right now. Re-running this whenever
                // the track's own size changes (new/removed cards, width edits, a
                // dev hot-reload that swaps the data without a full remount) means
                // the scroll distance can never go stale relative to the content.
                const build = () => {
                    tween?.scrollTrigger?.kill();
                    tween?.kill();

                    const cards = track.children;
                    const lastCard = cards[cards.length - 1];
                    if (!lastCard) return;

                    // Reset before measuring — otherwise a rebuild triggered mid-scroll
                    // would measure the last card's position with the old transform
                    // still applied, throwing the new distance off.
                    gsap.set(track, { x: 0 });

                    const distance = lastCard.getBoundingClientRect().right - container.getBoundingClientRect().right;
                    if (distance <= 0) return;

                    tween = gsap.to(track, { x: -distance, ease: "none" });

                    // Built via ScrollTrigger.create() + animation:, not the tween's own
                    // scrollTrigger vars — a trigger created that second way never lands
                    // in ScrollTrigger's own registry (confirmed by direct testing: it
                    // vanishes from ScrollTrigger.getAll() within milliseconds), so it can
                    // never be recalculated again after this. Since this section pins and
                    // resizes the whole document, every trigger further down the page
                    // (Program Syllabus Modules, benefit cards, the rocket, the appointment
                    // form) needs to be refreshable against that new height — which only
                    // works if it's actually sitting in the registry ScrollTrigger.refresh()
                    // walks.
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
                            const percent = Math.round(progress * 100);
                            const offset = circumference - progress * circumference;

                            circle.style.strokeDashoffset = `${offset}`;
                            text.textContent = `${percent}%`;

                            wrapper.classList.remove("opacity-0");
                        },

                        onLeave: () => wrapper.classList.add("opacity-0"),
                        onEnterBack: () => wrapper.classList.remove("opacity-0"),
                    });

                    // This section pins, which inserts/resizes a spacer and shifts the
                    // height of the whole document. Every other ScrollTrigger further
                    // down the page caches its own start/end in pixels and never
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
            className="xl:pt-75 xl:pb-150 sm:pt-40 sm:pb-80 pt-20 pb-40 bg-black noice-overlay horizontal-section relative sm:min-h-800 overflow-hidden"
        >
            <div className="container">
                <h2 className="xl:text-6xl md:text-5xl text-4xl mb-30 sm:mb-45">
                    Program <span className="text-primary">Includes</span>
                </h2>
                <div className="horizontal-wrapper xl:flex xl:gap-50 gap-20 grid grid-cols-12 xl:w-fit max-2xl:!w-full">
                    {sessionsData.map((item, index) => (
                        <ProgramSessionCard key={index} session={item} index={index} />
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
            <div className="fixed bottom-20 left-20 size-60 z-9999 opacity-0 duration-500 pointer-events-none bg-progress rounded-full p-5 circle-progress xl:block hidden">
                <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="stroke-transparent fill-none stroke-5" cx="50" cy="50" r="45" />
                    <circle className="progress-ring stroke-primary fill-none stroke-5" cx="50" cy="50" r="45" />
                    <text x="50%" y="54%" textAnchor="middle" className="fill-white text-2xxl font-medium rotate-90 origin-center progress-text">
                        0%
                    </text>
                </svg>
            </div>
        </section>
    );
}
