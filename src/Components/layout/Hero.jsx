import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative  overflow-hidden">
      <img
        src="/hero.avif"
        alt="hero"
        className="block w-full h-[40vh]  lg:h-[100vh] object-cover"
      />
      <div className="absolute bottom-4 left-1 right-1 sm:bottom-8 sm:left-6 sm:right-auto p-2 sm:p-4 bg-black/50 flex min-w-0 sm:min-w-2xl max-w-full sm:max-w-fit justify-between h-10 sm:h-11 items-center text-white rounded">
        <p className="tracking-tight uppercase text-xs sm:text-base">Discover More</p>
        <FaChevronRight className="text-white text-base sm:text-xl" />
      </div>
    </div>
  )
}

export default Hero
