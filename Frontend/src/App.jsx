import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './page/Home'
import TestDetails from './page/TestDetails'
import FullBodyCheck from './page/FullBodyCheck'
import Navbar from './components/Navbar'
import TopHeader from './components/TopHearder'
import FeverTest from './page/FeverTest'
import Footer from './components/Footer'
import HIVTest from './page/HIVTest'
import ThyroidTest from './page/ThyroidTest'
import Gastrointestinal from './page/Gastrointestinal'
import Register from './page/Register'
import Cart from './page/Cart'
import PlaceOrder from './page/PlaceOrder'
import Order from './page/Order'
import FindATest from './page/FindATest'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ResetPassword from './page/ResetPassword'
import Contact from './page/Contact'
import About from './page/About'
import Loader from './components/Loader'

const App = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [location.pathname]) // use pathname here to track route changes

  return (
    <div>
      <ToastContainer />
    
     <TopHeader />
     <Navbar />
    
      {loading && <Loader />}
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/find-a-test' element={<FindATest />} />
        <Route path='/testDetails/:id' element={<TestDetails />} />
        <Route path='/fullbodycheckup' element={<FullBodyCheck />} />
        <Route path='/fevertest' element={<FeverTest />} />
        <Route path='/hivtest' element={<HIVTest />} />
        <Route path='/thyroidtest' element={<ThyroidTest />} />
        <Route path='/gastrointestinal' element={<Gastrointestinal />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetPassword' element={<ResetPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
