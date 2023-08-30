import React from 'react'
import heroVid from '../assets/video.mp4';
const Hero = () => {
  return (
    <div className=' w-full hh-[90vh] top-[90px]'>
        <video src={heroVid} autoPlay loop muted></video>
      
    </div>
  )
}

export default Hero
