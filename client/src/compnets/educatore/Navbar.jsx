import React, { useContext } from 'react'
import { assets, dummyEducatorData } from '../../assets/assets';

import {useUser, UserButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { use } from 'react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const { toggleTheme } = useContext(AppContext);
  const educatorData = dummyEducatorData;
  const {user} = useUser();

  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 dark:border-gray-300 py-3 gap-6'>
      <Link to={'/'} >
        <img src={assets.logo} className='w-28 lg:w-32 dark:invert invert-0'  alt="" />
        
      </Link>

      <div className='flex items-center gap-5 sm:gap-2 text-gray-500 dark:text-gray-300'>
      <img src={assets.darkTheme} onClick={toggleTheme}  className='w-5.5 flex justify-center items-center cursor-pointer' alt="" />
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img} />}
      </div>

    </div>
  )
}

export default Navbar