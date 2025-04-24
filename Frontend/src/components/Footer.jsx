import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/Asian_logo.png'
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import FooterBackImage from "../assets/HeroBanner.jpg";
import callImage from '../assets/Call_icon.png'
import { CiShoppingCart } from "react-icons/ci";
import { AppContext } from '../context/AppContent';
const Footer = () => {
    const navigate = useNavigate();
    const { getCartCount, token } = useContext(AppContext)
    return (
        <>
            <hr className='bg-[#00AECD] ' />
            <div className="w-full h-full md:h-[400px] px-10 lg:h-[400px] flex items-center justify-center bg-cover bg-center relative sm:0px"
                style={{ backgroundImage: `url(${FooterBackImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50  z-0"></div>
                <div className='grid md:grid md:grid-cols-2 lg:grid-cols-4 my-10 z-10'>
                    {/* Asian Lab Image with contennt */}
                    <div>
                        <NavLink to='/'>
                            <div className='flex items-end gap-4'>
                                <img src={logo} className="w-[120px] sm:w-[100px]" alt="" />
                            </div>
                        </NavLink>
                        <p className='py-6 text-justify text-white'>Laboratories used for scientific research take many forms because of the differing. We provide complete process piping capabilities.</p>
                        <div className='flex items-center gap-6'>
                            <FaInstagram className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg transition-all cursor-pointer' />
                            <FaFacebookSquare className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg  transition-all cursor-pointer' />
                        </div>
                        <p className='my-4 text-white'>© 2025 Asian Lab. All rights reserved</p>
                    </div>

                    {/* Service List */}
                    <div className='sm:px-8 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-8 h-0.5'></p>
                            <h1 className='px-10 text-2xl text-white'>Service</h1>
                            <p className='bg-white w-8 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <NavLink to='/fullbodycheckhealthprice' className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-white'>
                                <IoIosArrowDropright />Full Body Health Checks
                            </NavLink>
                            <NavLink to='/fevertest' className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Fever: Dengue, Chikungunya, Malaria
                            </NavLink>
                            <NavLink to='/hivtest' className='text-white flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />HIV Test
                            </NavLink>
                            <NavLink className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Women Test
                            </NavLink>
                            <NavLink to='/thyroidtest' className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Thyroid Test
                            </NavLink>
                            <NavLink to='/gastrointestinal' className='text-white flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Gastrointestinal Test
                            </NavLink>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className='sm:px-8 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-4 h-0.5'></p>
                            <h1 className='px-10 text-2xl text-white'>Useful Links</h1>
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <NavLink className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />About Us
                            </NavLink>
                            <NavLink className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Test Related Form
                            </NavLink>
                            <NavLink className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Cart
                            </NavLink>
                            <NavLink className='flex text-white items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Contact Us
                            </NavLink>
                        </div>
                    </div>

                    {/* Address, Phone No, Email */}
                    <div className='sm:px-8 py-5 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1 mt-[-18px]'>
                            <p className='bg-white w-4 h-0.5'></p>
                            <h1 className='px-10 text-2xl text-white'>Address</h1>
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-white'>
                                <LuPhoneCall className='text-4xl py-2' /><a href="tel:+9101294253000" className='text-white'>0129 - 4253000 </a>
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-white'>
                                <CiLocationOn className='text-6xl py-2' />Badkal Flyover, Road, Sector 21A, Faridabad, Haryana 121001
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-white'>
                                <MdAlternateEmail className='text-4xl py-2' /><a href="mailto:info@aimsindia.com">info@aimsindia.com</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Call to action */}
            <div>
                <a href="tel:+9101294253000">
                    <img src={callImage} className='w-full max-w-[60px] bg-[#00AECD] rounded-full py-2 fixed bottom-20 right-0 cursor-pointer z-10' alt="" />
                </a>
            </div>


            {/*Cart Details  */}
            {getCartCount() > 0 && (
                <div className="bg-[#00AECD] flex items-center justify-around py-2 fixed bottom-0 w-full z-10">
                    <p className="text-white font-medium uppercase">
                        Test in your cart: {getCartCount()}
                    </p>
                    <p
                        onClick={() => {
                            const token = localStorage.getItem('token'); // Check for the token in localStorage
                            if (token) {
                                navigate('/cart'); // Redirect to cart if token is present
                            } else {
                                navigate('/register'); // Redirect to register if token is not present
                            }
                        }}
                        className="cursor-pointer flex items-center gap-2 bg-white p-2 rounded-full"
                    >
                        Place to Order
                        <CiShoppingCart className="bg-[#00AECD] text-3xl p-1 rounded-full" />
                    </p>
                </div>
            )}


        </>
    )
}

export default Footer