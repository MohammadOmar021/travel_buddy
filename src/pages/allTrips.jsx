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
    <div className='flex flex-col h-full w-full md:w-full  md:h-screen'>
        <Navbar value={"Trips"} btnValue={"Create a Trip"}/> 
        <div className=' md:w-full h-full overflow-x-auto md:my-4 flex md:flex-wrap  md:justify-center md:items-center  md:px-2 ' >
           
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