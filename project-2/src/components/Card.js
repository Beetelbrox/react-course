import React from "react";


const Card = (props) => (
    <div className="card">
        <img src={`/img/${props.img}`} className="card--image" />
        {props.open_spots === 0 && <div className="card--badge">SOLD OUT</div>}
        <div className="card--stats">
            <i className="fa-solid fa-star card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
);

export default Card;