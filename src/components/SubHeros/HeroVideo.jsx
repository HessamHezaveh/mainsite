
import { FaWhatsapp } from "react-icons/fa6";
import video from '../../assets/2.mp4';

const HeroVideo = () => {
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
                    <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>
                    VideoGraphy
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                    <span className='text-xl'>"</span>
                      Welcome to a world where visual storytelling meets expertise. As your dedicated videographer and editor, we bring a wealth of experience spanning various industries, from dynamic advertising campaigns to captivating real estate showcases. With a special focus on hospitals and treatment services, we understand the delicate balance between conveying information and evoking emotion. Whether it's capturing the essence of a healing environment or highlighting the innovative treatments offered, we excel in translating complex narratives into compelling visual experiences. Let's collaborate to bring your vision to life, with precision, creativity, and a touch of magic.<span className='text-xl '>"</span> <br />
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500" className='primary-button'> <FaWhatsapp className='inline text-xl'/> Massage me </button>

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

export default HeroVideo