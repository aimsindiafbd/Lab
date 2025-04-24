import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Logo from '../assets/Asian_logo.png'
const TopHearder = () => {
  const [location,setLocation] = useState({
    city:'',
    state:'',
    pincode:'',
  })
  const [error,setError] = useState("")
  const getLocation = ()=>{
    if(!navigator.geolocation){
      setError("Geolocation is not supported by your browser")
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async({coords})=>{
        try {
          const resp = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
          );
          const data = await resp.json();
          const addr = data.address || {};
          const city = addr.city || addr.town || addr.village || "";
          const state = addr.state||"";
          const pincode = addr.postcode || "";
          setError("");
          setLocation({ city, state, pincode });
        } catch (error) {
          setError("Failed to fetch location. Try again.");
        }
      },()=>{
        setError("Location access denied. Enable GPS & try again.");
      }
    )
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className='bg-white'>
      <div className='flex justify-between'>
        <div>
        <NavLink to='/'>
          <img src={Logo} className="w-[120px] sm:w-[170px]" alt="" />
        </NavLink>
        </div>
       <div className='flex justify-between gap-4 px-5'>
          {/* Location */}
          <div className="flex items-center gap-1">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            location.city && (
              <>
                <CiLocationOn className="text-2xl text-[#00AECD]" />
                <p className="text-black">
                  {location.city}
                  {location.pincode && `, ${location.pincode}`}
                </p>
              </>
            )
          )}
        </div>
       <div className="hidden sm:flex items-center gap-2">
        <FaPhone className="text-lg text-[#00AECD]" />
        <a href="tel:+9101294253000" className="text-black text-sm">
          0129 - 4253000
        </a>
      </div>
        <div className="hidden sm:flex items-center gap-2">
        <IoIosMail className="text-2xl text-[#00AECD]" />
        <a href="mailto:info@aimsindia.com" className="text-black text-sm">
        info@aimsindia.com
        </a>
      </div>
       </div>
      </div>
    </div>
  )
}

export default TopHearder