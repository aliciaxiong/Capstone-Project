import React from 'react'
import './Homeowners.css'
import homeownersvideo from '../images/homeownersvideo.mp4'

const Homeowners = () => {
  return (
    <>
    <div className="body-container">
        <video className='homeownersVideo' src={ homeownersvideo } autoPlay loop muted />
    </div>
    </>
  )
}
export default Homeowners