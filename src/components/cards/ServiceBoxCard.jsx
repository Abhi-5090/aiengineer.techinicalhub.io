import Link from "@/components/common/Link";
const ServcieBoxCard = ({ service }) => {
    return (<div className="benefit-card md:col-span-4 col-span-12">
            <div className="card h-full rounded card-img-hover">
                <div className="xl:p-50 p-30 relative flex flex-col h-full">
                    <div className="flex-1">
                        <span className="inline-block py-2 px-15 text-sm/ font-medium bg-primary text-secondary rounded-2xl md:mb-15 mb-10 duration-500 hover:bg-white hover:text-secondary">{service.tag}</span>
                        <h3 className="sm:text-[30px]/45 text-2xl md:mb-32 mb-15 text-white">
                            <Link className="hover:text-primary" href={`/services/${service.slug}`}>{service.title}</Link>
                        </h3>
                        <ul className="text-bodytext font-medium">
                                {service.features.map((item, i) => (<li key={i} className="mb-11 ps-36 relative after:content-[''] after:absolute after:block after:top-1/2 after:-translate-y-1/2 after:left-0 after:size-full after:bg-check after:bg-no-repeat">{item}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
};
export default ServcieBoxCard;
