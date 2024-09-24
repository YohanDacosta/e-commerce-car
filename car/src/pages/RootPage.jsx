import React, { useState } from 'react'
import { SideBar, NavBar, Footer, Cart } from './common'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  const [ showSideBar, setShowSideBar ] = useState(false);
  const [ showCartModel, setShowCartModel ] = useState(false);

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  const handleShowCartModel = () => {
    setShowCartModel(!showCartModel);
  }

  return (
    <div className='container relative mx-auto bg-violet-100 max-h-screen h-screen bg-opacity-45'>
        <NavBar fnc={handleShowSideBar} fnc1={handleShowCartModel} />
        <SideBar active={showSideBar} fnc={handleShowSideBar}/>
        <Cart active={showCartModel} fnc={handleShowCartModel}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootPage