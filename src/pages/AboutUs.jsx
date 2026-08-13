import AboutBanner from "@/components/AboutBanner";
import BrandLogo from "@/components/BrandLogo";
import ClientLogo from "@/components/ClientLogo";
import ContentBox2 from "@/components/ContentBox2";
import ContentSlider from "@/components/ContentSlider";
import ImageSlider from "@/components/ImageSlider";
import Seo from "@/components/common/Seo";

export default function AboutUs() {
  return (
    <>
      <Seo title="About Us" />
      <AboutBanner />
      <ContentSlider />
      <section className="noice-overlay py-60">
        <BrandLogo />
      </section>
      <ImageSlider />
      {/* AllTeamWork and BlogGridSwiper removed — both showed placeholder
      template team members / blog posts, and Team and Blog aren't linked
      from the public nav yet for the same reason (see Header.jsx). */}
      <ContentBox2 />
      <ClientLogo />
    </>
  );
}
