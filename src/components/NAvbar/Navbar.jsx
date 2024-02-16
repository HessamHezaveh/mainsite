import React from 'react'
import Logo from"../../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-aos="fade-down" className='fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
        <div className="container">
            <div className="flex justify-center md:justify-between items-center">

                <div className=" items-center gap-3 hidden md:flex text-white font-bold text-2xl">
                    
                    <span>Odyssey</span>
                </div>

                
                <div className='text-white md:block'>
                    <ul className='flex items-center gap-6 text-l md:text-xl sm:py-0'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contacts">CONTACT</Link></li>

                    </ul>
                </div>
                <div className=" items-center gap-3 hidden md:flex text-white font-bold text-2xl">
                <img src={Logo} alt="" className='w-10' />
                </div>

            </div>
        </div>
    </div>

  )
}

export default Navbar