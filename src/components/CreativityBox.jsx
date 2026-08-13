import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
export default function CreativityBox() {
    return (<section>
            <div className="lg:pt-140 sm:pt-90 pt-60 md:pb-90 pb-20 relative z-1">
                <div className="container">
                    <div className="row justify-center">
                        <div className="w-full text-center">
                            <div className="pxl-heading-scroll-effect sm:mb-80 mb-20">
                                <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-semibold heading-text lg:max-w-780 max-w-700 mx-auto">Award winning creativity</h2>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full lg:mb-50 mb-20">
                            <div className="group">
                                <div className="mb-20 overflow-hidden wow clip-right-animation">
                                    <Image loading="lazy" src={IMAGES.creativitypic1} alt="Creativity Picture 1" className="duration-500 group-hover:scale-105 w-full"/>
                                </div>
                                <div className="content flex items-center justify-between">
                                    <div className="">
                                        <h4 className="lg:text-2xxl/20 text-2xl md:mb-10">
                                            <Link href="/portfolio/e-commerce" className="link-hover">Mobile app design</Link>
                                        </h4>
                                        <span className="dark:text-white/40 text-black/40 text-sm uppercase">Design - 2026</span>
                                    </div>
                                    <Link href="/portfolio/e-commerce" className="px-28 py-13 border dark:border-bordercolor border-primary rounded-5xl dark:bg-dark bg-primary overflow-hidden -translate-x-100 scale-0 group-hover:scale-100 group-hover:translate-x-0 group/second rounded-full">
                                        <svg className="group/second-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="dark:stroke-primary stroke-dark" d="M5 12H19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="dark:stroke-primary stroke-dark" d="M12 5L19 12L12 19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full max-lg:mb-20">
                            <div className="group lg:ml-110">
                                <div className="mb-20 overflow-hidden wow clip-right-animation">
                                    <Image loading="lazy" src={IMAGES.creativitypic2} alt="Creativity Picture 2" className="duration-500 group-hover:scale-105 w-full"/>
                                </div>
                                <div className="content flex items-center justify-between">
                                    <div className="">
                                        <h4 className="lg:text-2xxl/20 text-2xl md:mb-10">
                                            <Link href="/portfolio/e-commerce" className="link-hover">Branding Design</Link>
                                        </h4>
                                        <span className="dark:text-white/40 text-black/40 text-sm uppercase">Design - 2026</span>
                                    </div>
                                    <Link href="/portfolio/e-commerce" className="px-28 py-13 border dark:border-bordercolor border-primary rounded-5xl dark:bg-dark bg-primary overflow-hidden -translate-x-100 scale-0 group-hover:scale-100 group-hover:translate-x-0 group/second rounded-full">
                                        <svg className="group/second-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="dark:stroke-primary stroke-dark" d="M5 12H19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="dark:stroke-primary stroke-dark" d="M12 5L19 12L12 19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full max-lg:mb-20">
                            <div className="group lg:mr-110">
                                <div className="mb-20 overflow-hidden wow clip-right-animation">
                                    <Image loading="lazy" src={IMAGES.creativitypic3} alt="Creativity Picture 3" className="duration-500 group-hover:scale-105 w-full"/>
                                </div>
                                <div className="content flex items-center justify-between">
                                    <div className="">
                                        <h4 className="lg:text-2xxl/20 text-2xl md:mb-10">
                                            <Link href="/portfolio/e-commerce" className="link-hover">Website Development</Link>
                                        </h4>
                                        <span className="dark:text-white/40 text-black/40 text-sm uppercase">Design - 2026</span>
                                    </div>
                                    <Link href="/portfolio/e-commerce" className="px-28 py-13 border dark:border-bordercolor border-primary rounded-5xl dark:bg-dark bg-primary overflow-hidden -translate-x-100 scale-0 group-hover:scale-100 group-hover:translate-x-0 group/second rounded-full">
                                        <svg className="group/second-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="dark:stroke-primary stroke-dark" d="M5 12H19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="dark:stroke-primary stroke-dark" d="M12 5L19 12L12 19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full max-lg:mb-20">
                            <div className="group">
                                <div className="mb-20 overflow-hidden wow clip-right-animation">
                                    <Image loading="lazy" src={IMAGES.creativitypic4} alt="Creativity Picture 4" className="duration-500 group-hover:scale-105 w-full"/>
                                </div>
                                <div className="content flex items-center justify-between">
                                    <div className="">
                                        <h4 className="lg:text-2xxl/20 text-2xl md:mb-10">
                                            <Link href="/portfolio/e-commerce" className="link-hover">Digital Marketing</Link>
                                        </h4>
                                        <span className="dark:text-white/40 text-black/40 text-sm uppercase">Design - 2026</span>
                                    </div>
                                    <Link href="/portfolio/e-commerce" className="px-28 py-13 border dark:border-bordercolor border-primary rounded-5xl dark:bg-dark bg-primary overflow-hidden -translate-x-100 scale-0 group-hover:scale-100 group-hover:translate-x-0 group/second rounded-full">
                                        <svg className="group/second-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="dark:stroke-primary stroke-dark" d="M5 12H19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="dark:stroke-primary stroke-dark" d="M12 5L19 12L12 19" stroke="#E3FF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
