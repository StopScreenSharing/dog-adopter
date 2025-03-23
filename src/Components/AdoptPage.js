import React from "react";
import DogForm from "./DogForm";
import DogsPage from "./DogsPage";

function AdoptPage() {
    return (
        <div className="adopt-page">
            <DogForm />
            <br/>
            <br/>
            <DogsPage />
        </div>
    )
}

export default AdoptPage;