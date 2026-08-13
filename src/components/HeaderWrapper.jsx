import { useLocation } from "react-router-dom";
import Header from "./Header";
export default function HeaderWrapper() {
    const pathname = useLocation().pathname;
    if (pathname === "/faq" ||
        pathname === "/portfolio" ||
        pathname === "/services" ||
        pathname.includes("/team") ||
        pathname.includes("/blog")) {
        return <Header light/>;
    }
    if (pathname === "/" ||
        pathname === "/home" ||
        pathname === "/contact-us" ||
        pathname === "/coming-soon" ||
        pathname === "/under-construction" ||
        pathname === "/error-404") {
        return null;
    }
    return <Header />;
}
