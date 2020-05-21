/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth * 0.35

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const [loaded, setLoaded] = useState(false)

  const { translate, transition, activeIndex } = state

  useEffect(() => {
      if (!loaded) {
          setTimeout(() => {
              setLoaded(true)
          }, 2500)
      } else {
          nextSlide()
      }
  })

  const nextSlide = () => {
    setTimeout(() => {
        if (activeIndex === props.slides.length - 1) {
            return setState({
              ...state,
              translate: 0,
              activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }, 3000)  
  }

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
  )
}

const SliderCSS = css`
  position: relative;
  height: 45vh;
  width: 35vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider