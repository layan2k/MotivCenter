import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import {Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Services from './pages/Services'
import Adminlogin from './pages/Adminlogin'
import BlogSingle from './pages/BlogSingle'
import BlogWrite from './pages/BlogWrite'
import Layout from './Layout'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path='/blog' element={<Blog/>} />
    <Route path='/service' element={<Services/>} />
    <Route path='/admin' element={<Adminlogin />} />
    <Route path='/blog/post/:id' element={<BlogSingle />} />
    <Route path='/blog/write' element={<BlogWrite />} />
    </Route>
    <Route exact path='*' element={<PageNotFound />} />
    </Routes>

    <FloatingWhatsApp phoneNumber='258840396785' accountName='Motivcenter LDA' allowClickAway={true}/>
    </>
  )

}

export default App
