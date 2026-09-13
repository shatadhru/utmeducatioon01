import React from 'react'
import Hero from './RootComponents/Home/Hero';
import Learning from './RootComponents/Home/Learning';
import Faq from './RootComponents/Home/Faq';
import FreeResourses from './RootComponents/Home/FreeResourses';
import Teacher from './RootComponents/Home/Teacher';

function page() {
  return (
    <div>
        <Hero />
        <Teacher />
        <Learning />
        <FreeResourses />
        <Faq />
      
    </div>
  )
}

export default page
