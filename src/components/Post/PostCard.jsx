
import { Link } from 'react-router-dom';




const PostCard = (props) => {
    const PostData= props.PostData




  return (
    <div className='bg-black text-white relative z-50 '>
        <div className='container'>
        
            <div className='min-h-[400px] '>
 
                
                
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[1rem] sm:gap-[1rem] relative '>
                    
                    {PostData.map((data,key)=>(
                        <Link key={key} to={data.link} className='hover:scale-[1.1] ease-in duration-300 '>
                            <div  data-aos="fade-up" data-aos-delay={data.aosDelay} className=' min-h-[180px]  flex flex-col gap-2 justify-center items-center bg-[#5a1751] rounded-xl backdrop-blur-sm text-center text-2xl py-5 px-3 w-full lg:w-[300px]  mx-auto'> 
                            
                                
                                <img src={data.img} className='rounded-xl '></img>
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm  text-ellipsis line-clamp-4'>{data.description}</p>
                                
                                
                            </div>
                        </Link>
                        ))}
                </div>
                {/* <img src={wave} alt="" className='mt-[5rem] h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0] mb-[-5rem]'/> */}
            </div>
        </div>
    </div>
  )
}

export default PostCard