import React from 'react'
import { Box, Pagination } from '@mui/material';
const Mypagination = () => {
  return (
    <>
    
     <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Pagination
          
          color="primary"
          shape="rounded"
        />
      </Box>
    </>
  )
}

export default Mypagination