import React from 'react'
import SideBar from '../components/sideBar'
import Navbar from '../components/navbar'
import TripCard from '../components/tripCard'
import Mypagination from '../components/pagination'
import { tripArr } from './dashboard'

const AllTrips = () => {
  return (
    <>
    <div className='flex gap-2 h-full'>
        
    <SideBar/>
    <div className='flex flex-col h-fit w-full md:w-full  md:h-screen'>
        <Navbar value={"Trips"} btnValue={"Create a Trip"}/> 
        <div className=' md:w-full h-fit  my-4 flex flex-wrap gap-4 justify-center items-center overflow-y-scroll px-2'>
           
                {tripArr.map((trip, index) => (
                    <TripCard key={index} trip={trip} />
                ))}
            
            
        </div>
        <Mypagination/>
    </div>
    
    </div>
    </>
  )
}

export default AllTrips