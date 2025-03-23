import React from "react";
import '../Css/Home.css';

function Home() {
    return (
        <div className="home">
            <h2 className="home-page-h2">Adopt or Shop?</h2>
            <p className="p">We all have a dream dog that we would love to have in our home, and that would check all of the boxes that we want in a dog. But, there are thousands of dogs that may not be the <i>perfect</i> breed of dog in need of lovings homes. Consider adopting before shopping! You may be surprised how great a shelter dog can be!</p> 
            <br/> 
            <p className="p"> Make sure to always research before considering getting any pet! </p>
            <br/>
            <img src="https://images.ctfassets.net/440y9b545yd9/7cABSHg3Tcytg6tWDj0Pfa/51129a114bbf13d2fd5fcc1790d596a7/Adopt-mixed-breed-hero850.jpg" alt="A Dog" className="home-image"/>
        </div>
        
    )
}

export default Home;