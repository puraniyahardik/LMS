import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube'
import Footer from '../../compnets/students/Footer';
import Rating from '../../compnets/students/Rating';

const Player = () => {

    const {
      calculateChapterTime,
      enrolledCourses,
    } = useContext(AppContext);
    const {courseId} = useParams();

    const [courseData, setCourseData] = useState(null);
    const [openSetctions, setOpenSetctions] = useState({});
    const [playerData, setPlayerData] = useState(null);




    const getCourseData = () => {
      // const course = enrolledCourses.find((course) => course._id === courseId);
      // console.log(course);
      
      // if (course) {
      //   setCourseData(course);
      // }

      enrolledCourses.find((c)=> {
        console.log(c);
        
        if (c._id !== courseId) {
          console.log(c);
          
          setCourseData(c);
        }
      })
    };
    

    const toggleSection = (index) => {
          setOpenSetctions((prev) => (
            {
              ...prev,
              [index]:!prev[index],
            }
          ))
    }

    useEffect(() => {
    
        getCourseData();
      
    }, [enrolledCourses]); // Runs when `enrolledCourses` changes
    

  return (
    <>
      <div className='p-4 sm:p-10 flex flex-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>

        {/* left Column */}
        <div className='text-gray-800 dark:text-gray-300'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>

          <div className='pt-5'>
            {
              courseData && courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-gray-300 bg-white dark:bg-gray-800 mb-2 rounded'>

                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'
                    onClick={() => toggleSection(index)}
                  >
                    <div className='flex items-center gap-3'>
                      <img src={assets.down_arrow_icon} alt="" className={`transform transition-transform ${openSetctions[index] ? 'rotate-180' : ''} `} />
                      <p className='font-medium md:text-base text-sm '>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-sm'>{chapter.chapterContent.length}  Lactures - {calculateChapterTime(chapter)} </p>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${openSetctions[index] ? 'max-h-96' : 'h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 dark:text-gray-200 border-t border-gray-300'>
                      {
                        chapter.chapterContent.map((lecture, i) => (
                          <li key={i} className='flex items-start gap-2 py-1'>
                            <img src={false ? assets.blue_tick_icon : assets.play_icon} className='w-4 h-4 mt-0 cursor-pointer' alt="" />

                            <div className='flex items-center justify-between w-full text-gray-800 dark:text-gray-300 text-xs md:text-sm'>
                              <p>{lecture.lectureTitle}</p>
                              <div className='flex gap-2'>
                                {lecture.lectureUrl && <p className='text-blue-500 cursor-pointer' onClick={() => setPlayerData({
                                  ...lecture,
                                  chapter:index + 1,
                                  lecture:i + 1
                                })}>Watch</p>}

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

              <div className='flex items-center gap-2 py-3 mt-10 '>
                <h1 className='text-xl font-bold'>Rate this Course:</h1>
                <Rating initialRating={0} />
              </div>

        </div>
        {/* right Column */}
        <div className='md:mt-10'>

          {
            playerData ? 
            (<div>
              <YouTube 
              videoId={playerData.lectureUrl.split('/').pop()}
              iframeClassName='w-full aspect-video'
              />
              <div className='flex justify-between items-center mt-2'>
                <p className='flex flex-col gap-2 text-lg justify-between' >
                  { playerData.chapter }.  
                   { playerData.lecture }
                  { playerData.lectureTitle }
                </p>
                <button className='text-blue-500'>{false ? "Completed" : "Mark As Completed"}</button>
              </div>
            </div>) :
            <img src={courseData ? courseData.courseThumbnail : ''} alt="" />

          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Player