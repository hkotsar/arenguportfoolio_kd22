import React from 'react'
import './Home.scss'
import Landpage from '../layouts/Landpage';
import AboutSection from '../layouts/AboutSection';
import EducationSection from '../layouts/Education';

const HomePage = () => {
  return (
    <>
      <Landpage />
        <main>
          <AboutSection />
          <EducationSection />
        </main>
    </>
  )
}

export default HomePage
