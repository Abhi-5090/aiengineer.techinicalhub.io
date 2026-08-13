import ourworkData from "@/data/ourwork.json";
import OurWorkCard from "@/components/cards/OurWork";
import ClientLogo from "@/components/ClientLogo";
import Seo from "@/components/common/Seo";

export default function Portfolio() {
  return (
    <>
      <Seo title="Portfolio" />
      <section className="main-banner overflow-hidden sm:py-160 py-120 z-0 noice-overlay">
        <div className="container">
          <div className="text-center lg:mb-100 sm:mb-80 mb-30">
            <p className="sm:text-2xl text-lg dark:text-white text-heading mb-10">Portfolio</p>
            <h2 className="sm:text-7xl/70 text-4xl font-semibold sm:mb-20 mb-10">Platforms We've Built</h2>
            <p className="sm:text-xl/30 text-base max-w-560 mx-auto">A look at the products we've designed and shipped — live platforms, in daily use, not mockups.</p>
          </div>
          <div className="grid grid-cols-12 gap-30 mt-20">
            {ourworkData.map((item, index) => (
              <div className="md:col-span-6 col-span-12" key={index}>
                <OurWorkCard ourwork={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogo />
    </>
  );
}
