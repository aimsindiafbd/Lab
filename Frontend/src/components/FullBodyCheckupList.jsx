import React, { useContext, useRef } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContent";

const FullBodyCheckupList = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { TestPrices } = useContext(AppContext)
  console.log(TestPrices.FullBody);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="my-6 rounded-xl py-6 px-4">
      {/* Heading & View All Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl text-black font-medium mb-4 sm:mb-0">
        Asian Basic Health Package
        </h1>
        <p onClick={()=>navigate('/fullbodyCheckup')}

          className="hidden sm:block cursor-pointer bg-white border border-[#00AECD] py-2 text-lg sm:text-2xl px-6 sm:px-10 text-[#00AECD] font-medium rounded hover:bg-[#008BA6] transition-all hover:text-white"
        >
          View All
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center sm:justify-start gap-4 mt-4">
        <button
          onClick={scrollLeft}
          className="hidden sm:flex bg-white shadow-lg text-black text-3xl sm:text-4xl rounded-lg p-2"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={scrollRight}
          className="hidden sm:flex bg-white shadow-lg text-black text-3xl sm:text-4xl rounded-lg p-2"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>

      {/* Slider Section */}
      <div className="flex justify-center items-center my-10">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide w-full px-2 sm:px-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {TestPrices.HealthPackage.map((item, index) => (
            <div onClick={() => navigate(`/testDetails/${item.id}`)} key={index} className='min-w-[250px] w-full sm:w-72 md:w-80 lg:w-[350px] p-4 rounded-lg bg-slate-100 shadow-lg flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 snap-start'>
              <p className="text-black text-lg sm:text-xl">{item.name}</p>
              <p className="text-lg text-gray-600">{item.Package}</p>
              <p className="text-black font-medium text-xl sm:text-2xl flex justify-end">₹ {item.Price}</p>
              <p onClick={() => navigate(`/testDetails/${item.id}`)} className="mt-4 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white transition-all hover:text-black cursor-pointer"
              >
                View Details
              </p>
            </div>
          ))}
        </div>
      </div>
      <p
        onClick={() => navigate("/fullbodycheckhealthprice")}
        className="sm:hidden cursor-pointer text-center bg-[#00AECD] py-2 text-lg sm:text-2xl px-6 sm:px-10 text-white font-medium rounded hover:bg-[#008BA6] transition-all"
      >
        View All
      </p>
    </div>
  );
};

export default FullBodyCheckupList;
