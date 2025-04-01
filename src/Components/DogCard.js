import React, {useState} from 'react';
import '../Css/PetCard.css'

function DogCard({ dog, onDeleteDog, }) {
    const [isAdopted, setIsAdopted] = useState(false);

    const handleToggleAdopt = () => {
        setIsAdopted(prevIsAdopted => !prevIsAdopted)
    }

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
            
              <button className={isAdopted ? "rehome-button" : "adopt-button"} onClick={handleToggleAdopt}>{isAdopted ? "Rehome" : "Adopt"}</button>
        </div>
    </div>
    )
}


export default DogCard;