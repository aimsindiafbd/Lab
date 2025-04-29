import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import Banner from '../assets/allergy-banner1.webp'
import Incessant from '../assets/Incessant-sneezing.webp'
import Runny from '../assets/Runny-stuffy-nose.webp'
import Tingling from '../assets/Tingling-in-mouth.webp'
import Hives from '../assets/Hives-all-over-body.webp'
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Allergy = () => {
    const { TestPrices, cartItem, addToCart, updateQuantity } = useContext(AppContext);
    // console.log("Allergy", TestPrices.Allergy);
    const navigate = useNavigate()

    return (
        <div>
            <img
                src={Banner}
                className="w-full h-auto object-cover"
                alt="Banner"
            />
            <h1 className="text-3xl text-center my-10">Test for Allergy Disease</h1>
            <div className='px-10'>
                <div className='text-justify'>
                    <p className='text-2xl my-2 font-semibold'>What is an Allergy</p>
                    <p className='text-md font-normal'>Allergy, also called hypersensitivity, is an overdrawn response of our immune system to some foreign substances often termed as allergens. Examples may include pollens, furry animals’ dander, dust, medicines or some kind of foods, etc. Some common symptoms of allergy are:</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:px-10 p-4 my-10">
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Incessant} alt="" />
                                <p>Incessant sneezing</p>
                            </center>
                        </div>
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Runny} alt="" />
                                <p>Runny, stuffy nose</p>
                            </center>
                        </div>
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Tingling} alt="" />
                                <p>Tingling in the mouth</p>
                            </center>
                        </div>
                        <div className='shadow-xl p-2 rounded'>
                            <center>
                                <img src={Hives} alt="" />
                                <p>Hives all over the body</p>
                            </center>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <h1 className='font-semibold text-2xl my-4'>Allergy Tests / Health Packages</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 p-4 my-10'>
                    {TestPrices.Allergy.map((item, index) => {
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

export default Allergy