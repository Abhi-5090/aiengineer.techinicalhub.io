import { useEffect } from "react";
export default function CountersBox() {
    useEffect(() => {
        const counters = document.querySelectorAll(".value");
        const speed = 200;
        const runCounter = (counter) => {
            const target = Number(counter.getAttribute("data-akhi"));
            let current = 0;
            const increment = target / speed;
            const update = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current).toString();
                    requestAnimationFrame(update);
                }
                else {
                    counter.innerText = target.toString();
                }
            };
            update();
        };
        const isInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (rect.top >= 0 &&
                rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight));
        };
        const handleScroll = () => {
            counters.forEach((counter) => {
                if (!counter.classList.contains("counted") && isInViewport(counter)) {
                    counter.classList.add("counted");
                    runCounter(counter);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (<section className="noice-overlay bg-linear-(--primary2-gradient)">
            <div className="sm:py-60 py-40">
                <div className="container">
                    <div className="hidden">
                        <h2 className="xl:text-6xl md:text-5xl text-4xl">Team</h2>
                    </div>
                    <div className="grid grid-cols-12 sm:gap-20 gap-10 counter-section">
                        <div className="sm:col-span-4 col-span-12 counter">
                            <div className="sm:py-50 py-10 sm:pe-90">
                                <div className="sm:mb-30 ">
                                    <span className="sm:text-[120px]/[1] text-7xxl text-secondary font-bold flex">
                                        <span className="value" data-akhi="15"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-20 my-10"/>
                                <p className="sm:text-xl text-lg/26 uppercase text-secondary xl:max-w-200">Years of industry experience</p>
                            </div>
                        </div>
                        <div className="sm:col-span-4 col-span-12 counter">
                            <div className="sm:py-50 py-10 sm:pe-90">
                                <div className="sm:mb-30">
                                    <span className="sm:text-[120px]/[1] text-7xxl text-secondary font-bold flex">
                                        <span className="value" data-akhi="20"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-20 my-10"/>
                                <p className="sm:text-xl text-lg/26 uppercase text-secondary xl:max-w-200">brands elevated last year</p>
                            </div>
                        </div>
                        <div className="sm:col-span-4 col-span-12 counter">
                            <div className="sm:py-50 py-10 sm:pe-90">
                                <div className="sm:mb-30">
                                    <span className="sm:text-[120px]/[1] text-7xxl text-secondary font-bold flex">
                                        <span className="value" data-akhi="90"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-20 my-10"/>
                                <p className="sm:text-xl text-lg/26 uppercase text-secondary xl:max-w-200">Percent clarity in every project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
