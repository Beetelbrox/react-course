import React from "react";

const Joke = (props) => {
    const [isShown, setIsShown] = React.useState(false);
    const toggle = () => setIsShown(prev => !prev)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>Show punchline</button>
            <hr />
        </div>
    )
};

export default Joke;
