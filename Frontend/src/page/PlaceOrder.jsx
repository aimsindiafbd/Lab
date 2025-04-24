import React, { useContext, useState, useEffect } from 'react';
import CartTotal from '../components/CartTotal';
import { AppContext } from '../context/AppContent';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const { navigate, cartItem, setCartItem, TestPrices, getCartAmount, backendUrl, token } = useContext(AppContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        address: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    // Retrieve cart data from localStorage if empty
    useEffect(() => {
        if (!Object.keys(cartItem).length) {
            const storedCart = localStorage.getItem("cartItem");
            if (storedCart) {
                setCartItem(JSON.parse(storedCart));
            }
        }
    }, []);

    // useEffect(() => {
    //     // console.log("Cart Item on PlaceOrder Page:", cartItem);
    // }, [cartItem]);

    const onChangeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
                try {
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
                    if (data.success) {
                        setCartItem({})
                        navigate('/orders')
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("Form Submitted!");

        try {
            let orderItem = [];

            for (const testId in cartItem) {
                for (const itemName in cartItem[testId]) {
                    if (cartItem[testId][itemName] > 0) {
                        const itemInfo =
                            TestPrices.HealthPackage.find(test => test.id === testId) ||
                            TestPrices.GoodHealthPackage.find(test => test.id === testId) ||
                            TestPrices.HealthPackageMale.find(test => test.id === testId) ||
                            TestPrices.CardiacRiskDetection.find(test => test.id === testId);

                        if (itemInfo) {
                            orderItem.push({
                                id: testId,
                                name: itemName,
                                quantity: cartItem[testId][itemName],
                                price: itemInfo.Price,
                            });
                        }
                    }
                }
            }

            console.log("Order Items:", orderItem);
            let orderData = {
                address: formData,
                items: orderItem,
                amount: getCartAmount()
            }

            const response = await axios.post(backendUrl + '/api/order/place-order', orderData, { headers: { token } });
            // console.log("Server Response:", response.data); // ✅ Log response
            initPay(response.data.order)

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='px-10 flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Left side */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <h1 className='text-xl sm:text-2xl my-3'>User Information</h1>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
                <input required onChange={onChangeHandler} name='address' value={formData.address} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
            </div>

            {/* Right side */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <h1>Payment Method</h1>
                    <div className='w-full text-center'>
                        <div className='bg-[#01ABCE] rounded-md border p-2 px-3 cursor-pointer'>
                            <button type='submit' className='text-center text-white'>Online Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
