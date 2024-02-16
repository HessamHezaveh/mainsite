
import  satImg from "../../assets/10.jpg"

const Contacts = () => {
  return (
    <div className='bg-black  text-white  min-h-[100vh] relative z-[50]'>
        <div className='container pt-[7rem] flex pb-[10rem]'>
            <div className=' items-center text-center'>
                <div>
                    <img data-aos="zoom-in" src={satImg} alt="" className=' w-[100vw] mx-auto max-h-[350px] object-cover' />
                </div>
                

                <div className='pb-[5rem] border-b-2 border-b-sky-800 '>
                   <p data-aos="fade-up"  className='text-sky-800 uppercase'>Where we are?</p>
                   <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl  p-[5rem]'>Contacts US</h1>
                   <p data-aos="fade-up" data-aos-delay="400" className='pr-[4rem] pl-[4rem] pb-[3rem]'>  </p>
                   <button data-aos="fade-up" data-aos-delay="100" className='primary-button'>EASY CHAT</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contacts