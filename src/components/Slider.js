/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'

const getWidth = () => window.innerWidth * 0.35

/**
 * @function Slider
 */
const Slider = (props) => {
  const slides = props.slides

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: -1,
    translate: 0,
    transition: 0.45,
    _slides: [slides[firstSlide], slides[secondSlide]]
  })

  const { translate, transition, activeSlide, _slides } = state
  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const smooth = () => {
      transitionRef.current()
    }
    const resize = () => {
      resizeRef.current()
    }

    const interval = setInterval(play, 3000)
    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (transition === 0) {
      setState({ ...state, transition: 0.45 })
    }
  }, [transition])

  const nextSlide = () => {
    console.log(activeSlide)
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })
  }

  const smoothTransition = () => {
    let _slides = []

    // if we're at the last slide
    if (activeSlide === slides.length - 1) {
      _slides = [lastSlide, firstSlide]
    } else if (activeSlide === 0) {
      // we're back at the first slide
      _slides = [firstSlide, secondSlide]
    } else {
      // create an array of the current slide and the next slide that follows it
      _slides = slides.slice(activeSlide, activeSlide + 2)
    }
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: 0
    })
  }

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((slide) => (
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
