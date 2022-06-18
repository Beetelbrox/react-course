import React from "../../../solo-project-1/node_modules/@types/react";
import logo from "../img/react-logo.png"

const Navbar = () => (
    <nav className="nav">
        <img src={logo} className="nav--icon"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
)

export default Navbar;