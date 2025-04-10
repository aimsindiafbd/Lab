import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CheckOrder from './page/CheckOrder'
export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')

  useEffect(()=>{
localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ''
        ? <Login setToken={setToken}/>
        : <>
          <Navbar setToken={setToken}/>
          <hr />
          <Routes>
            <Route path='/' element={<CheckOrder token={token}/>}/>
          </Routes>
        </>
      }

    </div>
  )
}

export default App