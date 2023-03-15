import React from 'react'
import { Outlet } from 'react-router-dom'
import BackToTop from './components/BackTop'
import Footer from './components/Footer'
import BusinessFooter from './components/Footer2'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <BackToTop/>
        <BusinessFooter/>
    </div>
  )
}

export default Layout