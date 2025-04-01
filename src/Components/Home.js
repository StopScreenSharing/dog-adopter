import React from "react";
import '../Css/Home.css';

function Home() {
    return (
        <div className="home">
            <h2 className="home-page-h2">Adopt or Shop?</h2>
            <p className="p">We all have a dream pet that we would love to have in our home, and that would check all of the boxes that we want in a fluffy companion. But, there are thousands of dogs and cats that may not be the <i>perfect</i> breed, but are in need of loving homes. Consider adopting before shopping! You may be surprised how great a shelter pet can be!</p> 
            <br/> 
            <p className="p"> Make sure to always research before considering getting any pet! </p>
            <br/>
            <img src="https://www.americanhumane.org/wp-content/uploads/2024/11/shutterstock_162633491-1440x900.jpg" alt="A cat and a dog laying next to eachother" className="home-image"/>
        </div>
        
    )
}

export default Home;