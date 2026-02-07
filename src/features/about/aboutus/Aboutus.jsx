
import React from 'react'
import HeroSection from "./components/HeroSection"
import CTA from "../../contact/components/CTA"
import { useEffect } from "react"

const Aboutus = () => {

  useEffect(() => {
     document.title = 'About Us | Techzmatrix Software Technologies'
   }, [])
   
  return (
   <div>
     <HeroSection/>
     <CTA/>
   </div>
  )
}

export default Aboutus