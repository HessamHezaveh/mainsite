
import { FaReact  } from "react-icons/fa";

import wave from "../../assets/wave Gif.gif"

import { BsCameraReels } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";

const ServiceData = [
    {
        id: 0,
        title: "Innovation Focus",
        content:"",
        description: "At our company, innovation fuels our work. We're always pushing boundaries to create standout digital solutions.",
        icon: <FaReact className="text-7xl"/>,
        aosDelay: "300",
    },

    {
        id: 1,
        title: "Playful Creativity",
        content:"",
        description: "We bring a playful touch to every project, infusing creativity and imagination into our work for memorable digital experiences.",
        icon: < IoGameControllerOutline className="text-7xl"/>,
        aosDelay: "500",
    },
    {
        id: 2,
        title: "Efficiency in Action:",
        content:"",
        description: "We prioritize efficiency, delivering effective digital solutions that exceed expectations and drive real results.",
        icon: <BsCameraReels className="text-7xl"/>,
        aosDelay: "700",
    },
]
const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
        <div className='container'>
            <div className='min-h-[400px]' data-aos="fade-out">
                <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-[1rem] gap-[6rem] relative  z-10'>
                    
                    {ServiceData.map((data,key)=>(
                            <div key={key} data-aos="fade-up" data-aos-delay={data.aosDelay} className='min-h-[180px] mt-[-5rem] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'> 
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                                
                            </div>

                        ))}
                </div>
                <img  src={wave} alt="" className='mt-[5rem] h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'/>
            </div>
        </div>
    </div>
  )
}

export default Services