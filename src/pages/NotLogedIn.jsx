import React from 'react'
import { Link } from 'react-router-dom'

function NotLogedIn() {
  return (
    <div className='flex flex-col justify-center items-center'>
       <h1 className='text-center p-6'> Ooops!! Unauthorized. Please log in.</h1>

        <Link to="/login" ><h1 className='bg-primary p-2'  >Back to login</h1></Link>
        
    </div>
  )
}

export default NotLogedIn