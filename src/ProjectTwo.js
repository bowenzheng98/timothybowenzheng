import React from "react";
import Carousel from "./components/ProjectTwoCarousel"
import "./ProjectTwo.css"

function ProjectTwo() {
    return (
        <div className="center-element">
            <div className="center-content">
                <div>Title</div>
                <div className="row-container">
                    <div className="row-item">
                        Project
                    </div>
                    <div className="row-item">
                        About
                    </div>
                </div>
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default ProjectTwo;