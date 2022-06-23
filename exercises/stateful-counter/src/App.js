import React from "react";
import './App.css';
import Count from "./components/Count"

const App = () => {

  const [count, setCount] = React.useState(0);

  const plus_one = () => (setCount(prevState => prevState + 1))
  const minus_one = () => (setCount(prevState => prevState - 1))


  return (
    <div className="counter">
      <button onClick={minus_one} className="counter__button">-</button>
      <Count number={count}/>
      <button onClick={plus_one} className="counter__button">+</button>
    </div>
  );
}

export default App;
