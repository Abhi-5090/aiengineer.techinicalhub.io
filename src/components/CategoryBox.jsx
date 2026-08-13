import { IMAGES } from "@/utils/constants";
import Image from "@/components/common/Image";
export default function CategoryBox() {
    return (<section className="noice-overlay">
            <div className="container-sm">
                <div className="text-center mb-40">
                    <h2 className="text-[45px]/35 font-semibold">Category</h2>
                </div>
                <div className="grid grid-cols-12 gap-20">
                    <div className="sm:col-span-3 col-span-6 mb-20">
                        <div className="text-center">
                            <div className="mb-20">
                                <Image loading="lazy" src={IMAGES.category1} alt="Category 1" className="inline-block rounded-full size-206"/>
                            </div>
                            <h6 className="sm:text-xl text-lg/35">Business <span className="text-2sm/35 dark:text-white/60 text-textlight font-normal">(5)</span></h6>
                        </div>
                    </div>
                    <div className="sm:col-span-3 col-span-6 mb-20">
                        <div className="text-center">
                            <div className="mb-20">
                                <Image loading="lazy" src={IMAGES.category2} alt="Category 2" className="inline-block rounded-full size-206"/>
                            </div>
                            <h6 className="sm:text-xl text-lg/35">Startups <span className="text-2sm/35 dark:text-white/60 text-textlight font-normal">(2)</span></h6>
                        </div>
                    </div>
                    <div className="sm:col-span-3 col-span-6 mb-20">
                        <div className="text-center">
                            <div className="mb-20">
                                <Image loading="lazy" src={IMAGES.category3} alt="Category 3" className="inline-block rounded-full size-206"/>
                            </div>
                            <h6 className="sm:text-xl text-lg/35">Marketing <span className="text-2sm/35 dark:text-white/60 text-textlight font-normal">(4)</span></h6>
                        </div>
                    </div>
                    <div className="sm:col-span-3 col-span-6 mb-20">
                        <div className="text-center">
                            <div className="mb-20">
                                <Image src={IMAGES.category4} alt="Category 4" className="inline-block rounded-full size-206"/>
                            </div>
                            <h6 className="sm:text-xl text-lg/35">Design <span className="text-2sm/35 dark:text-white/60 text-textlight font-normal">(6)</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
