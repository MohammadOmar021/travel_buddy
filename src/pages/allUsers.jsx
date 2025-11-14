import React from 'react'
import SideBar from '../components/sideBar'
import Navbar from '../components/navbar'
import BasicTable from '../components/userTable'
import DataTable from '../components/allUserTable'
import { userArr } from './dashboard'
const AllUsers = () => {


const userColumns = [
  { field: "firstname", headerName: "First Name", width: 150 },
  { field: "lastname", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "status", headerName: "Status", width: 120 },
];


  return (
    <>
     <div className='flex gap-2'>
 <SideBar/>
      <div className='flex flex-col w-full'>
        <Navbar value={"Manage All Users"} btnValue={"Add New Users"}/>
      <div className='mt-3  h-full flex flex-col justify-center items-center'>
        <div className='w-250 shadow-2xl'>
          <DataTable data={userArr} columns={userColumns} />
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default AllUsers