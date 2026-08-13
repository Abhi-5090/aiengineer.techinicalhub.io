import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ImageSection() {
    const imgZoomRef = useRef(null);
    const imgBoxRef = useRef(null);
    useEffect(() => {
        if (!imgZoomRef.current || !imgBoxRef.current)
            return;
        const ctx = gsap.context(() => {
            const tween = gsap.to(imgBoxRef.current, { scale: 1.5, ease: "none" });

            // Built via ScrollTrigger.create() + animation:, not the tween's own
            // scrollTrigger vars — see ServiceBox.jsx for why that shorthand form
            // silently drops out of ScrollTrigger's registry and can never be
            // recalculated again.
            ScrollTrigger.create({
                trigger: imgZoomRef.current,
                start: "top+=100 bottom",
                end: "bottom top",
                scrub: true,
                animation: tween,
            });
        });
        return () => ctx.revert();
    }, []);
    return (<section className="noice-overlay">
      <div className="pb-20">
        <div className="container-full">
          <div className="hidden">
            <h2 className="xl:text-6xl md:text-5xl text-4xl">
              Our Work
            </h2>
          </div>

          <div className="main img-zoom overflow-hidden" ref={imgZoomRef}>
            <div className="image-card w-full md:h-[700px] sm:h-[500px] h-[300px] overflow-hidden rounded-lg">
              <div className="slide relative w-full h-full">
                <div ref={imgBoxRef} className="img-box w-full h-full">
                  <Image loading="lazy" src={IMAGES.aboutus7} alt="AboutUs7" width={1920} height={900} className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
