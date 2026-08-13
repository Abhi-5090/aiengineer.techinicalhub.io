import { useParams } from "react-router-dom";
import serviceData from "@/data/servicebox.json";
import Link from "@/components/common/Link";
import ServiceDetailBanner from "@/components/ServiceDetailBanner";
import ClientLogo from "@/components/ClientLogo";
import BrandLogo from "@/components/BrandLogo";
import ContentBox4 from "@/components/ContentBox4";
import BoxWrapper from "@/components/BoxWrapper";
import ContentBox5 from "@/components/ContentBox5";
import FaqListing1 from "@/components/FaqListing1";
import Seo from "@/components/common/Seo";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="noice-overlay relative bg-linear-(--banner-gradient) pt-150">
      <Seo title={service.title} description={service.excerpt} canonical={`/services/${service.slug}`} />
      <div className="dark:bg-bodybg bg-white">
        <div className="container z-10 my-sticky 3xl:block hidden sidebar-sticky top-[45%]">
          <div className="w-full absolute">
            <ul className="sidebar-sticky-wrap transform 4xl:translate-x-[-213px] translate-x-[-130px] pt-100 flex flex-col items-start">
              <li className="inline-block">
                <Link href="#creativedesign" className="mb-5 text-base dark:text-[#273e27] text-black/60 duration-500 hover:text-black dark:hover:text-white">Creative Design</Link>
              </li>
              <li className="inline-block">
                <Link href="#partner" className="mb-5 text-base dark:text-[#273e27] text-black/60 duration-500 hover:text-black dark:hover:text-white">Partner</Link>
              </li>
              <li className="inline-block">
                <Link href="#Comprehensive" className="mb-5 text-base dark:text-[#273e27] text-black/60 duration-500 hover:text-black dark:hover:text-white">Comprehensive</Link>
              </li>
              <li className="inline-block">
                <Link href="#Process" className="mb-5 text-base dark:text-[#273e27] text-black/60 duration-500 hover:text-black dark:hover:text-white">Process</Link>
              </li>
              <li className="inline-block">
                <Link href="#faq" className="mb-5 text-base dark:text-[#273e27] text-black/60 duration-500 hover:text-black dark:hover:text-white">FAQ's</Link>
              </li>
            </ul>
          </div>
        </div>
        <ServiceDetailBanner service={service} />

        <section className="py-100 noice-overlay">
          <BrandLogo />
        </section>

        <ContentBox4 />
        <BoxWrapper />
        <ContentBox5 />
        <FaqListing1 />
        <ClientLogo />
      </div>
    </div>
  );
}
