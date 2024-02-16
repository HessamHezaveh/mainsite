
import wave from "../../assets/wave Gif.gif"

import { Link } from 'react-router-dom';

// import { ServiceData } from './ServiceData.js';


/** */



const Cards = (props) => {
    const cardsData= props.cardsData




  return (
    <div className='bg-black text-white relative z-50'>
        <div className='container'>
        
            <div className='min-h-[100px] '>
 
                
                
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-[3rem] sm:gap-[1rem] relative pt-[10rem] z-10'>
                    
                    {cardsData.map((data,key)=>(
                        <Link to={data.link} key={key}  className='hover:scale-[1.1] ease-in duration-300 '>
                            <div  data-aos="fade-up" data-aos-delay={data.aosDelay} className='h-[500px] sm:h-[350px] flex flex-col gap-2 justify-center items-center bg-[#1e1b4b] rounded-xl backdrop-blur-sm text-center text-2xl py-5 px-3 w-full lg:w-[300px] mx-auto'> 
                                
                                <img src={data.img} className='rounded-xl '></img>
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm text-ellipsis line-clamp-5'>{data.description}</p>
                                
                                
                            </div>
                        </Link>
                        ))}
                </div>
                <img src={wave} alt="" className='mt-[5rem] h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0] mb-[-5rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Cards