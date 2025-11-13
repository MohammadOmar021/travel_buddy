import React from 'react'
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
const Dashboard = () => {
  
  
  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};
  
  
    return (
    <>
   <div className='flex gap-2'>
    <SideBar/>
   <div className=' w-full bg-gray-50'>
       <Navbar value={"Welcome Adrian 🙌"} btnValue={"Create A Trip"}/>
        <div className='h-36 p-2 mt-4 flex justify-evenly '>
            <StatsCard/>
             <StatsCard/>
              <StatsCard/>
        </div>
        <div className=' mt-3 h-fit p-4 flex justify-evenly overflow-x-auto scrollbar-hide mx-2'>
           
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
        <div className=' h-fit mt-4 flex justify-center items-center mx-2 gap-2 mb-4'>
            <div className='w-1/2 h-100 shadow-2xl  rounded-xl p-4 flex flex-col justify-center '>
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
    </>
  )
}

export default Dashboard