import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'

const Gastrointestinal = () => {
    const {TestPrices} = useContext(AppContext)
  return (
    <div className="my-10 px-2">
    <h1 className="text-2xl text-center">Gastrointestinal Test</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 p-4 my-10">
        {TestPrices.Gastrointestinal.map((item) => {
            return (
                <div key={item.id} className="p-4 border rounded shadow">
                    <p className="text-black font-bold text-xl py-2">{item.name}</p>
                    <p className="text-gray-600">Tests Included: {item.Package}</p>
                    <p className="text-green-600 font-semibold py-2">Price: ₹ {item.Price}</p>
                    <div className="flex items-center justify-between">
                        <p onClick={() => navigate(`/testDetails/${item.id}`)} className="bg-red-500 text-white px-4 py-2 rounded font-semibold cursor-pointer"
                        >
                            Know More
                        </p>
                        <p className="px-4 py-2 rounded font-semibold cursor-pointer text-white bg-[#01ABCE]">
                           Book Now
                        </p>
                    </div>
                </div>
            );
        })}
    </div>
</div>
  )
}

export default Gastrointestinal