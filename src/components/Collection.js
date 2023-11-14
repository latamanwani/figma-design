import React from 'react'
import fall from '../assests/fall.png'

export default function Collection() {
  return (
    <div className='my-16'>
        <h1 className='text-center text-2xl py-16'>Unique fall collection 2021</h1>
        <h2 className='text-center text-xs py-4 mx-96 font-semibold'>From statement side tables to stylish cabinets and luxurious sofas, discover  the curation of styles and designers for this fall.</h2>
      <img src={fall} alt='..' className='object cover h-96 w-full px-32' />
    </div>
  )
}
