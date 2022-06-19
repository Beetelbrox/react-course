import React from "react"
import Joke from "./components/Joke"

const App = () => (
  <div>
    <Joke
      setup="What’s the best thing about Switzerland?"
      punchline="I don’t know, but the flag is a big plus."
    />
    <Joke
      setup="I invented a new word!"
      punchline="Plagiarism!"
    />
    <Joke
      setup="Did you hear about the mathematician who’s afraid of negative numbers?"
      punchline="He’ll stop at nothing to avoid them."
    />
    <Joke
      punchline="Single line joke"
    />
  </div>
);

export default App;