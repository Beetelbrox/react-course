import React from "react";

const Card = ({img, name, phone, email}) => ( 
    <div className="card">
        <img src={img} className="card--image"></img>
        <h3>{name}</h3>
        <p><i class="fa-solid fa-phone" /> {phone}</p>
        <p><i class="fa fa-envelope" /> {email}</p>
    </div>
);

export default Card