import Header from '@/components/shared/Header'
import React from 'react'
import HeroSection from './Components/HeroSection'
import Footer from '@/components/shared/Footer'
import GetInTouch from './Components/GetInTouch'
import ContactForm from './Components/ContactForm'

const Page = () => {
  return (
    <>
        <Header/>
        <HeroSection/>
        <GetInTouch/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Page