
import { FaWhatsapp } from "react-icons/fa6";
import video from '../../assets/1.mp4';

const HeroDev = () => {
  return (
    <div className='h-[98vh] relative'>
    <div>
      <video autoPlay loop muted className='fixed right-0 top-0 h-[98vh]  w-full object-cover z[-1]'>
      <source src={video} type='video/mp4'/>
      </video>
    </div>


    <div className='bg-black/20 h-full text-white relative z-50 ' >
        <div className="h-full flex justify-center items-center p-4 ">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className='space-y-4 '>
                    <h1 data-aos="fade-up" className='text-4xl font-bold uppercase'>
                    Design and Develop
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                    <span className='text-xl'>"</span>
                    Welcome to the digital frontier, where innovation meets expertise. As your seasoned web developer, We bring a wealth of experience across a spectrum of technologies, from the fundamental trio of HTML, CSS, and JavaScript to the dynamic realms of React and Three.js. With a foundation in Python and Django, We empower your projects with robust backend solutions. From sleek, responsive designs to immersive 3D experiences, we specialize in crafting tailored solutions that elevate your online presence. Let's collaborate to turn your vision into a seamless, engaging reality.<span className='text-xl '>"</span> <br />
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500" className='primary-button'> <FaWhatsapp className='inline text-xl'/> Massage Us </button>

                </div>
                <div>
                    
                </div>
            </div>
        </div>

        

        {/* bottom gradient section */}
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'>

        </div>
    </div>
    </div>
  );
};

export default HeroDev