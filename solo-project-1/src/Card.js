import React from "react";
import profile_pic from "./img/harold.jpeg"
import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

const MainContent = () => (
  <main className="main">
      <About />
      <Interests />
  </main>
)

const Card = () => (
  <main className="container">
    <img src={profile_pic} className="profile_pic"/>
    <div className="container--content">
      <Header />
      <MainContent />
      <Footer />
    </div>

  </main>
)

export default Card;
