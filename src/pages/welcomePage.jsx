import React from 'react'
import Navbar from '../components/welcomePage/navbar'
import Home from '../components/welcomePage/Home'
import About from '../components/welcomePage/About'
import Services from '../components/welcomePage/Services'
import Offers from '../components/welcomePage/Offers'
import Contac from '../components/welcomePage/Contac'
import Footer from '../components/welcomePage/Footer'

function welcomePage() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Offers />
    <Contac />
    <Footer />
    </>
  )
}

export default welcomePage