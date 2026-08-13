import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
export default function BlogCards() {
    return (<section className="noice-overlay">
            <div className="lg:pt-200 lg:pb-150 sm:pt-160 sm:pb-80 pt-120 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <div className="text-center lg:mb-120 sm:mb-80 mb-30">
                                <h2 className="sm:text-7xl/70 text-4xl font-semibold sm:mb-20 mb-10">Our latest blog & article</h2>
                                <p className="sm:text-xl/30 text-base max-w-560 mx-auto">Explore our latest blog and articles for expert insights on web design, SEO, and digital trends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-20">
                        <div className="xl:col-span-5 col-span-12 xl:row-span-2">
                            <div className="card !rounded-none h-full group">
                                <div className="overflow-hidden">
                                    <Image loading="lazy" src={IMAGES.blog6} alt="Blog Picture 6" className="w-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-3"/>
                                </div>
                                <div className="sm:flex items-end justify-between md:p-50 md:pt-45 p-30 pt-25">
                                    <div className="">
                                        <h4 className="md:text-[45px]/50 text-[30px]/35 text-white">
                                            <Link className="hover:text-primary" href="/blog/how-to-create-a-stunning">
                                                How to Create a Stunning
                                            </Link>
                                        </h4>
                                        <p className="sm:mb-54 mb-30 text-white/60">Explore our latest blog and articles for expert insights on web design, </p>
                                        <ul className="text-base text-bodytext uppercase mt-auto">
                                            <li className="inline-block relative pe-10">15 May 2026</li>
                                            <li className="inline-block relative ps-15 before:content-['/'] before:absolute before:size-full before:top-0 before:left-0">By Liam Anderson</li>
                                        </ul>
                                    </div>
                                    <Link href="/blog/transform-your-ideas-into-impact" className="size-60 min-w-60 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                                        <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                            <div className="card !rounded-none h-full">
                                <div className="flex md:flex-row flex-col justify-between md:p-10 group">
                                    <div className="flex flex-col p-30 max-sm:pt-25">
                                        <h4 className="md:text-[35px]/41 text-[30px]/35 mb-10 text-white">
                                            <Link className="hover:text-primary" href="/blog/master-the-art-of-visual-storytelling">
                                                Transform Your Ideas into Impact
                                            </Link>
                                        </h4>
                                        <p className="mb-30 text-white/60">Explore our latest blog and articles for expert insights on web design, </p>
                                        <ul className="text-base text-bodytext uppercase mt-auto">
                                            <li className="inline-block relative pe-10">15 May 2026</li>
                                            <li className="inline-block relative ps-15 before:content-['/'] before:absolute before:size-full before:top-0 before:left-0">By Liam Anderson</li>
                                        </ul>
                                    </div>
                                    <div className="md:min-w-340 h-full overflow-hidden md:order-0 -order-1">
                                        <Image loading="lazy" src={IMAGES.blog7} alt="Blog Picture 7" className="w-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                            <div className="card !rounded-none h-full">
                                <div className="flex md:flex-row flex-col justify-between md:p-10 group">
                                    <div className="flex flex-col p-30 max-sm:pt-25">
                                        <h4 className="md:text-[35px]/41 text-[30px]/35 mb-10 text-white">
                                            <Link className="hover:text-primary" href="/blog/elevate-your-brand-with-bold-visuals">
                                                Where Creativity Meets Simplicity
                                            </Link>
                                        </h4>
                                        <p className="mb-30 text-white/60">Explore our latest blog and articles for expert insights on web design, </p>
                                        <ul className="text-base text-bodytext uppercase mt-auto">
                                            <li className="inline-block relative pe-10">15 May 26</li>
                                            <li className="inline-block relative ps-15 before:content-['/'] before:absolute before:size-full before:top-0 before:left-0">By Liam Anderson</li>
                                        </ul>
                                    </div>
                                    <div className="md:min-w-340 h-full overflow-hidden md:order-0 -order-1">
                                        <Image loading="lazy" src={IMAGES.blog8} alt="Blog Picture 7" className="w-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-30%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-40%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
