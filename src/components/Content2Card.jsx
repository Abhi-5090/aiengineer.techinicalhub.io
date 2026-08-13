import Image from "@/components/common/Image";
import Button from "./Button";
const Content2Card = ({ content }) => {
    return (<div className="content--sticky xl:sticky lg:top-0 dark:bg-card bg-[#24262B]">
            <div className="grid grid-cols-12 xl:gap-20">
                <div className="xl:col-span-6 col-span-12">
                    <div className="relative z-1 h-full">
                        <div className="overflow-hidden xl:h-auto sm:h-600 h-300">
                            <Image loading="lazy" src={content.image} alt={content.title} className="content-img size-full object-cover" height={945} width={795}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="3xl:ps-112 3xl:pe-282 px-15 xl:pt-141 xl:pb-120 py-30 flex flex-col h-full">
                        <div className="flex-1">
                            <h2 className="lg:text-5xl/65 text-4xl mb-10 text-white">
                                {content.title}
                            </h2>
                            <p className="sm:text-xl text-lg/30 text-bodytext mb-10">{content.description}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-18">
                            <Button label="Join our Team" href="/team" type="primary"/>
                            <div className="flex items-center gap-14">
                                <div>
                                    {content.avatars.map((item, i) => (<Image key={i} src={item} loading="lazy" alt="avatar" className="inline-block sm:size-60 size-40 -me-13 last:me-0 rounded-full border-2 border-card relative object-cover duration-500 hover:z-1" height={60} width={60}/>))}
                                </div>
                                <div>
                                    <span className="sm:text-xl text-base text-white block"><strong className="font-bold">2.5k</strong> client in</span>
                                    <span className="sm:text-xl text-base text-white block">the world</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default Content2Card;
