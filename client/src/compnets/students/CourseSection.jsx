import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext'

const CourseSection = () => {
  const { allCourses } = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8' >
      <h2 className='text-3xl font-medium text-gray-800 dark:text-gray-200'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam vero <br /> fugiat officia repellendus facere libero aliquid cum at nulla!</p>
      

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   px-4 md:px-0 md:py-16 my-10 gap-4'>

          {
            allCourses.slice(0, 4).map((course, index) => <CourseCard course={course} key={index} />
            )}
        </div>



        <Link
          to={'/course-list'}
          onClick={() => scrollTo(0, 0)}
          className='text-gray-500 border dark:text-gray-300/30 border-gray-500/30 dark:border-gray-300 mb-5 px-10 py-3 rounded '
        >
          Show ALl courses</Link>
     
      {/* <CourseCard /> */}
    </div>
  )
}

export default CourseSection