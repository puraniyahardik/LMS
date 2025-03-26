

// src/App.jsx
import React, { useContext } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import MyEntrollment from './pages/students/MyEntrollment';
import Player from './pages/students/Player';
import Loading from './compnets/students/Loading';
import Educator from './pages/educatore/Educator';
import DashBoard from './pages/educatore/DashBoard';
import AddCourse from './pages/educatore/AddCourse';
import MyCourses from './pages/educatore/MyCourses';
import StudentsEnroll from './pages/educatore/StudentsEnroll';
import { AppContext } from './context/AppContext';
import Navbar from './compnets/students/Navbar.jsx';
import "quill/dist/quill.snow.css";

const App = () => {
  const { isDark } = useContext(AppContext);
  const isEducatoreRoutes = useMatch('/educator/*');

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='bg-[#F7F7F7] dark:bg-[#151013] dark:text-white text-black min-h-screen'>
        <div>
          {!isEducatoreRoutes && <Navbar />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course-list' element={<CourseList />} />
            <Route path='/course-list/:input' element={<CourseList />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/my-enrollments' element={<MyEntrollment />} />
            <Route path='/player/:id' element={<Player />} />
            <Route path='/loading/:path' element={<Loading />} />

            {/* Educator Routes */}
            <Route path='/educator' element={<Educator />}>
              <Route index element={<DashBoard />} /> {/* Default child route */}
              <Route path='add-courses' element={<AddCourse />} />
              <Route path='my-courses' element={<MyCourses />} />
              <Route path='student-enrolled' element={<StudentsEnroll />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;