import React from "react";
import '../Css/DogCard.css'

function DogCard({ dog }) {
    return (
    <div className="dog-card">
        <img src={dog.image}  
        alt= "dog" 
        className="dog-card-image"
        style={{height:'auto',
            width: '200px',
            borderRadius: '10px'}}
        />
        <div className="card-content">
            <h2 className="dog-card-name">{dog.name}</h2>
            <button className="adopt-button">Adopt!</button>
            <button className="rehome-button">Rehome</button>
        </div>
    </div>
    )
}

export default DogCard;