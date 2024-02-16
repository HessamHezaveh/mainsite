import React from 'react'
import {  VideoHero } from '../../Pages/VideoEdit/VideoData.js';
import Hero from "../../components/Hero/Hero.jsx"

const VideoEdit = () => {
  return (
    <div>
       <Hero HeroData={VideoHero}/>
    </div>
  )
}

export default VideoEdit
