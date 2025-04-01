import React from "react";
import { useOutletContext } from "react-router-dom";
import DogForm from "./DogForm";
import DogCard from "./DogCard";
import '../Css/Page.css';

function DogsPage() {
   const { dogs, onDeleteDog, onAddDog } = useOutletContext();

    return (
      <div className="form">
         <div className="form">
            <DogForm onAddDog={onAddDog} />

         </div>
         <div className="container">
            {dogs.map((dog) => (
                  <DogCard key={dog.id} dog={dog} onDeleteDog={onDeleteDog} />
            ))}
         </div>
      </div>
 )
}

export default DogsPage;