import React, { useState } from 'react'
import { SideBar, NavBar, Footer } from './common'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  const [ showSideBar, setShowSideBar ] = useState(false);

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <div className='container mx-auto bg-violet-100 max-h-screen h-screen bg-opacity-45'>
        <NavBar fnc={handleShowSideBar} />
        <SideBar active={showSideBar} fnc={handleShowSideBar}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootPage