import Image from "@/components/common/Image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IMAGES } from "@/utils/constants";
import Button from "./Button";
import LightGallery from 'lightgallery/react';
export default function IsotopeBox() {
    return (<>
            <section className="xxl:pb-120 sm:pb-50 pb-30">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-30 gap-10">
                        <div className="lg:col-span-8 col-span-12 portfolio relative">
                            <div className="mb-40">
                                <h1 className="md:text-5xl text-4xl font-semibold sm:mb-35 mb-15">UI/UX Design</h1>
                                <p className="text-lg font-normal max-w-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat sagittis, faucibus in dui convallis. Id dignissim eu aliquet arcu viverra viverra at erat phasellus feugiat vitae magna diam a, dui, ipsum enim praesent ornare auctor libero nascetur commodo ipsum euismod.</p>
                            </div>	
                            <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]} elementClassNames="masonry-gallery masonry-grid row">
                                    <div className="card-container md:w-[60%] w-full mb-30" data-src="/images/gallery/image1.png">
                                        <div className="relative overflow-hidden group ">
                                            <div>
                                                <Image loading="lazy" src={IMAGES.image1} className="w-full md:h-400 object-cover rounded-2lg" width={400} height={300} alt="Image 1"/>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <div className="text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <a href="/images/gallery/image1.png" className="bg-secondary/50 size-50 flex items-center justify-center lg-item text-white text-3xl">
                                                        <i className="ti-fullscreen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-container md:w-[40%] w-full mb-30" data-src="/images/gallery/image2.png">
                                        <div className="relative overflow-hidden group">
                                            <div>
                                                <Image loading="lazy" src={IMAGES.image2} className="w-full md:h-330 object-cover rounded-2lg" alt="Image 2" width={322} height={330}/>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <div className="text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <a href="/images/gallery/image2.png" className="bg-secondary/50 size-50 flex items-center justify-center lg-item text-white text-3xl">
                                                        <i className="ti-fullscreen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="card-container md:w-[60%] w-full mb-30" data-src="/images/gallery/image3.png">
                                        <div className="relative overflow-hidden group">
                                            <div>
                                                <Image loading="lazy" src={IMAGES.image3} className="w-full md:h-260 object-cover rounded-2lg" alt="Image 3"/>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <div className="text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <a href="/images/gallery/image3.png" className="bg-secondary/50 size-50 flex items-center justify-center lg-item text-white text-3xl">
                                                        <i className="ti-fullscreen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="card-container md:w-[40%] w-full mb-30 md:!-mt-78" data-src="/images/gallery/image4.png">
                                        <div className="relative overflow-hidden group dlab-img-overlay1">
                                            <div>
                                                <Image loading="lazy" src={IMAGES.image4} className="w-full md:h-330 object-cover rounded-2lg" alt="Image 4" width={400} height={300}/>
                                            </div>
                                            <div className="absolute left-0 bottom-0 size-full text-center z-10 lg:opacity-0 lg:invisible duration-[0.2s] group-hover:opacity-100 group-hover:visible">
                                                <div className="text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <a href="/images/gallery/image4.png" className="bg-secondary/50 size-50 flex items-center justify-center lg-item text-white text-3xl">
                                                        <i className="ti-fullscreen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="card-container w-full mb-30" data-src="/images/gallery/image5.png">
                                        <div className="relative overflow-hidden group">
                                            <div>
                                                <Image loading="lazy" src={IMAGES.image5} className="w-full md:h-550 object-cover rounded-2lg" alt="Image 5" width={400} height={300}/>
                                            </div>
                                            <div className="absolute left-0 bottom-0 size-full text-center z-10 lg:opacity-0 lg:invisible duration-[0.2s] group-hover:opacity-100 group-hover:visible">
                                                <div className="text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <a href="/images/gallery/image5.png" className="bg-secondary/50 size-50 flex items-center justify-center lg-item text-white text-3xl">
                                                        <i className="ti-fullscreen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </LightGallery>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <div className="my-sticky !top-0">
                                <div className="dark:bg-white/10 bg-black/10 rounded-2lg xl:p-40 sm:pb-60 p-30 max-md:mt-20">
                                    <h2 className="text-2xl/28 font-semibold mb-20">Contact</h2>
                                    <p className="text-base font-medium mb-20">Get in touch with us to know more details about this property</p>
                                    <form className="dz-form dzForm">
                                        <input type="hidden" className="py-11 text-lg border-b-2 border-[#383B3F] placeholder:text-bodytext text-bodytext h-50 w-full" name="dzToDo" value="Contact"/>
                                        <input type="hidden" className="py-11 text-lg border-b-2 border-[#383B3F] placeholder:text-bodytext text-bodytext h-50 w-full" name="reCaptchaEnable" value="0"/>
                                        <div className="dzFormMsg"></div>
                                        <div className="row">
                                            <div className="w-full">
                                                <div className="mb-30">
                                                    <label htmlFor="fullname" className="block font-semibold dark:text-white">Full name*</label>
                                                    <input required type="text" name="dzName" id="fullname" placeholder="John carter" className="py-11 text-lg border-b-2 border-[#383B3F] dark:placeholder:text-bodytext placeholder:text-black/40 dark:text-bodytext h-50 w-full outline-none"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="mb-30">
                                                    <label htmlFor="emailaddress" className="block font-semibold dark:text-white">Email address*</label>
                                                    <input required type="email" name="dzEmail" id="emailaddress" placeholder="info@example.com" className="py-11 text-lg border-b-2 border-[#383B3F] dark:placeholder:text-bodytext placeholder:text-black/40 dark:text-bodytext h-50 w-full outline-none"/>

                                                </div>
                                            </div>
                                            <div className="w-full mb-40">
                                                <div>
                                                    <label htmlFor="Phone" className="block font-semibold dark:text-white">Phone*</label>
                                                    <input required type="number" name="dzPhoneNumber" id="Phone" placeholder="(123) 456 7890" className="py-11 text-lg border-b-2 border-[#383B3F] dark:placeholder:text-bodytext placeholder:text-black/40 dark:text-bodytext h-50 w-full outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <Button label="Submit Now" type="primary" button/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="dark:bg-white/10 bg-black/10 rounded-2lg xl:p-40 sm:pb-60 p-30 mt-40">
                                    <div className="text-center">
                                        <Image loading="lazy" src={IMAGES.avatarimage1} alt="Avatar Image 1" className="mb-20 mx-auto"/>
                                        <h3 className="text-2xl font-medium dark:text-white">Ethan Brooks</h3>
                                        <p className="text-base">Agent</p>
                                    </div>
                                    <div className="mx-auto mt-27">
                                        <div className="flex flex-wrap justify-center text-center gap-10">
                                            <a href="tel:+1(123)456-78-90" className="bg-black text-white rounded-full flex items-center justify-center gap-10 py-15 px-20 text-lg">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_381_5899)">
                                                <path d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_381_5899">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                                +1 (123) 456-78-90
                                            </a>
                                            <a href="mailto:info@example.com" className="bg-black text-white rounded-full flex items-center justify-center gap-10 py-15 px-20 text-lg">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16.5 5.25L9.7725 9.525C9.54095 9.67007 9.27324 9.74701 9 9.74701C8.72676 9.74701 8.45905 9.67007 8.2275 9.525L1.5 5.25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                info@example.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className="container">
                    <div className="flex items-center justify-between border-y dark:border-white/10 border-black/10">
                        <div className="border-r dark:border-white/10 border-black/10 flex-1">
                            <div className="flex items-center sm:px-15 sm:py-25 pr-10 py-5 justify-start">
                                <a href="#" className="text-lg font-medium dark:text-white flex items-center py-4">
                                <svg className="mr-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:stroke-white" d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="dark:stroke-white" d="M12 5L5 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg><span className="max-md:hidden">Next</span></a>
                                <Image loading="lazy" className="rounded-sm mx-13 max-md:hidden" src={IMAGES.creativity1} alt="Mobile app design"/>
                                <div className="py-5">
                                    <h2 className="dark:text-white font-medium sm:text-xl text-sm">Mobile app design</h2>
                                    <span className="dark:text-white/40 text-black/40 font-medium sm:text-sm text-[12px]">Design - 2026</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center sm:px-15 sm:py-25 pr-10 py-5 justify-end">
                                <div className="py-5 text-right">
                                    <h2 className="dark:text-white font-medium sm:text-xl text-sm">Mobile app design</h2>
                                    <span className="dark:text-white/40 text-black/40 font-medium sm:text-sm text-[12px] float-right">Design - 2026</span>
                                </div>
                                <Image loading="lazy" className="rounded-sm mx-13 max-md:hidden" src={IMAGES.creativity2} alt="Mobile app design"/>
                                <a href="#" className="text-lg font-medium dark:text-white flex items-center py-4"><span className="max-md:hidden">Preview</span>
                                    <svg className="ml-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="dark:stroke-white" d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path className="dark:stroke-white" d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
