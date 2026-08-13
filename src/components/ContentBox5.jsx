import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function ContentBox5() {
    return (<section id="Process" className="noice-overlay">
            <div className="xl:pt-150 sm:py-80 py-40">
                <div className="container">
                    <div className="grid grid-cols-12 gap-20">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="sm:mb-40 mb-20 xl:max-w-700 pxl-heading-scroll-effect">
                                <h2 className="md:text-[50px]/65 text-4xl font-semibold mb-10 heading-text">Ready to Take Your Digital Presence to the Next Level?</h2>
                                <p className="sm:text-xl text-lg">Our team of experts is here to help you navigate the digital landscape with tailored strategies that deliver measurable results. Contact us today to discuss your goals and start growing your business!</p>
                            </div>
                            <ul className="flex flex-wrap items-center">
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Email Marketing</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Search Engine Optimization (SEO)</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Website Design and Development</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Pay-Per-Click Advertising (PPC)</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Online Reputation Management (ORM)</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Social Media Marketing</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Analytics and Reporting</li>
                                <li className="sm:w-1/2 w-full relative py-4.5 ps-38 sm:text-xl text-base dark:text-bodytext text-textlight before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-24 before:leading-24 before:text-center before:text-white before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-tickbg">Content Marketing</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <Image loading="lazy" src={IMAGES.servicedetail4} alt="Service Detail"/>
                        </div>
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[50%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
