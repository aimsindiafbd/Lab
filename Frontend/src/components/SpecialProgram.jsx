import React, { useContext } from 'react'
import { AppContext } from '../context/AppContent'
import { Link } from 'react-router-dom'

const SpecialProgram = () => {
  const {TestPrices} = useContext(AppContext)
  console.log(TestPrices.SpecialProgram)
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center'>Special Program</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10 p-4 my-10'>
        {TestPrices?.SpecialProgram?.map((item)=>(
          <div key={item.index} className='shadow-lg rounded border border-[#00AECD]'>
            <center>
            <img src={item.image} className='w-36 my-2' alt="" />
            <Link to={item.link} className='bg-[#00AECD] text-white px-8 py-1 text-center capitalize text-lg'>{item.Categories}</Link>
            </center>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialProgram