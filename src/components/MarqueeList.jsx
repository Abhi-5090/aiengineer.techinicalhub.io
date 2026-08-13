import Image from "@/components/common/Image";

const logos = [
    { name: "Meta", src: "/Assets/meta.png" },
    { name: "Grok", src: "/Assets/grok.png" },
    { name: "Google Flow", src: "/Assets/google-flow-cropped.png", nativeLight: true },
    { name: "Gemini", src: "/Assets/Gemini.png" },
    { name: "DeepSeek", src: "/Assets/DeepSeek.png" },
    { name: "Copilot", src: "/Assets/copilot-cropped.png" },
    { name: "Claude", src: "/Assets/claude-cropped.png" },
    { name: "ChatGPT", src: "/Assets/chatgpt-cropped.png" },
    { name: "Zapier", src: "/Assets/Zapier.svg" },
    { name: "RunwayML", src: "/Assets/Runway.png" },
    { name: "Perplexity", src: "/Assets/perplexity-cropped.png" },
];

const track = [...logos, ...logos];

function MarqueeItem({ logo, index }) {
    const isBlackCard = index % 2 === 1;
    const needsInvert = logo.nativeLight ? !isBlackCard : isBlackCard;
    return (
        <div
            className={`sm:w-180 w-135 sm:h-75 h-60 shrink-0 rounded-xl shadow-lg flex items-center justify-center sm:px-24 px-16 sm:py-15 py-10 ${
                isBlackCard ? "bg-black" : "bg-white"
            }`}
        >
            <Image
                src={logo.src}
                alt={logo.name}
                className={`max-w-full max-h-full w-auto h-auto object-contain ${needsInvert ? "invert" : ""}`}
            />
        </div>
    );
}

export default function MarqueeList() {
    return (<section className="noice-overlay sm:py-40 py-20">
      <div className="relative overflow-hidden flex flex-col sm:gap-25 gap-15">
        <div className="flex items-center gap-30 flex-nowrap animate-ticker" style={{ animationDuration: "20s" }}>
          {track.map((logo, index) => (<MarqueeItem logo={logo} index={index} key={`row1-${index}`} />))}
        </div>
        <div className="flex items-center gap-30 flex-nowrap animate-ticker [animation-direction:reverse]" style={{ animationDuration: "20s" }}>
          {track.map((logo, index) => (<MarqueeItem logo={logo} index={index} key={`row2-${index}`} />))}
        </div>
      </div>
    </section>);
}
