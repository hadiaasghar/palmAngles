import React from 'react'
import Hero from '../Components/layout/Hero'
import Exclusive from '../Components/Products/Exclusive'
import { FaChevronRight } from 'react-icons/fa'
import CompleteLook from '../Components/layout/CompleteLook'

const Home = () => {
  return (
   <>
  <Hero />
  <Exclusive/>
  {/*2images*/}
  <div className='flex flex-col sm:flex-row  mb-14'>
    <div className='relative w-full sm:w-1/2  mb-8 sm:mb-0'>
      <img className=" sm:h-full w-full object-cover" src="./Man.avif" alt="Man T-shirt" />
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2
                sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2
                p-2 sm:p-4 bg-black/50 flex items-center justify-between
                h-10 sm:h-11 text-white rounded px-8
                w-fit sm:w-fit lg:w-[90%]"
      >
        <p className="tracking-tight uppercase text-xs sm:text-base">Man T-shirt</p>
        <FaChevronRight className="text-white text-base sm:text-xl" />
      </div>
    </div>

    <div className='relative  w-full sm:w-1/2'>
      <img className=" sm:h-full w-full object-cover" src="./women.avif" alt="Women sale" />
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2
                sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2
                p-2 sm:p-4 bg-black/50 flex items-center justify-between
                h-10 sm:h-11 text-white rounded px-8
                w-fit sm:w-fit lg:w-[90%]"
      >
        <p className="tracking-tight uppercase text-xs sm:text-base">Women sale</p>
        <FaChevronRight className="text-white text-base sm:text-xl" />
      </div>
    </div>
  </div>
  <CompleteLook/>

   
   </>
  )
}

export default Home
