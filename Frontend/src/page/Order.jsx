import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContent";
import axios from "axios";

const MyOrder = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [orderData, setOrderData] = useState([]);
  const hasFetchedRef = useRef(false); // 👈 to avoid double-fetching

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      console.log("API Response:", response.data); // Debugging

      if (response.data?.success && response.data.orders) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order?.items?.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse()); // ✅ Store fetched orders
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (!hasFetchedRef.current && token) {
      loadOrderData();
      hasFetchedRef.current = true; // ✅ prevent duplicate fetch
    }
  }, [token]);

  return (
    <div className="border-t pt-10 px-10 mb-10">
      <div className="text-2xl mb-10">
        <h1>My Orders</h1>
      </div>
      <div>
        {orderData.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex justify-between gap-6 text-sm">
                <div className="flex items-center justify-between gap-3 mt-2 text-base text-gray-800">
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{item.paymentMethod}</p>
                </div>
              </div>
              <p className="mt-2">
                Date:{" "}
                <span className="text-gray-400">
                  {new Date(item.date).toDateString()}
                </span>
              </p>
              <button className="border px-4 py-2 text-sm font-medium">
                {item.status}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrder;
