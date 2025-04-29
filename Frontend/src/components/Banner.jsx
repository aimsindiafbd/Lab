import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { TestPrices } from "../assets/assets.js";
import Slider1 from '../assets/Slider1.jpg';
import Slider2 from '../assets/Slider2.jpg';
import Slider3 from '../assets/Slider3.jpg';
import Slider4 from '../assets/Slider4.jpg';
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTests, setFilteredTests] = useState([]);
  const images = [Slider1, Slider2, Slider3, Slider4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredTests([]);
      return;
    }

    let results = [];
    Object.values(TestPrices).forEach((category) => {
      if (Array.isArray(category)) {
        results = results.concat(
          category.filter((t) =>
            t.name?.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    });
    setFilteredTests(results);
  };

  const handleSelectTest = (id) => {
    setSearchTerm("");
    setFilteredTests([]);
    navigate(`/testDetails/${id}`);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredTests([]);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 border-t border-b text-gray-700 relative">
      {/* Left: Slider */}
      <div className="w-full md:w-[70%] h-64 md:h-96 relative">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover rounded-lg transition duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00AECD] bg-opacity-80 text-white p-2 rounded-full w-10 hover:bg-opacity-70 z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00AECD] bg-opacity-80 text-white p-2 rounded-full w-10 hover:bg-opacity-70 z-10"
        >
          ❯
        </button>
        <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-[#00AECD]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-[30%] sm:px-6 px-0 mt-6 md:mt-0">
        <div className='bg-[#00AECD] shadow-2xl rounded-md px-4 py-14 h-full'>
          <p className='text-white text-center uppercase text-md font-semibold py-2'>Welcome To Asian Labs</p>
          <p className='text-white text-center uppercase text-2xl font-semibold'>Book A Test Online</p>

          <div className='flex mt-10'>
            {/* Search box only */}
            <div className="relative w-full">
              <div className="flex items-center bg-white rounded-full py-2 px-2">
                <input
                  type="text"
                  className="flex-1 px-2 py-1 outline-none bg-transparent text-black"
                  placeholder="Search for tests and packages..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm ? (
                  <MdClose
                    className="text-red-500 cursor-pointer text-3xl p-1"
                    onClick={clearSearch}
                  />
                ) : (
                  <IoMdSearch className="text-3xl text-[#3772FF] p-1 cursor-pointer" />
                )}
              </div>

              {filteredTests.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-1 z-20">
                  {filteredTests.map((t) => (
                    <li
                      key={t.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      onClick={() => handleSelectTest(t.id)}
                    >
                      <span>{t.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <p className='text-white text-center uppercase text-xl font-semibold my-4'>OR</p>
          <Link to='/find-a-test'>
            <p className='border border-white text-white py-2 px-2 rounded-full flex items-center justify-between font-semibold'>
              Choose Popular Tests / Package <IoIosArrowDropright className='bg-white text-[#3772FF] rounded-full text-3xl' />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
