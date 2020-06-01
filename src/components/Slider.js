/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";
import Slide from "./Slide";

const getWidth = () => window.innerWidth * 0.35;

/**
 * @function Slider
 */
const Slider = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(play, 3000)
    return () => clearInterval(interval)
  },  []) //TODO add props.visible

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide) => (
          <Slide key={slide} content={slide} />
        ))}
      </SliderContent>
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 45vh;
  width: 35vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
