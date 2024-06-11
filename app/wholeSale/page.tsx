import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Apply from './Components/Apply'
import Clients from './Components/Clients'
import Vibe from '@/components/shared/Vibe'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <About/>
      <Apply/>
      <Clients/>
      <Vibe/>
      <Footer/>
    </div>
  )
}

export default page
