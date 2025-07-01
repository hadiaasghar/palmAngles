import React from 'react'
import Hero from '../Components/layout/Hero'
import Exclusive from '../Components/Products/Exclusive'
import { FaChevronRight } from 'react-icons/fa'

const Home = () => {
  return (
   <>
  <Hero />
  <Exclusive/>
  <div className='flex'>
  <div className='relative w-1/2'>
    <img className="h-full w-full object-cover" src="./Man.avif" />
    <div
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 p-2 sm:p-4 bg-black/50 flex min-w-0 sm:min-w-2xl sm:max-w-fit justify-between h-10 sm:h-11 items-center text-white rounded px-8 lg:w-36"
      style={{ width: "50%" }}
    >
      <p className="tracking-tight uppercase text-xs sm:text-base">Discover More</p>
      <FaChevronRight className="text-white text-base sm:text-xl" />
    </div>
  </div>
  <div className='relative w-1/2'>
    <img className="h-full w-full object-cover" src="./women.avif" />
    <div
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 p-2 sm:p-4 bg-black/50 flex min-w-0 sm:min-w-2xl sm:max-w-fit justify-between h-10 sm:h-11 items-center text-white rounded px-8 lg:w-36"
      style={{ width: "50%" }}
    >
      <p className="tracking-tight uppercase text-xs sm:text-base">Discover More</p>
      <FaChevronRight className="text-white text-base sm:text-xl" />
    </div>
  </div>
</div>

   
   </>
  )
}

export default Home
