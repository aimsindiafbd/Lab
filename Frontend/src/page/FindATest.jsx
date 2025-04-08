import React from 'react'
import FeverTest from '../assets/fevertest.png'
import Thyroidtest from '../assets/Thyroidtest.png'
import Gastrointestinal from '../assets/Gastrointestinal.png'
import WomenHealthTest from '../assets/WomenHealthTest.png'
import Tuberculosis from '../assets/Tuberculosis.png'
import Allergy from '../assets/Allergy.png'
import STDTest from '../assets/stdTest.png'
import Diabetes from '../assets/Diabetes.png'
import Lung from '../assets/Lung.png'
import Cancer from '../assets/Cancer.png'
import Iron from '../assets/Iron.png'
import Hormone from '../assets/Hormone.png'

import Fullbody from '../assets/Fullbody.png'
import HIV from '../assets/HIV.png'
import Infertility from '../assets/Infertility.png'
import Vitamin from '../assets/Vitamin.png'
import Cardiology from '../assets/Cardiology.png'
import Gastro from '../assets/Gastro.png'
import Immunity from '../assets/Immunity.png'

// Women Care
import WomenTest from '../assets/WomenTest.png'
import AnemiaColor from '../assets/AnemiaColor.png'
import FemaleCancer from '../assets/FemaleCancer.png'
import Pregnancy from '../assets/Pregnancy.png'
import infertilitycolor from '../assets/infertilitycolor.png'
import hormonescolor from '../assets/hormonescolor.png'
import IronTest from '../assets/IronTest.png'
import { NavLink } from 'react-router-dom'
const FindATest = () => {
  return (
    <div className='my-10 px-2'>
    <h1 className='text-2xl text-center'>Popular Health Check-up Categories</h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10 p-4 my-10'>
        <NavLink to='/category/fever-test'>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={FeverTest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Fever Test</p>
        </div>
        </NavLink>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Thyroidtest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Thyroid Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Gastrointestinal} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Gastrointestinal</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={WomenHealthTest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Women Health Test</p>
        </div>
        
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Tuberculosis} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Tuberculosis Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Allergy} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Allergy Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={STDTest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>STD Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Diabetes} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Diabetes Test</p>
        </div>
        
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Lung} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Lung Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Cancer} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Cancer Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Iron} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Iron Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Hormone} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Hormone Test</p>
        </div>

        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Fullbody} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Full Body Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={HIV} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>HIV Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Infertility} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Infertility Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Vitamin} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Vitamin Test</p>
        </div>
        
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Cardiology} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Cardiology Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Gastro} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Gastro Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Immunity} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Immunity Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={WomenTest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Women Test</p>
        </div>

        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={AnemiaColor} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Anemia Color Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={FemaleCancer} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Female Cancer Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={Pregnancy} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Pregnancy Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={infertilitycolor} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Infertility Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={hormonescolor} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Hormones Color Test</p>
        </div>
        <div className='flex justify-between items-center p-4 border rounded shadow'>
            <img src={IronTest} className='w-11 rounded-xl' alt="" />
            <p className='text-black font-medium text-xl'>Iron Test</p>
        </div>
    </div>
</div>
  )
}

export default FindATest