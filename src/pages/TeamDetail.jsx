import { useParams } from "react-router-dom";
import teamData from "@/data/team.json";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { IMAGES } from "@/utils/constants";
import TeamSwiper from "@/components/TeamSwiper";
import ServiceBox from "@/components/ServiceBox";
import ClientLogo from "@/components/ClientLogo";
import Button from "@/components/Button";
import Seo from "@/components/common/Seo";

export default function TeamDetail() {
  const { slug } = useParams();
  const team = teamData.find((item) => item.slug === slug);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <>
      <Seo title={team.name} description={team.excerpt} canonical={`/team/${team.slug}`} />
      <section className="relative z-10 pt-150">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 col-span-12 xl:mr-85 max-xl:mb-10 mb-50">
              <div className="my-sticky !top-120">
                <Image loading="lazy" className="size-full rounded-xl" src={team.img} alt={team.name} height={560} width={662} />
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="pxl-heading-scroll-effect">
                <h2 className="xl:text-7xxl md:text-5xl text-4xl heading-text mb-23">
                  {team.name}
                </h2>
                <span className="text-textlight dark:text-white text-lg">{team.position}</span>
                <p className="text-lg/32 item-des mt-30">{team.description}</p>
                <div className="xl:mt-47">
                  <span className="text-base dark:text-white font-medium uppercase">FOLLOW ME</span>
                  <div className="flex items-center text-sm dark:text-white mt-30 gap-30">
                    <Link href="https://www.linkedin.com/company/technicalhub/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link href="https://www.instagram.com/technicalhubio/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
              <div className="xl:my-100 my-40">
                <h5 className="text-2xl dark:text-white font-semibold mb-32">Experience</h5>
                <ul className="">
                  <li className="flex items-center gap-x-20 mb-12">
                    <span className="text-sm font-normal text-[#999] dark:after:bg-white/20 after:bg-black/20 after:size-5 after:rounded-full after:absolute after:mx-5 after:top-8 after:-right-20 relative">2019–2026</span>
                    <p className="text-base font-normal pl-5">Senior Web Designer – Creative Studio</p>
                  </li>
                  <li className="flex items-center gap-x-20 mb-12">
                    <span className="text-sm font-normal text-[#999] dark:after:bg-white/20 after:bg-black/20 after:size-5 after:rounded-full after:absolute after:mx-5 after:top-8 after:-right-20 relative">2019–2026</span>
                    <p className="text-base font-normal pl-5">Design Research Assistant – University of St.Gallen</p>
                  </li>
                  <li className="flex items-center gap-x-20 mb-12">
                    <span className="text-sm font-normal text-[#999] dark:after:bg-white/20 after:bg-black/20 after:size-5 after:rounded-full after:absolute after:mx-5 after:top-8 after:-right-20 relative">2019–2026</span>
                    <p className="text-base font-normal pl-5">Bachelor's in Digital Media & Design – Corporate Design & Management</p>
                  </li>
                </ul>
              </div>
              <div className="xl:mb-100 mb-40">
                <h5 className="text-2xl dark:text-white font-semibold mb-32">My Skills</h5>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 mb-47">
                    <div className="overflow-hidden our-skills-item">
                      <span className="text-lg/24 font-medium mb-18 font-display dark:text-white text-black flex items-center mr-10">UI/UX Design</span>
                      <div className="progress-box">
                        <div className="progress">
                          <div className="progressbar wow animate-progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "--progress-bar-count": "95%" }}>
                            <span className="dark:text-white text-black flex justify-center absolute right-0 -top-40 text-base font-medium font-display">95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-47">
                    <div className="overflow-hidden our-skills-item">
                      <span className="text-lg/24 font-medium mb-18 font-display dark:text-white text-black flex items-center mr-10">Web Development</span>
                      <div className="progress-box">
                        <div className="progress">
                          <div className="progressbar wow animate-progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "--progress-bar-count": "82%" }}>
                            <span className="dark:text-white text-black flex justify-center absolute right-0 -top-40 text-base font-medium font-display">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-47">
                    <div className="overflow-hidden our-skills-item">
                      <span className="text-lg/24 font-medium mb-18 font-display dark:text-white text-black flex items-center mr-10">Branding & Identity</span>
                      <div className="progress-box">
                        <div className="progress">
                          <div className="progressbar wow animate-progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "--progress-bar-count": "62%" }}>
                            <span className="dark:text-white text-black flex justify-center absolute right-0 -top-40 text-base font-medium font-display">62%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-7.5">
                    <div className="overflow-hidden our-skills-item">
                      <span className="text-lg/24 font-medium mb-18 font-display dark:text-white text-black flex items-center mr-10">Project Management</span>
                      <div className="progress-box">
                        <div className="progress">
                          <div className="progressbar wow animate-progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "--progress-bar-count": "75%" }}>
                            <span className="dark:text-white text-black flex justify-center absolute right-0 -top-40 text-base font-medium font-display">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:mb-100 mb-40">
                <h5 className="text-2xl dark:text-white font-semibold mb-32">Awards</h5>
                <div className="grid grid-cols-12 gap-20">
                  <div className="md:col-span-6 col-span-12">
                    <div className="p-40 dark:bg-white/10 bg-black/10 text-center group hover:bg-primary duration-500">
                      <ul className="flex items-center justify-center text-base font-medium  group-hover:text-black dark:text-white  text-center duration-500">
                        <li>2026</li>
                        <li className="size-5 rounded-full dark:bg-white/40 bg-black/40 mx-10 duration-500"></li>
                        <li>Nominee</li>
                      </ul>
                      <div className="py-44 flex justify-center">
                        <div className="size-106 group-hover:bg-black dark:bg-white bg-black rounded-full flex items-center justify-center duration-500">
                          <svg className="group-hover:fill-white dark:fill-black fill-white" width="61" height="32" viewBox="0 0 61 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.9394 0L31.3122 21.656L26.0001 0H18.7508L13.4367 21.656L7.81348 0H0L10.062 31.5454H16.9379L22.3744 11.1402L27.813 31.5454H34.6889L44.7489 0H36.9354H36.9394ZM49.7277 26.6636C49.7277 29.6681 51.9761 31.9205 54.9775 31.9205C57.9768 31.9205 60.2273 29.6661 60.2273 26.6636C60.2273 23.659 57.9788 21.4047 54.9775 21.4047C51.9761 21.4047 49.7277 23.659 49.7277 26.6636Z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="group-hover:text-black dark:text-white duration-500 text-2xl font-medium">UX Design Awards</h3>
                      <span className="text-sm font-medium  group-hover:text-black dark:text-white  duration-500">Awwwards</span>
                    </div>
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <div className="p-40 dark:bg-white/10 bg-black/10 text-center group hover:bg-primary duration-500">
                      <ul className="flex items-center justify-center text-base font-medium  group-hover:text-black dark:text-white text-center duration-500">
                        <li>2026</li>
                        <li className="size-5 rounded-full dark:bg-white/40 bg-black/40 mx-10 duration-500"></li>
                        <li>Winner</li>
                      </ul>
                      <div className="py-44 flex justify-center">
                        <div className="size-106 group-hover:bg-black dark:bg-white bg-black rounded-full flex items-center justify-center duration-500">
                          <svg className="group-hover:fill-white dark:fill-black fill-white" width="65" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.91935V17.8763L8.46774 26.3441L16.9355 34.8118L8.46774 43.2796L0 51.7473V60.8548V70H8.95699H17.8763L23.7097 64.1667L29.543 58.3333L26.7957 55.6237L24.086 52.8763L19.2688 57.6935L14.4892 62.4731H10.9892H7.52688V58.7849V55.1344L23.8978 38.7634L40.2688 22.3925L29.0914 11.215L17.8763 0H8.95699H0V8.91935ZM22.3172 14.9785L29.7312 22.3925L26.1559 25.9677L22.5806 29.543L15.0538 22.0161L7.52688 14.4892V11.0269V7.52688H11.2151H14.8656L22.3172 14.9785Z" />
                            <path d="M45.9893 5.75806L40.2688 11.4785L43.0161 14.2258L45.7258 16.9355L50.4301 12.2312L55.1344 7.52688H58.5968H62.0968V11.215V14.8656L45.914 31.0484C37.0323 39.9301 29.7312 47.3817 29.7312 47.6075C29.7312 47.8333 34.6989 52.9516 40.7581 59.0108L51.7473 70H60.8925H70V61.0806V52.1237L61.457 43.5806L52.8764 35L61.457 26.4194L70 17.8763V8.91935V0H60.8549H51.7473L45.9893 5.75806ZM55.0215 48.0591L62.4731 55.5108V58.9731V62.4731H58.7473H55.0215L47.7581 54.9086L40.5323 47.3817L43.8817 43.9946C45.7258 42.1505 47.3065 40.6452 47.4194 40.6452C47.5323 40.6452 50.957 43.9946 55.0215 48.0591Z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="group-hover:text-black dark:text-white duration-500 text-2xl font-medium">Systems Design</h3>
                      <span className="text-sm font-medium  group-hover:text-black dark:text-white duration-500">Interaction Awards</span>
                    </div>
                  </div>
                </div>
              </div>
              <TeamSwiper />
              <div className="grid grid-cols-12 gap-20 xl:mb-80 mb-40">
                <div className="col-span-12">
                  <div className="flex justify-between mb-32 items-center">
                    <h5 className="text-2xl dark:text-white font-semibold">Work</h5>
                    <Button label="View" href="/portfolio" type="primary" />
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="group mb-10">
                    <Image loading="lazy" className="mb-20 w-full" src={IMAGES.work} alt="Work Image" height={400} width={312} />
                    <div className="flex items-center justify-between">
                      <h5 className="dark:text-white font-medium text-xl">Dynamic E-Commerce Platform</h5>
                      <Link href="/portfolio/e-commerce" className="size-60 min-w-60 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                        <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="group mb-10">
                    <Image loading="lazy" className="mb-20 w-full" src={IMAGES.work2} alt="Work Image" height={400} width={312} />
                    <div className="flex items-center justify-between">
                      <h5 className="dark:text-white font-medium text-xl">Scalable Web Commerce Solution</h5>
                      <Link href="/portfolio/web-commerce" className="size-60 min-w-60 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                        <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="group mb-10">
                    <Image loading="lazy" className="mb-20 w-full" src={IMAGES.work3} alt="Work Image" height={400} width={312} />
                    <div className="flex items-center justify-between">
                      <h5 className="dark:text-white font-medium text-xl">Powerful Digital Storefront</h5>
                      <Link href="/portfolio/digital-storefront" className="size-60 min-w-60 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                        <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="group mb-10">
                    <Image loading="lazy" className="mb-20 w-full" src={IMAGES.work4} alt="Work Image" height={400} width={312} />
                    <div className="flex items-center justify-between">
                      <h5 className="dark:text-white font-medium text-xl">Customizable Product Marketplace</h5>
                      <Link href="/portfolio/product-marketplace" className="size-60 min-w-60 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                        <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 xl:mb-100 mb-40">
                <div className="col-span-12"><h5 className="text-2xl dark:text-white font-semibold mb-32">Contact Us</h5></div>
                <div className="col-span-12">
                  <form>
                    <div className="grid grid-cols-12 gap-x-16">
                      <div className="lg:col-span-6 col-span-12">
                        <label htmlFor="fullname" className="block text-label font-normal mb-10 dark:text-white text-black">Full name*</label>
                        <input id="fullname" className="w-full h-50 mr-16 mb-25 py-14 px-20 outline-none dark:bg-white/20 bg-black/20 text-base font-medium dark:text-white text-black" type="text" name="dzName" placeholder="John carter" />
                      </div>
                      <div className="lg:col-span-6 col-span-12">
                        <label htmlFor="email" className="block text-label font-normal mb-10 dark:text-white text-black">Email address*</label>
                        <input id="email" className="w-full h-50 mr-16 mb-25 py-14 px-20 outline-none dark:bg-white/20 bg-black/20 text-base font-medium dark:text-white text-black" type="email" name="dzEmail" placeholder="info@example.com" />
                      </div>
                      <div className="col-span-12">
                        <label htmlFor="website" className="block text-label font-normal mb-10 dark:text-white text-black">Website link</label>
                        <input id="website" className="w-full h-50 mr-16 mb-25 py-14 px-20 outline-none dark:bg-white/20 bg-black/20 text-base font-medium dark:text-white text-black" type="text" name="link" />
                      </div>
                      <div className="col-span-12">
                        <label htmlFor="help" className="block text-label font-normal mb-10 dark:text-white text-black">How Can We Help You*</label>
                        <textarea id="help" name="dzMessage" required placeholder="Write A Message..." className="w-full h-180 py-14 px-20 outline-none dark:bg-white/20 bg-black/20 text-base font-medium dark:text-white text-black mb-25"></textarea>
                      </div>
                      <div className="col-span-12">
                        <Button label="Submit Now" type="white" button />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-8%] left-[-47%] -z-1" />
            <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute top-[-30%] right-[0%] max-xl:w-[60%] -z-1" />
          </div>
        </div>
      </section>
      <ServiceBox />
      <ClientLogo />
    </>
  );
}
