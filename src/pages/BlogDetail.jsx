import { useParams } from "react-router-dom";
import Button from "@/components/Button";
import ClientLogo from "@/components/ClientLogo";
import RelatedArticles from "@/components/RelatedArticles";
import blogData from "@/data/blog.json";
import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import Seo from "@/components/common/Seo";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="text-title text-2xl text-center py-50 mt-100">Blog not found</div>;
  }

  return (
    <>
      <Seo title={blog.title} description={blog.excerpt} canonical={`/blog/${blog.slug}`} />
      <section className="noice-overlay z-3">
        <div className="lg:pt-200 sm:pt-160 pt-120">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="text-center max-w-900 mx-auto">
                  <h2 className="xl:text-7xl/80 md:text-5xl text-4xl font-semibold sm:mb-30 mb-10">{blog.title}</h2>
                  <ul className="text-base dark:text-white text-textlight uppercase mt-auto">
                    <li className="inline-block relative pe-10">{blog.publishedAt}</li>
                    <li className="inline-block relative ps-15 before:content-['/'] before:absolute before:h-full before:top-0 before:left-0">{blog.author}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-full">
            <div className="lg:pt-106 sm:pt-80 sm:pb-80 py-30">
              <Image loading="lazy" src={IMAGES.blog1} alt="Blog Image" height={795} width={1920} />
            </div>
          </div>
          <div className="container relative flex">
            <div className="w-100 lg:block hidden">
              <div className="my-sticky !top-100">
                <span className="dark:text-white text-dark text-sm/35 font-normal">Share Post</span>
                <ul>
                  <li>
                    <Link href="https://www.instagram.com/technicalhubio/" className="dark:text-white text-dark text-base/40 uppercase hover:text-primary link-hover" target="_blank">Instagram</Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/technicalhub/" className="dark:text-white text-dark text-base/40 uppercase hover:text-primary link-hover" target="_blank">LinkedIn</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:ps-100">
              <div className="container-sm max-sm:!px-0">
                <div className="grid grid-cols-12 sm:gap-20">
                  <div className="col-span-12">
                    <div className="lg:mb-60 mb-30">
                      <p className="xl:text-2xl sm:text-xl text-lg font-light">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy café, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It's the journey from inspiration to execution</p>
                    </div>
                    <div className="lg:mb-60 mb-30">
                      <h4 className="text-3xl/35 mb-10">The Power of Inspiration</h4>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light sm:mb-30 mb-10">Every design begins with inspiration—a spark that ignites creativity. Inspiration can come from anywhere:</p>
                      <ul className="xl:text-2xl sm:text-xl text-lg font-light dark:text-bodytext text-textlight mb-30">
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">A walk through nature, observing patterns and textures.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">Art, architecture, or cultural motifs that speak to a designer's soul.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">Everyday problems that demand innovative solutions.</li>
                      </ul>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light">For example, the minimalist trend in modern design often draws from natural simplicity and functionality, showing how external influences shape creative thought. The key is to remain curious, open, and receptive to the world around you.</p>
                    </div>
                    <div className="lg:mb-60 mb-30">
                      <h4 className="text-3xl/35 mb-10">Execution: Where Ideas Meet Reality</h4>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light sm:mb-30 mb-10">Inspiration, while essential, is just the beginning. The real challenge lies in execution—translating ideas into functional and impactful designs. Here are some critical steps:</p>
                      <ul className="xl:text-2xl sm:text-xl text-lg font-light dark:text-bodytext text-textlight mb-30">
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight"><strong className="font-medium">Research and Empathy:</strong> Understanding the audience or user is vital. A great design resonates because it meets specific needs or solves problems effectively.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight"><strong className="font-medium">Iteration and Prototyping:</strong> Rarely does the first draft become the final masterpiece. Testing and refining ideas ensure a design is practical and user-friendly.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight"><strong className="font-medium">Balancing Form and Function:</strong> Aesthetic appeal should never overshadow usability. The best designs seamlessly blend beauty with purpose.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight"><strong className="font-medium">Collaboration and Feedback:</strong> Collaboration among designers, stakeholders, and end-users ensures the design aligns with its goals. Constructive feedback is the compass for improvement.</li>
                      </ul>
                    </div>
                    <div className="lg:mb-60 mb-30">
                      <Image loading="lazy" className="h-auto" src={IMAGES.blog2} alt="Blog Image" />
                    </div>
                    <div className="lg:mb-60 mb-30">
                      <h4 className="text-3xl/35 mb-10">Why Design Matters</h4>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light sm:mb-30 mb-10">In a world that values innovation, good design isn't optional—it's transformative. Thoughtful design can:</p>
                      <ul className="xl:text-2xl sm:text-xl text-lg font-light dark:text-bodytext text-textlight mb-30">
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">Enhance user experiences, making life simpler and more enjoyable.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">Solve complex challenges, from urban planning to sustainable living.</li>
                        <li className="sm:text-2xl/45 text-lg ps-35 relative before:content-[''] before:absolute before:left-14 before:top-20 before:size-6 before:rounded-full dark:before:bg-bodytext before:bg-textlight">Inspire emotions and connections, whether through branding, art, or architecture.</li>
                      </ul>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light">As we continue to integrate design into every aspect of life, the line between inspiration and execution grows thinner. Designers are not just creators; they are problem-solvers, visionaries, and change-makers.</p>
                    </div>
                    <div className="lg:mb-60 mb-30">
                      <h4 className="text-3xl/35 mb-10">Conclusion</h4>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light sm:mb-30 mb-10">Design matters because it shapes our environment, influences behavior, and drives progress. The journey from inspiration to execution is not just about creating something beautiful—it's about creating something meaningful.</p>
                      <p className="xl:text-2xl sm:text-xl text-lg font-light sm:mb-30 mb-10">So, whether you're a designer or someone who appreciates design, remember: the magic lies in the process. Every great design starts with a spark and becomes impactful through thoughtful execution.</p>
                      <span className="dark:text-bodytext text-textlight text-[19px]/35">What inspires your creativity? Share your thoughts in the comments below!</span>
                    </div>
                    <div className="mb-30">
                      <ul className="dark:text-white text-textlight relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-1 before:w-full dark:before:bg-white/10 before:bg-black/10">
                        <li className="inline-block sm:px-13 px-8 py-24 first:ps-0">Tags:</li>
                        <li className="inline-block sm:px-13 px-8 py-24 first:ps-0">Business</li>
                        <li className="inline-block sm:px-13 px-8 py-24 first:ps-0">Startups</li>
                        <li className="inline-block sm:px-13 px-8 py-24 first:ps-0">Marketing</li>
                      </ul>
                    </div>
                    <div className="bg-card sm:p-50 sm:pt-40 p-20">
                      <div className="lg:mb-60 mb-30">
                        <h3 className="md:text-7xl/70 text-4xl text-white font-medium mb-10">Leave a Reply</h3>
                        <p className="sm:text-xl text-lg font-light text-white">Your email address will not be published. Required fields are marked *</p>
                      </div>
                      <form>
                        <div className="grid grid-cols-12 gap-20">
                          <div className="sm:col-span-6 col-span-12">
                            <div className="mb-30">
                              <label htmlFor="fullname" className="block text-white font-light mb-10">Full name*</label>
                              <input type="text" name="fullname" id="fullname" placeholder="John carter" className="py-11 text-lg border-b-2 border-[#383B3F] text-white placeholder:text-white font-light h-50 w-full" />
                            </div>
                          </div>
                          <div className="sm:col-span-6 col-span-12">
                            <div className="mb-30">
                              <label htmlFor="emailaddress" className="block text-white font-light mb-10">Email address*</label>
                              <input type="email" name="emailaddress" id="emailaddress" placeholder="info@example.com" className="py-11 text-lg border-b-2 border-[#383B3F] text-white placeholder:text-white font-light h-50 w-full" />
                            </div>
                          </div>
                          <div className="col-span-12">
                            <div className="mb-40">
                              <label htmlFor="Comments" className="block text-white font-light mb-10">Comments*</label>
                              <textarea placeholder="Write here" name="Comments" id="Comments" className="py-11 text-lg border-b-2 border-[#383B3F] text-white placeholder:text-white font-light min-h-150 w-full"></textarea>
                            </div>
                          </div>
                          <div className="col-span-12">
                            <Button label="Submit" button type="primary" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image loading="lazy" src={IMAGES.bg6} alt="bg6" className="absolute top-[-50%] left-[-47%] -z-1 pointer-events-none" />
        <Image loading="lazy" src={IMAGES.bg10} alt="bg10" className="absolute bottom-[-40%] right-[0%] max-xl:w-[60%] -z-1 pointer-events-none" />
      </section>
      <RelatedArticles />
      <ClientLogo />
    </>
  );
}
