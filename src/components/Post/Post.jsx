
import { Link } from 'react-router-dom';


const Post = (props) => {
    
    const PostData= props.PostData

  return (
    <div>
    {PostData.map((data,key)=>(
    <div key={key} className='bg-black  text-white  min-h-[100vh] relative z-[50]'>
        <div className='container pt-[7rem]  pb-[10rem]'>
            <div className=' items-center text-center'>
                <div>
                    <img data-aos="zoom-in" src={data.img} alt="" className=' w-[100vw] mx-auto max-h-[450px] object-cover rounded-[10px]' />
                </div>
                <div className='pb-[5rem] border-b-2 border-b-sky-800 '>
                   <p data-aos="fade-up"  className='text-sky-800 uppercase'>{data.content}</p>
                   <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl  p-[5rem]'>{data.title}</h1>
                   <p data-aos="fade-up" data-aos-delay="400" className='pr-[4rem] pl-[4rem] pb-[3rem]'> {data.description}</p>
                   <Link to={"/contacts"}><button data-aos="fade-up" data-aos-delay="100" className='primary-button'>contact us</button></Link>
                </div>

            </div>
        </div>
    </div>
     ))}
    </div>
  )
}

export default Post