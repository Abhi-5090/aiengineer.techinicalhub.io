import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.json";
export default function FaqListing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);
    const [contentHeights, setContentHeights] = useState([]);
    useEffect(() => {
        const heights = contentRefs.current.map((ref) => ref ? `${ref.scrollHeight}px` : "0px");
        setContentHeights(heights);
    }, [faqData]);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const limitedBlogs = faqData.slice(0, 3);
    return (<section className="noice-overlay dark:bg-secondary bg-white">
            <div className="xl:py-144 sm:py-80 py-40">
                <div className="container">
                    <div className="grid grid-cols-12 gap-30">
                        <div className="3xl:col-span-5 lg:col-span-5 col-span-12">
                            <div className="relative 3xl:-left-110 before:content-[''] before:absolute before:top-0 before:left-0 before:size-full before:bg-linear-(--primary2-gradient) before:-z-1">
                                <Image loading="lazy" src={IMAGES.faqpic1} width={530} height={750} alt="FAQ Picture 1" className="lg:w-530 lg:h-615 max-h-750 size-full object-cover"/>
                                <Image loading="lazy" src={IMAGES.bg3} alt="Background 3" className="absolute w-64 top-[20%] right-[-8%] z-1 animate-move max-xl:hidden"/>
                                <Image loading="lazy" src={IMAGES.bg9} alt="Background 9" className="absolute w-35 bottom-[5%] left-[0%] z-1 animate-move max-xl:hidden"/>
                                <Image loading="lazy" src={IMAGES.bg2} alt="Background 2" className="absolute w-64 bottom-[-2%] right-[-8%] z-1 animate-move max-xl:hidden"/>
                            </div>
                        </div>
                        <div className="3xl:col-span-7 lg:col-span-7 col-span-12">
                            <div className="sm:mb-60 mb-20 pxl-heading-scroll-effect">
                                <h2 className="xl:text-6xl md:text-5xl text-4xl sm:mb-15 mb-5 max-w-540 heading-text">Frequently 
                                    Asked Questions</h2>
                                <p className="sm:text-2xl text-lg font-light">We have professional experts around world.</p>
                            </div>
                            <div className="custom-accordion style-1 myAccordion">
                                {limitedBlogs.map((item, index) => (<div className="accordion-item" key={index}>
                                    <button className={`accordion-header w-full ${activeIndex === index ? "open" : ""}`} type="button" onClick={() => toggleAccordion(index)}>
                                        <span className="sm:text-xl text-lg font-medium">{item.question}</span>
                                        <span className={`arrow ${activeIndex === index ? "active" : ""}`}>
                                            <i className="las la-angle-down"></i>
                                        </span>
                                    </button>
                                    <div className="accordion-content" ref={(el) => {
                contentRefs.current[index] = el;
            }} style={{
                overflow: "hidden",
                transition: "max-height 0.35s ease",
                maxHeight: activeIndex === index
                    ? contentHeights[index]
                    : "0px",
            }}>
                                        <div className="content-inner">{item.answer}</div>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
