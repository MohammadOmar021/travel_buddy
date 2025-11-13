import React from 'react'
import { TextField } from '@mui/material'
const MyTextfield = ({label, className, type}) => {
  return (
    <>
    <TextField  id="outlined-basic"  className={className} label={label} variant="outlined" type={type}/>
    </>
  )
}

export default MyTextfield