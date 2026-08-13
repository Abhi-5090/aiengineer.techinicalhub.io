import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
const TeamCard = ({ team }) => {
    return (<div className="project relative border-b dark:border-white/10 border-black/10 sm:px-30 px-20 group">
            <div className="box-item max-w-1320 mx-auto lg:flex justify-between items-center relative sm:py-40 py-20">
                <Image src={team.img} alt={team.name} className="mb-15 max-w-360 sm:hidden mx-auto"/>
                <div className="project-title relative z-4 flex items-baseline gap-10 lg:mb-0 mb-10 sm:justify-start justify-center">
                    <h3 className="sm:text-[40px]/70 text-xl font-medium">{team.name}</h3>
                    <span className="post inline-block">/ {team.position}</span>
                </div>
                <ul className="relative z-4 flex items-center gap-10 lg:mb-0 mb-15 sm:justify-start justify-center">
                    {team.socialLinks.map((item, index) => (<li key={index} className="inline-block lg:opacity-0 -translate-y-0.5 duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            <Link href={item.href} className="flex items-center justify-center size-40 rounded-md border lg:border-social max-lg:dark:border-white max-lg:border-social lg:text-social max-lg:dark:text-white max-lg:text-social hover:!bg-social hover:!border-social hover:!text-white max-lg:group-hover:!bg-social max-lg:group-hover:!border-social max-lg:group-hover:!text-white">
                                <i className={`fa-brands ${item.icon}`}></i>
                            </Link>
                        </li>))}
                </ul>
                <div className="relative z-4 project-categ">
                    <Link href={`/team/${team.slug}`} className="flex items-center gap-5 sm:justify-start justify-center">
                        <span>More Details</span>
                        <svg className="svg-currentcolor" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33325 14.1673L14.6666 5.83398" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.33325 5.83398H14.6666V14.1673" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="item-image absolute w-300 h-350 pointer-events-none opacity-0 z-50">
                    <div className="reveal-image position-relative h-full w-full bg-cover bg-position-center">
                    <Image loading="lazy" src={team.img} alt={team.name} width={300} height={350} className="object-cover w-auto"/>
                    </div>
                </div>
            </div>
        </div>);
};
export default TeamCard;
