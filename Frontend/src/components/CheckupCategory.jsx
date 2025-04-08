import React, { useContext, useRef } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Microscope_4__Rotate__Videvo from '../assets/Microscope_4__Rotate__Videvo.mp4';
import { AppContext } from '../context/AppContent';
import { Link } from 'react-router-dom';

const CheckupCategory = () => {
    const sliderRef = useRef(null);
    const { TestPrices } = useContext(AppContext)

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className='relative bg-[#01ABCE] rounded-xl py-6 px-4 overflow-hidden'>

            {/* Background Video */}
            <video
                src={Microscope_4__Rotate__Videvo}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            ></video>

            {/* Overlay for better readability */}
            <div className="absolute top-0 left-0 w-full h-full"></div>

            {/* Main Content */}
            <div className='relative z-10'>
                {/* Heading Section */}
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl text-white font-medium text-center md:text-left'>
                        Popular Health Checkup Categories
                    </h1>
                    <p className='hidden sm:block cursor-pointer bg-white/25 py-2 text-lg sm:text-xl px-6 md:px-10 text-white font-medium rounded mt-3 md:mt-0 text-center'
                    >
                        View All
                    </p>
                </div>

                {/* Categories List Section */}
                <div>
                    {/* Navigation Buttons */}
                    <div className='flex gap-4 mt-4 justify-end md:justify-start'>
                        <button onClick={scrollLeft} className='bg-white/25 text-white text-3xl sm:text-4xl rounded-lg p-2'>
                            <GrFormPrevious />
                        </button>
                        <button onClick={scrollRight} className='bg-white/25 text-white text-3xl sm:text-4xl rounded-lg p-2'>
                            <MdOutlineNavigateNext />
                        </button>
                    </div>

                    {/* Categories List */}
                    <div className='flex justify-center items-center my-6 md:my-10'>
                        <div
                            ref={sliderRef}
                            className='flex overflow-x-auto gap-4 scrollbar-hide w-full scroll-smooth p-2'
                        >
                            {TestPrices.Categories.map((card, index) => (
                                <Link
                                    to={card.link}
                                    key={index}
                                    className='min-w-[220px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[200px] rounded-lg bg-white flex-shrink-0 hover:translate-y-[-5px] transition-transform duration-500 shadow-md'
                                >
                                    <div className='flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 pt-4'>
                                        <img src={card.image} className='w-20 sm:w-14 rounded-xl p-2' alt={card.Categories} />
                                        <p className='text-black font-medium text-base sm:text-base md:text-base text-center md:text-left'>{card.Categories}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckupCategory;
