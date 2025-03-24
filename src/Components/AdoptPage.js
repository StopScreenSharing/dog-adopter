import React, {useEffect, useState} from "react";
import DogForm from "./DogForm";
import DogsPage from "./DogsPage";

function AdoptPage() {
    const [dogs, setDogs] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then((dogs) => setDogs(dogs))
    }, [])

    const handleAddDog = (newDog) => {
        fetch('http://localhost:3000/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newDog.name,
            image: newDog.image
        })
    })
    .then(response => response.json())
    .then(addedDogs => {
        setDogs([...dogs, addedDogs]);
    });
};

    return (
        <div className="adopt-page">
            <DogForm onAddDog={handleAddDog} />
            <br/>
            <DogsPage dogs={dogs}/>
        </div>
    )
}

export default AdoptPage;