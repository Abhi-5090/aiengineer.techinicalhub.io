import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import ThemeProvider from "@/providers/ThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import RouteLoader from "@/components/RouteLoader";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterWrapper from "@/components/FooterWapper";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Portfolio from "@/pages/Portfolio";
import PortfolioDetail from "@/pages/PortfolioDetail";
import Team from "@/pages/Team";
import TeamDetail from "@/pages/TeamDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Faq from "@/pages/Faq";
import ContactUs from "@/pages/ContactUs";
import ComingSoon from "@/pages/ComingSoon";
import UnderConstruction from "@/pages/UnderConstruction";
import ErrorPage from "@/pages/ErrorPage";

function RouteScrollReset() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <RouteLoader />
      <LenisProvider>
        <RouteScrollReset />
        <HeaderWrapper />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<TeamDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/error-404" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <FooterWrapper />
        <ScrollToTop />
      </LenisProvider>
    </ThemeProvider>
  );
}
