import React, {useState} from 'react'
import NavBar from '../components/navBar'
import {RiLoginCircleFill} from 'react-icons/ri'
import {Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import  axiosPrivate  from '../api/axios';
import PulseLoader from "react-spinners/PulseLoader";


function LoginPage() {
  const [wrongDetails, setWrongDetails] = useState();
  const navigate = useNavigate();
   const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();
   // create login function 
const login = (user) => {
    return axiosPrivate.post("/auth/login", user);
  };

  // create account mutation function-----------------------
  const { mutate:loginMutate, isError:errorLogin, isLoading:loadingLogin } = useMutation(login, {
    onSuccess: (response) => {
      const text = response?.data?.message;
      toast.success(text);
      const userId = response?.data?.userId;    
      JSON.stringify(userId)  
      localStorage.setItem('userId', userId)
      navigate("/chat-home");
      reset();
    },
    onError: (err) => {
      const text = err?.response?.data?.message;
      setWrongDetails(text);
      setTimeout(() => {
        setWrongDetails("");
      }, 8000);
      toast.error(text);
      if (!err.response.data.message) {
         toast.error("something went wrong")
      }
    },
  });
  
    const onsubmit= (data)=>{
      loginMutate(data)
      console.log(data)


    }
  return (
    <div className='h-[90vh] bg-gray-50 mt-[70px] '>
      {/* page header */}
      <Helmet>
        <title>Pchat | Login</title>
      </Helmet>
        {/* nav bar  */}
        <NavBar/>
        {/* page content here */}
        <div className='flex flex-col justify-center items-center'>
          
           <div className='mt-[90px] bg-white w-[90%] md:w-[40%] p-4 shadow-md drop-shadow-lg ' >
          <div className='flex flex-col justify-center items-center mb-4' >
            <div className='flex justify-center items-center gap-2 '>
              <span><RiLoginCircleFill size={23} color='#00df98' /></span>
              <h1 className='text-primary font-bold underline'>Login </h1>
            </div>
            
          </div>
                    <h1 className='text-sm text-red-500  my-6  text-center'>{wrongDetails}</h1>

          <form action="" onSubmit={handleSubmit(onsubmit)} className='flex flex-col justify-center items-center gap-8' >
            <div className='w-[60%]'>
          
            <input type="text" placeholder='UserName' className='w-full border border-primary outline-none p-2 rounded-sm '  
            {...register("userName", {
                      required: true,                    
                    })}
                    />
                     <p className="text-red-500">
                    {errors.userName?.type === "required" && "User name is required"}
             </p>
            </div>
            <div className='w-[60%]'>
         
            <input type="password" placeholder='password' className='w-full border border-primary outline-none p-2 rounded-sm '  
             {...register("password", {
                      required: true,                    
                    })}
            
            />
             <p className="text-red-500">
                    {errors.password?.type === "required" && "Password is required"}
             </p>
            </div>
            {
              loadingLogin ? <div>
                   <PulseLoader
                  color="#00df98"
                  size={10}                
                />
              </div>
              :

            <div>
              
              <input type="submit" className={loadingLogin? "bg-slate-200 text-gray-900" :"bg-primary text-white  p-2 rounded-md"} />
            </div>
            }
           
            <div className='flex gap-3'>
              <h1 className='italic '>Dont  have an account?</h1>
              <Link to ='/register' className='text-primary '>Sign up  </Link>
            </div>
          
          </form>
        </div>
        </div>
       
    
    </div>
  )
}

export default LoginPage