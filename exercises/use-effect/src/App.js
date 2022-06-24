import React from "react";
import './App.css';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1)

  console.log("Component rendered");

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  const handleClick = () => setCount((prev) => prev + 1)

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h1>The count is {count}</h1>
      <button onClick={handleClick}>Next Character</button>
    </div>
  )
}

export default App;
