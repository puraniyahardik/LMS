


// // src/pages/educatore/DashBoard.jsx
// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../../context/AppContext';
// import { assets, dummyDashboardData } from '../../assets/assets';
// import Loading from '../../compnets/students/Loading';

// const DashBoard = () => {
//   const { currency } = useContext(AppContext);
//   const [dashboardData, setDashboardData] = useState(null);

//   const fetchDashboardData = async () => {
//     setDashboardData(dummyDashboardData);
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   return dashboardData ? (
//     <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
//       <div className='space-y-5'>
//         <div className='flex flex-wrap gap-5 items-center'>
//           <div className='flex items-center gap-3 shadow border border-blue-200 p-4 w-56 rounded-md'>
//             <img src={assets.patients_icon} alt="" />
//             <div>
//               <p className='text-2xl font-medium text-gray-600 dark:text-gray-200'>
//                 {dashboardData.enrolledStudentsData.length}
//               </p>
//               <p className='text-base text-gray-500 dark:text-gray-300'>Total Enrolled</p>
//             </div>
//           </div>
//           <div className='flex items-center gap-3 shadow border border-blue-200 p-4 w-56 rounded-md'>
//             <img src={assets.appointments_icon} alt="" />
//             <div>
//               <p className='text-2xl font-medium text-gray-600 dark:text-gray-200'>
//                 {dashboardData.totalCourses}
//               </p>
//               <p className='text-base text-gray-500 dark:text-gray-300'>Total Courses</p>
//             </div>
//           </div>
//           <div className='flex items-center gap-3 shadow border border-blue-200 p-4 w-56 rounded-md'>
//             <img src={assets.earning_icon} alt="" />
//             <div>
//               <p className='text-2xl font-medium text-gray-600 dark:text-gray-200'>
//                 {currency} {dashboardData.totalEarnings}
//               </p>
//               <p className='text-base text-gray-500 dark:text-gray-300'>Total Earnings</p>
//             </div>
//           </div>
//         </div>

//         {/* Enlorrments */}
//         <div >
//           <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
//           <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white dark:bg-indigo-300 dark:border-gray-300/60 border border-gray-500/20'>

//             <table className='table-fixed md:table-auto w-full overflow-hidden'>
//               <thead className='text-gray-800 dark:text-gray-200 border-b border-gray-500/20 dark:border-gray-300 text-sm text-left'>
//                 <tr>
//                   <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
//                   <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>Students Name</th>
//                   <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>Course Title</th>
//                 </tr>
//               </thead>

//               <tbody className='text-sm text-gray-500 dark:text-gray-200'>
//                 {
//                   dashboardData.enrolledStudentsData.map((item, index) => (
//                     <tr key={index} className='border-b border-gray-500/20 dark:border-gray-200/40'>
//                       <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
//                       <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
//                         <img src={item.student.imageUrl}
//                           className='w-9 h-9 rounded-full' alt="" />
//                         <span className='truncate'>{item.student.name}</span>
//                       </td>
//                         <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
//                     </tr>
//                   ))
//                 }
//               </tbody>
//             </table>

//           </div>

//         </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default DashBoard;

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../compnets/students/Loading';

const DashBoard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0  transition-colors'>
      <div className='space-y-5'>
        {/* Dashboard Stats */}
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow border border-blue-200 dark:border-gray-700 p-4 w-56 rounded-md bg-gray-100 dark:bg-gray-800 transition-colors'>
            <img src={assets.patients_icon} alt="" />
            <div>
              <p className='text-2xl font-medium text-gray-600 dark:text-white'>{dashboardData.enrolledStudentsData.length}</p>
              <p className='text-base text-gray-500 dark:text-gray-400'>Total Enrolled</p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow border border-blue-200 dark:border-gray-700 p-4 w-56 rounded-md bg-gray-100 dark:bg-gray-800 transition-colors justify-center'>
            <img src={assets.appointments_icon} alt="" />
            <div>
              <p className='text-2xl font-medium text-gray-600 dark:text-white'>{dashboardData.totalCourses}</p>
              <p className='text-base text-gray-500 dark:text-gray-400'>Total Courses</p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow border border-blue-200 dark:border-gray-700 p-4 w-56 rounded-md bg-gray-100 dark:bg-gray-800 transition-colors'>
            <img src={assets.earning_icon} alt="" />
            <div>
              <p className='text-2xl font-medium text-gray-600 dark:text-white'>
                {currency} {dashboardData.totalEarnings}
              </p>
              <p className='text-base text-gray-500 dark:text-gray-400'>Total Earnings</p>
            </div>
          </div>
        </div>

        {/* Enrollments Table */}
        <div>
          <h2 className='pb-4 text-lg font-medium text-gray-700 dark:text-white'>Latest Enrollments</h2>
          <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 transition-colors'>

            <table className='table-fixed md:table-auto w-full overflow-hidden'>
              <thead className='text-gray-800 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>Student Name</th>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell justify-center'>Course Title</th>
                </tr>
              </thead>

              <tbody className='text-sm text-gray-600 dark:text-gray-300'>
                {
                  dashboardData.enrolledStudentsData.map((item, index) => (
                    <tr key={index} className='border-b border-gray-300 dark:border-gray-600 transition-colors'>
                      <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                      <td className='md:px-4 px-2 py-3 flex items-center space-x-3 justify-center text-center'>
                        <img src={item.student.imageUrl} className='w-9 h-9 rounded-full' alt="" />
                        <span className='truncate'>{item.student.name}</span>
                      </td>
                      <td className='px-4 py-3 truncate items-center text-center justify-center'>{item.courseTitle}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default DashBoard;
