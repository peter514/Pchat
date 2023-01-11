import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeHeart } from 'react-icons/bi'
import { TiSocialInstagram } from 'react-icons/ti'
import { BiImageAdd } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'

function SocialLinks() {
  return (
 
      <div className='flex flex-row justify-between p-2 bg-slate-200 shadow-md md:mx-[320px] absolute bottom-1 right-0 left-0 w-[]'>
          <Link to='/chat-home' >
          <div className='flex justify-between items-center'>
            <span><BiHomeHeart size={25} color="#00df98" /></span>
            <h1 className='text-primary font-semibold'>Home</h1>
          </div>
          </Link>

          <Link to="/posts">
         <div className='flex justify-between items-center'>
            <span><TiSocialInstagram size={25} color="#00df98" /></span>
            <h1 className='text-primary font-semibold'>Posts</h1>
          </div>
          </Link>

          <Link to="/add-post" >
          <div className='flex justify-between items-center'>
            <span><BiImageAdd size={25} color="#00df98" /></span>
            <h1 className='text-primary font-semibold'>Add Post</h1>
          </div>
          </Link>

          <Link to="/account" >
          <div className='flex justify-between items-center p-1'>
            <span><AiTwotoneSetting size={25} color="#00df98" /></span>
            <h1 className='text-primary font-semibold'>Account</h1>
          </div>
          </Link>

      </div>
  )
}

export default SocialLinks