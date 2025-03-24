import React, {useState} from "react";
import '../Css/DogForm.css';

function DogForm({ onAddDog }) {

    const [formData, setFormData] = useState({
        name: '',
        image: '',
    });

     const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        onAddDog(formData);
        setFormData({
            name: '',
            image: '',
        });
     };

    return (
        <form className="form" onSubmit= {handleSubmit}>
            <h3 className="h3">Upload Dog</h3>
            <label className="dog-name">
                <input type="text" className="input" name="name" placeholder="Dog name" value={formData.name} onChange={handleChange}/>
            </label>
            <label className="image">
                <input type="text" className="input" name="image" placeholder="Image" value={formData.image} onChange={handleChange}/>
            </label>
           <button type="submit" className="button">Submit</button>
        </form>
    )
}

export default DogForm;