import React from "react";
import Carousel from "./components/ProjectTwoCarousel"
import "./ProjectTwo.css"

function ProjectTwo() {
    return (
        <div className="center-element">
            <div className="center-content">
                <h1 className="project-title">Control, Uncontrol</h1>
                <div className="menu-container">
                    <div className={`menu-item from-left`}>
                        Project
                    </div>
                    <div className={`menu-item from-left`}>
                        About
                    </div>
                </div>
                <div className="carousel-container">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo;