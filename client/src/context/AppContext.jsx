import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'




export const AppContext = createContext();


export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    });

    const [allCourses, setAllCourses] = useState([]);
    const [isEducatore, setIsEducatore] = useState(true);

    const [enrolledCourses, setEnrolledCourses] = useState([]);




    // Fetch ALl Courses 

    const fetchAllCourse = async () => {
        setAllCourses(dummyCourses);
    }

    //Calculating avrage rating of course

    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        };

        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length;
    }

    //claculate chapter time

    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lacture) => time += lacture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
    }

    //clculate course duration 
    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lacture) => time += lacture.lectureDuration))

        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })

    }
    //clculate course no of lacture  

    const calculateNoOfLacture = (course) => {
        let totalLacture = 0
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLacture += chapter.chapterContent.length;
            }
        })
        return totalLacture;
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');

        } else {
            document.documentElement.classList.remove('dark');

        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);


    // toogle mode
    const toggleTheme = () => setIsDark((prev) => !prev)
    // useEffect(()=>{
    //     const dark = localStorage.getItem('dark');
    //     dark ? setIsDark(dark) : setIsDark(false)
    // },[])

    //fetch user enroled courses data

    const fetchUserEnrolledCourse = async () => {
        setEnrolledCourses(dummyCourses);
    }
    
    
    useEffect(() => {
        fetchAllCourse();
        fetchUserEnrolledCourse();
    }, []);






    const value = {
        isDark,
        setIsDark,
        toggleTheme,
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducatore,
        setIsEducatore,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLacture,
        setEnrolledCourses,
        enrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}