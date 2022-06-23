import React from "react"
import logo from "./img/harold_transparent.png"
import Meme from "./components/Meme"

function App() {
  return (
    <div className="App">
      <header className="header">
          <img src={logo} className="header__logo"></img>
          <h2 className="header__title">Meme Generator</h2>
          <p>React Course - Project 3</p>
      </header>
      <Meme />
    </div>
  );
}

export default App;
