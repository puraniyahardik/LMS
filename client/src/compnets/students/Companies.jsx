import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='mt-16'>
      <p className='text-base text-gray-500 dark:text-gray-300'>Trusted by learners from</p>
      <div className='flex flex-wrap gap-6 md:gap-16 justify-center md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />
      <img src={assets.walmart_logo} alt="walmart_logo" className='w-20 md:w-28' />
      <img src={assets.accenture_logo} alt="accenture_logo" className='w-20 md:w-28 ' />
      <img src={assets.adobe_logo} alt="adobe_logo" className='w-20 md:w-28' />
      <img src={assets.paypal_logo} alt="paypal_logo" className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies