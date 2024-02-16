import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"

import Navbar from './components/NAvbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';
import WebDev from './Pages/WebDev/WebDev';
import VideoEdit from './Pages/VideoEdit/VideoEdit';
import GameD from './Pages/GameD/GameD';
import ServicesPg from './Pages/ServicesPg/ServicesPg';


const App = () => {

  React.useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
  });
  })

  return (
    <div>

      

        <BrowserRouter> 
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='webdev' element={<WebDev/>}/>
            <Route path='videoedit' element={<VideoEdit/>}/>
            <Route path='gamedev' element={<GameD/>}/>
            <Route path='services' element={<ServicesPg/>}/>
            <Route path='*' element={<div>404 Error</div>}/>

          </Routes>


          <Footer/>
        </BrowserRouter> 
          
     
      
    </div>
  )
}

export default App