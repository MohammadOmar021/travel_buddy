import React from 'react'
import SideBar from '../components/sideBar'
import Navbar from '../components/navbar'
import TripCard from '../components/tripCard'
import Mypagination from '../components/pagination'


const AllTrips = () => {
  return (
    <>
    <div className='flex gap-2 h-full'>
        
    <SideBar/>
    <div className='flex flex-col h-fit w-full md:w-full  md:h-screen'>
        <Navbar value={"Trips"} btnValue={"Create a Trip"}/> 
        <div className='hidden md:w-full h-screen md:grid md:grid-rows-2 my-4'>
            <div className=' md:row-span-1  md:flex md:gap-2 p-2 md:justify-evenly'>
                <TripCard/>
                <TripCard/>
                 <TripCard/>
                <TripCard/>
            </div>
            <div className='row-span-1  flex gap-2 p-2'>
                
            </div>

            
        </div>
        <Mypagination/>
    </div>
    
    </div>
    </>
  )
}

export default AllTrips