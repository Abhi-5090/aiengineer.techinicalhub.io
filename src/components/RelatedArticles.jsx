import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import blogData from "@/data/blogswiper.json";
import { IMAGES } from "@/utils/constants";
export default function RelatedArticles() {
    return (<section className="noice-overlay z-2">
            <div className="lg:py-152 py-80">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-88 gap-10 items-center lg:mb-73 mb-40">
                        <div className="lg:col-span-9 sm:col-span-10 col-span-12">
                            <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 sm:gap-20 gap-10 pxl-heading-scroll-effect">
                                <h2 className="xl:text-7xl/80 md:text-5xl text-4xl heading-text">
                                    More Related Articles
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
                        <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} navigation breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }} className="blog-swiper">
                        {blogData.map((post, index) => (<SwiperSlide key={index}>
                            <div className="group">
                            <div className="mb-30 overflow-hidden">
                                <Image src={post.image} alt={post.title} width={600} height={400} className="w-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-3"/> 
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                <h4 className="text-2xxl/35 mb-5">{post.title}</h4>
                                <ul>
                                    <li className="text-base/16 dark:text-bodytext text-textlight pe-10 inline-block relative before:content-[''] before:absolute before:h-1 before:w-10 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden dark:before:bg-bodytext before:bg-textlight">
                                    {post.date}
                                    </li>
                                    <li className="text-base/16 dark:text-bodytext text-textlight ps-20 inline-block relative before:content-[''] before:absolute before:h-1 before:w-10 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden dark:before:bg-bodytext before:bg-textlight">
                                    {post.author}
                                    </li>
                                </ul>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="size-60 min-w-60 flex items-center justify-center rounded-full dark:bg-white bg-dark transform xl:-translate-x-full xl:rotate-[-360deg] xl:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden group/second">
                                <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="dark:stroke-black stroke-white" d="M7.5 17L17.5 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path className="dark:stroke-black stroke-white" d="M7.5 7H17.5V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </Link>
                            </div>
                            </div>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <Image src={IMAGES.bg6} loading="lazy" alt="bg image" className="absolute top-[-50%] left-[-47%] -z-1"/>
            <Image src={IMAGES.bg10} loading="lazy" alt="bg image" className="absolute bottom-[-40%] right-[0%] max-xl:w-[60%] -z-1"/>
        </section>);
}
