import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });

      console.log("API Response:", response.data);
      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.data.message)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: e.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])
  return (
    <div>
      <h3 className='text-center py-6 text-2xl'>Order Page</h3>
      {orders.map((order, index) => (
        <div key={index} className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[3fr_2fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-4 text-xs sm:text-sm text-gray-700'>
          <div>
            {order.items.map((item, index) => {
              if (index === order.items.length - 1) {
                return <p key={index} className='py-0.5 font-bold text-black text-base'>{item.name}</p>
              }
            })}
            <p className='text-base text-gray-800'><b>Price:</b> ₹{order.amount}</p>
          </div>
          <div>
            <p className='text-base text-gray-800'>{order.address.firstName + " " + order.address.lastName}</p>
            <p className='text-base text-gray-800'>{order.address.phone}</p>
            <p className='text-base text-gray-800'>{order.address.country + ", " + order.address.state + ", " + order.address.city}</p>
            <p className='text-base text-gray-800'>{order.address.zipcode}</p>
          </div>
          <div>
            <p className='text-base text-gray-800'><b>Method: </b> {order.paymentMethod}</p>
            <p className='text-base text-gray-800'><b>Payment: </b> {order.payment ? 'Done' : 'Pending'}</p>
            <p className='text-base text-gray-800'><b>Date: </b>{new Date(order.date).toLocaleDateString()}</p>
          </div>
          <select onChange={(e) => statusHandler(e, order._id)} value={order.status} className='border border-gray-700 p-2 rounded-lg'>
            <option value="Order Placed">Order Placed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      ))}

    </div>
  )
}

export default Orders