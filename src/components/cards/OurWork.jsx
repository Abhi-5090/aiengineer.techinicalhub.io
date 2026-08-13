import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
const OurWorkCard = ({ ourwork }) => {
    return (<div className="panel xl:min-w-[560px] max-xl:col-span-6 max-md:col-span-12 xl:shrink-0 h-full flex justify-center items-center">
            <div className="relative overflow-hidden rounded-sm group after:content-[''] after:absolute after:size-full after:top-0 after:left-0 after:bg-black xl:after:opacity-0 after:duration-700 xl:hover:after:opacity-70 after:z-0 after:opacity-70">
                <div className="media aspect-video w-full xl:w-[560px]">
                    <Image loading="lazy" src={ourwork.img} alt={ourwork.title} width={750} height={600} className="size-full object-cover"/>
                </div>
                <div className="absolute duration-700 xl:top-full xl:group-hover:top-1/2 top-1/2 left-1/2 transform xl:translate-y-0 xl:group-hover:-translate-y-1/2 -translate-y-1/2 -translate-x-1/2 text-center z-1 px-15 max-w-500 w-full">
                    <Link href={`/portfolio/${ourwork.slug}`} className="flex xl:size-150 sm:size-100 size-60 justify-center items-center rounded-full bg-linear-(--btn-gradient) xl:mb-40 mb-10 mx-auto group/second magneticBtn">
                        <span className="overflow-hidden inline-flex">
                            <svg className="group-hover/second:animate-toTopFromBottom xl:size-76 sm:size-60 size-40" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.375 53.625L53.625 22.375" stroke="#1C1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.375 22.375H53.625V53.625" stroke="#1C1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </Link>
                    <h3 className="sm:text-[35px]/[45px] text-2xl/30 font-medium text-center text-white">{ourwork.title}</h3>
                </div>
            </div>
        </div>);
};
export default OurWorkCard;
