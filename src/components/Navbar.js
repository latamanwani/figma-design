import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-gray-50 py-4' >
     <div className='inline justify-center mx-10 mx-02 text-xs'>
        about
     </div>
     <div className='inline justify-center mx-10 text-xs'>
      brand
     </div>
     <div className='inline justify-center mx-10 text-xs'>
        blog
     </div>
     <h1 className='inline text-2xl mx-20'>RUBY</h1>
     <input type="search" placeholder='search'></input>
    </div>
    
  )
}
