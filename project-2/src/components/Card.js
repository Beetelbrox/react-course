import React from "react";
import harold from "../img/harold_cropped.png";

const Card = () => (
    <div className="card">
        <img src={harold} className="card--image" />
        <div className="card--label">SOLD OUT</div>
        <div className="card--stats">
            <i className="fa-solid fa-star card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <p>How to do the thing</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
);

export default Card;