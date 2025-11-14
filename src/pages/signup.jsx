import React, { useState } from 'react'
import MyTextfield from '../components/textfield'
import { TextField } from '@mui/material'
import Mybtn from '../components/btn'
import Login from './login'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
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
         return Swal.fire({
          title: "Required field are Missing",
          icon: "error",
          draggable: true
        });
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
          Swal.fire({
           title: "Sign up Successful",
  text: "You have created your account.",
  icon: "success",
  confirmButtonText: "OK"
        });
        navigate('/Login')

      } catch (error) {
          alert(error.message)
       }
    }

  return (
  <>
 <div className='w-screen h-screen flex justify-center items-center bg-[url(src/assets/bg.svg)] bg-cover bg-center'>
  <div className='w-full  max-w-md md:max-w-lg p-6 md:p-8 flex flex-col items-center rounded-2xl bg-white shadow-2xl'>

    <span className='text-2xl md:text-3xl my-6'>Travel Buddy</span>

    <div className='w-full my-2'>
      <MyTextfield className='w-full' label={"Email"} type={'email'} onChange={emailHandler} value={email}/>
    </div>

    <div className='w-full my-2'>
      <MyTextfield className='w-full' label={"Phone Number"} type={'text'} onChange={phoneNumberHandler} value={phoneNumber}/>
    </div>

    <div className='w-full my-2'>
      <MyTextfield className='w-full' label={"Password"} type={'password'} onChange={passwordHandler} value={password}/>
    </div>

    <div className='w-full my-4 flex justify-center items-center'>
      <Mybtn className="w-xsm" value={'Sign Up'} onClick={signupHandle}/>
    </div>

    <span className='text-blue-600 cursor-pointer mt-2'>
      <Link to="/Login">Already Have An Account</Link>
    </span>
  </div>
</div>

  </>
  )
}

export default Signup