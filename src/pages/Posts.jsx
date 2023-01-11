import React from 'react'
import LoginNav from '../components/LoginNav'
import axiosPrivate from '../api/axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { FcLike } from 'react-icons/fc'
import { AiOutlineComment } from 'react-icons/ai'
import { IoIosShareAlt } from 'react-icons/io'
import SocialLinks from '../components/SocialLinks'



function Posts() {
     const userId = localStorage.getItem('userId')
  //user  fetching fuction-----------------
  function getUser() {
    return axiosPrivate.get(`/users/get-user/${userId}`)
    
  }
  // querying funtion
  const {
    data: userData,
    isLoading: loadingUser,
    isError: errorUser,
  } = useQuery([`user-${userId}`], getUser)
  // end of fetching user data
  return (
    <div  className="h-[100vh] overflow-y-auto md:mx-[300px]">
       {/* nav  */}
       <LoginNav userData={userData}/>

      {/* all posts  */}
       <div className='mt-[70px]   p-4  h-[100vh] flex flex-col mb-[340px]'>
          <div className='bg-gray-50 p-3 rounded-sm mb-4 shadow-md border border-gray-200 '>
            {/* caption */}
            <div className={ "flex gap-3"} >
                  <div>
                    <img
                      src={userData?.data?.avatar}
                      alt="avater"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div>
                    <h1>{"userName "} </h1>
                    <h1 className=""> 12:30 2023</h1>
                  </div>
                </div>
            <div className='my-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam consequuntur distinctio nisi, neque saepe alias deserunt, eligendi quae eos enim vitae maxime corrupti quis quas magni minus illo fuga?
              the post caption will be here  all text
            </div>
            {/* images */}
            <div className='flex flex-row  gap-2 overflow-x-hidden scrolling-wrapper min-h-[210px]  py-2  hover:overflow-x-auto w-[100%]  '>
              <img src="https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.webp?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=" alt=""  className=' w- h-[200px] ' />
              <img src="https://media.istockphoto.com/id/91096995/photo/downtown-nairobi.webp?s=1024x1024&w=is&k=20&c=6BEIbiwC8nAhmp42nORN9Xb7mTt0RrqptgQa1I_vkf4=" alt=""  className=' w- h-[200px] ' />
              <img src="https://media.istockphoto.com/id/1294015814/photo/2009-nairobi-panorama.webp?s=1024x1024&w=is&k=20&c==ckIumT9_llfl_TLzL2ELOVYe_j9TopuNv8Oknc42UeA" alt="" className=' w- h-[200px] '  />
              <img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpghttps://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg" alt="" className=' w- h-[200px] '  />
              <img src="https://media.istockphoto.com/id/1352173615/photo/nairobi-skyline.webp?s=1024x1024&w=is&k=20&c=S0zAtGEY1BUr6pl7Kx8Z5xmbWn78QrhTFvYq-iPLrM8=" alt="" className=' w- h-[200px] '  />
            </div>

            {/* like comment section */}
            <div className='flex justify-between mt-2'>
              <div className='flex justify-between items-center gap-2 p-2 rounded-md shadow-md bg-white '>
                <span><FcLike size={25} color="#00df98"/></span>
                <h1>{0}</h1>
              </div>
             <div className='flex justify-between items-center gap-2 p-2 rounded-md shadow-md bg-white '>
                <span>< AiOutlineComment size={25} color="#00df98"/></span>
                <h1>{27}</h1>
              </div>
              <div className='flex justify-between items-center gap-2 p-2 rounded-md shadow-md bg-white '>
                <span>< IoIosShareAlt size={25} color="#00df98"/></span>
              </div>
              

            </div>
          </div>
          <div className='bg-gray-50 p-3 rounded-sm mb-4 shadow-md border border-gray-200 '>
            {/* caption */}
            <div className={ "flex gap-3"} >
                  <div>
                    <img
                      src={userData?.data?.avatar}
                      alt="avater"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div>
                    <h1>{"userName "} </h1>
                    <h1 className=""> 12:30 2023</h1>
                  </div>
                </div>
            <div className='my-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam consequuntur distinctio nisi, neque saepe alias deserunt, eligendi quae eos enim vitae maxime corrupti quis quas magni minus illo fuga?
              the post caption will be here  all text
            </div>
            {/* images */}
            <div className='flex flex-row  gap-2 overflow-x-hidden scrolling-wrapper min-h-[210px]  py-2  hover:overflow-x-auto w-[100%]  '>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFmxpJGXaVrBxNUtWyHzsvXDul_Xs9WWVH5hhq7TX&s" alt=""  className=' w- h-[200px] ' />
              <img src="https://cdn.pixabay.com/photo/2017/09/21/01/42/nairobi-2770345__480.jpg" alt=""  className=' w- h-[200px] ' />
              <img src="https://media.istockphoto.com/id/1352173615/photo/nairobi-skyline.webp?s=1024x1024&w=is&k=20&c=S0zAtGEY1BUr6pl7Kx8Z5xmbWn78QrhTFvYq-iPLrM8=" alt="" className=' w- h-[200px] '  />
              <img src="https://media.istockphoto.com/id/1352173615/photo/nairobi-skyline.webp?s=1024x1024&w=is&k=20&c=S0zAtGEY1BUr6pl7Kx8Z5xmbWn78QrhTFvYq-iPLrM8=" alt="" className=' w- h-[200px] '  />
              <img src="https://media.istockphoto.com/id/1352173615/photo/nairobi-skyline.webp?s=1024x1024&w=is&k=20&c=S0zAtGEY1BUr6pl7Kx8Z5xmbWn78QrhTFvYq-iPLrM8=" alt="" className=' w- h-[200px] '  />
            </div>

            {/* like comment section */}
            <div className='flex justify-between mt-2'>
              <div className='flex justify-between items-center gap-2'>
                <span><FcLike size={25} color="#00df98"/></span>
                <h1>{0}</h1>
              </div>
             <div className='flex justify-between items-center gap-2'>
                <span>< AiOutlineComment size={25} color="#00df98"/></span>
                <h1>{0}</h1>
              </div>
              <div className='flex justify-between items-center gap-2'>
                <span>< IoIosShareAlt size={25} color="#00df98"/></span>
              </div>
              

            </div>
          </div>
          <div>
            <SocialLinks/>
          </div>

       </div>
        
    </div>
  )
}

export default Posts