import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import OurWork from "@/components/OurWork";
import ProgramSessions from "@/components/ProgramSessions";
import ProgramModules from "@/components/ProgramModules";
import ServiceBox from "@/components/ServiceBox";
import MarqueeList from "@/components/MarqueeList";
import ContentBox from "@/components/ContentBox";
import BlogSection from "@/components/BlogSection";
import AppointmentForm from "@/components/AppointmentForm";
import ClientLogo from "@/components/ClientLogo";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <OurWork />
      <ProgramSessions />
      <ProgramModules />
      <ServiceBox />
      <MarqueeList />
      <ContentBox />
      <BlogSection />
      <AppointmentForm />
      <ClientLogo />
    </>
  );
}
