import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../compnets/students/Loading';


const StudentsEnroll = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  }

  useEffect(() => {
    fetchEnrolledStudents();
  }, [])

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-center justify-between md:p-8 md:pb-0 pt-8 pb-0'>
      <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white dark:bg-indigo-100 border border-gray-500/20 dark:border-black'>
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr className='p-4 m-5'>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold'>Students Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
            </tr>
          </thead>

          <tbody className='dark:text-gray-900 text-sm text-gray-500'>
            {
              enrolledStudents.map((item, index) => (
                <tr key={index} className='border-b border-gray-500'>
                  <td className='px-4  py-3  items-center space-x-3'>{index + 1}</td>
                  <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                    <img className='w-10 rounded-full' src={item.student.imageUrl} alt="" />
                    <span className='truncate'>{item.student.name}</span>
                  </td>
                  <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  ) : <Loading />
}

export default StudentsEnroll