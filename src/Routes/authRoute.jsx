import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthRoute = () => {
    
  return (
    <>
    {localStorage.getItem('token') ? (
      <Outlet />
    ) : (
     <Navigate to="/Login" />
    )}
    </>
  )
}

export default AuthRoute