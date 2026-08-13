import { forwardRef } from "react";

// Every image path in this app (constants.js, JSON data files, inline JSX)
// is written as if the site were served from "/" — but GitHub Pages project
// sites serve from "/<repo-name>/". import.meta.env.BASE_URL is "/" in dev
// and becomes that repo prefix in the production build (see vite.config.js),
// so resolving every root-relative src through it here fixes every image at
// once instead of rewriting each of the ~150 hardcoded paths individually.
function resolveSrc(src) {
    if (!src || !src.startsWith("/") || src.startsWith("//")) return src;
    return import.meta.env.BASE_URL + src.slice(1);
}

const Image = forwardRef(({ src, alt, fill, priority, style, className, ...rest }, ref) => {
    const fillStyle = fill
        ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            objectFit: "cover",
        }
        : {};
    return (<img ref={ref} src={resolveSrc(src)} alt={alt} loading={priority ? "eager" : rest.loading ?? "lazy"} className={className} style={{ ...fillStyle, ...style }} {...rest}/>);
});
Image.displayName = "Image";
export default Image;
