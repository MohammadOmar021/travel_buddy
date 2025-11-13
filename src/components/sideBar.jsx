import React from 'react'
import SideBarBtn from './sideBarBtn'
import { Link } from 'react-router-dom'
import Account from './account'

const SideBar = () => {
  return (
   <>
    <aside className='hidden   w-1/6 min-h-screen lg:flex flex-col items-center shadow-2xl'>
        <span className='text-2xl my-6 cursor-pointer'>Travel Buddy</span>
       <div className='flex flex-col   min-h-screen justify-between'>
          <div>
            <Link to={"/Dashboard"}><SideBarBtn className={'mt-2 w-46 h-10 flex justify-center items-center rounded-2xl shadow-lg hover:shadow-2xl  hover:bg-blue-500 hover:text-white'} value={"Dashboard"}/>
      </Link>
           <Link to={"/AllUsers"}><SideBarBtn className={'mt-2 w-46 h-10 flex justify-center items-center rounded-2xl shadow-lg hover:shadow-2xl  hover:bg-blue-500 hover:text-white'} value={"All Users"}/>
  </Link>
          <Link to={"/AllTrips"}><SideBarBtn className={'mt-2 w-46 h-10 flex justify-center items-center rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-500 hover:text-white'} value={"All Trips"}/>
   </Link>
         </div>
  <div className='mt-4 flex justify-between'>
     <SideBarBtn value={<Account/>}/>
  </div>
       </div>
   </aside>
   </>
  )
}

export default SideBar