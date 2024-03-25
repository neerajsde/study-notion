import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = (props) => {
    const [isActiveContainer, setIsActiveContainer] = useState(false);
    const [navActive, setNavActive] = useState([true, false, false]);
    let isLogedIn = props.isLogedIn;
    let setIsLogedIn = props.setIsLogedIn;
    const navigate = useNavigate();

    function activeBtnHandler(index){
        setNavActive(prevState => prevState.map((_, i) => i === index));
    }
  return (
    <div className='flex justify-between items-center bg-slate-950 w-[100vw] h-[12vh] px-4 relative'>
        <Link to='/' onClick={() => activeBtnHandler(0)}>
            <img src={Logo} alt='Logo' width="180px" className='logo'/>
        </Link>

        <div className='flex justify-end items-center nav-container gap-3'>
            <div className='menu-btn text-white text-[2em] hidden'>
                {!isActiveContainer ? 
                    <IoMenu onClick={() => setIsActiveContainer(!isActiveContainer)}/> 
                    :
                    <IoClose onClick={() => setIsActiveContainer(!isActiveContainer)}/>
                }
            </div>

            {/* Links */}
            <nav 
                className='flex justify-center items-center gap-3'
                style={{
                    // Default style when not in the media query
                    ...(isActiveContainer ? { scale: '1' } : {}),
                    // Media query style
                    '@media (max-width: 800px)': isActiveContainer ? { scale: '1' } : { scale: '0' }
                }}
            >
                <ul className='flex justify-start items-center text-white nav-links gap-3'>
                    <li className='flex flex-col justify-center items-center' onClick={() => activeBtnHandler(0)}>
                        <NavLink to='/' exact>Home</NavLink>
                        <div
                            className='w-[70%] h-[2px] text-center rounded-full'
                            style={navActive[0] ? {backgroundColor: '#6b7280'} : {backgroundColor: 'transparent'}}
                        />
                    </li>
                    <li className='flex flex-col justify-center items-center' onClick={() => activeBtnHandler(1)}>
                        <NavLink to='/about' exact>About</NavLink>
                        <div 
                            className='w-[70%] h-[2px] text-center rounded-full'
                            style={navActive[1] ? {backgroundColor: '#6b7280'} : {backgroundColor: 'transparent'}}
                        />
                    </li>
                    <li className='flex flex-col justify-center items-center' onClick={() => activeBtnHandler(2)}>
                        <NavLink to='/contact' exact>Contact</NavLink>
                        <div 
                            className='w-[70%] h-[2px] text-center rounded-full'
                            style={navActive[2] ? {backgroundColor: '#6b7280'} : {backgroundColor: 'transparent'}}
                        />
                    </li>
                </ul>

                {/* Buttons */}
                <div className='nav-btn flex gap-3 text-white'>
                    <Link to="/login">
                        {!isLogedIn && 
                            <button 
                                className='bg-gray-600 px-3 py-1 border border-solid border-white rounded-md'
                                to="/login"
                                onClick={() => activeBtnHandler(4)}
                            >
                            Log In
                            </button>
                        }
                    </Link>
                    <Link to="/signup">
                        {!isLogedIn && 
                            <button 
                                className='bg-gray-600 px-3 py-1 border border-solid border-white rounded-md'
                                onClick={() => activeBtnHandler(4)}
                            >
                            Sign Up
                            </button>
                        }
                    </Link>
                    <Link to='/'>
                        {isLogedIn && 
                            <button 
                                className='bg-gray-600 px-3 py-1 border border-solid border-white rounded-md'
                                onClick={() => {
                                    setIsLogedIn(false);
                                    toast.success("Loged Out");
                                    navigate("/");
                                    activeBtnHandler(0);
                                }}
                            >
                            Log Out
                            </button>
                        }
                    </Link>
                    <Link to="/dashboard">
                        {isLogedIn && 
                            <button 
                                onClick={() => activeBtnHandler(4)}
                                className='bg-gray-600 px-3 py-1 border border-solid border-white rounded-md'
                            >
                            Dashboard
                            </button>
                        }
                    </Link>
                </div>
            </nav>
            <div className='flex pr-4'>
                {isLogedIn && (props.userName !== "") ? 
                    <div className='text-white'>Hi {props.userName} 👋</div>
                    : 
                    ""
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar