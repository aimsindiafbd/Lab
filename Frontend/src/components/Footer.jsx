import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/Asian_logo.png'
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
const Footer = () => {
    return (
        <>
            <hr className='bg-[#00AECD]' />
            <div className='bg-[#ffffff] p-4 rounded text-[#00AECD]'>
                <div className='grid md:grid md:grid-cols-2 lg:grid-cols-4 my-10'>
                    {/* Asian Lab Image with contennt */}
                    <div>
                        <NavLink to='/'>
                            <div className='flex items-end gap-4'>
                                <img src={logo} className="w-[120px] sm:w-[100px]" alt="" />
                            </div>
                        </NavLink>
                        <p className='py-6 text-justify'>Laboratories used for scientific research take many forms because of the differing. We provide complete process piping capabilities.</p>
                        <div className='flex items-center gap-6'>
                            <FaInstagram className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg transition-all cursor-pointer' />
                            <FaFacebookSquare className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg  transition-all cursor-pointer' />
                        </div>
                        <p className='my-4'>© 2025 Asian Lab. All rights reserved</p>
                    </div>

                    {/* Service List */}
                    <div className='sm:px-8 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-8 h-0.5'></p>
                            <h1 className='px-10 text-2xl'>Service</h1>
                            <p className='bg-white w-8 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Full Body Health Checks
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Fever: Dengue, Chikungunya, Malaria
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />HIV Test
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Women Test
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Thyroid Test
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Gastrointestinal Test
                            </NavLink>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className='sm:px-8 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-4 h-0.5'></p>
                            <h1 className='px-10 text-2xl'>Useful Links</h1>
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />About Us
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Test Related Form
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Cart
                            </NavLink>
                            <NavLink className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Contact Us
                            </NavLink>
                        </div>
                    </div>

                    {/* Address, Phone No, Email */}
                    <div className='sm:px-8 py-5 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-4 h-0.5'></p>
                            {/* <h1 className='px-10 text-2xl'>Useful Links</h1> */}
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <LuPhoneCall className='text-4xl py-2' /><a href="tel:+9101294253000">0129 - 4253000 </a>
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <CiLocationOn className='text-6xl py-2' />Badkal Flyover, Road, Sector 21A, Faridabad, Haryana 121001
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <MdAlternateEmail className='text-4xl py-2' /><a href="mailto:info@aimsindia.com">info@aimsindia.com</a>
                            </p>
                        </div>
                    </div>

                </div>


                {/* bottom fixed footer */}
                <div className='fixed bottom-0 bg-[#01ABCE] w-full right-0.5 px-2 py-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <p className='text-white text-lg'>Get a Call Back from our Health Advisor</p>
                        <p className='flex items-center gap-2 text-black bg-white px-3 py-2 rounded-lg font-semibold cursor-pointer'><MdAddCall /><a href="tel:+9101294253000 "> Call me now</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer