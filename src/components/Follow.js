import React from 'react'
import pexelsalexqian from '../assests/pexelsalexqian.png'
import pexelslamiko from '../assests/pexelslamiko.png'
import pexelmaxvakhtbovych from '../assests/pexelsmaxvakhtbovych.png'
import pexelsrachelclaire from '../assests/pexelsrachelclaire.png'
import pexelsrachelclaireaaa from '../assests/pexelsrachelclaireaaa.png'
import back from '../assests/back.png'

export default function Follow() {
  return (
    <div>
      <h1 className='text-center text-2xl font-semibold pb-20'>Follow us</h1>
      <div className='flex h-60'>
      <img src={pexelsalexqian} alt='...' className='w-1/6' />
      <img src={pexelslamiko} alt='..' className='w-1/6' />
      <img src={pexelmaxvakhtbovych} alt='....' className='w-1/6'/>
      <img src={pexelsrachelclaire} alt='.....'className='w-1/6' />
      <img src={pexelsrachelclaireaaa} alt='........' className='w-1/6'/>
      <img src={back} alt='......' className='w-1/6'/>
      </div>
    </div>
  )
}
