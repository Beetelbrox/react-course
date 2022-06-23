import React from "react";


const Box = (props) => {

    const boxStyle = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return <div className="box" style={boxStyle} onClick={props.toggle} />
};

export default Box;