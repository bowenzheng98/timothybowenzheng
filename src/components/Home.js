import React, { useState} from "react";
import home from "./Home.module.css";
import disgusting from "./disgusting.png";
import erdamiri from "./erdamiri.png";
import hollow from "./hollow.png";
import ngg from "./ngg.png";
import clsx from "clsx";

function Home() {
  const images = [ngg, erdamiri, disgusting, hollow];
  const [imagesIndex, setImagesIndex] = useState(2);

  const [pos1Image, setPos1Image] = useState(images[0]);
  const [pos2Image, setPos2Image] = useState(images[1]);

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
      setNextMove(randomnumber);
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
        setPos1Image(images[imagesIndex]);
        if (imagesIndex < 3) {
          setImagesIndex(imagesIndex + 1);
        } else {
          setImagesIndex(0);
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
        setPos2Image(images[imagesIndex]);
        if (imagesIndex < 3) {
          setImagesIndex(imagesIndex + 1);
        } else {
          setImagesIndex(0);
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
        <img src={pos1Image} onClick={handleClick} alt=""></img>
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
        <img src={pos2Image} onClick={handleClick} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
