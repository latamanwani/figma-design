import React from 'react'
import picture from '../assests/picture.png'

export default function PageDetail() {
  return (
   <div className='py-8 my-4 mx-10'>
    <img src={picture} alt='..' className='object cover h-96 w-full' />
   </div>
  )
}
