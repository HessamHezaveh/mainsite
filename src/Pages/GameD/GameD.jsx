import React from 'react'


import { GameBannerData, GameHero } from '../../Pages/GameD/GameData.js';

import SingleBanner from '../../components/Banner/SingleBanner'
import Hero from '../../components/Hero/Hero.jsx';

const GameD = () => {
  return (
    <div>
       
        <Hero HeroData={GameHero}/>
          {/* <div   className='bg-black text-[#d034ff] font-bold text-5xl block  relative z-50 pt-[1rem] pb-[1rem]'>
          <h1 data-aos="fade-right" data-aos-delay="300">____Portfolio</h1>
          </div> */}


        {/* <SingleBanner BannerData={GameBannerData}/> */}

           
    </div>
  )
}


export default GameD
