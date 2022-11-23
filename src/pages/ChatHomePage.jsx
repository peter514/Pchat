import React from 'react'
import {Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import {FiLogOut} from 'react-icons/fi'

function ChatHomePage() {
  return (
    <div className='h-[100vh] overflow-y-auto'>
      {/* nav bar */}
      <div  className='bg-white shadow-lg drop-shadow-md p-3 flex justify-between fixed top-0 right-0 left-0 ' >
        <div>
         <img src={Logo} alt="logo" className='h-[50px] w-[50px] ml-5' />
        </div>
        <div className='flex justify-center items-center gap-4 pr-2' >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
          <span> <FiLogOut size={30}  color="#00df98" /></span>
        </div>
      </div>

      {/* all users chats */}
      <div className='mt-[70px]  md:mx-[350px] p-4  h-[100vh] flex flex-col  '>
          <Link to='/chat'>
          <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>Purity 🎉</h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
          </Link>
          
           <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>Tim 🙌 </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
           <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-sm p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>Judy </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
           <div className='flex gap-3 bg-gray-50 shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>June 🌹 </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
           <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>Kimani </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
           <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>Ruth </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
           <div className='flex gap-3 bg-gray-50 m-[0.4px] shadow-md p-4' >
            <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
            </div>
            <div>
              <h1>james </h1>
              <h1 className='italic' >open chat...</h1>
            </div>
          </div>
      </div>

    </div>
  )
}

export default ChatHomePage