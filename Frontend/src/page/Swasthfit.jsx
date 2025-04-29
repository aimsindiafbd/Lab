import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import Banner from '../assets/swasthaFit-bann.webp'
import Patients from '../assets/Patients-Enrolled.webp'
import Test from '../assets/Test-Parameters-Covered.webp'
import Cities from '../assets/Cities-Present.webp'
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Swasthfit = () => {
    const { TestPrices, cartItem, addToCart, updateQuantity } = useContext(AppContext);
    // console.log("Allergy", TestPrices.Swasthfit);
    const navigate = useNavigate();

    return (
        <div>
            <img
                src={Banner}
                className="w-full h-auto object-cover"
                alt="Banner"
            />
            <h1 className="text-3xl text-center my-10">Pregnancy Tests / Health Packages</h1>
            <div className='px-10'>
                <div className='text-justify'>
                    <p className='text-2xl my-2 font-semibold'>Swasthfit Full Body Packages</p>
                    <p className='text-md font-normal'>A regular assessment of the workings of your body and its organs will help you detect any anomaly in the right time, giving you enough window of time to secure the right treatment and lead a healthy life. Whether it is on the advice of a medical professional or your own discipline, which compels you to monitor your health parameters, these SWASTHFIT packages for full body checkups offer a variety of options at affordable rates to choose from.</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10 p-4 my-10">
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Patients} className='w-20' alt="" />
                                <p>150,000+</p>
                                <p>Patients Enrolled Every Month testing</p>
                            </center>
                        </div>
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Test} className='w-20' alt="" />
                                <p>50+</p>
                                <p>Test Parameters Covered</p>
                            </center>
                        </div>
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Cities} className='w-20' alt="" />
                                <p>2,000+</p>
                                <p>Cities Present</p>
                            </center>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <h1 className='font-semibold text-2xl my-10'>Swasthfit Full Body Tests / Packages</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 p-4 my-10'>
                    {TestPrices.Swasthfit.map((item, index) => {
                        const isTestInCart = cartItem[item.id] && cartItem[item.id][item.name] > 0;

                        const handleCartAction = () => {
                            if (isTestInCart) {
                                updateQuantity(item.id, item.name, 0); // Remove from cart
                            } else {
                                addToCart(item.id, item.name); // Add to cart
                            }
                        };
                        return (
                            <div key={index}>
                                <div className='text-left shadow-xl px-4 py-4 rounded border border-[#00AECD]'>
                                    <p className='bg-[#00AECD] py-2 px-3 text-white rounded-sm'>{item.name}</p>
                                    <p className='font-light px-3'>{item.SpecialInstruction}</p>
                                    <p className='font-light px-3'>{item.SampleReport}</p>
                                    <p className='font-light px-3'>{item.Parameter}</p>
                                    <p className='font-light px-3'>₹ {item.Price}</p>
                                    <div className='flex justify-between my-2'>
                                        <p
                                            onClick={handleCartAction}
                                            className={`px-4 py-2 rounded font-semibold cursor-pointer text-white ${isTestInCart ? 'bg-red-500' : 'bg-[#00AECD]'
                                                }`}
                                        >
                                            {isTestInCart ? 'Remove' : 'Book Now'}
                                        </p>
                                        <p onClick={() => navigate(`/testDetails/${item.id}`)} className='cursor-pointer'>View Details</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Swasthfit