import React from 'react'
import Navbar from './components/layout/Navbar'
import './index.css';
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import ExperienceScreen from './pages/ExperienceScreen'
const App = () => {
  return (
    <>
      <Navbar />
      <div className=' px-8 md:px-20 lg:px-40  '>
        <HomeScreen />
        <AboutScreen />
        <ExperienceScreen />
      </div>
    </>
  )
}

export default App