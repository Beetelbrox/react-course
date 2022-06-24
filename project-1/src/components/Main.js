import React from "react";

const Main = (props) => {
    const mode = props.darkMode ? "dark" : "light"
    return (
        <main className={mode}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was origially created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of eterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main;