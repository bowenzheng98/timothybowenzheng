import React, { useState, useEffect } from 'react'
import style from './ProjectTwo.module.css'
import Slider from './components/Slider'
import clsx from 'clsx'

function ProjectTwo () {
  const [contentVisible, setContentVisible] = useState(false)
  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]

  useEffect(() => {
    setTimeout(() => { setContentVisible(true) }, 2500)
  }, [])

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
          <Slider slides={images} timeout={5000} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTwo
