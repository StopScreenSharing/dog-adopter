import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../Css/App.css';


function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
    
      useEffect(() => {
          fetch('http://localhost:3000/dogs')
          .then(r => r.json())
          .then(dogs => setDogs(dogs))
      }, []);
  
      const handleAddDog = (newDog) => {
          fetch('http://localhost:3000/dogs', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newDog)
      })
      .then(response => response.json())
      .then(addedDog => {
          setDogs([...dogs, addedDog]);
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

  useEffect(() => {
    fetch('http://localhost:3000/cats')
    .then(r => r.json())
    .then(cats => setCats(cats))
  }, [])

  const handleAddCat = (newCat) => {
    fetch('http://localhost:3000/cats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCat)
    })
    .then(response => response.json())
    .then(addedCat => {
      setCats([...cats, addedCat]);
    });
  }

  const handleDeleteCat = (catId) => {
    fetch(`http://localhost:3000/cats/${catId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setCats(cats.filter(cat => cat.id !== catId));
    })
  }
  
  return (
   <div className='app'>
    <h1 className='title'>🐾 Pet Adopter 🐾</h1>
      <header>
        <NavBar />
      </header>
      <Outlet context={{ 
        dogs: dogs, 
        onAddDog: handleAddDog, 
        onDeleteDog: handleDeleteDog,
        cats: cats,
        onAddCat: handleAddCat,
        onDeleteCat: handleDeleteCat
        }} />
   </div>
  );
}

export default App;
