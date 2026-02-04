import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import ScrollToTop from "../components/ScrollToTop"
import Cursor from "../components/Cursor"


const MainLayout = () => {
  return (
    <>
      <Cursor />
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout