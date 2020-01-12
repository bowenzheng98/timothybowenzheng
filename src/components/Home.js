import React, { useState, useEffect } from "react";
import home from "./Home.module.css";
import image from "./brandsboard.png";
import art from "./art-board.png";
import clsx from "clsx";

function Home() {
  const [animated, setAnimated] = useState(false);
  const [originalDivPos, setOriginalDivPos] = useState(home.centerImageContainer);
  const [offScreenDivPos, setOffScreenDivPos] = useState(home.leftImageContainer);

  function handleClick() {
    setAnimated(!animated);
  }

  return (
    <div className="page-layout">
      <div
        className={clsx(
          home.centerImageContainer,
          home.animated,
          animated ? home.moveRight : null,
        )}
      >
        <img src={image} onClick={handleClick} alt=""></img>
      </div>
      <div
        className={clsx(
          home.leftImageContainer,
          home.animated,
          animated ? home.moveRight : null,
        )}
      >
        <img src={art} onClick={handleClick} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
