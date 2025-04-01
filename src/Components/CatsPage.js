import React from "react";
import { useOutletContext } from "react-router-dom";
import CatForm from "./CatForm";
import CatCard from "./CatCard";


function CatsPage() {
    return (
        <div className="form">
            <div className="form">
            <CatForm />
            </div>
            <div className="container">
                <CatCard />
            </div>

            
        </div>
    )
}

export default CatsPage;