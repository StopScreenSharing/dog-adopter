import React from "react";
import { useOutletContext } from "react-router-dom";
import CatForm from "./CatForm";
import CatCard from "./CatCard";


function CatsPage() {

    const { cats, onDeleteCat, onAddCat } = useOutletContext();
    return (
        <div className="form">
            <div className="form">
            <CatForm onAddCat={onAddCat}/>
            </div>
            <div className="container">
                {cats.map(cat => (
                    <CatCard key={cat.id} cat={cat} onDeleteCat={onDeleteCat}/>
                ))}
            </div>

            
        </div>
    )
}

export default CatsPage;