import React from 'react';
import HeroBanner from "../assets/HeroBanner.jpg";

const Banner = () => {
  return (
    <div 
      className="w-full h-[400px] md:h-[500px] lg:h-[500px] flex items-center justify-center rounded-xl bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="text-white text-center p-6 rounded-lg">
        <h1 className="text-xl md:text-lg font-bold">Welcome to Our</h1>
        <h1 className='text-4xl sm:text-8xl uppercase font-extrabold font-serif'> Asian Lab</h1>
        <p className="text-lg md:text-xl mt-2">Get accurate and affordable health checkups</p>
        <button className="mt-4 border-2 border-white  px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0089a6] transition duration-300 hover:border-[#0089a6]">
          Book Your Test Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
