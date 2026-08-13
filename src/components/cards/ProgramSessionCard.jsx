import Image from "@/components/common/Image";

const ProgramSessionCard = ({ session, index }) => {
    return (
        <div className="panel xl:w-[620px] sm:min-w-[380px] min-w-[260px] max-xl:col-span-6 max-md:col-span-12 xl:shrink-0">
            <div className="bg-white rounded-2lg overflow-hidden h-full flex flex-col shadow-lg group">
                <div className="relative aspect-[750/600] w-full overflow-hidden">
                    <Image
                        loading="lazy"
                        src={session.img}
                        alt={session.title}
                        width={750}
                        height={600}
                        className="size-full object-cover duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-16 left-16 rounded-full bg-black/70 text-white text-xs font-semibold px-14 py-6">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
                <div className="p-16 sm:p-18 flex-1 flex flex-col gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-black">{session.title}</h3>
                    <p className="text-xs sm:text-sm text-black/60">{session.excerpt}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramSessionCard;
