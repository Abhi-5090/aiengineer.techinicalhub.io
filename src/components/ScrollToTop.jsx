import { useEffect, useState } from "react";
export default function ScrollToTop() {
    const [scroll, setScroll] = useState(0);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScroll(scrolled);
            setVisible(winScroll > 200);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<button onClick={scrollToTop} className={`fixed z-999 right-20 bottom-20 size-40 rounded-full
  dark:bg-white cursor-pointer dark:text-black bg-bodybg text-white
  duration-500 flex items-center justify-center
  ${visible
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-0 pointer-events-none"}
  `}>
      <svg className="w-full h-full pointer-events-none absolute top-0 left-0 -rotate-90">
        <circle cx="20" cy="20" r="17" className="stroke-white dark:stroke-black" strokeWidth="2" fill="none" strokeDasharray="125" strokeDashoffset={125 - (125 * scroll) / 100} strokeLinecap="round"/>
      </svg>
      <span className="icon text-xs relative z-1"><i className="fa-solid fa-chevron-up"></i></span>
    </button>);
}
