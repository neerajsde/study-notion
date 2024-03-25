import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn, getFormData}) => {
    const [isStudent, setIsStudent] = useState(true);
    const navigate = useNavigate();
    const [isVisiable, setIsVisiable] = useState(false);
    const [isVisiableCP, setIsVisiableCP] = useState(false);
    const [signupFormData, setSignupFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        conformPassword:"",
        student:true,
        instuctor:false
    })

    function chageHandler(event){
        setSignupFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    function signUpHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Loged In");
        navigate("/dashboard");
        console.log(signupFormData);
        getFormData(signupFormData);            
    }

    function changeBtnHandler(event){
        event.preventDefault();
        setIsStudent(!isStudent);
        if(isStudent){
            setSignupFormData((prevData) => {
                return{
                    ...prevData,
                    student: true,
                    instuctor: false
                }
            })
        }
        else{
            setSignupFormData((prevData) => {
                return{
                    ...prevData,
                    student: false,
                    instuctor: true
                }
            })
        }
        console.log(signupFormData);
    }
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-evenly items-center w-[210px] h-[40px] rounded-full bg-gray-500'>
            <button 
                className='text-[1.1rem] rounded-full px-3 py-1 text-white font-bold'
                style={isStudent ? {backgroundColor: '#1e293b'} : {backgroundColor: '#6b7280'}}
                onClick={changeBtnHandler}
            >Student</button>
            <button 
                className='text-[1.1rem] rounded-full px-3 py-1 text-white font-bold'
                style={!isStudent ? {backgroundColor: '#1e293b'} : {backgroundColor: '#6b7280'}}
                onClick={changeBtnHandler}
            >Instructor</button>
        </div>

        <form className='flex flex-col gap-4' onSubmit={signUpHandler}>
            <div className='flex gap-3'>
                <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold'>
                    <p>First Name<sup className='text-red-500'>*</sup></p>
                    <input
                        required
                        name='firstName'
                        type='text'
                        placeholder='Enter first name'
                        value={signupFormData.firstName}
                        onChange={chageHandler}
                        className='w-[100%] h-[40px] bg-slate-600 px-3 text-[1.1rem] rounded-md border-b-2 outline-none'
                    />
                </label>

                <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold'>
                    <p>Last Name<sup className='text-red-500'>*</sup></p>
                    <input
                        required
                        name='lastName'
                        type='text'
                        placeholder='Enter last name'
                        value={signupFormData.lastName}
                        onChange={chageHandler}
                        className='w-[100%] h-[40px] bg-slate-600 px-3 text-[1.1rem] rounded-md border-b-2 outline-none'
                    />
                </label>
            </div>

            <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold'>
                <p>Email Address<sup className='text-red-500'>*</sup></p>
                <input
                    required
                    name='email'
                    type='email'
                    placeholder='Enter email address'
                    value={signupFormData.email}
                    onChange={chageHandler}
                    className='w-[100%] h-[40px] bg-slate-600 px-3 text-[1.1rem] rounded-md border-b-2 outline-none'
                />
            </label>

            <div className='flex gap-3'>
                <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold relative'>
                    <p>Create Password<sup className='text-red-500'>*</sup></p>
                    <input
                        required
                        name='createPassword'
                        type={isVisiable ? "text" : "password"}
                        placeholder='Enter Password'
                        value={signupFormData.createPassword}
                        onChange={chageHandler}
                        className='w-[100%] h-[40px] bg-slate-600 px-3 pr-10 text-[1.1rem] rounded-md border-b-2 outline-none'
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

                <label className='flex flex-col justify-start text-white gap-1 text-[1rem] font-semibold relative'>
                    <p>Conform Password<sup className='text-red-500'>*</sup></p>
                    <input
                        required
                        name='conformPassword'
                        type={isVisiableCP ? "text" : "password"}
                        placeholder='Enter Password'
                        value={signupFormData.conformPassword}
                        onChange={chageHandler}
                        className='w-[100%] h-[40px] bg-slate-600 px-3 pr-10 text-[1.1rem] rounded-md border-b-2 outline-none'
                    />
                    <button 
                        className='absolute bottom-[0.7rem] right-[1rem] text-[1.2rem]'
                        onClick={(event) => {
                            event.preventDefault();
                            setIsVisiableCP(!isVisiableCP);
                        }}>
                        {isVisiableCP ? (<FaRegEyeSlash />) : (<FaRegEye />)}
                    </button>
                </label>
            </div>

            <button
                className='w-[100%] h-[35px] bg-yellow-400 font-bold text-[1rem] rounded mt-3 hover:bg-yellow-600 transition duration-300'
            >Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm