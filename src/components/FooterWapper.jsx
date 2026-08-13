import { useLocation } from "react-router-dom";
import Footer from "./Footer";
export default function FooterWrapper() {
    const pathname = useLocation().pathname;
    if (pathname === "/coming-soon" ||
        pathname === "/error-404" ||
        pathname === "/under-construction" ||
        pathname === "/contact-us") {
        return null;
    }
    return <Footer />;
}
