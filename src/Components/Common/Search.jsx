import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <>
     <div className='flex items-center border-b border-gray-400 p-1 gap-2 mb-4 mx-4'>
      <CiSearch size={24} className='text-gray-300'/>
      <p className='text-lg text-gray-300'>search</p>


      
    </div>
    
    </>
   
  )
}

export default Search
