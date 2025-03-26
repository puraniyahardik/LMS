import React from 'react';
import { LoaderCircle } from "lucide-react";

// const Loading = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
//       <div className=" flex items-center justify-center flex-col">
//         {/* Spinner Animation */}
//         <p className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-2"> </p>
        
//         {/* Loading Text */}
//         <p className="text-2xl font-semibold text-gray-100  ">Loading...</p>
        
//         {/* Optional: Subtext */}
//         <p className="text-sm text-gray-400 mt-2">Please wait while we prepare your learning environment.</p>
//         </div>
//       </div>

//   );
// };


const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-400 text-gray-700">
      <div className="flex items-center space-x-3">
        <LoaderCircle className="w-10 h-10 animate-spin text-blue-500" />
        <span className="text-xl font-semibold">Loading Learning Portal...</span>
      </div>
      <p className="mt-2 text-gray-500">Please wait while we prepare your dashboard.</p>
    </div>
  );
};

export default Loading;