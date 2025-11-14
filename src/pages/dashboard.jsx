import React, { useEffect, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Mybtn from '../components/btn';
import AddIcon from '@mui/icons-material/Add';

import { Button } from '@mui/material';
import SideBarBtn from '../components/sideBarBtn';
import StatsCard from '../components/statsCard';
import { BarChart } from '@mui/icons-material';
import TripCard from '../components/tripCard';
import Slider from 'react-slick';
import BasicLineChart from '../components/lineChart';
import BasicBars from '../components/chart';
import BasicTable from '../components/userTable';
import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import CreateForm from '../components/forms';
import Modal from '../components/modal';
const Dashboard = () => {
  
  
const [showForm, setShowForm] = useState(false)
  
    return (
    <>
   <div className='flex gap-2'>
    <SideBar/>
   <div className=' w-full bg-gray-50'>
       <Navbar value={"Welcome Adrian 🙌"} btnValue={"Create A Trip"} onClick={()=>{setShowForm(true)}}/>
        <div className='h-36 p-2 mt-4 flex justify-evenly '>
            <StatsCard value={"All Users"}/>
             <StatsCard value={"All Trips"}/>
              <StatsCard value={"Active Users Today"}/>
        </div>
        <span className='text-3xl  ml-4'>Trips</span>
        <div className=' flex-col justify-center items-center md:mt-1 h-fit  p-4 flex md:flex-row md:justify-evenly overflow-x-auto scrollbar-hide mx-2'>
          
        <TripCard/>
        <TripCard/>
        <TripCard/>
         <TripCard/>   
        </div>
        <div className='hidden md:h-fit lg:flex gap-1 mt-4 justify-center items-center'>
            <div className='h-full  w-1/2 shadow-xl rounded-2xl'>
            <BasicBars/>
            </div>
            <div className='h-full  w-1/2 shadow-xl rounded-2xl'>
            <BasicLineChart/>
            </div>
        </div>
        <div className='hidden md:h-fit md:mt-4 md:flex justify-center items-center mx-2 gap-2 mb-4'>
            <div className='w-1/2 h-100 shadow-2xl  rounded-xl p-4 flex flex-col justify-center items-center'>
            <span className='text-2xl my-1 '> Latest Users Signup</span>
              <BasicTable/>
            </div>
             <div className='w-1/2 h-100  shadow-2xl rounded-xl p-4 flex flex-col justify-center items-center'>
             <span className='text-2xl my-1  '> Latest Trip Booking</span>
                <BasicTable/>
            </div>
        </div>
   </div>
   </div>
      
     {showForm && <Modal setShowForm={setShowForm}/>}

    </>
  )
}

export default Dashboard