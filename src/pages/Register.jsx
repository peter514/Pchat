import React from 'react'
import NavBar from '../components/navBar'
import {RiAccountCircleFill} from 'react-icons/ri'
import {Link } from 'react-router-dom'
function Register() {
  return (
    <div className='h-[90vh] bg-gray-50 mt-[70px]'>
        {/* nav bar  */}
        <NavBar/>
        {/* page content here */}
        <div className='flex flex-col justify-center items-center'>

           <div className='mt-[90px] bg-white w-[90%] md:w-[40%] p-4 shadow-md drop-shadow-lg ' >
          <div className='flex flex-col justify-center items-center mb-4' >
            <div className='flex justify-center items-center gap-2 '>
              <span><RiAccountCircleFill size={23} color='#00df98' /></span>
              <h1 className='text-primary font-bold underline'>Create Account </h1>
            </div>
            
          </div>
          <form action="" className='flex flex-col justify-center items-center gap-4' >
            <div >
          
            <input type="text" placeholder='UserName' className='w-full border border-primary focus:outline-none p-2 rounded-sm '  />
            </div>
            <div>
         
            <input type="password" placeholder='password' className='w-full border border-primary focus:outline-none p-2 rounded-sm '  />
            </div>
            <div>
           
            <input type="password" placeholder='Confirm password' className='w-full border border-primary focus:outline-none p-2 rounded-sm '  />
            </div>
            <div>
              <input type="submit" className='bg-primary text-white  p-2 rounded-md ' />
            </div>
            <div className='flex gap-3'>
              <h1 className='italic '>Already have an account?</h1>
              <Link to ='/login' className='text-primary '>Login </Link>
            </div>
          
          </form>
        </div>
        </div>
       
    
    </div>
  )
}

export default Register