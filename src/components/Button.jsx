import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "@/components/common/Link";
const Button = ({ href, label, type, target, button, btnSm }) => {
    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);
    useEffect(() => {
        const btn = button ? buttonRef2.current : buttonRef.current;
        if (!btn)
            return;
        const flair = btn.querySelector(".button-flair");
        if (!flair)
            return;
        const xTo = gsap.quickTo(btn, "x", {
            duration: 1.2,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo(btn, "y", {
            duration: 1.2,
            ease: "power3.out",
        });
        const xSet = gsap.quickSetter(flair, "xPercent");
        const ySet = gsap.quickSetter(flair, "yPercent");
        const getXY = (e) => {
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = gsap.utils.clamp(0, 100, gsap.utils.mapRange(0, width, 0, 100)(e.clientX - left));
            const y = gsap.utils.clamp(0, 100, gsap.utils.mapRange(0, height, 0, 100)(e.clientY - top));
            return { x, y };
        };
        const onEnter = (e) => {
            const { x, y } = getXY(e);
            xSet(x);
            ySet(y);
            gsap.to(flair, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        };
        const onMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            xTo(dx);
            yTo(dy);
            const { x, y } = getXY(e);
            gsap.to(flair, {
                xPercent: x,
                yPercent: y,
                duration: 0.4,
                ease: "power2",
            });
        };
        const onLeave = (e) => {
            xTo(0);
            yTo(0);
            const { x, y } = getXY(e);
            gsap.killTweensOf(flair);
            gsap.to(flair, {
                xPercent: x,
                yPercent: y,
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };
        btn.addEventListener("mouseenter", onEnter);
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
        return () => {
            btn.removeEventListener("mouseenter", onEnter);
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
        };
    }, []);
    return (<>
    {button ?
            <button ref={buttonRef2} type="submit" className={`btn p-2 group cursor-pointer button--stroke flairBtn magneticBtn relative overflow-hidden inline-flex items-center ${type == "primary" ? "btn-primary" : type == "secondary" ? "btn-black" : type == "white" ? (btnSm ? "btn-outline light" : "btn-outline light sm:h-60") : "btn-outline"}`} data-block="button">
        <span className="button-flair__wrapper absolute inset-0 pointer-events-none">
          <span className="button-flair absolute"></span>
        </span>

        <span className={`button__label font-normal xl:ps-25 inline-flex items-center gap-14 relative z-10 ${type == "white" ? (btnSm ? "px-10" : "px-28") : "px-10"}`}>
          {label}
        </span>

        <span className={`inline-flex justify-center items-center size-32 rounded-full   duration-200  relative z-10 ${type == "secondary" ? "bg-primary text-black group-hover:bg-black group-hover:text-white" : type == "white" ? (btnSm ? "size-32 bg-primary text-secondary group-hover:bg-secondary group-hover:text-white" : "sm:size-50 size-32 bg-primary text-secondary group-hover:bg-secondary group-hover:text-white") : "bg-secondary text-white group-hover:bg-primary group-hover:text-secondary"}`}>
          <i className={`fa-solid fa-arrow-right ${type == "white" ? (btnSm ? "text-sm" : "text-xl") : "text-sm"}`}></i>
        </span>
      </button>
            :
                <Link target={target} ref={buttonRef} href={href ?? "/"} className={`btn p-2 group button--stroke flairBtn magneticBtn relative overflow-hidden inline-flex items-center ${type == "primary" ? "btn-primary" : type == "secondary" ? "btn-black" : type == "white" ? (btnSm ? "btn-outline light" : "btn-outline light sm:h-60") : "btn-outline"}`} data-block="button">
        <span className="button-flair__wrapper absolute inset-0 pointer-events-none">
          <span className="button-flair absolute"></span>
        </span>

        <span className={`button__label font-normal xl:ps-25 inline-flex items-center gap-14 relative z-10 ${type == "white" ? (btnSm ? "px-10" : "px-28") : "px-10"}`}>
          {label}
        </span>

        <span className={`inline-flex justify-center items-center size-32 rounded-full   duration-200  relative z-10 ${type == "secondary" ? "bg-primary text-black group-hover:bg-black group-hover:text-white" : type == "white" ? (btnSm ? "size-32 bg-primary text-secondary group-hover:bg-secondary group-hover:text-white" : "sm:size-50 size-32 bg-primary text-secondary group-hover:bg-secondary group-hover:text-white") : "bg-secondary text-white group-hover:bg-primary group-hover:text-secondary"}`}>
          <i className={`fa-solid fa-arrow-right ${type == "white" ? (btnSm ? "text-sm" : "text-xl") : "text-sm"}`}></i>
        </span>
      </Link>}
    </>);
};
export default Button;
