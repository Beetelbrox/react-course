import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiencesData from "./data";

const App = () => {
  const cards = experiencesData.map(
    item => <Card key={item.id} {...item}/>
  );
  
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </React.Fragment>
  )
}

export default App;
