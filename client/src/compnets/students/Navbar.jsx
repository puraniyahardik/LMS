

import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {useClerk , UserButton ,useUser} from '@clerk/clerk-react'

const Navbar = () => {
  const { toggleTheme ,navigate, isEducatore,
    setIsEducatore} = useContext(AppContext);
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 border-b border-gray-400 py-4 ${
        isCourseListPage ? 'bg-cyan-300/70' : 'dark:bg-cyan-800/70 bg-cyan-50'
      }`}
    >
      {/* Logo */}
      <img
        src={assets.logo}
        onClick={()=> navigate('/') }
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-500 dark:text-gray-200">
        <div className="flex items-center gap-4">
          {user && <>  
            <button 
        onClick={()=> navigate('/educator')}
        className='cursor-pointer text-sm'>{ isEducatore ? 
        ' Educator DashBoard' :
        ' Become Educator'
        }</button>
          <span>|</span>
          <Link to="/my-enrollments" className="text-sm cursor-pointer">
            My Enrollments
          </Link></>}
        
        </div>
        {
          user ? 
          <UserButton /> :  
          <button 
          onClick={()=> openSignIn()}
          className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm cursor-pointer">
            Create Account
          </button>
        }
      
        <img
          src={assets.darkTheme}
          alt="Theme Toggle"
          className="cursor-pointer w-5"
          onClick={toggleTheme}
        />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4 text-gray-500 dark:text-gray-200">
        {user && <> 
        <button 
        onClick={()=> navigate('/educator')}
        className='cursor-pointer'>{ isEducatore ? 
        ' Become DashBoard' :
        ' Become Educator'
        }</button>
        <Link to="/my-enrollments" className="text-sm">
          My Enrollments
        </Link>
        </>}


        {
          user ? 
          <UserButton/> :
          <button 
          onClick={() => openSignIn()}
          className='cursor-pointer'>
          <img
          src={assets.user_icon}
          alt="User Icon"
          className="w-6 cursor-pointer"
        />
        </button>
          
        }
        
   
        <img
          src={assets.darkTheme}
          alt="Theme Toggle"
          className="w-6 cursor-pointer"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Navbar;

