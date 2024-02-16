import React from 'react'
import { ServiceData, ServicePostData } from './ServiceData';
import Cards from '../../components/Cards/Cards'
import Post from '../../components/Post/Post';
import PostCard from '../../components/Post/PostCard';

const ServicesPg = () => {
  return (
    <div> 
      <Cards cardsData={ServiceData} />
      <Post PostData={ServicePostData} />
      {/* <PostCard PostData={ServicePostData}/> */}
    </div>
  )
}

export default ServicesPg
