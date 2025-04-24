import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { AppContext } from '../context/AppContent'
import { CiShoppingCart } from "react-icons/ci";
import menu_icon from '../assets/menu_icon.png'
import { MdClose } from "react-icons/md";
import { TestPrices } from "../assets/assets.js";
import { IoMdSearch } from "react-icons/io";
import { toast } from 'react-toastify';

const Navbar = () => {
  const { getCartCount, navigate, token, setToken, setCartItem } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTests, setFilteredTests] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visible, setVisible] = useState(false); // mobile menu toggle

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredTests([]);
      return;
    }

    let results = [];
    if (selectedCategory === "All") {
      Object.values(TestPrices).forEach((category) => {
        if (Array.isArray(category)) {
          results = results.concat(
            category.filter((t) =>
              t.name?.toLowerCase().includes(value.toLowerCase())
            )
          );
        }
      });
    } else {
      results = (TestPrices[selectedCategory] || []).filter((t) =>
        t.name?.toLowerCase().includes(value.toLowerCase())
      );
    }
    setFilteredTests(results);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSearchTerm("");
    setFilteredTests([]);
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

  const logout = () => {
    setToken(null);
    setCartItem([]);
    navigate('/');
    toast.success("User logged out successfully!");
  };

  return (
    <div className='bg-[#00AECD] relative py-1 px-4 font-sm z-50'>
      {/* Top row for mobile: hamburger, search, cart, user */}
      <div className='flex items-center justify-between sm:hidden mb-3'>
        <img onClick={() => setVisible(!visible)} src={menu_icon} className='w-5 cursor-pointer' alt="menu" />

        <div className="flex items-center gap-3">
          <FaRegUser onClick={() => token ? null : navigate('/register')} className='w-4 h-4 text-white' />
          <Link to='/cart' className='relative'>
            <CiShoppingCart className='w-7 h-7 text-white' />
            <p className="absolute -right-1 -top-1 text-center px-1 leading-4 bg-black text-white rounded-full text-[10px]">{getCartCount()}</p>
          </Link>
        </div>
      </div>

      {/* Search bar - visible on all screens */}
      <div className="relative w-full mb-3 sm:mb-0  sm:hidden">
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

      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center justify-between'>
        <ul className='flex gap-5 text-sm text-white'>
          <NavLink to='/find-a-test' className='text-md uppercase font-medium'>
          Book A Test
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden mx-4' />
          </NavLink>
          <NavLink to='/fullbodycheckhealthprice' className='text-md uppercase font-medium'>
          Full Body Checkup
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden mx-4' />
          </NavLink>
          <NavLink to='/about' className='text-md uppercase font-medium'>
          About Us
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden mx-4' />
          </NavLink>
          <NavLink to='/contact' className='text-md uppercase font-medium'>
          Contact Us
          <hr className='w-2/4 border-none h-[1.5px] bg-white hidden mx-4' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <div className='border border-white rounded py-1 px-2'>
            <select className='bg-transparent text-white outline-none'>
              <option className='text-black'>Delhi</option>
              <option className='text-black'>Faridabad</option>
              <option className='text-black'>Gurgaon</option>
            </select>
          </div>

          <div className='group relative'>
            <div className='flex items-center cursor-pointer gap-2'>
              <FaRegUser onClick={() => token ? null : navigate('/register')} className='text-white w-4 h-4' />
              {/* <p onClick={() => token ? null : navigate('/register')} className='text-white text-sm'>Welcome to Guest User</p> */}
            </div>
            {token && (
              <div className='group-hover:block hidden absolute right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-400 rounded'>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
            )}
          </div>

          <Link to='/cart' className='relative'>
            <CiShoppingCart className='w-8 h-8 text-white' />
            <p className="absolute -right-1 -top-1 text-center px-1.5 leading-4 bg-black text-white rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - shown when visible */}
      {visible && (
        <div className='sm:hidden mt-3 bg-white rounded p-4 text-black space-y-3'>
          <NavLink to='/find-a-test' onClick={() => setVisible(false)}>Book A Test</NavLink><br />
          <NavLink to='/fullbodycheckhealthprice' onClick={() => setVisible(false)}>Full Body Checkup</NavLink><br />
          <NavLink to='/about' onClick={() => setVisible(false)}>About Us</NavLink><br />
          <NavLink to='/contact' onClick={() => setVisible(false)}>Contact Us</NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar;
