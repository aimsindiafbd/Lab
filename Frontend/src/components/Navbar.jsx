import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'
import logo from '../assets/Asian_logo.png'
import menu_icon from '../assets/menu_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { AppContext } from '../context/AppContent'
// import { FaCaretUp } from "react-icons/fa";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const { getCartCount, navigate, token, setToken, setCartItem } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/register')
    setToken('');
    setCartItem({})
  }

  return (
    <div className='flex items-center justify-between py-3 px-4 font-medium z-50'>
      <NavLink to='/'>
        <img src={logo} className="w-[120px] sm:w-[100px]" alt="Logo" />
      </NavLink>
      <ul className='hidden sm:flex gap-5 text-sm text-black'>
        <NavLink to='/find-a-test' className="flex flex-col items-center gap-1">
          <p className='uppercase flex items-center gap-2'>Find A Test</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <div className="relative">
          <div className='flex items-center gap-2'>
            <NavLink to='/fullbodycheckhealthprice' className="flex flex-col items-center gap-1">
              <p className='uppercase'>Full Body Health Checkup </p>
            </NavLink>
            <RiArrowDropDownLine className='text-lg text-black cursor-pointer' />
          </div>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className='group relative hidden sm:block'>
            <p className='uppercase'>Quick Links</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-400 rounded'>
                <NavLink to='/contact' className='cursor-pointer hover:text-black'>Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </ul>

      <div className='flex items-center gap-6'>
        <div className='group relative hidden sm:block'>
          <img onClick={() => token ? null : navigate('/register')} src={profile_icon} className='w-5 cursor-pointer' alt="" />
          {/* dropdown */}
          {
            token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-400 rounded'>
                {/* <NavLink to='/my-profile' className='cursor-pointer hover:text-black'>My Profile</NavLink> */}
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

              </div>
            </div>
          }

        </div>

        <Link to='/cart' className='relative'>
          <img src={cart_icon} className='w-5 min-w-5' alt="" />
          <p className="absolute right-[0px] top-[0px] text-center px-1.5 leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>


        <img onClick={() => setVisible(true)} src={menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute z-50 top-0 right-0 h-full bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='cursor-pointer flex items-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <div className='flex justify-between items-center  border'>
            <NavLink to='/popular-categories' className='uppercase py-2 pl-6 flex items-center justify-between'>
              Find A Test
            </NavLink>
          </div>
          <div className='flex items-center justify-between border'>
            <NavLink className='uppercase py-2 pl-6' to='/about'>
              Full Body Health Checkup
            </NavLink>
          </div>

          <div className='flex flex-col px-10'>
            <NavLink className='py-2'>Wellwise Total Profile-77 Test</NavLink>
            <NavLink className='py-2'>Wellwise Advanced Profile-74 Tests</NavLink>
            <NavLink className='py-2'>Wellwise Exclusive Profile-Male-84 Test</NavLink>
            <NavLink className='py-2'>Wellwise Exclusive Profile-female-84 Test</NavLink>
            <NavLink className='py-2 font-semibold'>View All</NavLink>
          </div>
          <NavLink className='uppercase py-2 pl-6 border' to='/Collection'>Download Report</NavLink>
          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>Contact Us</NavLink>
          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>Business Query </NavLink>
          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>Test Related Form</NavLink>
          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>Orders</NavLink>
          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>My Profile</NavLink>

          <NavLink className='uppercase py-2 pl-6 border' to='/Contact'>Logout</NavLink>

        </div>
      </div>
    </div >
  )
}

export default Navbar