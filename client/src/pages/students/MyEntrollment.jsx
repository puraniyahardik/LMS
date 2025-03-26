// 
// import React, { useContext, useState } from 'react'

// import { AppContext } from '../../context/AppContext';
// import {Line} from 'rc-progress'
// import Footer from '../../compnets/students/Footer';

// const MyEntrollment = () => {

//   const { enrolledCourses, calculateCourseDuration, navigate} = useContext(AppContext);

//   const [progressArray, setProgressArray] = useState([
//     { lectureCompleted: 2, totalLecture: 4 },
//     { lectureCompleted: 2, totalLecture: 9 },
//     { lectureCompleted: 3, totalLecture: 3 },
//     { lectureCompleted: 5, totalLecture: 8 },
//     { lectureCompleted: 0, totalLecture: 7 },
//     { lectureCompleted: 2, totalLecture: 5 },
//     { lectureCompleted: 2, totalLecture: 10 },
//     { lectureCompleted: 2, totalLecture: 3 }
//   ]);

//   return (
//     <>
//     <div className='md:px-36 px-8 pt-10'>
//       <h1 className='text-2xl font-semibold'>My EnrollMents</h1>
//       <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
//         <thead className='text-gray-900 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 text-sm text-left max-sm:hidden'>
//           <tr>
//             <th className='px-4 py-3 font-semibold truncate'>Course</th>
//             <th className='px-4 py-3 font-semibold truncate'>Duration</th>
//             <th className='px-4 py-3 font-semibold truncate'>Completed</th>
//             <th className='px-4 py-3 font-semibold truncate'>Status</th>
//           </tr>
//         </thead>
//         <tbody className='text-gray-700'>
//           {
//             enrolledCourses.map((course,index) => (
//               <tr key={index} className='border-b border-gray-500/20 dark:text-gray-300'>
//                 <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-4'>

//                   <img src={course.courseThumbnail} alt=""
//                        className='w-14 sm:w-24 md:w-28'  />
//                <div className='flex-1'>
//                   <p className='mb-1 max-sm:text-sm'>{course.courseTitle}

//                   </p>
//                   <Line strokeWidth={2} percent={progressArray[index] ?
//                     (progressArray[index].lectureCompleted / progressArray[index].totalLecture ) * 100 : 0
//                    } className='bg-gray-300 dark:bg-gray-400 rounded-full' />
//               </div>
//             </td>

//               <td className='px-4 py-3 max-sm:hidden'>
//                 {calculateCourseDuration(course)}
//               </td>
//               <td className='px-4 py-3 max-sm:hidden '>
//                 {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLecture}`}<span> Lecture</span>
//               </td>        
//               <td className='px-4 py-3 max-sm:text-right'>
//                 <button onClick={() => navigate('/player/' + course._id)} className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-500 max-sm:text-xs text-white cursor-pointer hover:bg-blue-600'>
//                   {

//                     progressArray[index].lectureCompleted === progressArray[index].totalLecture ? 'Completed' : 'In Progress'

//                   }
//                   </button>
//               </td>
              
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//     <Footer />
//     </>
//   )
// }
// export default MyEntrollment


import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Line } from 'rc-progress';
import Footer from '../../compnets/students/Footer';

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLecture: 4 },
    { lectureCompleted: 2, totalLecture: 9 },
    { lectureCompleted: 3, totalLecture: 3 },
    { lectureCompleted: 5, totalLecture: 8 },
    { lectureCompleted: 0, totalLecture: 7 },
    { lectureCompleted: 2, totalLecture: 5 },
    { lectureCompleted: 2, totalLecture: 10 },
    { lectureCompleted: 2, totalLecture: 3 }
  ]);

  return (
    <>
      <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>My Enrollments</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 text-sm text-left'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate hidden md:table-cell'>Duration</th>
              <th className='px-4 py-3 font-semibold truncate hidden md:table-cell'>Completed</th>
              <th className='px-4 py-3 font-semibold truncate text-right'>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {enrolledCourses.map((course, index) => (
              <tr key={index} className='border-b border-gray-500/20 dark:text-gray-300'>
                <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-4'>
                  <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28' />
                  <div className='flex-1'>
                    <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      percent={progressArray[index] ? (progressArray[index].lectureCompleted / progressArray[index].totalLecture) * 100 : 0}
                      className='bg-gray-300 dark:bg-gray-400 rounded-full'
                    />
                  </div>
                </td>

                <td className='px-4 py-3 hidden md:table-cell'>
                  {calculateCourseDuration(course)}
                </td>
                <td className='px-4 py-3 hidden md:table-cell'>
                  {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLecture}`}<span> Lecture</span>
                </td>
                <td className='px-4 py-3 text-right'>
                  <button
                    onClick={() => navigate('/player/' + course._id)}
                    className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-500 max-sm:text-xs text-white cursor-pointer hover:bg-blue-600'
                  >
                    {progressArray[index].lectureCompleted === progressArray[index].totalLecture ? 'Completed' : 'In Progress'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollment;
