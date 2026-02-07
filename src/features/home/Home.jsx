
import { ImOpt } from 'react-icons/im'
import HeroSection from '../../features/home/components/HeroSection.jsx'
import Services from '../../features/home/components/Services.jsx'
import WhyChooseUs from '../../features/home/components/WhyChooseUs.jsx'
import CTA from '../contact/components/CTA.jsx'
import Process from './components/Process.jsx'
import { useEffect } from "react"



const Home = () => {

  useEffect(() => {
     document.title = 'Techzmatrix Software Technologies'
   }, [])

  return (
    <>
     <HeroSection/>
     <Services/>
     <WhyChooseUs/>
     <Process/>
     <CTA/>
    </>
  )
}

export default Home
