import React from 'react'
import { TbPhoneCall } from 'react-icons/tb'
import { SlOptionsVertical } from 'react-icons/sl'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import EmojiPicker from 'emoji-picker-react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosPrivate from '../api/axios'
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PulseLoader from "react-spinners/PulseLoader";


function Chat() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();
  const qaueryClient = useQueryClient()
  const { bothUserId } = useParams()
  const senderId = bothUserId.split(':')[0]
  const receiverId = bothUserId.split(':')[1]

  //get receiver   data -----------------
  function getReceiver() {
    return axiosPrivate.get(`/users/get-user/${receiverId}`)
  }
  // querying funtion
  const {
    data: receiverData,
    isLoading: loadingReceiver,
    isError: errorReceiver,
  } = useQuery([`user-${receiverId}`], getReceiver)
  const joinDate =  receiverData?.data?.createdAt?.split('T')[0]
  // end of fetching user data.......................

  //get conversation......................
  function getConversation() {
    return axiosPrivate.get(`/messages/conversation/${bothUserId}`)
  }
  // querying funtion
  const {
    data: conversationData,
    isLoading: loadingConversation,
    isError: errorConversation,
  } = useQuery([`messages-${bothUserId}`], getConversation,{
    refetchInterval: 1000,
  });
  // end...................
  //  send message  function 
const sendMessage = (message) => {
    return axiosPrivate.post("/messages/send", message);
  };

  //  send message  mutation function-----------------------
  const { mutate:messageMutation, isError:errorSendingMessage, isLoading:loadingSendMessage } = useMutation(sendMessage, {
    onSuccess: (response) => {
      const text = response?.data?.message;
      toast.success(text);
      reset();
      qaueryClient.invalidateQueries(`messages-${bothUserId}`);
    },
    onError: (err) => {
      const text = err?.response?.data?.message;
      toast.error(text);
      if (!err.response.data.message) {
         toast.error("something went wrong")
      }
    },
  });
  
    const submit= (data)=>{
      if(!data.message){
        toast.warn("Please type a message!")
      }else{
          data.senderId = senderId;
      data.receiverId = receiverId;
      messageMutation(data)
      console.log(data)

      }
    


    }


  return (
    <div className="bg-slate-50 min-h-[90vh]  md:mx-[300px] ">
      {/* page header */}
      <Helmet>
        <title>Pchat | chat</title>
      </Helmet>
      {/* chat nav  */}
      <div className="bg-white shadow-md p-3 flex justify-between  md:mx-[300px]  fixed top-0 right-0 left-0 z-10 ">
        <div className="flex justify-center items-center gap-3">
          <img
            src={receiverData?.data?.avatar}
            alt="avater"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div>
            <h1>{receiverData?.data?.userName}</h1>
            <h1 className="italic"> Join date: {joinDate}</h1>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <span>
            <TbPhoneCall size={25} color="#00df98" />
          </span>
          <span>
            <SlOptionsVertical size={20} color="#00df98" />
          </span>
        </div>
      </div>

      {/* messages */}
      <div className="flex flex-col  justify-center items-center">
        <div className=" m-px min-h-screen drop-shadow-md  w-[95%]  mt-[82px] mb-20">
          {/* will loop texts here  */}
          {
            loadingConversation ?
         <div className='h-screen flex justify-center items-center'>
                   <PulseLoader
                  color="#00df98"
                  size={10}                
                />
              </div>
            :
            conversationData?.data?.message ?
            <div>
              <h1 className='text-center p-3 '>{conversationData?.data?.message}</h1>

            </div>
            :
            conversationData?.data?.map((message, index)=>{
              const messageTime = message?.createdAt.split("T")[1].substring(0,5);
              const hours = parseInt(messageTime.split(":")[0]) + 3;
              const min = messageTime.split(":")[1];
              const GMT_time = `${hours}:${min}`
              

              return(
                    <div className={message.senderId === senderId ?"m-2  bg-[#379237] p-1 rounded-md  text-white w-[50%] float-right  "  : "text-white float-left bg-gray-800 w-[50%] m-2  p-1 rounded-md "}  key={index}>
                      <p className='p-2'>
                          {message?.message}
                      </p>
                      <h1 className="text-[15px] text-right"> {GMT_time} </h1>
                   </div>
              )
            })
          }


          {/*  */}
          
        </div>
        {/* type message input */}
        <div className="fixed bottom-0 right-0 left-0 flex flex-col justify-center  items-center ">
          <form action="" className="md:mx-4 md:w-[50%]">
            <div className="flex justify-center items-center gap-2 bg-gray-200 border border-primary rounded-lg p-4  ">
              <div className="flex gap-2 justify-center items-center w-full">
                {/* <h1><BsEmojiSmileFill size={25} color='#00df98'/></h1> */}

                <input
                  type="text"
                  placeholder="Message"
                  className="bg-gray-200 outline-none w-full  "
                  {...register("message", {require:true})}
                />
                <p>
                     {errors.message?.type === "required" && toast.success("Message is required")}
                </p>
              </div>
              <div>
                <h1 type="submit" onClick={handleSubmit(submit)}>
                  <BiSend size={28} color="#00df98" />
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat
