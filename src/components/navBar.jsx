import React from 'react'
import Logo from '../assets/images/logo.png'
import {FiPhoneCall} from 'react-icons/fi'

function navBar() {
  return (
    <div className='bg-white shadow-lg drop-shadow-md p-4 flex justify-between fixed top-0 right-0 left-0  '>
        <div>
         <img src={Logo} alt="logo" className='h-[60px] w-[60px] ml-5' />
        </div>
        <div className='flex justify-center items-center gap-3'>
            <span><FiPhoneCall size={23} color="#00df98" /></span>
            <h1>0706181387</h1>
        </div>

    </div>
  )
}

export default navBar