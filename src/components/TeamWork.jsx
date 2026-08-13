import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function TeamWork() {
    return (<section className="main-banner overflow-hidden lg:pt-205 sm:pt-160 pt-120 lg:pb-160 sm:pb-80 pb-40 z-0 noice-overlay">
            <div className="container-lg">
                <div className="grid grid-cols-12 gap-20">
                    <div className="lg:col-span-7 col-span-12">
                        <div className="xl:ps-160 xl:pe-100">
                            <h2 className="xl:text-7xl/80 md:text-5xl text-4xl sm:mb-40 mb-20 font-medium ">Teamwork Unlocks Boundless Potential</h2>
                            <div className="flex gap-12 mb-30 md:flex-row flex-col ">
                                <div className="min-w-90">
                                    <p className="text-lg/28 font-normal dark:text-white text-dark">Team</p>
                                </div>
                                <div className="min-w-80 h-1 md:mt-15 dark:bg-white bg-textlight"></div>
                                <div className="md:ps-40">
                                    <p className="sm:text-xl text-lg/28 font-normal dark:text-bodytext text-textlight">Welcome to the space where creativity knows no bounds. Our agency is a hub of innovation, collaboration, and artistry, dedicated to crafting unforgettable campaigns that resonate and inspire.</p>
                                </div>
                            </div>
                            <div className="">
                                <Image loading="lazy" src={IMAGES.bannerpic2} alt="Banner Picture 2" className="w-full"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12">
                        <div className="md:ps-40">
                            <div className="relative max-w-530">
                                <div className="flex items-center justify-star">
                                    <Image loading="lazy" src={IMAGES.team4} alt="Team Member 4" className="sm:w-auto w-1/2"/>
                                </div>
                                <div className="flex items-center justify-end sm:-mt-180 -mt-90 sm:ms-0 -ms-40">
                                    <Image loading="lazy" src={IMAGES.team2} alt="Team Member 2" className="sm:w-auto w-1/2"/>
                                </div>
                                <div className="flex items-center justify-start -mt-90 relative ">
                                    <Image loading="lazy" src={IMAGES.team3} alt="Team Member 3" className="sm:w-auto w-1/2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="Background 6" className="absolute top-[-8%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="Background 10" className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
