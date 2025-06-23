import React from 'react'
import Navbar from './components/layout/Navbar'
import './index.css';
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
const App = () => {
  return (
    <>
      <Navbar />
      <div className=' px-16 md:px-20 '>
        <HomeScreen />
        <AboutScreen />
      </div>
    </>
  )
}

export default App