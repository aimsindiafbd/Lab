import React from "react";
import { LuMicroscope } from "react-icons/lu";
import { TbReportMedical } from "react-icons/tb";
import service_1 from '../assets/service_1.jpg'
import service_3 from '../assets/service_3.jpg'
const Services = () => {
  return (
    <div className=" p-3 rounded-xl">
      <h1 className="text-center text-5xl mt-3 font-medium font-serif text-black">Services</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 my-10 gap-2 mx-auto">

        {/* Book A Lab Test */}
        <div
          className="relative rounded-xl p-6 hover:translate-y-[-10px] duration-700 transition-all border bg-cover overflow-hidden"
          style={{ backgroundImage: `url(${service_1})` }}
        >
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#00AECD] opacity-60"></div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="flex justify-start text-white">
              <LuMicroscope className="text-7xl border border-white text-white  rounded-lg p-3" />
            </div>
            <h1 className="mt-2 text-white font-medium text-xl py-2">Book A Lab Test</h1>
            <p className="text-white text-normal font-normal text-justify py-2">
              Our clinical pathologists are available seven days a week to render diagnoses.
            </p>
            <p className="mt-6 border rounded-full py-2 px-3 cursor-pointer font-semibold border-white bg-white w-1/2 text-center">
              View More
            </p>
          </div>
        </div>

        {/* Download Report */}
        <div
          className="relative rounded-xl p-6 hover:translate-y-[-10px] duration-700 transition-all bg-[#00AECD] overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${service_3})` }}
          ></div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="flex justify-start">
              <TbReportMedical className="text-7xl border border-white text-white rounded-lg p-3" />
            </div>
            <h1 className="mt-2 text-white font-medium text-xl py-2">Download Report</h1>
            <p className="text-white text-normal font-normal text-justify py-2">
              Our clinical pathologists are available seven days a week to
              render diagnoses.
            </p>
            <p className="mt-6 border bg-white rounded-full py-2 px-3 cursor-pointer font-semibold border-slate-100 w-1/2 text-center">
              View More
            </p>
          </div>
        </div>


      
      </div>
    </div>
  );
};

export default Services;
