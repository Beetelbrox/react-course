import React from "react";
import logo from "../img/react-logo.png"

const Navbar = (props) => {

    return (
        <nav className={`nav ${props.darkMode ? "nav--dark" : "nav--light"}`}>
            <img src={logo} className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="nav__switch">
                <h4 className={props.darkMode ? "unSelected" : ""}>Light</h4>
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={props.darkModeHandler}
                        checked={props.darkMode}
                        value={props.darkMode}
                    />
                    <span className="slider round"></span>
                </label>
            <h4
                className={!props.darkMode ? "unSelectedDark" : ""}
                style={{fontWeight: "100"}}
            >Dark</h4>

            </div>
        </nav>
    )
}

export default Navbar;