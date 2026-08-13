import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import BlogGridCard from "./cards/BlogGridCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import blogData from "@/data/blogswiper.json";
export default function BlogGridSwiper() {
    return (<section className="noice-overlay">
            <div className="3xl:pb-197 lg:py-80 pb-50 md:pt-30">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-88 gap-10 items-center lg:mb-73 mb-40">
                        <div className="lg:col-span-9 sm:col-span-10 col-span-12">
                            <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 sm:gap-20 gap-10 pxl-heading-scroll-effect">
                                <h2 className="xl:text-7xl/80 md:text-5xl text-4xl heading-text">
                                    <span className="xl:block">Our latest</span> blog & article
                                </h2>
                                <div className="max-w-340">
                                    <p className="sm:text-xl text-lg/30">Explore our latest blog and articles for expert insights on web design, SEO, and digital trends.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 sm:col-span-2 col-span-12">
                            <Link href="/blog" className="lg:size-129 sm:size-100 size-70 sm:p-15 p-8 flex items-center justify-center rounded-full bg-card text-primary border border-primary lg:text-lg/20 sm:text-base text-xs gradient-hover sm:ms-auto magneticBtn">
                                <span className="text-center">
                                    View All Post
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Swiper className="blog-swiper" modules={[Autoplay]} slidesPerView={3} spaceBetween={30} loop={true} autoplay={{ delay: 3000 }} breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}>
                        {blogData.map((item, index) => (<SwiperSlide key={index}>
                            <BlogGridCard blogswiper={{
                ...item,
                publishedAt: item.publishedAt || item.date || ''
            }}/>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-50%] left-[-47%] -z-1 pointer-events-none"/>
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-40%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none"/>
        </section>);
}
