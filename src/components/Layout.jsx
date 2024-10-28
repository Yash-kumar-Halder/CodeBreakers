import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className='mainWraper'>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout