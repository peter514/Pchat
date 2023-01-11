import React from 'react'
import LoginNav from '../components/LoginNav'
import axiosPrivate from '../api/axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { FcLike } from 'react-icons/fc'
import { AiOutlineComment } from 'react-icons/ai'
import { IoIosShareAlt } from 'react-icons/io'
import SocialLinks from '../components/SocialLinks'

function Account() {

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

       {/* add post */}
       <div className='mt-[70px] mb-4  p-4  h-[100vh] flex flex-col'>
        {
          loadingUser ? <div>loading...</div>
          :
          <div>
            <div>
          <h1 className='text-center font-bold my-5'> User Info </h1>
          {/* update username */}
          <div>
            <h1 className='mb-3'>Update userName</h1>
          <form action="" className='bg-gray-50 py-5'>
            <div className='flex gap-6'>
              <label htmlFor="" className='font-semibold'> UserName:</label>
              <input type="text" defaultValue={userData?.data?.userName} className="border border-primary p-1 outline-none " />
            </div>
            <div className='flex flex-col justify-center items-start my-4'>
              <button className='bg-primary py-1 px-3 ml-4 rounded-md '>Update </button>
            </div>
          </form>
          </div>
          <hr />
          {/* update profile picture */}
          <div className='mt-3'>
            <h1 className='mb-3'>Update Profile picture</h1>
          <form action="" className='bg-gray-50 py-5'>
            <div className='flex gap-6'>
              
              <input type="file" accept='.jpeg, .jpg, .png' className="  p-1 outline-none " />
            </div>
            <div className='flex flex-col justify-center items-start my-4'>
              <button className='bg-primary py-1 px-3 ml-4 rounded-md '>Update Profile </button>
            </div>
          </form>
          </div>
          <hr />

          {/* update password */}
          <div className='mt-3 mb-[90px]'>
            <h1 className='mb-3'>Change password </h1>
          <form action="" className='bg-gray-50 py-5'>
            <div className='flex gap-6'>
              <label htmlFor="">Password</label>
            <input type="password"  className="border border-primary p-1 outline-none " />

              
            </div>
            <div className='flex flex-col justify-center items-start my-4'>
              <button className='bg-primary py-1 px-3 ml-4 rounded-md '>Update password </button>
            </div>
          </form>
          </div>
          <hr />

        </div>
          </div>
        
        }

       </div>

      
       
          <div>
            <SocialLinks/>
          </div>

    </div>
  )
}

export default Account