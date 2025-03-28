import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import DogForm from "./DogForm";
import DogsPage from "./DogsPage";

function AdoptPage() {
    const { dogs, onAddDog, onDeleteDog } = useOutletContext();

    return (
        <div className="adopt-page">
            <DogForm onAddDog={onAddDog} />
            <br/>
            <DogsPage dogs={dogs} onDeleteDog={onDeleteDog}/>
        </div>
    )
}

export default AdoptPage;