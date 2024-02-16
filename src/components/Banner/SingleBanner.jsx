

import { Link } from 'react-router-dom';






const SingleBanner = (props) => {
    const BannerData= props.BannerData
  return (
        <div>

            

            {BannerData.map((data,key)=>(
                <div key={key}  className='bg-black text-white  relative z-50 pt-[5rem] pb-[5rem] '>
                    <div className='container' >
                        <div className='grid  grid-cols-1 sm:grid-cols-2 gap-4 items-center'>


                        
                            
                            <div  data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 order-last sm:order-first ' >
                                                
                                <p data-aos="fade-up" className='text-sky-800 uppercase'>{data.content}</p>
                                <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl '>{data.title}</h1>
                                <p data-aos="fade-up" data-aos-delay="500">{data.description}</p>
                            
                                <Link to={data.link}><button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button></Link>
                            </div>

                            <div>
                                <img data-aos="zoom-in" src={data.img} alt="" className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover '/>  
                            </div>



                                
                        </div>

                    </div>
                </div>
            ))}
        </div>
    ) 
}

export default SingleBanner
