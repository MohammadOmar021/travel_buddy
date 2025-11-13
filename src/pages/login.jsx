import React, { useState } from 'react'
import MyTextfield from '../components/textfield'
import { TextField } from '@mui/material'
import Mybtn from '../components/btn'
import { Link, useNavigate } from 'react-router-dom'
import Signup from './signup'
import axios from 'axios'

const Login =  () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleEmail = (e)=>{
    setEmail(e.target.value)
}
const handlePassword = (e)=>{
    setPassword(e.target.value)
}
const navigate = useNavigate()
const handleLogin = async ()=>{
  try {
    if(!email || !password){
    return alert("Required fields are missing")
  }

  const api = await axios.post('http://localhost:3000/api/Login', {
    email, 
    password
  })
  console.log(api)
  if(api.data.status){
    navigate('/Dashboard')
  }else{
    alert(api.data.message)
  }

  } catch (error) {
    alert(error.message)
  }


}

  return (
  <>
  <div className='w-fit h-screen  md:w-full md:min-h-screen flex justify-center items-center bg-[url(src/assets/bg.svg)] bg-cover bg-center'>
    <div className='w-fit h-fit md:w-lg md:h-96  flex items-center flex-col rounded-2xl bg-white shadow-2xl'>

        <span className='text-2xl my-6'>Travel Buddy</span>
        <div className='md:w-96 mx-4 my-2'><MyTextfield className='md:w-full' label={"Email"} type={'email'} onChange={handleEmail} value={email}/></div>
       
      <div className='md:w-96 mx-4 my-2'><MyTextfield className='md:w-full' label={"Password"} type={'password'} onChange={handlePassword} value={password}/></div>
      <div className='my-2'><Mybtn className="my-4" value={'Login'} onClick={handleLogin}/></div>
      <span className='text-blue-600 cursor-pointer'><Link to="/">Doesn't Have An Account</Link></span>
    </div>
  </div>
  

  </>
  )
}

export default Login