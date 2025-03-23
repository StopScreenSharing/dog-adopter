import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../Css/App.css';

function App() {
  return (
   <div className='app'>
    <h1 className='title'>🐾 Dog Adopter 🐾</h1>
      <header>
        <NavBar />
      </header>
      <Outlet />
   </div>
  );
}

export default App;
