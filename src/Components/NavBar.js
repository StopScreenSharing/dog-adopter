import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

    return (
        <nav>
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