import React, {useState} from 'react'
import NavBar from '../components/navBar'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import  axiosPrivate  from '../api/axios';
import PulseLoader from "react-spinners/PulseLoader";





function Register() {
   const [alreadyInUseData, setAlreadyInUseData] = useState("");
   const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch
  } = useForm();

  // create account function 
const registerUser = (user) => {
    return axiosPrivate.post("/users/register", user);
  };

  // create account mutation function-----------------------
  const { mutate:userMutate, isError:errorUser, isLoading:loadinguser } = useMutation(registerUser, {
    onSuccess: (response) => {
      const text = response?.data?.message;
      toast.success(text);
      reset()
      navigate("/login");
    },
    onError: (err) => {
      const text = err?.response?.data?.message;
      setAlreadyInUseData(text);
      setTimeout(() => {
        setAlreadyInUseData("");
      }, 8000);
      toast.error(text);
      if (!err.response.data.message) {
         toast.error("something went wrong")
      }
    },
  });
  

    const onsubmit= (data)=>{
      userMutate(data)


    }

  return (
    <div className='h-[90vh] bg-gray-50 mt-[70px]'>
      {/* page header */}
      <Helmet>
        <title>Pchat | Sign-up</title>
      </Helmet>
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
          <h1 className='text-sm text-red-500  my-6  text-center'>{alreadyInUseData}</h1>
          <form action="" onSubmit={handleSubmit(onsubmit)} className='flex flex-col justify-center items-center gap-8' >
            <div className='w-[60%]'>
          
            <input type="text" placeholder='UserName' className='w-full border border-primary focus:outline-none p-2 rounded-sm '  
            {...register("userName", {
                      required: true,                    
                    })}
            />
             <p className="text-red-500">
                    {errors.userName?.type === "required" && "User name is required"}
             </p>

            </div>
            <div className='w-[60%]'>
         
            <input type="password" placeholder='password'  className='w-full border border-primary focus:outline-none p-2 rounded-sm ' 
            {...register("password", {
                      required: true,                    
                    })}
            />
             <p className="text-red-500">
                    {errors.password?.type === "required" && "Password is required"}
             </p>
            </div>
            {
              loadinguser ? <div>
                  <PulseLoader
                  color="#00df98"
                  size={10}                
                />
              </div> 
              :
            <div>
              <input type="submit" className='bg-primary text-white  p-2 rounded-md hover:cursor-pointer ' />
            </div>
            }
           
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