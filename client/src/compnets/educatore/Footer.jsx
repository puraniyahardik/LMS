import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
      {/* left side */}
      <div className='flex items-center gap-4' >
        <img src={assets.logo} className='dark:invert hidden md:block w-20' alt="" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'>

        </div>

        <p className='py-4 text-center text-xs md:text-sm text-gray-500 dark:text-gray-300'>
          Copyright 2025 &#169; Puraniya. All Right Reserved.
        </p>

      </div>
{/* right side */}
      <div className='flex items-center justify-center gap-4 m-3'>
          <a href="#">
            <img src={assets.facebook_icon} className='invert-0 dark:invert' alt="" />
          </a>
          <a href="#">
            <img src={assets.twitter_icon}  className='invert-0 dark:invert'  alt="" />
          </a>
          <a href="#">
            <img src={assets.instagram_icon}  className='invert-0 dark:invert'  alt="" />
          </a>
      </div>

    </footer>
  )
}

export default Footer