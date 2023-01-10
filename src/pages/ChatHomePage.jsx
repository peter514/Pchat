import React from 'react'
import { Link  } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { FiLogOut } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axiosPrivate from '../api/axios'
import { toast } from 'react-toastify'
import PulseLoader from 'react-spinners/PulseLoader'

function ChatHomePage() {
   
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

  // get all users
  function getAllusers() {
    return axiosPrivate.get(`/users/all-users`)
  }
  // querying funtion
  const {
    data: allUsersData,
    isLoading: loadingUsers,
    isError: errorUsers,
  } = useQuery([`users`], getAllusers)
  // end of geting users

  return (
    <div className="h-[100vh] overflow-y-auto md:mx-[300px]">
      {/* page header */}
      <Helmet>
        <title>Pchat | ChatDashboard</title>
      </Helmet>
      {/* nav bar */}
      <div className="bg-white  md:mx-[300px] shadow-lg drop-shadow-md p-3 flex justify-between fixed top-0 right-0 left-0 ">
        
        <div>
          <img src={Logo} alt="logo" className="h-[50px] w-[50px] ml-5" />
        </div>

        <div className="flex justify-center items-center gap-4 pr-2">
          <h1>Welcome, {userData?.data?.userName}</h1>
          <img
            src={userData?.data?.avatar}
            className="w-[50px] h-[50px] rounded-full"
          />
          <span>
            {' '}
            <FiLogOut size={30} color="#00df98" />
          </span>
        </div>
      </div>

      {/* all users chats */}
      <div className="mt-[70px]   p-4  h-[100vh] flex flex-col  ">
        {loadingUsers ? (
          <div className="h-screen flex justify-center items-center">
            <PulseLoader color="#00df98" size={10} />
          </div>
        ) : allUsersData?.data?.message ? (
          <div> {allUsersData?.data?.message} </div>
        ) : (
          allUsersData?.data?.map((user, index) => {
          
            
            return (
              <Link to={`/chat/${userId}:${user?._id}`} key={index}>
                <div className={user?._id === userId? "hidden" : "flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4"} >
                  <div>
                    <img
                      src={user.avatar}
                      alt="avater"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div>
                    <h1>{user?.userName} </h1>
                    <h1 className="italic">open chat...</h1>
                  </div>
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

export default ChatHomePage
