
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Hero = (props) => {
  const HeroData= props.HeroData
  
  return (

    <div>


    {HeroData.map((data,key)=>(
    <div key={key} className='h-[98vh] relative'>
    
      <div>
        <video autoPlay loop muted className='fixed right-0 top-0 h-[98vh]  w-full object-cover z[-1]'>
        <source src={data.video} type='video/mp4'/>
        </video>
      </div>


      <div className='bg-black/20 h-full text-white relative z-50 ' >
          <div className="h-full flex justify-center items-center p-4 ">
              <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className='space-y-4 '>
                      <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>
                      {data.title}
                      </h1>
                      <h3>{data.content}</h3>
                      <p data-aos="fade-up" data-aos-delay="300">
                        <span className='text-xl '>"</span> {data.description}        <span className='text-xl '>"</span> <br />
                      </p>
                      <Link to="{data.link}">
                      <button data-aos="fade-up" data-aos-delay="500" className='primary-button'> <FaWhatsapp className='inline text-xl'/> Massage Us </button>

                      </Link>
                      
                  </div>
                  <div>
                      
                  </div>
              </div>
          </div>

          
          {/* surgace section */}
          {/* <img src={Mountimg}alt="" className='absolute right-0 bottom-0 w-full brightness-[0] z-10  ' /> */}
          {/* brightness-[0] OR brightness-50*/}
          {/* bottom gradient section */}
          <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
      </div>
    
    </div>
    ))}
    </div>
  );
};

export default Hero