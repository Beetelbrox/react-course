import React from "react";

const Joke = (props) => (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        <p>{props.punchline}</p>
        <hr />
    </div>
)

export default Joke;
