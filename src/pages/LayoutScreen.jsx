import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
const LayoutScreen = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutScreen