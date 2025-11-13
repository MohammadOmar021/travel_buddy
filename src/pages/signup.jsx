import React, { useState } from 'react'
import MyTextfield from '../components/textfield'
import { TextField } from '@mui/material'
import Mybtn from '../components/btn'
import Login from './login'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')



    const emailHandler = (e)=>{

      setEmail(e.target.value)
      console.log(email)
    }
    
    const phoneNumberHandler = (e)=>{

      setPhoneNumber(e.target.value)
    }
    
    const passwordHandler = (e)=>{

      setPassword(e.target.value)
    }

        const navigate = useNavigate()
    const signupHandle = async( value={})=>{
       try {
         if(!email || !phoneNumber || !password){
        return  alert("Required Fields are Missing")
        }
        
        const api = await axios.post('http://localhost:3000/api/createUser', {
          email,
          phoneNumber,
          password
        })

        setEmail('')
        setPhoneNumber('')
        setPassword('')

       console.log(api.data.message)
        alert(api.data.message)
        navigate('/Login')

      } catch (error) {
          alert(error.message)
       }
    }

  return (
  <>
  <div className='w-full min-h-screen flex justify-center items-center bg-[url(src/assets/bg.svg)] bg-cover bg-center'>
    <div className='w-lg h-96  flex items-center flex-col rounded-2xl bg-white shadow-2xl'>

        <span className='text-2xl my-6'>Travel Buddy</span>
        <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Email"} type={'email'} onChange={emailHandler} value={email}/></div>
         <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Phone Number"} type={'text'} onChange={phoneNumberHandler} value={phoneNumber}/></div>
      <div className='w-96 mx-4 my-2'><MyTextfield className='w-full' label={"Password"} type={'password'} onChange={passwordHandler} value={password}/></div>
      <div className='my-2'><Mybtn className="my-4" value={'Sign Up'} onClick={signupHandle}/></div>
     <span className='text-blue-600 cursor-pointer'><Link to="/Login">Already Have An Account</Link></span>
    </div>
  </div>
  

  </>
  )
}

export default Signup