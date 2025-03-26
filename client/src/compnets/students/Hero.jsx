

import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-6 md:px-10 bg-gradient-to-b from-cyan-100/70 dark:from-cyan-200/70 gap-5">
      {/* Heading */}
      <h1 className="text-center md:text-[44px] text-[30px] font-bold text-gray-800 dark:text-gray-300 max-w-3xl mx-auto relative">
        Empower your future with the course designed to
        <span className="text-blue-600 w-full"> fit your choice</span>
        <img
          className="hidden md:block  absolute -bottom-7 left-1/2 transform -translate-x-1/2 ring-0"
          src={assets.sketch}
          alt="Decorative sketch"
        />
      </h1>

      {/* Description */}
      <p className="hidden md:block text-gray-500 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto sit voluptate, aliquam autem dicta ad perferendis.
      </p>
      <p className="block md:hidden text-gray-500 dark:text-gray-300 text-center max-w-sm mx-auto mt-4 mb-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto sit voluptate.
      </p>

      <div>

        {/* search bar for hero */}
        <SearchBar />
      </div>


    </div>
  );
};

export default Hero;


// import React from 'react';
// import { assets } from '../../assets/assets';
// import SearchBar from './SearchBar';

// const Hero = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full min-h-screen py-20 md:py-36 px-6 md:px-10 bg-gradient-to-b from-cyan-100/70 dark:from-cyan-200/70 gap-5">
//       {/* Heading */}
//       <h1 className="text-center md:text-[44px] text-[30px] font-bold text-gray-800 dark:text-gray-300 max-w-3xl mx-auto relative">
//         Empower your future with the course designed to
//         <span className="text-blue-600"> fit your choice</span>
//         <img
//           className="hidden md:block absolute -bottom-7 left-1/2 transform -translate-x-1/2 ring-0"
//           src={assets.sketch}
//           alt="Decorative sketch"
//         />
//       </h1>

//       {/* Description */}
//       <p className="hidden md:block text-gray-500 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto sit voluptate, aliquam autem dicta ad perferendis.
//       </p>
//       <p className="block md:hidden text-gray-500 dark:text-gray-300 text-center max-w-sm mx-auto mt-4 mb-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto sit voluptate.
//       </p>

//       {/* Search Bar */}
//       <div className="w-full max-w-2xl">
//         <SearchBar />
//       </div>
//     </div>
//   );
// };

// export default Hero;
