import React from "react";
import '../Css/Form.css';


function CatForm() {
    return (
        <form className="form">
            <h3 className="h3">Upload Cat</h3>
            <label className="name">
                <input type="text" className="input" name="name" placeholder="Pet name"/>
            </label>
            <label className="image">
                <input type="text" className="input" name="image" placeholder="Image"/>
            </label>
           <button type="submit" className="button">Submit</button>
        </form>
    )
}

export default CatForm;