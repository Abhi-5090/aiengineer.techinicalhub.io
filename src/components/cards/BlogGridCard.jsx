import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
const BlogGridCard = ({ blogswiper }) => {
    return (<div className="group blog-card">
            <div className="mb-30 overflow-hidden">
                <Image loading="lazy" src={blogswiper.image} alt={blogswiper.title} className="size-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-3" height={406} width={457}/>
            </div>
            <div className="flex items-center justify-between">
                <div className="">
                    <h4 className="text-2xxl/35 mb-5">{blogswiper.title}</h4>
                    <ul>
                        <li className="text-base/16 dark:text-bodytext text-textlight pe-10 inline-block relative before:content-[''] before:absolute before:h-1 before:w-10 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden dark:before:bg-bodytext before:bg-textlight">{blogswiper.publishedAt}</li>
                        <li className="text-base/16 dark:text-bodytext text-textlight ps-20 inline-block relative before:content-[''] before:absolute before:h-1 before:w-10 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden dark:before:bg-bodytext before:bg-textlight">By {blogswiper.author}</li>
                    </ul>
                </div>
                <Link href={`/blog/${blogswiper.slug}`} className="size-60 min-w-60 flex items-center justify-center rounded-full dark:bg-white bg-dark transform xl:-translate-x-full xl:rotate-[-360deg] xl:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden group/second">
                    <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="dark:stroke-black stroke-white" d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="dark:stroke-black stroke-white" d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>);
};
export default BlogGridCard;
