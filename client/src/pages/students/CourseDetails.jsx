import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import Loading from '../../compnets/students/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import Footer from '../../compnets/students/Footer';
import YouTube from 'react-youtube'

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [open, setOpen] = useState({});
  const [isAleadyEntrolled, setIsAleadyEntrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLacture,
    currency } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id);
    setCourseData(findCourse);
  }
  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpen((prev) => (
      { ...prev, [index]: !prev[index] }
    ))
  }
  return courseData ? (
    <>

      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>

        <div className='absolute top-0 left-0 w-full h-[500px] -z-1 bg-gradient-to-b from-cyan-100/70'>

        </div>

        {/* left column */}
        <div className='max-w-xl z-10 text-gray-500 dark:text-gray-200'>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-800 dark:text-gray-300'>{courseData.courseTitle}</h1>
          <p className='pt-4 md:text-base text-sm'
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}>
          </p>


          {/* review and rating */}

          <div className='flex items-center space-x-2 pt-3 pb-1 gap-.25 text-sm '>
            <p className='text-gray-700 dark:text-gray-300'>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <img
                  src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank}
                  key={i}
                  alt="rating star"
                  className='w-3.5 h-3.5'
                />
              ))}
            </div>
            <p className='text-blue-500 dark:text-blue-400'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? ' (ratings)' : '(rating)'}</p>

            <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? ' students' : 'student'}</p>

            <p className='text-sm '>Course By <span className='text-blue-400 underline'> Learners</span> </p>
          </div>

          {/* course structre */}

          <div className='pt-8 text-gray-800 dark:text-gray-300'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>


            <div className='pt-5'>
              {
                courseData.courseContent.map((chapter, index) => (
                  <div key={index} className='border border-gray-300 bg-white dark:bg-gray-800 mb-2 rounded'>

                    <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'
                      onClick={() => toggleSection(index)}
                    >
                      <div className='flex items-center gap-3'>
                        <img src={assets.down_arrow_icon} alt="" className={`transform transition-transform ${open[index] ? 'rotate-180' : ''} `} />
                        <p className='font-medium md:text-base text-sm '>{chapter.chapterTitle}</p>
                      </div>
                      <p className='text-sm md:text-sm'>{chapter.chapterContent.length}  Lactures - {calculateChapterTime(chapter)} </p>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${open[index] ? 'max-h-96' : 'h-0'}`}>
                      <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 dark:text-gray-200 border-t border-gray-300'>
                        {
                          chapter.chapterContent.map((lecture, i) => (
                            <li key={i} className='flex items-start gap-2 py-1'>
                              <img src={assets.play_icon} className='w-4 h-4 mt-0 cursor-pointer' alt="" />

                              <div className='flex items-center justify-between w-full text-gray-800 dark:text-gray-300 text-xs md:text-sm'>
                                <p>{lecture.lectureTitle}</p>
                                <div className='flex gap-2'>
                                  {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer' onClick={() => setPlayerData({
                                    vidioId: lecture.lectureUrl.split('/').pop()
                                  })}>Preview</p>}

                                  <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>

                                </div>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>

                  </div>
                ))
              }

            </div>


          </div>

          <div className='py-20 text-sm md:text-base'>
            <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-300'>Course Descriptio</h2>
            <p className='pt-3 rich-text'
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}>
            </p>
          </div>


        </div>

        {/* right column */}
        <div className='max-w-[424px] z-10 shadow boxShadow rounded-t md:overflow-hidden bg-white min-w-[300px] sm:max-w-[420px]'>

          {
            playerData ?
              <YouTube videoId={playerData.videoId} opts={{
                playerVars: {
                  autoplay: 1
                }
              }} iframeClassName='w-full' />
              : <img src={courseData.courseThumbnail} alt="" />
          }

          <div className='p-5'>
            <div className='flex items-center gap-3'>


              <img src={assets.time_left_clock_icon} className='w-3.5' alt="" />



              <p className='text-red-500'><span className='font-medium'>5 Days</span> left at this price!</p>

            </div>

            <div className='flex gap-3 items-center pt-2'>
              <p className='text-gray-900  md:text-3xl text-2xl font-semibold '>{currency}
                {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
              <p className='md:text-lg text-gray-500  line-through'>{currency}{courseData.coursePrice}</p>
              <p className='md:text-lg text-gray-500 '>{courseData.discount}%Off</p>
            </div>

            <div className='flex items-center text-sm md:text-base gap-4 pt-2 md:mt-4 text-gray-500 dark:text-gray-200'>
              <div className='flex items-center gap-2'>

                <img src={assets.star} alt="" />
                <p className='text-gray-800'>{calculateRating(courseData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-700/40'></div>

              <div className='flex items-center gap-2'>
                <img src={assets.time_clock_icon} alt="" />
                <p className='text-gray-800'>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-700/40'></div>
              <div className='flex items-center gap-2'>
                <img src={assets.lesson_icon} alt="" />
                <p className='text-gray-800'>{calculateNoOfLacture(courseData)} Lessons</p>
              </div>

            </div>


            <button className='bg-blue-600 md:mt-6 mt-4 py-3 w-full rounded text-white font-medium hover:bg-blue-800 cursor-pointer'>
              {isAleadyEntrolled ? 'Already Enrolled' : 'Enroll Now'}</button>


            <div className='pt-6'>
              <p className='md:text-xl text-lg font-medium text-gray-800 '>What's in the course</p>
              <ul className='ml-4 pt-2 text-sm md:text-base list-disc text-gray-500'>
                <li>Lifetime access with free update</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>

              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
    : <Loading />
}

export default CourseDetails

