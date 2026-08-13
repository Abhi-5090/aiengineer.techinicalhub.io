import ClientLogo from "@/components/ClientLogo";
import ContentBox3 from "@/components/ContentBox3";
import FaqListing from "@/components/FaqListing";
import PricingTable from "@/components/PricingTable";
import ServiceBox from "@/components/ServiceBox";
import VideoBox from "@/components/VideoBox";
import ServiceBanner from "@/components/ServiceBanner";
import Seo from "@/components/common/Seo";

export default function Services() {
  return (
    <>
      <Seo title="Services" />
      <ServiceBanner />
      <VideoBox />
      <ServiceBox />
      <ContentBox3 />
      <PricingTable />
      <FaqListing />
      <ClientLogo />
    </>
  );
}
