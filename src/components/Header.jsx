import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { clsx } from "clsx";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useReducer } from "react";
import Button from "./Button";
import { useTheme } from "@/providers/ThemeProvider";
const Menu = [
    { title: "Home", link: "/home" },
    {
        title: "Pages",
        link: "/",
        submenu: [
            { title: "About Us", link: "/about-us" },
            { title: "FAQs", link: "/faq" },
            { title: "Error-404", link: "/error-404" },
            { title: "Under Construction", link: "/under-construction" },
            { title: "Coming Soon", link: "/coming-soon" },
        ],
    },
    {
        title: "Portfolio",
        link: "/",
        submenu: [
            { title: "Portfolio", link: "/portfolio" },
            { title: "Portfolio Detail", link: "/portfolio/torii" },
        ],
    },
    {
        title: "Service",
        link: "/services",
        submenu: [
            { title: "Service", link: "/services" },
            { title: "Service Detail", link: "/services/ai-ready-engineer-benefits" },
        ],
    },
    // Team and Blog are unlinked for now — both still show placeholder
    // template content (fake team bios, fake blog authors) that hasn't been
    // replaced with anything real yet. The routes themselves still exist,
    // just not reachable from this nav.
    { title: "Let’s talk", link: "/home" },
];
const headerReducer = (state, action) => {
    switch (action.type) {
        case "SET_STICKY":
            // Bail out when the value hasn't actually changed — useLenis's
            // effect re-invokes its callback on every render it fires (see
            // lenis-react's useLenis), so without this check every one of
            // those calls would produce a new state object and force another
            // render, which in turn reruns that effect: an infinite loop.
            if (state.isSticky === action.payload)
                return state;
            return { ...state, isSticky: action.payload };
        case "TOGGLE_MENU":
            return { ...state, open: action.payload ?? !state.open };
        default:
            return state;
    }
};
export default function Header({ light, logoLight }) {
    const [state, dispatch] = useReducer(headerReducer, {
        isSticky: false,
        open: false,
    });
    const { toggleTheme } = useTheme();
    const { isSticky, open } = state;
    // Stable reference: useLenis reruns its subscription effect (and calls
    // this callback immediately) whenever the callback identity changes, so
    // an inline arrow function here would resubscribe — and fire — on every
    // single render.
    const handleLenisScroll = useCallback((lenis) => {
        if (!lenis)
            return;
        dispatch({ type: "SET_STICKY", payload: lenis.scroll > 50 });
    }, []);
    useLenis(handleLenisScroll);
    const fullSidenavRef = useRef(null);
    useEffect(() => {
        const el = fullSidenavRef.current;
        if (!el)
            return;
        const handleClick = (e) => {
            const target = e.target;
            const link = target.closest("a");
            if (!link || !el.contains(link))
                return;
            const subMenu = link.nextElementSibling;
            if (!subMenu || !subMenu.classList.contains("sub-menu"))
                return;
            e.preventDefault();
            const isOpen = link.classList.contains("dz-open");
            el.querySelectorAll("a.dz-open").forEach((l) => {
                l.classList.remove("dz-open");
                const m = l.nextElementSibling;
                if (m)
                    m.style.maxHeight = "";
            });
            if (!isOpen) {
                link.classList.add("dz-open");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        };
        el.addEventListener("click", handleClick);
        return () => el.removeEventListener("click", handleClick);
    }, []);
    return (<>
      <div onClick={() => dispatch({ type: "TOGGLE_MENU", payload: false })} className={clsx("bg-gray-900/50 fixed inset-0 z-40 drawer-backdrop transition-opacity duration-300 lg:pointer-events-none", open ? "!opacity-100 !visible" : "opacity-0 invisible")}/>

      <header className={clsx("fixed top-0 left-0 w-full z-99 site-header transition-all duration-300", isSticky ? "backdrop-blur-md bg-white/50 shadow-md" : "bg-transparent sm:pt-25")}>
        <div className="main-bar-wraper">
          <div className="container-fluid">
            <div className="flex items-center max-sm:h-70">
              <div className={`btn btn-black menu-btn cursor-pointer ${(light || logoLight) ? "border border-white" : ""}`}>
                <Link href="/home" className="inline-flex justify-center items-center sm:w-70 sm:h-50 w-50 h-30 rounded-[50px] bg-linear-(--btn-gradient)">
                  <Image loading="lazy" src={IMAGES.logo} alt="logo" width={70} height={50} className="size-full sm:w-70 sm:h-50 h-20 w-50 sm:object-none object-contain"/>
                </Link>

                <button onClick={() => dispatch({ type: "TOGGLE_MENU", payload: true })} className="font-semibold sm:px-20 px-12 inline-flex items-center gap-14 cursor-pointer">
                  <span className="inline-block align-middle space-y-3 cursor-pointer">
                    <span className="bg-primary block h-2 w-15"></span>
                    <span className="bg-primary block h-2 w-15"></span>
                    <span className="bg-primary block h-2 w-15"></span>
                  </span>
                  Menu
                </button>
              </div>

              <div className="ms-auto p-2">
                {light ?
            <Button href="/home" type="white" btnSm label="Let's talk"/>
            :
                <Button href="/home" label="Let's talk"/>}
              </div>
              <div className={clsx("header-nav navbar-collapse full-sidenav navbar fixed inset-0 z-60", open
            ? "show"
            : "")}>
              
                <div className="flsbg pointer-events-none">
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                        <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                      <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                      <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                      <span className="noice-overlay"></span>
                    </span>
                    <span className="bg-wrap">
                      <span className="noice-overlay"></span>
                    </span>
                </div>
                <div className="container-fluid size-full flex flex-col">
                    <div className="row flex-1 lg:h-[calc(100%_-_130px)]">
                        <div className="xl:w-[40%] lg:w-1/2 w-full flex flex-col justify-center lg:order-0 order-1">
                            <div className="3xl:ps-170 xl:ps-60 lg:py-0 py-40">
                                <div className="lg:flex items-center flex-wrap lg:px-0 sm:px-20 gap-20">
                                    <div className="text-white lg:mb-50 mb-10">
                                        <h2 className="text-2xl font-normal lg:mb-20"> Send a message </h2>
                                        <Link className="text-lg dark:text-bodytext text-textlight block hover:underline" href="mailto:support@technicalhub.io">support@technicalhub.io</Link>
                                        <Link className="text-lg dark:text-bodytext text-textlight block hover:underline" href="mailto:support@toriiminds.com">support@toriiminds.com</Link>
                                    </div>
                                    <div className="text-white lg:mb-50 mb-10">
                                        <h2 className="text-2xl font-normal lg:mb-20"> Call us </h2>
                                        <Link className="text-lg dark:text-bodytext text-textlight block hover:underline" href="tel:+918343818181">+91 83 43 81 81 81</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[60%] lg:w-1/2 w-full max-h-full flex flex-col justify-center self-center">
                            <div data-lenis-prevent className="3xl:pe-260 lg:pe-60 lg:ps-70 lg:pt-20 pb-20 pt-60 h-full overflow-auto" ref={fullSidenavRef}>
                                <ul className="nav navbar-nav lg:pb-0 pb-30 lg:border-b-0 border-b dark:border-white/30 border-black/30">
                                {Menu.map((navItem, index) => (<li key={index} className={navItem.submenu ? "sub-menu-down" : ""}>
                                    <Link href={navItem.link} onClick={() => {
                if (!navItem.submenu) {
                    dispatch({ type: "TOGGLE_MENU", payload: false });
                }
            }}>
                                        {navItem.title}
                                    </Link>

                                    {navItem.submenu && (<ul className="sub-menu">
                                        {navItem.submenu.map((child, i) => (<li key={i}>
                                              <Link href={child.link} onClick={() => {
                        dispatch({ type: "TOGGLE_MENU", payload: false });
                    }}>{child.title}</Link>
                                            </li>))}
                                        </ul>)}
                                    </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-38 pt-20 sm:pb-50 pb-80 lg:px-0 sm:px-20 border-t dark:border-white/30 border-black/30 flex items-center justify-between">
                        <div className="relative flex items-center px-12 py-6 rounded-full duration-500 theme-btn cursor-pointer" onClick={toggleTheme}>
                            <span className="block p-10 rounded-full relative z-2 light-theme">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_29494_68)">
                                    <path d="M19.4313 12.3808C19.3477 12.2974 19.2421 12.2394 19.1269 12.2135C19.0116 12.1876 18.8914 12.1949 18.7801 12.2346C17.2847 12.7677 15.6687 12.8656 14.1198 12.5169C12.571 12.1681 11.1529 11.3871 10.0303 10.2644C8.90775 9.14178 8.12676 7.72364 7.77811 6.17479C7.42946 4.62593 7.52745 3.00994 8.0607 1.51456C8.10033 1.40326 8.1076 1.28301 8.08167 1.16775C8.05573 1.05249 7.99767 0.94694 7.91419 0.863336C7.83072 0.779733 7.72526 0.7215 7.61004 0.695388C7.49482 0.669277 7.37456 0.676357 7.2632 0.715807C5.91501 1.19189 4.69154 1.96588 3.68383 2.98018C1.87734 4.78803 0.862798 7.23933 0.863281 9.79505C0.863765 12.3508 1.87924 14.8017 3.68641 16.6089C5.49358 18.416 7.94448 19.4315 10.5002 19.432C13.0559 19.4325 15.5072 18.4179 17.3151 16.6114C18.3295 15.6035 19.1035 14.3798 19.5795 13.0314C19.6188 12.9201 19.6257 12.7998 19.5995 12.6847C19.5733 12.5695 19.515 12.4642 19.4313 12.3808Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_29494_68">
                                    <rect width="20" height="20" fill="white" transform="translate(0.240234 0.0551758)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className="block p-10 rounded-full relative z-2 dark-theme">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_29494_70)">
                                    <path d="M10.2402 3.10986C10.5638 3.10986 10.8262 2.84752 10.8262 2.52393V0.641113C10.8262 0.31752 10.5638 0.0551758 10.2402 0.0551758C9.91664 0.0551758 9.6543 0.31752 9.6543 0.641113V2.52393C9.6543 2.84752 9.91664 3.10986 10.2402 3.10986Z" fill="black"/>
                                    <path d="M10.2402 17.0005C9.91664 17.0005 9.6543 17.2628 9.6543 17.5864V19.4692C9.6543 19.7928 9.91664 20.0552 10.2402 20.0552C10.5638 20.0552 10.8262 19.7928 10.8262 19.4692V17.5864C10.8262 17.2628 10.5638 17.0005 10.2402 17.0005Z" fill="black"/>
                                    <path d="M19.6543 9.46924H17.7715C17.4479 9.46924 17.1855 9.73158 17.1855 10.0552C17.1855 10.3788 17.4479 10.6411 17.7715 10.6411H19.6543C19.9779 10.6411 20.2402 10.3788 20.2402 10.0552C20.2402 9.73158 19.9779 9.46924 19.6543 9.46924Z" fill="black"/>
                                    <path d="M3.29492 10.0552C3.29492 9.73158 3.03258 9.46924 2.70898 9.46924H0.826172C0.502578 9.46924 0.240234 9.73158 0.240234 10.0552C0.240234 10.3788 0.502578 10.6411 0.826172 10.6411H2.70898C3.03258 10.6411 3.29492 10.3788 3.29492 10.0552Z" fill="black"/>
                                    <path d="M15.9807 5.14395L17.3119 3.81281C17.5407 3.58399 17.5407 3.21301 17.3119 2.98418C17.0831 2.75535 16.7121 2.75535 16.4832 2.98418L15.1521 4.31531C14.9233 4.54414 14.9233 4.91512 15.1521 5.14395C15.3808 5.37274 15.7519 5.37285 15.9807 5.14395Z" fill="black"/>
                                    <path d="M4.5008 14.9665L3.16967 16.2976C2.94084 16.5264 2.94084 16.8974 3.16967 17.1262C3.39842 17.355 3.76947 17.3551 3.9983 17.1262L5.32943 15.7951C5.55826 15.5663 5.55826 15.1953 5.32943 14.9665C5.10061 14.7376 4.72959 14.7376 4.5008 14.9665Z" fill="black"/>
                                    <path d="M15.9807 14.9664C15.7519 14.7376 15.3809 14.7376 15.1521 14.9664C14.9233 15.1952 14.9233 15.5662 15.1521 15.7951L16.4832 17.1262C16.712 17.355 17.083 17.3551 17.3119 17.1262C17.5407 16.8974 17.5407 16.5264 17.3119 16.2976L15.9807 14.9664Z" fill="black"/>
                                    <path d="M4.50084 5.14395C4.72959 5.37274 5.10064 5.37282 5.32947 5.14395C5.5583 4.91512 5.5583 4.54414 5.32947 4.31531L3.9983 2.98418C3.76951 2.75535 3.3985 2.75535 3.16967 2.98418C2.94084 3.21301 2.94084 3.58399 3.16967 3.81281L4.50084 5.14395Z" fill="black"/>
                                    <path d="M10.2409 5.07599C7.49539 5.07599 5.26172 7.30966 5.26172 10.0552C5.26172 12.8007 7.49539 15.0343 10.2409 15.0343C12.9864 15.0343 15.2201 12.8007 15.2201 10.0552C15.2201 7.30966 12.9864 5.07599 10.2409 5.07599ZM10.2409 13.8625C8.14156 13.8625 6.43359 12.1545 6.43359 10.0552C6.43359 7.95583 8.14156 6.24786 10.2409 6.24786C12.3402 6.24786 14.0482 7.95583 14.0482 10.0552C14.0482 12.1545 12.3402 13.8625 10.2409 13.8625Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_29494_70">
                                    <rect width="20" height="20" fill="white" transform="translate(0.240234 0.0551758)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className="active"></span>
                        </div>
                        <ul className="flex items-center gap-37">
                            <li className="">
                                <Link className="dark:text-white text-dark" href="https://www.instagram.com/technicalhubio/" target="_blank">IN</Link>
                            </li>
                            <li className="">
                                <Link className="dark:text-white text-dark" href="https://www.linkedin.com/company/technicalhub/" target="_blank">LN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button" onClick={() => dispatch({ type: "TOGGLE_MENU", payload: false })} className="menu-close absolute rounded-full size-70 lg:dark:bg-white lg:bg-dark lg:top-40 top-0 lg:right-50 right-0 group cursor-pointer magneticBtn">
                    
                    <span className="duration-500 z-1 after:content-[''] after:absolute after:h-3 lg:after:w-32 after:w-20 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-mt-1 lg:dark:after:bg-secondary lg:after:bg-white dark:after:bg-white after:bg-black after:opacity-100 after:duration-200 after:-rotate-45 before:content-[''] before:absolute before:h-3 lg:before:w-32 before:w-20 before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-mt-1 lg:dark:before:bg-secondary lg:before:bg-white dark:before:bg-white before:bg-black before:opacity-100 before:duration-200 before:rotate-45 group-hover:after:rotate-0 group-hover:before:rotate-0"></span>
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </header>
    </>);
}
