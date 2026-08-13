const ModuleLabel = ({ module, placement }) => (
    <div className={`flex flex-col items-center gap-10 ${placement === "top" ? "justify-end" : "justify-start"}`}>
        {placement === "top" && (
            <div className="w-260 p-16 rounded-xl bg-card border border-primary/20 text-sm text-white/70 leading-relaxed text-center">
                {module.description}
            </div>
        )}
        <span className="w-260 text-white font-bold text-base text-center leading-snug duration-500 group-hover:text-primary">
            {module.title}
        </span>
        {placement === "bottom" && (
            <div className="w-260 p-16 rounded-xl bg-card border border-primary/20 text-sm text-white/70 leading-relaxed text-center">
                {module.description}
            </div>
        )}
    </div>
);

const ProgramModuleNode = ({ module, index }) => {
    const isTop = index % 2 === 0;

    return (
        <>
            {/* Desktop: a node sitting on the timeline spine, label flipping above/below in a zigzag, description always visible. */}
            <div className="module-node group hidden xl:grid shrink-0 w-[280px] h-[460px] grid-rows-[1fr_auto_1fr] items-stretch relative">
                <div className="row-start-1 flex items-end justify-center pb-24">
                    {isTop && <ModuleLabel module={module} placement="top" />}
                </div>
                <div className="row-start-2 flex items-center justify-center relative z-10">
                    <div className="module-dot size-56 rounded-full border-2 border-primary/40 bg-black flex items-center justify-center text-primary font-bold text-sm duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                        {module.number}
                    </div>
                </div>
                <div className="row-start-3 flex items-start justify-center pt-24">
                    {!isTop && <ModuleLabel module={module} placement="bottom" />}
                </div>
            </div>

            {/* Mobile / tablet fallback: a plain stacked card, description always visible, no hover needed. */}
            <div className="xl:hidden md:col-span-6 col-span-12">
                <div className="highlight-card bg-white/10 rounded-2lg h-full flex sm:gap-24 gap-16 items-start sm:p-40 p-25">
                    <div className="shrink-0 size-60 sm:size-70 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">
                        {module.number}
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-8">{module.title}</h3>
                        <p className="text-sm sm:text-base text-white/60">{module.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramModuleNode;
