import React from "react";
import WindowTracker from "./components/WindowTracker"
import "./App.css"

function App() {

  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow(prev => !prev)

  return (
    <div className="container">
      <button onClick={handleClick}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
