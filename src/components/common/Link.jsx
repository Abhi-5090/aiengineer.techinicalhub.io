import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
const isExternal = (href) => /^([a-z]+:)?\/\//i.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");
const Link = forwardRef(({ href, children, ...rest }, ref) => {
    if (isExternal(href)) {
        return (<a ref={ref} href={href} {...rest}>
          {children}
        </a>);
    }
    return (<RouterLink ref={ref} to={href} {...rest}>
        {children}
      </RouterLink>);
});
Link.displayName = "Link";
export default Link;
