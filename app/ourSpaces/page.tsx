import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'
import HeroSection from './Components/HeroSection'
import Vibe from '@/components/shared/Vibe'
import Location from './Components/Location'

const Page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Location/>
      <Vibe/>
      <Footer/>
    </div>
  )
}

export default Page
