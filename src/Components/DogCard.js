import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import '../Css/PetCard.css'

function DogCard({ dog, onDeleteDog, }) {
    

    return (
    <div className="pet-card">
        <button className='delete-button' onClick={() => onDeleteDog(dog.id)}>X</button>
        <img src={dog.image}  
        alt= "dog" 
        className="card-image"
        style={{height:'auto',
            width: '200px',
            borderRadius: '10px'}}
        />
        <div className="card-content">
            <h2 className="card-name">{dog.name}</h2>
            
              <button className="adopt-button">Adopt!</button>
            <button className="rehome-button">Rehome</button>
        </div>
    </div>
    )
}


export default DogCard;