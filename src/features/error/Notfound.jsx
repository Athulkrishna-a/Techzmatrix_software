import { Link } from 'react-router-dom';
import Error from '../../assets/images/error404.png'
import { ArrowRight } from 'lucide-react';
const NotFound = () => {
  return (
    <div className='w-full h-auto bg-main mx-auto'>
      <div className='md:flex md:flex-row-reverse items-center justify-between py-30 md:py-20 px-15 md:px-20'>
        <div className='lg:w-1/2 py-10'>
          <img src={Error} alt="" />
        </div>
        <div className='text-left md:px-10 '>
          <h1
            className='text-2xl font-geom text-white py-1'>
            Error 404</h1>
          <h2
            className='text-3xl font-geom font-bold text-white  py-1'>
            Oops! Somthing went Wrong</h2>
          <h3
            className='text-base font-geom  py-1 text-white'>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.</h3>
          <Link to='/'>
            <button
              className=' rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10 my-3  group'>
              <div className='flex items-center justify-between mx-3 gap-2  cursor-pointer text-white '>
                <h1
                  className='font-geom text-base'>
                  Back to Home</h1>
                 <ArrowRight className='group-hover:translate-x-2 transition ease-linear duration-300' />
                  
              </div>
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default NotFound