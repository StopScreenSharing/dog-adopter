import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/NavBar.css';


function NavBar() {

    return (
        <nav className="nav-bar">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            <NavLink to="/dogspage" className="nav-link">
                Dogs
            </NavLink>

            <NavLink to="/catspage" className="nav-link">
                Cats
            </NavLink>
        </nav>
    );
};

export default NavBar; 