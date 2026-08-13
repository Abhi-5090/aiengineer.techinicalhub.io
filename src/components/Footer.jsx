import { useEffect, useRef } from "react";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import gsap from "gsap";

export default function Footer() {
    const logoRef = useRef(null);

    // IntersectionObserver instead of GSAP ScrollTrigger: Footer mounts once
    // outside the router's page switch, so a ScrollTrigger's cached pixel
    // position (computed against whichever page loaded first) goes stale on
    // every other page's height. IntersectionObserver re-measures live, so
    // the reveal fires correctly no matter which page you land on first.
    useEffect(() => {
        const el = logoRef.current;
        if (!el) return;
        gsap.set(el, { scale: 0.7, opacity: 0 });
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.to(el, { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.6)" });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (<footer className="bg-secondary noice-overlay relative overflow-hidden z-2">
            <div className="xl:pt-140 sm:pt-100 pt-60">
                <div className="container-fluid">
                    <div className="grid grid-cols-12 gap-10 sm:mb-30 mb-10">
                        <div className="xl:col-span-6 lg:col-span-5 col-span-12">
                            <h2 className="xl:text-[5.2vw]/[5.8vw] sm:text-6xl text-[50px]/60 sm:mb-34 mb-20 tracking-[-6px] font-medium xl:max-w-700 text-white">Take your future to the next level with</h2>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-7 col-span-12">
                            <div className="lg:mb-132 sm:mb-80 mb-50 pe-100 text-end">
                                <Image ref={logoRef} src="/Assets/AI ready engineer logo white.png" alt="AI Ready Engineer" className="w-full max-w-550 h-auto ms-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"/>
                            </div>
                            <div className="grid grid-cols-12 xl:gap-10">
                                <div className="sm:col-span-4 col-span-12 sm:mb-0 mb-15">
                                    <h4 className="text-2xl/31 sm:mb-25 mb-10 text-white">Company</h4>
                                    <ul>
                                        <li className="sm:pb-15 pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary link-hover" href="https://technicalhub.io/" target="_blank">Technical Hub</Link>
                                        </li>
                                        <li className="sm:pb-15 pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary link-hover" href="https://toriiminds.com/" target="_blank">Torii Minds</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sm:col-span-5 col-span-12 sm:mb-0 mb-15">
                                    <h4 className="text-2xl/31 sm:mb-25 mb-10 text-white">Mail Me</h4>
                                    <ul>
                                        <li className="pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary underline" href="mailto:support@technicalhub.io">support@technicalhub.io</Link>
                                        </li>
                                        <li className="pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary underline" href="mailto:support@toriiminds.com">support@toriiminds.com</Link>
                                        </li>
                                        <li className="pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary underline" href="mailto:babji@technicalhub.io">babji@technicalhub.io</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sm:col-span-3 col-span-12 sm:mb-0 mb-15">
                                    <h4 className="text-2xl/31 sm:mb-25 mb-10 text-white">Contact Us</h4>
                                    <ul>
                                        <li className="pb-5">
                                            <Link className="text-white/70 text-lg/23 inline-block hover:text-primary link-hover" href="tel:+918343818181">+91 83 43 81 81 81</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-30">
                        <ul className="flex items-center sm:gap-37 gap-18">
                            <li>
                                <Link className="text-white sm:text-lg/23 text-base uppercase font-normal hover:text-primary link-hover" href="https://www.linkedin.com/company/technicalhub/" target="_blank">LINKEDIN</Link>
                            </li>
                            <li>
                                <Link className="text-white sm:text-lg/23 text-base uppercase font-normal hover:text-primary link-hover" href="https://www.instagram.com/technicalhubio/" target="_blank">INSTAGRAM</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="border-t border-white/30"/>
                </div>
            </div>
            <div className="py-27">
                <div className="container-fluid">
                    <div className="flex justify-between sm:items-center max-sm:flex-col-reverse">
                        <p className="text-white/70">Copyright ©<span className="current-year"> 2026</span> <Link href="https://technicalhub.io/" className="hover:text-primary text-white" target="_blank">Technical Hub</Link>. All Rights Reserved Copyright</p>
                        <Link href="/home" className="max-sm:mb-20">
                            <Image loading="lazy" src="/Assets/Technical Hub white.png" alt="Technical Hub" className="h-30 w-auto"/>
                        </Link>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="Background 6" className="absolute top-[-59%] right-[-34%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg9} alt="Background 9" className="absolute w-35 top-[25%] left-[2%] -z-1 animate-move max-xl:hidden pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg3} alt="Background 3" className="absolute w-48 top-[10%] left-[44%] -z-1 animate-move max-xl:hidden pointer-events-none"/>
        </footer>);
}
