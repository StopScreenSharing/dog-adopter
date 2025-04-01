import React, {useState} from "react";


function CatCard({cat, onDeleteCat}) {
    const [isAdopted, setIsAdopted] = useState(false);

    const handleToggleAdopt = () => {
        setIsAdopted(prevIsAdopted => !prevIsAdopted);
    };

    return (
        <div className="pet-card">
            <button className='delete-button' onClick={() => onDeleteCat(cat.id)}>X</button>
            
            <img src={cat.image} 
                alt= "cat" 
                className="card-image"
                style={{height:'auto',
                    width: '200px',
                    borderRadius: '10px'}}
            />
            <h2 className="card-name">{cat.name}</h2>
            <button className={isAdopted ? "rehome-button" : "adopt-button"} onClick={handleToggleAdopt}>{isAdopted ? "Rehome" : "Adopt" }</button>
        </div>
    )
}

export default CatCard;