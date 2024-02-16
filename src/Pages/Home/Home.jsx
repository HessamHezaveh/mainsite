

import { HomeHero, HomeBanner1, HomeBanner2, HomeBanner3 } from '../Home/HeroData.js'

import Banner from '../../components/Banner/Banners'
import Services from '../../components/Services/Services'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <div>
        <Hero HeroData={HomeHero}/>       
        <Services/>
        <Banner Banner1Data={HomeBanner1} Banner2Data={HomeBanner2} Banner3Data={HomeBanner3}/>

    </div>
  )
}

export default Home
