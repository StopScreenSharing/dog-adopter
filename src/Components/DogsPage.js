import React from "react";
import DogCard from "./DogCard";
import '../Css/DogsPage.css';

function DogsPage({ dogs }) {
    return (
 
 <div className="dog-container">
    {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog}/>
    ))}
 </div>
 )
}

export default DogsPage;