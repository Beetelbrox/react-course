import React from "react";
import boxes from "./boxes";
import Box from "./components/Box"

const App = () => {
  const [squares, setSquares] = React.useState(boxes);


  const toggle = (id) => setSquares(prev => prev.map(
    s => s.id === id ? {...s, on: !s.on} : s
  ))

  const squareElements = squares.map(box => <Box
    key={box.id}
    on={box.on}
    toggle={() => toggle(box.id)}
    className="box"
  />)

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
