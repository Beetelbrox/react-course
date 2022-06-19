import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData";

const App = () => (
  jokesData.map(
    joke => <Joke setup={joke.setup} punchline={joke.punchline} />
  )
);

export default App;