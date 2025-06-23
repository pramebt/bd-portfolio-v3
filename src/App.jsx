import React from 'react'
import Navbar from './components/layout/Navbar'
import './index.css';
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16 px-16'>
        <HomeScreen />
        <AboutScreen />
      </div>
    </>
  )
}

export default App