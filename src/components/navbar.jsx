import React from 'react'
import Mybtn from './btn'

const Navbar = ({value, btnValue}) => {
  return (
    <>
    <div className=' flex flex-col justify-evenly  items-center mt-4 w-full  h-50  md:h-20 md:w-full p-4 md:flex md:flex-row md:justify-between md:items-center'>
            <div className='flex flex-col'>
                 <span className='text-xl md:text-3xl'>{value}</span>
                 <span className='text-xs md:text-xs md:mt-3'>Track activity, trends and popular destination in real time</span>
            </div>
            <div>
               <Mybtn value={btnValue} variant='contained'/>
               
            </div>
        </div>
    </>
  )
}

export default Navbar