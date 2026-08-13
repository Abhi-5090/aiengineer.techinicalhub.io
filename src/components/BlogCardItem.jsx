import blogData from '@/data/blog.json';
import { IMAGES } from '@/utils/constants';
import Image from '@/components/common/Image';
import BlogListCard from './cards/BlogListCard';
import { useState } from 'react';
const LIMIT = 9;
export default function BlogCardItem() {
    const [visibleCount, setVisibleCount] = useState(LIMIT);
    const loadMore = () => {
        setVisibleCount((prev) => prev + LIMIT);
    };
    const visibleBlogs = blogData.slice(0, visibleCount);
    const hasMore = visibleCount < blogData.length;
    return (<section className="noice-overlay">
            <div className="lg:pt-100 sm:pt-80 sm:pb-200 py-50">
                <div className="container">
                    <div className="grid grid-cols-12 gap-20 loadmore-content">
                        {visibleBlogs.map((item, index) => (<BlogListCard key={index} blog={item}/>))}
                    </div>
                    <div className="grid grid-cols-12 gap-20 sm:mt-50 mt-20">
                        {hasMore && (<div className="col-span-12 text-center">
                            <button type="button" onClick={loadMore} className="btn btn-outline light ms-auto p-2 group button--stroke flairBtn magneticBtn dz-load-more cursor-pointer" data-block="button">
                                <span className="button-flair"></span>
                                <span className="button__label group-hover:text-black group-hover:dark:text-white font-semibold xl:ps-25 px-10 inline-flex items-center gap-14">Load more</span>
                                <span className="inline-flex justify-center items-center size-32 rounded-full dark:bg-primary bg-dark duration-100  z-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_572_9501)">
                                        <path className="dark:stroke-dark stroke-white duration-100" d="M19.167 3.33325V8.33325H14.167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="dark:stroke-dark stroke-white duration-100" d="M0.833008 16.6667V11.6667H5.83301" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="dark:stroke-dark stroke-white duration-100" d="M2.92467 7.49998C3.34731 6.30564 4.06562 5.23782 5.01256 4.39616C5.95951 3.55451 7.10423 2.96645 8.33991 2.68686C9.5756 2.40727 10.862 2.44527 12.079 2.79729C13.296 3.14932 14.4041 3.80391 15.2997 4.69998L19.1663 8.33331M0.833008 11.6666L4.69967 15.3C5.5953 16.1961 6.70332 16.8506 7.92035 17.2027C9.13738 17.5547 10.4238 17.5927 11.6594 17.3131C12.8951 17.0335 14.0398 16.4455 14.9868 15.6038C15.9337 14.7621 16.652 13.6943 17.0747 12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_572_9501">
                                        <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                        </div>)}
                    </div>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[10%] left-[-47%] -z-1"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-10%] right-[0%] max-xl:w-[60%] -z-1"/>
        </section>);
}
