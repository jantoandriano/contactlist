import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className="nav">
            <GiHamburgerMenu size={30} />
            <div className="nav__title">Contact List</div>
            <div></div>
        </nav>
    )
}