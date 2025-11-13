import React from 'react'
import MyTextfield from '../components/textfield'
import { TextField } from '@mui/material'
import Mybtn from '../components/btn'
import Login from './login'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
  <>
  <div className='w-full min-h-screen flex justify-center items-center bg-[url(src/assets/bg.svg)] bg-cover bg-center'>
    <div className='w-lg h-96  flex items-center flex-col rounded-2xl bg-white shadow-2xl'>

        <span className='text-2xl my-6'>Travel Buddy</span>
        <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Email"} type={'email'}/></div>
         <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Phone Number"} type={'text'}/></div>
      <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Password"} type={'password'}/></div>
      <div className='my-2'><Mybtn className="my-4" value={'Sign Up'}/></div>
     <span className='text-blue-600 cursor-pointer'><Link to="/Login">Already Have An Account</Link></span>
    </div>
  </div>
  

  </>
  )
}

export default Signup