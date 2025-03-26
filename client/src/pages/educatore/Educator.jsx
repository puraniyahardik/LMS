// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../../compnets/educatore/Navbar'
// import SideBar from '../../compnets/educatore/SideBar'
// import Footer from '../../compnets/educatore/Footer'

// const Educator = () => {
//   return (

//     <div className='text-base bg-[#F7F7F7] dark:bg-[#151013] dark:text-white text-black min-h-screen'>
//       <Navbar />
//       <div className='flex'>
//         <SideBar />
//         <div className='flex-1'>

//         {<Outlet />}
//         </div>

//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Educator

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../compnets/educatore/Navbar';
import SideBar from '../../compnets/educatore/SideBar';
import Footer from '../../compnets/educatore/Footer';

const Educator = () => {
  return (
    <div className='text-base bg-[#F7F7F7] dark:bg-[#151013] dark:text-white text-black min-h-screen'>
      <Navbar />
      <div className='flex'>
        <SideBar />  {/* 🔹 Make sure Sidebar is inside Educator */}
        <div className='flex-1 p-6'>  
          <Outlet />  {/* 🔹 Allows Dashboard, AddCourse, etc. to be rendered */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;
