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
    console.log("Moving " + nextMove);
    switch (nextMove) {
      case 0:
        setMoveRight(true);
        break;
      case 1:
        setMoveLeft(true);
        break;
      case 2:
        setMoveUp(true);
        break;
      case 3:
        setMoveDown(true);
        break;
      default:
        break;
    }
    setTimeout(() => {
      var randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      console.log("Random number is :" + randomnumber);
      setNextMove(randomnumber);
      console.log("nextMove is: " + nextMove);
      if (pos1Visible) {
        setPos2(home.centerImageContainer);
        switch (randomnumber) {
          case 0:
            setPos1(home.leftImageContainer);
            break;
          case 1:
            setPos1(home.rightImageContainer);
            break;
          case 2:
            setPos1(home.bottomImageContainer);
            break;
          case 3:
            setPos1(home.topImageContainer);
            break;
          default:
            break;
        }
      } else {
        setPos1(home.centerImageContainer);
        switch (randomnumber) {
          case 0:
            setPos2(home.leftImageContainer);
            break;
          case 1:
            setPos2(home.rightImageContainer);
            break;
          case 2:
            setPos2(home.bottomImageContainer);
            break;
          case 3:
            setPos2(home.topImageContainer);
            break;
          default:
            break;
        }
      }
      setAnimated(false);
      setMoveRight(false);
      setMoveLeft(false);
      setMoveUp(false);
      setMoveDown(false);
      setPos1Visible(!pos1Visible);
    }, 1500);
  }

  return (
    <div className="page-layout">
      <div
        className={clsx(
          pos1,
          animated ? home.animated : null,
          moveRight ? home.moveRight : null,
          moveLeft ? home.moveLeft : null,
          moveUp ? home.moveUp : null,
          moveDown ? home.moveDown : null,
        )}
      >
        <img src={image} onClick={handleClick} alt=""></img>
      </div>
      <div
        className={clsx(
          pos2,
          animated ? home.animated : null,
          moveRight ? home.moveRight : null,
          moveLeft ? home.moveLeft : null,
          moveUp ? home.moveUp : null,
          moveDown ? home.moveDown : null,
        )}
      >
        <img src={art} onClick={handleClick} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
