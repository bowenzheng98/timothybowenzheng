import React, { useState, useEffect } from "react";
import home from "./Home.module.css";
import image from "./brandsboard.png";
import art from "./art-board.png";
import clsx from "clsx";

function Home() {
  const [nextMove, setNextMove] = useState(0);
  const [animated, setAnimated] = useState(false);

  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveDown, setMoveDown] = useState(false);
  const [moveUp, setMoveUp] = useState(false);



  const [pos1, setPos1] = useState(home.centerImageContainer);
  const [pos2, setPos2] = useState(home.leftImageContainer);
  
  const [pos1Visible, setPos1Visible] = useState(true);

  function handleClick() {
    setAnimated(true);
    setTimeout(() => {
      if (pos1Visible){
        setPos2(home.centerImageContainer);
        switch (nextMove) {
          case 0:
            setPos1(home.leftImageContainer);
        }
      } else {
        setPos1(home.centerImageContainer);
        switch (nextMove) {
          case 0:
            setPos2(home.leftImageContainer);
        }
      }
      // setPos1(home.leftImageContainer);
      // setPos2(home.centerImageContainer);
      setAnimated(false);
      setPos1Visible(!pos1Visible);
    }, 1000);
  }

  function determineNextMove(){
    //0 move right, 1 move left, 2 move up, 3 move down
    //currently only move right
    setNextMove(0);
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
