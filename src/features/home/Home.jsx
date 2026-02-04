
import HeroSection from '../../features/home/components/HeroSection.jsx'
import Services from '../../features/home/components/Services.jsx'
import WhyChooseUs from '../../features/home/components/WhyChooseUs.jsx'
import CTA from '../contact/components/CTA.jsx'
import Process from './components/Process.jsx'


const Home = () => {
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
