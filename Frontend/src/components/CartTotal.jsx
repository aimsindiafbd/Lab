import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContent'

const CartTotal = () => {
    const { getCartAmount } = useContext(AppContext)
    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <h1>Cart Total</h1>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>₹ {getCartAmount()}</p>
                </div>
                <div className='flex justify-between'>
                    <b>Total</b>
                    <p>₹ {getCartAmount()}</p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal