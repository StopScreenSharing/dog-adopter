import React, {useState} from "react";
import '../Css/Form.css';


function CatForm({onAddCat}) {
    const [catForm, setCatForm] = useState({
        name:'',
        image:'',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCatForm({
            ...catForm,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat(catForm);
        setCatForm({
            name:'',
            image:'',
        });
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="h3">Upload Cat</h3>
            <label className="name">
                <input type="text" className="input" name="name" placeholder="Pet name" value={catForm.name} onChange={handleChange}/>
            </label>
            <label className="image">
                <input type="text" className="input" name="image" placeholder="Image" value={catForm.image} onChange={handleChange}/>
            </label>
           <button type="submit" className="button">Submit</button>
        </form>
    )
}

export default CatForm;