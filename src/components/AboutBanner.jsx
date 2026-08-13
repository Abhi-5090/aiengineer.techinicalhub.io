import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { useState } from "react";
export default function AboutBanner() {
    const [open, setOpen] = useState(false);
    return (<>
            <section className="main-banner overflow-hidden sm:pt-130 pt-100 pb-50 bg-linear-(--banner-gradient) z-0 noice-overlay">
                <div className="container">
                    <div className="grid grid-cols-12 gap-20">
                        <div className="lg:col-span-7 col-span-12 lg:order-[0] order-1">
                            <div className="xl:pt-105 lg:pt-50 xl:pe-70">
                                <h2 className="xl:text-7xl/80 md:text-5xl sm:text-[43px]/50 text-[30px]/40 font-semibold text-black sm:mb-40 mb-20">Where Imagination Meets Strategy</h2>
                                <div className="flex gap-12 xl:mb-100 sm:mb-50 mb-20 md:flex-row flex-col">
                                    <div className="min-w-90">
                                        <p className="text-lg/28 font-normal text-black">About Us</p>
                                    </div>
                                    <div className="min-w-80 h-1 md:mt-15 bg-secondary"></div>
                                    <div className="md:ps-40">
                                        <p className="sm:text-xl text-lg/28 font-normal text-black">Welcome to the space where creativity knows no bounds. Our agency is a hub of innovation, collaboration, and artistry, dedicated to crafting unforgettable campaigns that resonate and inspire.</p>
                                    </div>
                                </div>
                                <div className="flex sm:gap-40 gap-20">
                                    <Link href="/">
                                        <Image loading="lazy" src={IMAGES.aboutuspic2} alt="About Us Picture 2"/>
                                    </Link>
                                    <div className="flex flex-col">
                                        <button data-type="youtube" data-src="https://www.youtube.com/embed/tVphpcFHGaI" className="block flex-1 text-start cursor-pointer" onClick={() => setOpen(true)}>
                                            <div className="inline-block size-60 leading-60 text-center rounded-full bg-secondary text-white duration-500 hover:bg-white hover:text-dark mb-21 magneticBtn">
                                                <i className="fa-solid fa-play"></i>
                                            </div>
                                            <span className="text-lg block">Watch Now</span>
                                        </button>
                                        <span className="text-sm block max-w-170">The Visionaries Behind the Brands</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12">
                            <div className="lg:w-[50vw] lg:float-left lg:h-full sm:h-500 h-300">
                                <Image loading="lazy" src={IMAGES.aboutuspic1} alt="About Us Picture 1" className="lg:size-auto size-full object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Image loading="lazy" src={IMAGES.bg2} alt="bg2" width={840} height={780} className="absolute z-1 animate-move w-127 h-148 3xl:top-[15%] top-[12%] left-[8%] mix-blend-luminosity max-xl:hidden"/>
            </section>
            {open && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-999 flex justify-center items-center" onClick={() => setOpen(false)}>
                    <div className="relative w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    
                    <button className="absolute top-3 right-3 text-white text-2xl" onClick={() => setOpen(false)}>
                        ×
                    </button> 
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/SIjZbiGqafI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>)}
        </>);
}
