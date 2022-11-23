import React from 'react'
import {TbPhoneCall} from 'react-icons/tb'
import {SlOptionsVertical} from 'react-icons/sl'
import {BsEmojiSmileFill} from "react-icons/bs"
import {BiSend} from 'react-icons/bi'
import EmojiPicker from 'emoji-picker-react';

function Chat() {
  return (
    <div className='bg-gray-50 min-h-[90vh]  '>
      {/* chat nav  */}
    <div  className='bg-white shadow-md p-3 flex justify-between md:px-[300px] fixed top-0 right-0 left-0 z-10 '>
      <div className='flex justify-center items-center gap-3'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfquls68AtoznDe9qqme9LR7ZjLroycAgWCcteDSJ&s" alt="avater"  className='w-[50px] h-[50px] rounded-full'/>
        <div>
          <h1>purity</h1>
          <h1 className='italic'>last seen: 12:00</h1>
        </div>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <span>
          <TbPhoneCall size={25} color="#00df98"/>
        </span>
        <span><SlOptionsVertical  size={20} color="#00df98"/></span>
      </div>
    </div>

    {/* messages */}
    <div className='flex flex-col  justify-center items-center'>
      <div className='bg-primary m-px min-h-screen drop-shadow-md  md:w-[50%] mt-[82px] pb-14'>
        
      {/* will loop texts here  */}
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂🤷‍♀️
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂
          Lorem  elit. Consectetur iste illum excepturi, voluptatum, in,  Amet, eum odio iusto expedita sed eaque autem voluptate.
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂🤷‍♀️
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂🤷‍♀️
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂
          Lorem  elit. Consectetur iste illum excepturi, voluptatum, in,  Amet, eum odio iusto expedita sed eaque autem voluptate.
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂🤷‍♀️
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      <div className='m-2 bg-slate-50 p-1 rounded-md'>
        <p>
          The message. ulikua wapy leo i w slooking for you.😂
        </p>
        <h1 className='text-[15px] text-right'> 10:30</h1>
      </div>
      


       
      </div>
        {/* type message input */}
      <div className='fixed bottom-0 right-0 left-0 flex flex-col justify-center  items-center '>
        <form  action="" className='w-full md:w-[630px]' >

        <div className='flex justify-center items-center gap-2 bg-gray-200 rounded-lg p-4  '>
          <div className='flex gap-2 justify-center items-center w-full'>
           {/* <h1><BsEmojiSmileFill size={25} color='#00df98'/></h1> */}
        
          <input type="text"  placeholder= "Message" className='bg-gray-200 outline-none w-full '/>
          </div>
          <div>
            <h1><BiSend size={28} color='#00df98' /></h1>

          </div>
         
        </div> 
        </form>
      </div>
      
     

    </div>

    </div>
  )
}

export default Chat