import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

  const { isEducatore } = useContext(AppContext);

  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-courses", icon: assets.add_icon },
    { name: "My Course", path: "/educator/my-courses", icon: assets.my_course_icon },
    { name: "Students Enrolled", path: "/educator/student-enrolled", icon: assets.person_tick_icon }
  ];

  return isEducatore && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 dark:border-gray-300 py-2 flex flex-col'>

      {
        menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/educator"}
            className={({isActive}) => `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ? 'dark:bg-black-100 dark:text-black dark:invert bg-indigo-50 border-r-[6px] border-indigo-500/90' : 'hover:bg-gray-100/90 dark:hover:bg-gray-400/50 border-r-[6px] border-white hover:border-gray-100/90'}`}
          >
            <img src={item.icon} className='w-6 h-6 dark:invert ' alt="" />
            <p className='md:block hidden text-center'>{item.name}</p>
          </NavLink>
        ))
      }

    </div>
  )
}

export default SideBar