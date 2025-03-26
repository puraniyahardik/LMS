import React from 'react'
import Hero from '../../compnets/students/Hero'
import Companies from '../../compnets/students/Companies'
import CourseSection from '../../compnets/students/CourseSection'
import TestimonialsSection from '../../compnets/students/TestimonialsSection'
import CallToAction from '../../compnets/students/CallToAction'
import Footer from '../../compnets/students/Footer'

const Home  = () => {
  return (
    <div className='flex flex-col items-center space-x-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home 