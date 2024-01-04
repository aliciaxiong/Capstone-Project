import React from 'react'
import './About.css'
import aboutvideo from '../images/aboutvideo.mp4'

const About = () => {
  return (
    <>
      <div className='aboutContainer1'>
        <video className='aboutVideo' src={ aboutvideo } autoPlay loop muted />
      </div>

    </>
  )
}
export default About