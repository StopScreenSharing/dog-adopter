import React from "react";
import { useOutletContext } from "react-router-dom";
import DogCard from "./DogCard";
import '../Css/DogsPage.css';

function DogsPage() {
   const { dogs, onAddDog, onDeleteDog } = useOutletContext();

    return (
 <div className="dog-container">
    {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} onDeleteDog={onDeleteDog} onAddDog={onAddDog}/>
    ))}
 </div>
 )
}

export default DogsPage;