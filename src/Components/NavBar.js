import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/NavBar.css';


function NavBar() {

    return (
        <nav className="nav-bar">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            <NavLink to="/adoptpage" className="nav-link">
                Adopt Page
            </NavLink>

            <NavLink to="/mydogs" className="nav-link">
                My Dogs
            </NavLink>
        </nav>
    );
};

export default NavBar; 