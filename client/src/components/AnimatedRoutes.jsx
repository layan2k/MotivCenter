import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Adminlogin from '../pages/Adminlogin'
import BlogSingle from '../pages/BlogSingle'
import BlogWrite from '../pages/BlogWrite'
import Layout from '../Layout'
import AboutPage from '../pages/About'
import { AnimatePresence } from 'framer-motion'
import Terms from '../pages/Terms'
import PrivacyPolicy from '../pages/PrivacyPage'

const LazyContact = React.lazy(() => import('../pages/Contact'))

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home title='Home' />} />
                    <Route path='/blog' element={<Blog title='Blog' />} />
                    <Route path='/admin' element={<Adminlogin title='Super User' />} />
                    <Route path='/blog/post/:id' element={<BlogSingle />} />
                    <Route path='/blog/write' element={<BlogWrite />} />
                    <Route path='/services' element={<Services title='Services' />} />
                    <Route path='/contact' element={<React.Suspense fallback={"Loading..."}><LazyContact title='Contact Us' /></React.Suspense>} />
                    <Route path='/about' element={<AboutPage title='About Us' />} />
                    <Route path='/terms-and-conditions' element={<Terms title="Terms And Conditions" />} />
                    <Route path='/privacy' element={<PrivacyPolicy title="Privacy Policy" />} />
                </Route>
                <Route exact path='*' element={<PageNotFound title='Page Not Found' />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes