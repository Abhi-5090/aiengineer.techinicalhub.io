import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Full Lenis <-> GSAP integration (the complete pattern from both projects'
// docs, not just the scroll-listener half of it). Two independent RAF loops —
// Lenis driving itself, GSAP's ticker running separately — can drift out of
// step, and a GSAP pin engaging/releasing (which resizes the page abruptly) is
// exactly the kind of disruption that exposes that drift: everything scrubbed
// after that point can stop reacting to scroll, even though the page itself
// keeps scrolling normally. Driving Lenis FROM gsap.ticker unifies both onto
// one clock, so there's no drift to expose in the first place.
function LenisScrollTriggerSync() {
    const lenis = useLenis(() => {
        ScrollTrigger.update();
    });

    useEffect(() => {
        if (!lenis) return;

        const onTick = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);

        return () => gsap.ticker.remove(onTick);
    }, [lenis]);

    return null;
}

export default function LenisProvider({ children }) {
    return (
        <ReactLenis root options={{ autoRaf: false }}>
            <LenisScrollTriggerSync />
            {children}
        </ReactLenis>
    );
}
