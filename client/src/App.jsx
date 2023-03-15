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
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
    <Route index element={<Home title='Home'/>}/>
    <Route path='/blog' element={<Blog title='Blog'/>} />
    <Route path='/admin' element={<Adminlogin title='Super User' />} />
    <Route path='/blog/post/:id' element={<BlogSingle />} />
    <Route path='/blog/write' element={<BlogWrite />} />
    <Route path='/services' element={<Services title='Services' />} />
    <Route path='/about' element={<AboutPage title='About'/>} />
    <Route path='/contact' element={<ContactPage title='Contact Us' />} />
    </Route>
    <Route exact path='*' element={<PageNotFound title='Page Not Found'/>} />
    </Routes>

    <FloatingWhatsApp phoneNumber='258840396785' accountName='Motivcenter LDA' allowClickAway={true}/>
    </>
  )

}

export default App
