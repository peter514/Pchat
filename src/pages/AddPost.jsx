import React from 'react'
import LoginNav from '../components/LoginNav'
import axiosPrivate from '../api/axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { FcLike } from 'react-icons/fc'
import { AiOutlineComment } from 'react-icons/ai'
import { IoIosShareAlt } from 'react-icons/io'
import SocialLinks from '../components/SocialLinks'

function AddPost() {
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
    <div  className="h-[100vh] bg-gray-50 overflow-y-auto md:mx-[300px]">
       {/* nav  */}
       <LoginNav userData={userData}/>

       {/* add post */}
       <div className='mt-[70px] h-[100vh] flex flex-col'>
        <div className=' flex flex-col justify-center items-center mt-8'>

        <form action="" className='bg-gray-100 min-h-[350px] flex flex-col w-full m-1  md:w-[70%] rounded-md  p-2'>
            <h1 className='text-center '>Create Post</h1>
            <div className='flex flex-col gap-1'>
                <label htmlFor="">Caption</label>
                <textarea placeholder='Type caption...' className='min-h-[100px] border outline-none border-primary'></textarea>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
                <label htmlFor="">Upload images </label>
                <input type="file" multiple accept='.png, .jpeg, .jpg' />
            </div>
            <div  className='flex flex-col gap-1 w-full justify-center items-center mt-4'>
                <input type="submit" className='bg-primary w-[25%] p-2' />

            </div>
        </form>
        </div>
        
       </div>

      
       
          <div>
            <SocialLinks/>
          </div>

    </div>
        
    
    )
}

export default AddPost