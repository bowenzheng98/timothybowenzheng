import React, { useState, useEffect } from "react";
import home from "./Home.module.css";
import image from "./brandsboard.png";
import art from "./art-board.png";
import clsx from "clsx";

function Home() {
  const [animated, setAnimated] = useState(false);
  const [pos1, setPos1] = useState(home.centerImageContainer);
  const [pos2, setPos2] = useState(home.leftImageContainer);

  function handleClick() {
    setAnimated(!animated);
    setTimeout(() => {
      setPos1(home.leftImageContainer);
      setPos2(home.centerImageContainer);
      setAnimated(false);
    }, 1000);
  }

  return (
    <div className="page-layout">
      <div
        className={clsx(
          pos1, 
          animated ? home.animated : null,
          animated ? home.moveRight : null,
        )}
      >
        <img src={image} onClick={handleClick} alt=""></img>
      </div>
      <div
        className={clsx(
          pos2,
          animated? home.animated : null,
          animated ? home.moveRight : null,
        )}
      >
        <img src={art} onClick={handleClick} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
