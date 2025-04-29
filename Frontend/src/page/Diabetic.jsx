import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import Banner from '../assets/diabetes-care-banner.webp'
import Patients from '../assets/Patients-Enrolled.webp'
import Test from '../assets/Test-Parameters-Covered.webp'
import Hours from '../assets/Hours-of-experience.webp'
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Diabetic = () => {
    const { TestPrices, cartItem, addToCart, updateQuantity } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div>
            <img
                src={Banner}
                className="w-full h-auto object-cover"
                alt="Banner"
            />
            <h1 className="text-3xl text-center my-10">Diabetes Care Program</h1>
            <div className='px-10'>
                <div className='text-justify'>
                    <p className='text-2xl my-2 font-semibold'>Swasthfit Full Body Packages</p>
                    <p className='text-md font-normal'>Diabetes Care Program specially designed for people with diabetes keeping in view the need of different category of people. Diabetes Mellitus is a silent, progressive disorder which can damage too many vital organs of your body viz. heart, feet, eyes, blood vessels, kidneys etc., if not controlled and managed well in time.

                        This is one condition which needs continuous monitoring, management and behavioral changes. Every person with Diabetes Mellitus is unique, having different needs, complications and restraints and hence requiring personalized care and support.

                        Realizing this, we at LPL, have put together some important diabetic packages in consultation with our experts to help our patients effectively manage Diabetics. Please remember to get yourself tested at Prescribed Intervals to continue control your diabetic level</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10 p-4 my-10">
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Patients} className='w-20' alt="" />
                                <p>90,000+</p>
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
                                <img src={Hours} className='w-20' alt="" />
                                <p>50,000+</p>
                                <p>Hours of experience in Consultation</p>
                            </center>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <h1 className='font-semibold text-2xl my-10'>Diabetes Care Program Tests / Health Packages
                </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 p-4 my-10'>
                    {TestPrices.Diabetic.map((item, index) => {
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

export default Diabetic