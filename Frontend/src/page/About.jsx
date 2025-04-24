import React from 'react'
import AboutBg from '../assets/aboutus-bg.png'
import About01 from '../assets/about01.jpg'
import About02 from '../assets/about02.jpg'
import About03 from '../assets/about03.jpg'
import labImage from '../assets/labImage.jpg'
const About = () => {
    return (
        <div>
            {/* Banner */}
            <div className="w-full h-[300px] flex items-center justify-center rounded-xl bg-cover bg-center relative"
                style={{ backgroundImage: `url(${AboutBg})` }}>
                {/* <div className="absolute inset-0 bg-black opacity-60 rounded-xl z-0"></div> */}
                <div className='z-10'>
                    <h1 className='text-white text-6xl font-semibold text-center'>About Us</h1>
                    <p className='text-white text-center text-2xl py-4'>Our passion comes from our commitment to helping you help others.</p>
                </div>
            </div>
            {/* Why chose us */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:px-10 p-4 mb-[-140px]">
                <div>
                    <div className='hidden sm:block relative top-[50px] z-10'>
                        <img className='rounded-full border-4 p-1  bg-white animate-custom-bounce' src={About01} alt="" />
                    </div>
                    <div className='relative sm:top-[-50px] top-[0px]'>
                        <img className='rounded-xl shadow-2xl' src={About02} alt="" />
                    </div>
                    <div className='hidden sm:block relative top-[-200px] left-64'>
                        <img className='rounded-full border-4 p-1  bg-white animate-custom-bounce' src={About03} alt="" />
                    </div>
                </div>
                <div className='sm:mt-20 mt-6'>
                    <p className='text-gray-400 border border-black rounded-full px-2 sm:w-1/4 w-1/2 py-1 my-2'>About Asian - Labs</p>
                    <h1 className='text-4xl my-2'>Why choose our laboratory?</h1>
                    <p className='text-justify my-2 text-lg'> Asian Labs is a trusted and leading diagnostic laboratory in Faridabad, known for its commitment to accuracy and patient care. Our experienced team guides clients through their health concerns with expert insights and reliable support. With a focus on innovation and quality, we deliver authentic and timely results in a clean, professional environment. Whether it's a routine checkup or a specialized test, Asian Labs ensures a smooth and satisfying experience. We are proud to be recommended by our patients and continue to build lasting relationships through excellence in diagnostics. </p>
                </div>
            </div>
            {/* How to maintain Our Lab */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:px-10 p-4">
                <div>
                    <p className='text-gray-400 border border-black rounded-full px-2 sm:w-1/2 text-center py-1 my-2'>Learn How We maintain our Lab</p>
                    <h3 className='text-4xl'>Asian Labs Provides the best laboratory experience</h3>
                </div>
                <div>
                    <p className='text-justify mt-14 text-lg'>Aisan lab is the best diagnostic lab in the Faridabad. The reasons to be best in what we do is the process of maintain the laboratory with international standards. Safety & security measures are highly maintained.</p>
                    <img src={labImage} alt="" className='w-full  my-4 rounded-2xl shadow-2xl'/>
                </div>
            </div>
        </div>
    )
}

export default About