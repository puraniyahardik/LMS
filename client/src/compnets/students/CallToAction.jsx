import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
        <h1 className='text-xl md:text-4xl text-gray-800 dark:text-gray-300 font-semibold'>Learn anything,anytime,anywhere</h1>
        <p className='text-gray-500 dark:text-gray-400 sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, obcaecati dicta neque magnam quod nobis corrupti fugiat blanditiis! Accusantium, deserunt!</p>

        <div className='flex items-center font-medium gap-6 mt-4'>
          <button className='px-10 py-3 cursor-pointer rounded-md text-white bg-blue-600 hover:bg-blue-800'>Get Started</button>
          <button className='flex cursor-pointer items-center gap-3'>Learn More <img src={assets.arrow_icon} className='invert-0 dark:invert' alt="arrow_icon" /></button>
        </div>
    </div>
  )
}

export default CallToAction