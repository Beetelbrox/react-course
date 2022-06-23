import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData";

const App = () => {

  const jokes = jokesData.map(
    joke => <Joke setup={joke.setup} punchline={joke.punchline} />
  )

  return (
    <main>
      {jokes}
    </main>
  )
};

export default App;