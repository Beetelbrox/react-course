import React from "react";
import banner from "../img/wallpaper.jpg"


const Hero = () => (
    <section className="hero">
        <img src={banner} className="hero--wallpaper"/>
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by
        one-of-a-kind hosts -- all without leavig home.</p>
    </section>
);

export default Hero;