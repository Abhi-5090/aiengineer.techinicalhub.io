import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Any ScrollTrigger anchored to a plain (non-pinned) element caches its
// start/end in pixels once, at creation time, and never re-checks them on
// its own. Confirmed by direct testing: sections further down the page
// (e.g. the blog card stack) change height by over a thousand pixels
// purely from scrolling through them — almost certainly their lazy-loaded
// images resolving late — which pushes every trigger below out of sync
// with where its element actually sits. A trigger whose cached window has
// drifted past where its element now is will never visibly fire during a
// normal scroll-through; it only "catches up" once the user scrolls back
// or the page is refreshed at a different point. Watching the document's
// height directly (rather than guessing at every possible cause — fonts,
// images, resize, orientation change) re-syncs every trigger whenever the
// page's layout actually changes, for as long as the page is open.
function ScrollTriggerRefresher() {
    useEffect(() => {
        const refresh = () => {
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
        };

        let lastHeight = document.documentElement.scrollHeight;
        let debounceTimer;
        const ro = new ResizeObserver(() => {
            const height = document.documentElement.scrollHeight;
            if (Math.abs(height - lastHeight) < 1) return;
            lastHeight = height;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(refresh, 150);
        });
        ro.observe(document.body);

        let resizeTimer;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(refresh, 200);
        };
        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);

        return () => {
            ro.disconnect();
            clearTimeout(debounceTimer);
            clearTimeout(resizeTimer);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("orientationchange", onResize);
        };
    }, []);

    return null;
}

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
            <ScrollTriggerRefresher />
            {children}
        </ReactLenis>
    );
}
