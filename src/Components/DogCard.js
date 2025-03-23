import React from "react";
import '../Css/DogCard.css'

function DogCard() {
    return (
    <div className="dog-card">
        <img src="Image"  alt= "dog" className="dog-card-image"/>
        <h2 className="dog-card-name">Dog Name</h2>
        <span>
            <button className="adopt-button">Adopt!</button>
        </span>
    </div>
    )
}

export default DogCard;