import React from 'react'
import Logo from '../assets/images/logo.png'
import { FiLogOut } from 'react-icons/fi'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'


function LoginNav(props) {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    toast.success("Loged out!")
    navigate("/login")

  }
  return (
    <div className="bg-white  md:mx-[300px] shadow-lg drop-shadow-md p-3 flex justify-between fixed top-0 right-0 left-0 ">
        
        <div>
          <img src={Logo} alt="logo" className="h-[50px] w-[50px] ml-5" />
        </div>

        <div className="flex justify-center items-center gap-4 pr-2">
          <h1>Welcome, {props?.userData?.data?.userName}</h1>
          <img
            src={props?.userData?.data?.avatar}
            className="w-[50px] h-[50px] rounded-full"
          />
          <span>
            {' '}
            <FiLogOut size={30} color="#00df98" onClick={logout} />
          </span>
        </div>
      </div>
  )
}

export default LoginNav