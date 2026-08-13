import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import { useState } from "react";
import pricingData from "@/data/pricing.json";
export default function PricingTable() {
    const [activeIndex, setActiveIndex] = useState(2);
    return (<section className="noice-overlay">
            <div className="xl:py-126 sm:pt-80 pt-60 pb-0">
                <div className="container">
                    <div className="xl:mb-106 sm:mb-50 mb-20 text-center pxl-heading-scroll-effect">
                        <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-semibold heading-text">
                            Transparent Pricing for Tailored Digital Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-20 pricing-container">
                        {pricingData.map((item, index) => (<div key={index} className="xl:col-span-3 sm:col-span-6 col-span-12">
                                <div className={`pricing-wrapper relative z-2 ${activeIndex === index ? "active" : ""}`} onMouseEnter={() => setActiveIndex(index)}>
                                    <div className="pt-50 ps-40 pe-8">
                                        <div className="mb-20">
                                            <h3 className="dark:text-white text-dark text-[55px]/46 title">
                                            {item.price}
                                            <span className="dark:text-bodytext text-textlight text-lg font-normal">/month</span>
                                            </h3>
                                        </div>
                                        <h4 className="text-2xxl/36 dark:text-white text-dark mb-5">{item.title}</h4>
                                        <p className="mb-20 font-normal text-lg/24">{item.desc}</p>
                                        <ul className="list-items">
                                            {item.services.map((service, index) => (<li key={index} className="relative py-4.5 ps-30 4xl:pe-55 dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-20 before:leading-20 before:text-center dark:before:text-heading before:text-white before:text-xs before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] dark:before:bg-linear-(--pricing-gradient) before:bg-dark">
                                                {service}
                                                </li>))}
                                        </ul>
                                    </div>

                                    <div className="p-40">
                                        <div className="btn text-base font-bold w-full text-center block py-12 rounded-none dark:bg-linear-(--pricing-gradient) bg-darkbtn dark:text-dark text-white hover:!bg-black hover:!text-white duration-500 cursor-pointer">
                                            Choose plan
                                        </div>
                                    </div>

                                    {activeIndex === index && (<span className="absolute -top-10 right-1 py-8 px-16 text-xs/[1] font-semibold bg-white text-black hidden badge">
                                            {item.badge}
                                        </span>)}
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="Background 6" className="absolute top-[-8%] left-[-47%] -z-1"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="Background 10" className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1"/>
        </section>);
}
