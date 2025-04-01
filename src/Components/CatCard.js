import React from "react";


function CatCard() {
    return (
        <div className="pet-card">
            <button className='delete-button'>X</button>
            
            <img src="cat image"  
                alt= "cat" 
                className="card-image"
                style={{height:'auto',
                    width: '200px',
                    borderRadius: '10px'}}
            />
            <h2 className="card-name">Cat Name</h2>
            <button className="adopt-button">Adopt!</button>
        </div>
    )
}

export default CatCard;