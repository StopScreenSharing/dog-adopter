import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../Css/App.css';


function App() {
  const [dogs, setDogs] = useState([]);
  const [isClicked, setisClicked ] = useState(true);
  
      useEffect(() => {
          fetch('http://localhost:3000/dogs')
          .then(r => r.json())
          .then((dogs) => setDogs(dogs))
      }, []);
  
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
  
  const handleDeleteDog = (dogId) => {
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setDogs(dogs.filter(dog => dog.id !== dogId));
    })
  }
  
  return (
   <div className='app'>
    <h1 className='title'>🐾 Dog Adopter 🐾</h1>
      <header>
        <NavBar />
      </header>
      <Outlet context={{ dogs: dogs, onAddDog: handleAddDog, onDeleteDog: handleDeleteDog }} />
   </div>
  );
}

export default App;
