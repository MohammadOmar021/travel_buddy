import React from 'react'
import { TextField } from '@mui/material'
const MyTextfield = ({label, className, type, onChange, value}) => {
  return (
    <>
    <TextField  id="outlined-basic"  className={className} label={label} variant="outlined" type={type} onChange={onChange} value={value}/>
    </>
  )
}

export default MyTextfield