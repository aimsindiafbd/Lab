import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
const WomenCare = () => {
    const { TestPrices } = useContext(AppContext)
    return (
        <div className='bg-white my-6 rounded-xl px-4 py-6'>
            <div className='flex justify-between'>
                <h1 className='text-3xl text-black font-medium'>Women Care</h1>

                <p className='bg-[#00AECD] py-2 text-2xl px-10 text-white font-medium rounded'>View All</p>
            </div>

            <div className='flex justify-between items-center my-10'>
                <div className="flex-col md:grid md:grid-cols-3 lg:grid-cols-7 gap-4 items-center overflow-x-auto scrollbar-hide snap-x snap-mandatory p-4 my-4">
                    {TestPrices.WomenCare.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-100 shadow-xl my-5 rounded-xl p-4 w-60 md:w-full aspect-[4/3] flex flex-col items-center justify-center snap-center"
                        >
                            <center>
                                <div to={item.link} className="w-full flex flex-col items-center my-5">
                                    <img src={item.image} className="w-1/2 max-w-xs object-cover" alt={item.Test} />
                                    <p className="text-center text-sm md:text-base font-semibold mt-2">{item.Test}</p>
                                </div>
                            </center>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WomenCare