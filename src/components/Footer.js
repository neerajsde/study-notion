import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer w-[100vw] bg-slate-950 text-white flex flex-col items-center justify-center py-3'>
      <h2 className='text-[2rem] font-bold text-center'>Study Noation</h2>
      <div className='flex justify-center items-center gap-2'>
        <FaRegCopyright className='text-[1.5rem]'/>
        <p className='text-[1.1rem] text-center'>2020 - 2024 Web Developer <Link to="https://neeraj-prajapati-portfolio.netlify.app/" className='text-red-500'><span className='text-yellow-500'>{"<"}</span>NEERAJ<span className='text-yellow-500'>{"/>"}</span></Link></p>
      </div>
    </div>
  )
}

export default Footer