import Image from "@/components/common/Image";
import Button from "@/components/Button";
const BlogCard = ({ project }) => {
    return (<div className="lg:col-span-12 md:col-span-6 col-span-12 stackCard xl:mb-20">
            <div className="card">
                <div className="lg:flex p-10">
                    <div className="flex flex-col lg:p-35 p-15">
                        <h4 className={`text-[30px]/35 mb-20 text-white ${project.titleLines ? "text-center" : ""}`}>
                            {project.titleLines
                                ? project.titleLines.map((line, i) => (
                                    <span key={i} className={`block ${line.className ?? ""}`}>
                                        {line.text}
                                    </span>
                                ))
                                : project.title}
                        </h4>
                        <p className="mb-6 text-white/50">{project.excerpt}</p>
                        <div className="mt-auto pt-15">
                            <Button label="Visit" href={project.link} target="_blank" type="primary"/>
                        </div>
                    </div>
                    <div className="rounded-lg lg:min-w-340 h-full overflow-hidden">
                        <Image loading="lazy" src={project.img} alt={project.title} className="size-full object-cover object-[center_65%]" height={340} width={300}/>
                    </div>
                </div>
            </div>
        </div>);
};
export default BlogCard;
