import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicRating from './pages/signup'
import Signup from './pages/signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
//import TemporaryDrawer from './pages/dashboard'
import AllUsers from './pages/allUsers'
import AllTrips from './pages/allTrips'
import AuthRoute from './Routes/authRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Routes>
   <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    
    <Route path='/Dashboard'  element={<Dashboard />}/>
    <Route path='/AllUsers' element={<AllUsers/>}/>
    <Route path='/AllTrips' element={<AllTrips/>}/>
 
    
    
    </Routes>

  
    </>
  )
}

export default App
