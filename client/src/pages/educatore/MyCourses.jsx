import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../compnets/students/Loading';

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatoreCourses = async () => {
    setCourses(allCourses)
  }

  useEffect(() => {
    fetchEducatoreCourses();
  }, []);

  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-semibold'>My Courses</h2>

        {/* table */}
        <div className='flex flex-col items-center max-w-4xl gap-5 w-full overflow-hidden rounded-md bg-white pb-5 mb-5 dark:bg-indigo-200 border border-gray-500/30 dark:border-gray-200 dark:text-black'>
          <table className='md:table-auto table-fixed w-full overflow-hidden'>
            <thead className='text-gray-900 dark:text-gray-700 border-b border-gray-500/30 dark:border-gray-300/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold truncate'>All Courses</th>
                <th className='px-4 py-3 font-semibold truncate'>Earnings</th>
                <th className='px-4 py-3 font-semibold truncate'>Students</th>
                <th className='px-4 py-3 font-semibold truncate'>Published On</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody className='text-sm text-gray-500 '>
              {
                courses.map((course) => (
                  <tr key={course._id} className='border-b border-gray-500/20'>
                    <td className='md:px-4 flex items-center space-x-3 truncate pl-2 md:pl-4'>
                      <img className='w-18 rounded-sm' src={course.courseThumbnail} alt="Course Image" />
                      <span className='truncate hidden md:block'>{course.courseTitle}</span>
                    </td>
                    <td className='px-4 py-3'>{currency}{
                    Math.floor(
                      course.enrolledStudents.length 
                      * (course.coursePrice - course.discount 
                      * course.coursePrice / 100))}</td>
                    <td className='px-10 py-3'>{course.enrolledStudents.length}</td>
                    <td className='px-4 py-3'>{new Date(course.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default MyCourses