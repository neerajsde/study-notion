import React from 'react'
import { FcGoogle } from "react-icons/fc";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImg from '../assets/frame.png'

const Template = ({title, description1, description2, image, formType, setIsLoggedIn, getFormData}) => {
  return (
    <div className='box-container flex justify-center items-center w-[100vw] min-h-[88vh] px-4 bg-slate-800 gap-[3rem] p-5'>
        {/* Left Part */}
        <div className='left-box flex flex-col gap-4 w-[500px]'>
            <h1 className='text-[2rem] font-bold text-white'>{title}</h1>

            <div className='flex flex-col gap-0'>
                <p className='text-[1.1rem] text-gray-300 font-medium'>{description1}</p>
                <p className='text-[1rem] text-blue-500 font-medium italic'>{description2}</p>
            </div>

            {formType === "login" ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) : (<SignupForm setIsLoggedIn={setIsLoggedIn}  getFormData={getFormData}/>)}

            <div className='flex flex-row justify-between items-center'>
                <div className='w-[90%] h-[2px] bg-gray-600'></div>
                <p className='text-gray-300 px-2'>OR</p>
                <div className='w-[90%] h-[2px] bg-gray-600'></div>
            </div>

            <button className='flex justify-center items-center border border-gray-400 py-1 text-[1.1rem] text-white gap-2 rounded-md font-semibold'><FcGoogle /> Sign in with Google</button>

        </div>

        {/* Right Part  */}
        <div className='right-box flex w-[350px] h-[350px] relative justify-center items-center'>
            <img src={image} alt='Image' width='350px' className='absolute top-0 left-0 z-10'/>
            <img src={frameImg} alt='Image' width='350px' className='absolute top-[15px] left-[15px]'/>
        </div>
    </div>
  )
}

export default Template