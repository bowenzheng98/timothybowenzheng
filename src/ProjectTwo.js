import React, { useState, useEffect } from "react";
import Carousel from "./components/ProjectTwoCarousel"
import style from "./ProjectTwo.module.css"
import clsx from "clsx"

function ProjectTwo() {

    const [contentVisible,setContentVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setContentVisible(true);
        }, 2500)
    })

    return (
        <div className={style.centerElement}>
            <div className={style.centerContent}>
                <h1 className={style.projectTitle}>Untitled</h1>
                <div className={clsx(contentVisible ? style.menuContainer : style.invisible)}>
                    <div className={clsx(style.menuItem, style.fromLeft)}>
                        Project
                    </div>
                    <div className={clsx(style.menuItem, style.fromLeft)}>
                        About
                    </div>
                </div>
                <div className={clsx(contentVisible ? style.carouselContainer : style.invisible, style.carouselSpacePadding)}>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo;