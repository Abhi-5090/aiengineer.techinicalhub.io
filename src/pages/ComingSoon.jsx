import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import Countdown from "@/components/CountDown";
import { useMemo } from "react";
import Seo from "@/components/common/Seo";

export default function ComingSoon() {
  const targetDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    d.setHours(23, 59, 59, 999);
    return d.toISOString();
  }, []);

  return (
    <section className="relative z-1 overflow-hidden">
      <Seo title="Coming Soon" />
      <div className="container-lg">
        <div className="row justify-center">
          <div className="lg:w-1/2 w-full max-sm:mb-10">
            <div className="lg:max-w-574 flex flex-col h-full py-50">
              <div className="pb-60">
                <Link href="/home">
                  <svg width="139" height="30" viewBox="0 0 139 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.445 27.2332C23.2196 27.2332 22.2227 26.2363 22.2227 25.011V15.6529C22.2227 14.4275 23.2196 13.4307 24.445 13.4307C25.6704 13.4307 26.6673 14.4275 26.6673 15.6529V25.011C26.6673 26.2363 25.6704 27.2332 24.445 27.2332Z" fill="#6EFF6E"></path>
                    <path d="M32.7777 27.234C31.5524 27.234 30.5554 26.2371 30.5554 25.0118V2.2222C30.5554 0.996879 31.5524 0 32.7777 0C34.0031 0 35.0001 0.996879 35.0001 2.2222V25.0118C35.0001 26.2371 34.0031 27.234 32.7777 27.234Z" fill="#6EFF6E"></path>
                    <path d="M16.6178 27.2346C15.3924 27.2346 14.3955 26.2377 14.3955 25.0124V22.272C14.3955 21.0467 15.3924 20.0498 16.6178 20.0498C17.8432 20.0498 18.8401 21.0467 18.8401 22.272V25.0124C18.8401 26.2377 17.8432 27.2346 16.6178 27.2346Z" fill="#6EFF6E"></path>
                    <path d="M2.22232 27.2338C0.996932 27.2338 0 26.2369 0 25.0116V2.91494C0 2.83983 0.00399746 2.76694 0.0111089 2.6945C0.0115533 2.69006 0.0382203 2.50294 0.0435538 2.47628L0.0951104 2.2705L0.168898 2.06384L0.262232 1.86606L0.373795 1.67984C0.388463 1.65806 0.485793 1.52873 0.485793 1.52873C0.595131 1.39318 0.700034 1.28829 0.814705 1.19407C0.818705 1.19096 0.880044 1.14607 0.884044 1.1434C0.938713 1.10163 0.962257 1.08252 0.987591 1.06563L1.17117 0.955405L1.37206 0.860296L1.57696 0.786963C1.57696 0.786963 1.76096 0.739406 1.78541 0.734961L2.00542 0.702074C2.06631 0.696296 2.13032 0.694075 2.19432 0.693186C2.20099 0.693186 2.25165 0.693186 2.26099 0.693186C2.3121 0.694075 2.37611 0.696296 2.43967 0.702518L2.66011 0.735405C2.68011 0.739405 2.86857 0.787851 2.86857 0.787851L3.06635 0.858516L3.26459 0.952295L3.45437 1.06563C3.47971 1.08252 3.50371 1.10163 3.52771 1.12029L3.60416 1.17718C3.6855 1.24162 3.74016 1.29051 3.79172 1.34251L12.6414 10.1913C12.8152 10.3651 13.0423 10.4518 13.2699 10.4518C13.4975 10.4518 13.7246 10.3651 13.8984 10.1913L22.7485 1.34207C23.1681 0.922517 23.7263 0.691406 24.3201 0.691406C24.9135 0.691406 25.4718 0.922517 25.8918 1.34207C26.3113 1.76162 26.5425 2.31984 26.5425 2.91316C26.5425 3.50694 26.3113 4.06515 25.8918 4.48471L14.842 15.5339C14.4224 15.9535 13.8642 16.1846 13.2708 16.1846C12.6774 16.1846 12.1192 15.9535 11.6987 15.5335L5.96026 9.79577C5.79047 9.62555 5.5629 9.53533 5.33134 9.53533C5.21667 9.53533 5.10111 9.55755 4.99133 9.60288C4.65887 9.74066 4.44241 10.0647 4.44241 10.4242V25.0116C4.44463 26.2369 3.4477 27.2338 2.22232 27.2338Z" fill="#6EFF6E"></path>
                    <path className="dark:fill-white fill-black" d="M46.848 23.6172V4.01719H54.912C56.144 4.01719 57.2267 4.26919 58.16 4.77319C59.112 5.25852 59.8493 5.94919 60.372 6.84519C60.9133 7.74119 61.184 8.80519 61.184 10.0372V10.4292C61.184 11.6425 60.904 12.7065 60.344 13.6212C59.8027 14.5172 59.056 15.2172 58.104 15.7212C57.1707 16.2065 56.1067 16.4492 54.912 16.4492H50.544V23.6172H46.848ZM50.544 13.0892H54.548C55.4253 13.0892 56.1347 12.8465 56.676 12.3612C57.2173 11.8759 57.488 11.2132 57.488 10.3732V10.0932C57.488 9.25319 57.2173 8.59052 56.676 8.10519C56.1347 7.61985 55.4253 7.37719 54.548 7.37719H50.544V13.0892ZM63.8584 23.6172V4.01719H67.3864V23.6172H63.8584ZM77.6239 24.0092C76.2426 24.0092 75.0199 23.7199 73.9559 23.1412C72.9106 22.5439 72.0893 21.7132 71.4919 20.6492C70.9133 19.5665 70.6239 18.2972 70.6239 16.8412V16.5052C70.6239 15.0492 70.9133 13.7892 71.4919 12.7252C72.0706 11.6425 72.8826 10.8119 73.9279 10.2332C74.9733 9.63585 76.1866 9.33719 77.5679 9.33719C78.9306 9.33719 80.1159 9.64519 81.1239 10.2612C82.1319 10.8585 82.9159 11.6985 83.4759 12.7812C84.0359 13.8452 84.3159 15.0865 84.3159 16.5052V17.7092H74.2079C74.2453 18.6612 74.5999 19.4359 75.2719 20.0332C75.9439 20.6305 76.7653 20.9292 77.7359 20.9292C78.7253 20.9292 79.4533 20.7145 79.9199 20.2852C80.3866 19.8559 80.7413 19.3799 80.9839 18.8572L83.8679 20.3692C83.6066 20.8545 83.2239 21.3865 82.7199 21.9652C82.2346 22.5252 81.5813 23.0105 80.7599 23.4212C79.9386 23.8132 78.8933 24.0092 77.6239 24.0092ZM74.2359 15.0772H80.7319C80.6573 14.2745 80.3306 13.6305 79.7519 13.1452C79.1919 12.6599 78.4546 12.4172 77.5399 12.4172C76.5879 12.4172 75.8319 12.6599 75.2719 13.1452C74.7119 13.6305 74.3666 14.2745 74.2359 15.0772ZM85.3218 23.6172L90.3618 16.6172L85.3778 9.72919H89.4658L92.6298 14.3492H93.1338L96.2978 9.72919H100.386L95.4018 16.6172L100.442 23.6172H96.2978L93.1338 18.9412H92.6298L89.4658 23.6172H85.3218ZM103.124 23.6172V9.72919H106.652V23.6172H103.124ZM104.888 8.10519C104.253 8.10519 103.712 7.89985 103.264 7.48919C102.835 7.07852 102.62 6.53719 102.62 5.86519C102.62 5.19319 102.835 4.65185 103.264 4.24119C103.712 3.83052 104.253 3.62519 104.888 3.62519C105.541 3.62519 106.083 3.83052 106.512 4.24119C106.941 4.65185 107.156 5.19319 107.156 5.86519C107.156 6.53719 106.941 7.07852 106.512 7.48919C106.083 7.89985 105.541 8.10519 104.888 8.10519ZM112.858 23.6172V12.6412H109.33V9.72919H112.858V7.15319C112.858 6.20119 113.138 5.44519 113.698 4.88519C114.276 4.30652 115.023 4.01719 115.938 4.01719H119.578V6.92919H117.17C116.647 6.92919 116.386 7.20919 116.386 7.76919V9.72919H120.026V12.6412H116.386V23.6172H112.858ZM124.269 29.2172V26.1372H131.829C132.352 26.1372 132.613 25.8572 132.613 25.2972V21.7972H132.109C131.96 22.1145 131.726 22.4319 131.409 22.7492C131.092 23.0665 130.662 23.3279 130.121 23.5332C129.58 23.7385 128.889 23.8412 128.049 23.8412C126.966 23.8412 126.014 23.5985 125.193 23.1132C124.39 22.6092 123.765 21.9185 123.317 21.0412C122.869 20.1639 122.645 19.1559 122.645 18.0172V9.72919H126.173V17.7372C126.173 18.7825 126.425 19.5665 126.929 20.0892C127.452 20.6119 128.189 20.8732 129.141 20.8732C130.224 20.8732 131.064 20.5185 131.661 19.8092C132.258 19.0812 132.557 18.0732 132.557 16.7852V9.72919H136.085V26.0812C136.085 27.0332 135.805 27.7892 135.245 28.3492C134.685 28.9279 133.938 29.2172 133.005 29.2172H124.269Z" fill="white"></path>
                  </svg>
                </Link>
              </div>
              <h2 className="xl:text-7xxl/85 md:text-5xl/50 text-4xl heading-text font-semibold xl:mb-30 mb-15">
                We Are Coming Soon
              </h2>
              <Countdown targetDate={targetDate} />
              <p className="2xxl:text-lg text-base">We're working hard to bring you a better experience! Our website is under construction, but we'll be back soon. Stay tuned!</p>
              <form className="xl:my-40 my-30 max-w-2200 dzSubscribe">
                <div className="dzSubscribeMsg"></div>
                <div className="form-group">
                  <div className="relative flex flex-wrap items-stretch w-full">
                    <input name="dzEmail" required type="email" className="relative flex-1 w-[1%] h-60 py-15 px-20 text-lg !rounded-s-full bg-white border-2 border-primary placeholder:text-bodycolor" placeholder="Your Email Address" />
                    <div className="-ml-px">
                      <button name="submit" value="Submit" type="submit" className="btn btn-primary h-full !rounded-s-none px-25">
                        <span className="md:block hidden text-lg">Subscribe Now</span>
                        <span className="md:hidden">
                          <i className="fa-solid fa-paper-plane"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="dz-social-icon style-4  max-2xl:pr-145 max-lg:pr-0 mt-auto">
                <ul className="flex items-center gap-10">
                  <li className="inline-block">
                    <Link className="border border-[#999] size-50 flex items-center justify-center rounded-full hover:bg-primary duration-500 text-[#999] hover:text-black" href="https://www.linkedin.com/company/technicalhub/" aria-label="Follow us on linkedin" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link className="border border-[#999] size-50 flex items-center justify-center rounded-full hover:bg-primary duration-500 text-[#999] hover:text-black" href="https://www.instagram.com/technicalhubio/" aria-label="Follow us on instagram" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
                <div className="flex justify-left sm:items-center max-sm:flex-col-reverse mt-25">
                  <p>Copyright ©<span className="current-year"> 2026</span> <Link href="https://technicalhub.io/" target="_blank" className="hover:text-primary dark:text-white text-black">Technical Hub</Link>. All Rights Reserved Copyright</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 !px-0 max-lg:!mt-20">
            <div className="lg:w-[50vw]">
              <div className="relative lg:h-screen before:absolute before:bg-primary 2xl:before:w-150 sm:before:w-100 before:w-70 2xl:before:h-400 sm:before:h-200 before:h-160 before:top-0 before:right-0 after:absolute after:bg-secondary after:bottom-0 2xl:after:w-354 sm:after:w-300 after:w-245 2xl:after:h-287 sm:after:h-200 after:h-85 2xl:after:-left-180 after:-left-140">
                <Image loading="lazy" src={IMAGES.comingsoon} alt="comingsoon" width="1200" height="1372" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
