import { useRef, useState, useReducer, useEffect } from "react";
import Image from "@/components/common/Image";
import faqData from "@/data/faq.json";
import { IMAGES } from "@/utils/constants";
const initialState = {
    activeIndex: null,
    contentHeights: [],
};
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_ACCORDION":
            return {
                ...state,
                activeIndex: state.activeIndex === action.payload ? null : action.payload,
            };
        case "SET_HEIGHTS":
            return {
                ...state,
                contentHeights: action.payload,
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}
export default function FaqListingContent() {
    const tabKeys = [
        "general",
        "process",
        "technical",
        "marketing",
        "support",
    ];
    const tabLabels = [
        "General Questions",
        "Process & Workflow",
        "Technical Questions",
        "Marketing & SEO",
        "Support",
    ];
    const [activeTab, setActiveTab] = useState("general");
    const [state, dispatch] = useReducer(reducer, initialState);
    const contentRefs = useRef([]);
    const activeFaq = faqData.reduce((acc, item) => {
        return item[activeTab] ?? acc;
    }, []);
    useEffect(() => {
        const heights = contentRefs.current.map((el) => el ? `${el.scrollHeight}px` : "0px");
        dispatch({ type: "SET_HEIGHTS", payload: heights });
    }, [activeTab, state.activeIndex]);
    useEffect(() => {
        dispatch({ type: "RESET" });
        contentRefs.current = [];
    }, [activeTab]);
    return (<section className="main-banner overflow-hidden lg:py-200 sm:py-160 py-120 z-0 noice-overlay relative">
      <div className="container-sm">
        <div className="md:mb-85 mb-30 text-center max-w-800 mx-auto">
          <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-medium">
            Frequently Asked Questions
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center items-center tab-titles md:mb-50 mb-20 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black/10 dark:after:bg-white/10">
          {tabLabels.map((label, i) => (<li key={i} className="tab-title">
              <button onClick={() => setActiveTab(tabKeys[i])} className={`block py-15 px-15 font-normal cursor-pointer text-lg/18 duration-500 relative
                ${activeTab === tabKeys[i]
                ? "after:w-full text-black dark:text-white"
                : "after:w-0 text-textlight dark:text-bodytext"}
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-3 after:bg-linear-(--tab-underline-gradient) after:duration-500`}>
                {label}
              </button>
            </li>))}
        </ul>

        <div className="custom-accordion style-2 myAccordion">
          {activeFaq.map((item, index) => (<div className="accordion-item" key={index}>
              <button className={`accordion-header ${state.activeIndex === index ? "open" : ""}`} onClick={() => dispatch({ type: "TOGGLE_ACCORDION", payload: index })}>
                <span className="xl:text-2xxl/56 text-lg font-normal">
                  {item.question}
                </span>

                <span className={`arrow ${state.activeIndex === index ? "active" : ""}`}>
                  {state.activeIndex === index ? (<i className="fa-solid fa-minus"></i>) : (<i className="fa-solid fa-plus"></i>)}
                </span>
              </button>

              <div ref={(el) => {
                if (el) {
                    contentRefs.current[index] = el;
                }
            }} className={`accordion-content ${state.activeIndex === index ? "active" : ""} overflow-hidden transition-all duration-500`} style={{
                maxHeight: state.activeIndex === index
                    ? state.contentHeights[index]
                    : "0px",
            }}>
                <div className="content-inner">{item.answer}</div>
              </div>
            </div>))}
        </div>
      </div>

      <Image src={IMAGES.bg6} loading="lazy" alt="" width={800} height={800} className="absolute top-[-8%] left-[-47%] -z-1 pointer-events-none"/>

      <Image src={IMAGES.bg10} loading="lazy" alt="" width={800} height={800} className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
    </section>);
}
