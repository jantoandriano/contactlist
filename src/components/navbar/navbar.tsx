import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css"
import React from "react";

type Props = {
    title: string
}

export const Navbar: React.FC<Props> = ({ title }) => {
    return (
        <nav className="nav">
            <GiHamburgerMenu size={30} />
            <div className="nav__title">{title}</div>
            <div></div>
        </nav>
    )
}