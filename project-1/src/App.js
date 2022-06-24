import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
    const [darkMode, setDarkMode] = React.useState(false)
    const toggleDarkMode = () => setDarkMode(prev => !prev)

    return (
        <div className="container">
            <Navbar darkMode={darkMode} darkModeHandler={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )   

}

export default App;
