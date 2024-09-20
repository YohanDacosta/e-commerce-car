import React from 'react'
import NavBar from './common/NavBar'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div className=' container'>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootPage