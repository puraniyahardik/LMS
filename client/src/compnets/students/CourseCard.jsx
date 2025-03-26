// import React, { useContext } from 'react'
// import { assets } from '../../assets/assets'
// import { AppContext } from '../../context/AppContext'
// import { Link } from 'react-router-dom'

// const CourseCard = ({course}) => {
//   const {currency,calculateRating} = useContext(AppContext)
//   return (
//     <Link 
//     to={'/course/' + course._id}
//     onClick={()=> scrollTo(0,0,)
//     }
//     className='border border-gray-500/30 pb-6 overflow-hidden dark:border-gray-200 rounded-lg h-full'
//     >

//       <img className='w-full object-contain' src={course.courseThumbnail} alt="" />

//       <div className='p-3 text-left'>
//           <h3 className='text-base font-semibold'>
//             {course.courseTitle}        
//             </h3> 
//             <p className='text-gray-500 dark:text-gray-300'>{course.educator.name}</p>

//             <div className='flex items-center space-x-2'>
//               <p>{calculateRating(course)}</p>
//               <div className='flex'>
//                 {[...Array(5)].map((_,i)=> (
//                   <img 
//                   src={i < Math.floor(calculateRating(course)) ? 
//                      assets.star : 
//                     assets.star_blank
//                     } key={i} alt="starhjfd" className='w-3.5 h-3.5'/>
//                 ))}
//               </div>
//               <p className='text-gray-500 dark:text-gray-300'>
//                 {course.courseRatings.length}</p>
//             </div>
//             <p className='text-base font-semibold text-gray-800 dark:text-gray-200'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
//       </div>


//     </Link>
//   )
// }


// export default CourseCard


import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext)

  return (
    <Link 
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className='border border-gray-300 dark:border-gray-600 pb-6 overflow-hidden rounded-lg h-full bg-white dark:bg-[#1E1B1E] transition-all duration-300'
    >
      <img className='w-full object-contain' src={course.courseThumbnail} alt="Course Thumbnail" />

      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold text-gray-900 dark:text-gray-200'>
          {course.courseTitle}
        </h3> 
        <p className='text-gray-500 dark:text-gray-400'>Learners</p>

        <div className='flex items-center space-x-2 mt-1'>
          <p className='text-gray-700 dark:text-gray-300'>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img 
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
                key={i} 
                alt="rating star" 
                className='w-3.5 h-3.5'
              />
            ))}
          </div>
          <p className='text-gray-500 dark:text-gray-400'>{course.courseRatings.length}</p>
        </div>

        <p className='text-base font-semibold text-gray-800 dark:text-gray-200 mt-2'>
          {currency}{(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard
