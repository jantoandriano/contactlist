import "./menus.css"
import { CustomLink } from "../custom-link/custom-link";

export const Menus = () => {

    return (
        <div className="menus__container">
            <CustomLink to="/">All</CustomLink>
            <CustomLink to="favorites">Favorites</CustomLink>
        </div>
    )
}