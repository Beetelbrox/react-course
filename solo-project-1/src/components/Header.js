import React from "react";

const Buttons = () => (
    <section className="header--buttons">
        <button className="email_button">
            <i class="fa fa-envelope" /> Email
        </button>
        <button className="linkedin_button">
            <i class="fa fa-linkedin-square" /> Linkedin
        </button>
    </section>
)

const Header = () => (
    <header className="header">
        <h3 className="header--name">Harold</h3>
        <p className="header--job_title">Internet Connoisseur</p>
        <p className="header--webpage">harold@internet.com</p>    
        <Buttons />
    </header>
)

export default Header;