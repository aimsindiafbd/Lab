import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import Banner from '../assets/allergy-banner1.webp'
import trimester from '../assets/trimester-desk-img.webp'
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Pregancy = () => {
    const { TestPrices, cartItem, addToCart, updateQuantity } = useContext(AppContext);
    // console.log("Allergy", TestPrices.Pregnancy);
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
                    <p className='text-2xl my-2 font-semibold'>Motherhood Journey</p>
                    <p className='text-md font-normal'>Life’s biggest miracle is the gift of having a life growing inside you. Expecting a baby is just the beginning. Pregnancy is a time unlike any other in your life. It’s important to see your healthcare provider regularly to ensure the best outcome. A normal, full-term pregnancy is 40 weeks and can range from 37 to 42 weeks. It’s divided into three trimesters. Each trimester lasts between 12 and 14 weeks or about 3 months.</p>
                    <div className='p-2 rounded my-4'>
                        <center>
                            <img src={trimester} alt="" />
                        </center>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <h1 className='font-semibold text-2xl my-10'>Pregnancy Tests / Health Packages</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 p-4 my-10'>
                    {TestPrices.Pregnancy.map((item, index) => {
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

export default Pregancy