import React, { useContext, useRef } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AppContext } from '../context/AppContent'
import { Navigate, useNavigate } from 'react-router-dom';

const HIV = () => {
    const { TestPrices } = useContext(AppContext)
    console.log("HIV Test", TestPrices.HIV);
    const navigate = useNavigate()
    const sliderRef = useRef(null);
    const truncateTitle = (title, wordLimit) => {
        const words = title.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : title;
    };

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return (
        <div className='bg-white my-6 rounded-xl py-6 px-4'>
            {/* Heading & View All */}
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <h1 className='text-2xl md:text-3xl text-black font-medium'>HIV Test</h1>
                <p onClick={()=>navigate('/hivtest')} className='hidden sm:block cursor-pointer bg-[#00AECD] py-2 text-lg sm:text-2xl px-6 sm:px-10 text-white font-medium rounded hover:bg-[#008BA6] transition-all'
                >
                    View All
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className='flex gap-4 mt-4 justify-center sm:justify-start'>
                <button onClick={scrollLeft} className='hidden sm:block text-black shadow-lg text-4xl rounded-lg p-2'>
                    <GrFormPrevious />
                </button>
                <button onClick={scrollRight} className='hidden sm:block text-black shadow-lg text-4xl rounded-lg p-2'>
                    <MdOutlineNavigateNext />
                </button>
            </div>

            {/* Test List */}
            <div className='flex justify-center my-10'>
                <div
                    ref={sliderRef}
                    className='flex overflow-x-auto scrollbar-hide gap-4 snap-x snap-mandatory w-full'
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {TestPrices.HIV.slice(0, 6).map((item) => (
                        <div onClick={() => navigate(`/testDetails/${item.id}`)} className='min-w-[250px] w-full sm:w-72 md:w-80 lg:w-[350px] p-4 rounded-lg bg-slate-100 shadow-lg flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 snap-start'
                            key={item.id}
                        >
                            <p className='text-black text-lg md:text-xl py-2'>{truncateTitle(item.name, 3)}</p>
                            <p className='text-black font-medium text-lg md:text-2xl flex justify-end'>₹ {item.Price}</p>
                            <p onClick={()=>navigate('/hivtest')} className='my-3 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white transition-all duration-500 hover:text-black cursor-pointer'
                            >
                                View Detalis
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-center sm:hidden cursor-pointer bg-[#00AECD] py-2 px-6 text-white font-medium rounded mt-3 sm:mt-0'
            >
                View All
            </p>
        </div>
    )
}

export default HIV