import { Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Mybtn = ({value, className, variant="outlined", onClick}) => {
  return (
   <>
   
   <Button variant={variant} className={className} onClick={onClick}><AddCircleIcon className='mx-2'/>{value}</Button>
   </>
  )
}

export default Mybtn