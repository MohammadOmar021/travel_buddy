import React from 'react'
import SideBar from '../components/sideBar'
import Navbar from '../components/navbar'
import BasicTable from '../components/userTable'
import DataTable from '../components/allUserTable'

const AllUsers = () => {
  return (
    <>
     <div className='flex gap-2'>
 <SideBar/>
      <div className='flex flex-col w-full'>
        <Navbar value={"Manage All Users"} btnValue={"Add New Users"}/>
      <div className='mt-3  h-full flex flex-col justify-center items-center'>
        <div className='w-250 shadow-2xl'>
          <DataTable/>
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default AllUsers