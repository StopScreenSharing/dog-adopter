import React, {useState} from "react";
import '../Css/DogForm.css';

function DogForm() {
    return (
        <form className="form">
           <h3 className="h3">Upload Dog</h3>

            <label className="dog-name">
                Dog Name:
                <input type="text" className="input"></input>
            </label>
          
            <label className="image">
                Image:
                <input type="text" className="input"></input>
            </label>
           
           <button className="button">Submit</button>
        </form>
    )
}

export default DogForm;