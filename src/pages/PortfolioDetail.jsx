import { useParams } from "react-router-dom";
import ourworkData from "@/data/ourwork.json";
import Image from "@/components/common/Image";
import Button from "@/components/Button";
import ClientLogo from "@/components/ClientLogo";
import Seo from "@/components/common/Seo";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const ourwork = ourworkData.find((item) => item.slug === slug);

  if (!ourwork) {
    return <div>Our work not found</div>;
  }

  return (
    <>
      <Seo title={ourwork.title} description={ourwork.excerpt} canonical={`/portfolio/${ourwork.slug}`} />
      <div className="main-banner overflow-hidden z-0 h-full">
        <div className="container-full">
          <div className="relative after:content-[''] after:absolute after:-bottom-200 after:left-0 after:w-700 after:h-700 after:bg-black after:blur-[308px]">
            <div className="sm:min-h-600 h-full">
              <Image loading="lazy" src={ourwork.img} alt={ourwork.title} className="size-full object-cover sm:min-h-600 min-h-300 duration-1000 scale-200 image-zoom" />
            </div>
          </div>
        </div>
      </div>
      <section className="lg:pt-133 pt-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-30">
            <div className="lg:col-span-7 col-span-12">
              <span className="inline-block py-2 px-15 text-sm font-medium bg-primary text-secondary rounded-2xl mb-20">{ourwork.category}</span>
              <h3 className="text-[31px]/[65px] font-semibold capitalize">About {ourwork.title}</h3>
              <p className="text-xl font-normal mb-30">{ourwork.description}</p>
              <h5 className="text-2xl dark:text-white font-semibold mb-25">Key Features</h5>
              <ul className="grid sm:grid-cols-2 grid-cols-1 gap-16">
                {ourwork.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-base font-normal dark:text-white/80 text-black/70 ps-30 relative before:content-[''] before:absolute before:left-0 before:top-8 before:size-8 before:rounded-full before:bg-primary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 sm:col-span-8 col-span-12">
              <div className="sm:p-40 p-20 sm:pb-40 dark:bg-white/10 bg-black/10 rounded-2lg xl:ml-170 lg:ml-50 max-lg:mt-30">
                <h3 className="text-2xl/35 font-semibold capitalize dark:text-white text-black mb-27">Project Details</h3>
                <ul>
                  <li>
                    <ul className="flex items-center border-b border-black/10 dark:border-white/10 py-10">
                      <li className="capitalize text-base font-medium w-1/2 dark:text-white">Category</li>
                      <li className="capitalize text-base font-normal dark:text-white/50 text-[#333] text-left w-1/2">{ourwork.category}</li>
                    </ul>
                    <ul className="flex items-center border-b border-black/10 dark:border-white/10 py-10">
                      <li className="capitalize text-base font-medium w-1/2 dark:text-white">Status</li>
                      <li className="capitalize text-base font-normal dark:text-white/50 text-[#333] text-left w-1/2">Live</li>
                    </ul>
                    <ul className="flex items-center py-10">
                      <li className="capitalize text-base font-medium w-1/2 dark:text-white">Platform</li>
                      <li className="capitalize text-base font-normal dark:text-white/50 text-[#333] text-left w-1/2">Web</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-27">
                  <Button label="Visit Website" href={ourwork.link} target="_blank" type="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientLogo />
    </>
  );
}
