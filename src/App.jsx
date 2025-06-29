import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './index.css';
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import ExperienceScreen from './pages/ExperienceScreen'
import ProjectScreen from './pages/ProjectScreen'
import AllProjectScreen from './pages/AllProjectScreen'

const HomePage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <HomeScreen />
      <AboutScreen />
      <ExperienceScreen />
      <ProjectScreen />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-projects" element={<AllProjectScreen />} />
      </Routes>
    </Router>
  )
}

export default App