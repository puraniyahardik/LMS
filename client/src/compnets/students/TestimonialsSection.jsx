
import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='py-14 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32'>
      <h2 className='text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-100 text-center'>
        Testimonials
      </h2>
      <p className='text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 text-center max-w-2xl mx-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, recusandae alias. Doloremque distinctio laborum reiciendis repudiandae deleniti asperiores, qui eius?
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {dummyTestimonial.map((item, index) => (
          <div
            key={index}
            className='text-sm text-left border border-gray-500/30 dark:border-gray-100/30 rounded-lg bg-white dark:bg-gray-800 shadow-[0px_4px_15px_0px] shadow-black/5 dark:shadow-white/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10 dark:bg-gray-700'>
              <img
                className='h-12 w-12 rounded-full'
                src={item.image}
                alt={item.name}
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800 dark:text-gray-100'>
                  {item.name}
                </h1>
                <p className='text-gray-800/80 dark:text-gray-200/80'>
                  {item.role}
                </p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5'
                    src={i < Math.floor(item.rating) ?
                       assets.star 
                       : assets.star_blank}
                    key={i}
                    alt='star'
                  />
                ))}
              </div>
              <p className='text-gray-500 dark:text-gray-300 mt-5'>
                {item.feedback}
              </p>
            <a href="#" className='text-blue-500 underline gap-5  '>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
