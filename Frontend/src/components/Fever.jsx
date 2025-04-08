import React, { useContext, useRef } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import backgroundImage from '../assets/background.jpg'
import { AppContext } from '../context/AppContent'
import { useNavigate } from 'react-router-dom';

const Fever = () => {
    const navigate = useNavigate()
    const { TestPrices } = useContext(AppContext)
    console.log("Fever", TestPrices.Fever);
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
    return (
        <div className='my-6 rounded-xl py-6 px-4 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <h1 className='text-3xl text-white font-medium mb-4 sm:mb-0'>Fever: Dengue, Chikungunya, Malaria</h1>

                <p onClick={()=>navigate('/fevertest')}
                    className="hidden sm:block cursor-pointer bg-white/10 py-2 text-lg sm:text-2xl px-6 sm:px-10 text-white font-medium rounded hover:bg-[#008BA6] transition-all">View All</p>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-4">
                <button
                    onClick={scrollLeft}
                    className="hidden sm:flex bg-white/10 shadow-lg text-white text-3xl sm:text-4xl rounded-lg p-2"
                >
                    <GrFormPrevious />
                </button>
                <button
                    onClick={scrollRight}
                    className="hidden sm:flex bg-white/10 shadow-lg text-white text-3xl sm:text-4xl rounded-lg p-2"
                >
                    <MdOutlineNavigateNext />
                </button>
            </div>
            <div className='flex justify-center items-center my-10'>
                <div ref={sliderRef} className="flex gap-4 overflow-x-auto scrollbar-hide w-full px-2 sm:px-0" style={{ scrollBehavior: 'smooth' }}>
                    {TestPrices.Fever.slice(0, 5).map((item) => (
                        <div onClick={() => navigate(`/testDetails/${item.id}`)} className="min-w-[280px] sm:min-w-[350px] p-4 rounded-lg bg-white/15 shadow-lg flex-shrink-0 cursor-pointer transition-transform hover:scale-105" key={item.id}>
                            <p className='text-white text-2xl py-4'>{item.name}</p>
                            <p className="text-lg text-white">{item.Package}</p>
                            <p className='text-white font-medium text-2xl flex justify-end'>₹{item.Price}</p>
                            <p onClick={()=>navigate('/fevertest')} className='my-3 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white duration-500 transition-all hover:text-black cursor-pointer'>
                                View Details
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <p
                className="sm:hidden text-center cursor-pointer bg-[#00AECD] py-2 text-lg sm:text-2xl px-6 sm:px-10 text-white font-medium rounded hover:bg-[#008BA6] transition-all">View All</p>
        </div>
    )
}

export default Fever