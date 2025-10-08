import React from 'react';
import logo from '../../assets/logo.png';
import github from '../../assets/github.png';


const Navbar = () => {

    const links = <>

        <li className='m-2'>Home</li>
        <li className='m-2'>Apps</li>
        <li className='m-2'>Installation</li>

    </>
    return (
        <div className="bg-base-100 shadow-sm w-full">
           <div className='navbar max-w-[1440px] mx-auto w-full px-4'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <img src={logo} alt="Logo" className='w-[40px] h-[40px]'/><a className="text-xl font-semibold ml-2">HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
              <button className=''><a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white"><img src={github} alt="Github Logo" className='w-[20px] h-[20px] invert brightness-0'/>Contribute</a></button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;