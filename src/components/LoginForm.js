import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigator = useNavigate();
    const [isVisiable, setIsVisiable] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email:"", 
        password:""
    });

    function chageHandler(event){
        setLoginFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function signInHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Loged In");
        console.log(loginFormData);
        navigator("/dashboard");
    }

  return (
    <form className='flex flex-col gap-4' onSubmit={signInHandler}>
        <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold'>
            <p>Email Address<sup className='text-red-500'>*</sup></p>
            <input
                required
                name='email'
                type='email'
                placeholder='Enter email address'
                value={loginFormData.email}
                onChange={chageHandler}
                className='w-[100%] h-[40px] bg-slate-600 px-3 text-[1.1rem] rounded-md border-b-2 outline-none'
            />
        </label>
        <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold relative'>
            <p>Password<sup className='text-red-500'>*</sup></p>
            <input
                required
                name='password'
                type={isVisiable ? ("text") : ("password")}
                placeholder='Enter Password'
                value={loginFormData.password}
                onChange={chageHandler}
                className='w-[100%] h-[40px] bg-slate-600 px-3 pr-[3rem] text-[1.1rem] rounded-md border-b-2 outline-none'
            />
            <button
                className='absolute bottom-[0.7rem] right-[1rem] text-[1.2rem]'
                onClick={(event) => {
                    event.preventDefault();
                    setIsVisiable(!isVisiable);
                }}>
                {isVisiable ? (<FaRegEyeSlash />) : (<FaRegEye />)}
            </button>
        </label>

        <button
            className='w-[100%] h-[35px] bg-yellow-400 font-bold text-[1rem] rounded mt-3 hover:bg-yellow-600 transition duration-300'
        >Sign In</button>
    </form>
  )
}

export default LoginForm;