import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experiance from './experiance/Experiance'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experiance />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer /></>
    )
}

export default HomePage