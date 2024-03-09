import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import "./custom-link.css"

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className={`${match ? 'link__container active' : 'link__container'}`}>
            <Link
                className="link__item"
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}