import React from 'react';
import "./About.css";
import art from "./brandsboard.png"

function About() {
    return(
        <div className="pagelayout">
            <div className="pageChildCenter">
                About me
                <img src={art}></img>
            </div>
        </div>
    );
}

export default About;