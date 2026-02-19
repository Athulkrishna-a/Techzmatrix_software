
import React from 'react'
import HeroSection from "./components/HeroSection"
import CTA from "../../contact/components/CTA"
import { useEffect } from "react"

const Aboutus = () => {

  useEffect(() => {
     document.title = 'About us '
   }, [])
   
  return (
   <div>
     <HeroSection/>
     <CTA/>
   </div>
  )
}

export default Aboutus