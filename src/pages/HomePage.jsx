import React from 'react'
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'
import ExperienceScreen from './ExperienceScreen'
import ProjectScreen from './ProjectScreen'
import ContactScreen from './ContactScreen'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeScreen />
        <AboutScreen />
        <ExperienceScreen />
        <ProjectScreen />
        <ContactScreen />
      
    
    </div>
  )
}

export default HomePage