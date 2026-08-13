import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.json";
export default function FaqListing1() {
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
    return (<section id="faq" className="noice-overlay border-t border-black/20 dark:border-white/20">
            <div className="xl:py-144 sm:py-80 py-40">
                <div className="container">
                    <div className="grid grid-cols-12 sm:gap-30">
                        <div className="xl:col-span-4 col-span-12">
                            <div className="lg:max-w-540 pxl-heading-scroll-effect my-sticky space-top-0 !top-100">
                                <h2 className="xl:text-6xl md:text-5xl text-4xl mb-15 font-medium heading-text">Frequently 
                                    Asked Questions</h2>
                            </div>
                        </div>
                        <div className="xl:col-span-8 col-span-12">
                            <div className="custom-accordion style-2 myAccordion">
                                {faqData.map((item, index) => (<div className="accordion-item" key={index}>
                                    <button className={`accordion-header w-full ${activeIndex === index ? "open" : ""}`} type="button" onClick={() => toggleAccordion(index)}>
                                        <span className="xl:text-2xxl/56 text-lg font-normal">{item.question1}</span>
                                        <span className={`arrow ${activeIndex === index ? "active" : ""}`}>
                                            <i className="fa-solid fa-plus"></i>
                                            <i className="fa-solid fa-minus"></i>
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
                                        <div className="content-inner">{item.answer1}</div>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
