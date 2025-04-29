import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import CartTotal from "../components/CartTotal";
import { AppContext } from "../context/AppContent";

const Cart = () => {
  const { TestPrices, cartItem, updateQuantity, navigate, token } = useContext(AppContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            name: item,
          });
        }
      }
    }
    setCartData(tempData);
    console.log("Cart Data:", tempData);
  }, [cartItem]);

  return (
    <div className="border-t pt-14 px-10">
      <div className="text-2xl mb-3">
        <h1>Your Cart</h1>
      </div>

      <div>
        {cartData.map((item, index) => {
          const allTests = [
            ...TestPrices.HealthPackage,
            ...TestPrices.GoodHealthPackage,
            ...TestPrices.HealthPackageMale,
            ...TestPrices.CardiacRiskDetection,
            ...TestPrices.Gastrointestinal,
            ...TestPrices.Allergy,
            ...TestPrices.Pregnancy,
            ...TestPrices.Swasthfit,
            ...TestPrices.Diabetic,
          ]; // ✅ Flatten categories

          const TestData = allTests.find((test) => test.id === item._id); // ✅ Correct lookup

          console.log("Cart Item:", item);
          console.log("All Tests:", allTests);
          console.log("Found TestData:", TestData);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <div>
                  <p className="text-xs sm:text-lg font-medium text-[#00AECD]">{TestData.heading}</p>
                  <p className="text-xs sm:text-lg font-medium">{TestData ? TestData.name : "Unknown Item"}</p> {/* ✅ Now works */}
                  <div className="flex items-center gap-5 mt-2">
                    <p>{TestData.Package}</p>
                    <p>{TestData.Gender}</p>
                    <p>{TestData.AgeGroup}</p>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-black text-2xl">₹ {TestData.Price}</p>
              <p className="text-black text-2xl cursor-pointer">
                <MdDelete onClick={() => updateQuantity(item._id, item.name, 0)} />
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            {!token ?
              <button onClick={()=>navigate('/register')} className="mt-4 bg-[#00AECD] text-white py-2 px-6 rounded-lg w-full">
                Login to Continue
              </button>
              :
              <button onClick={() => navigate('/place-order')} className="mt-4 bg-[#00AECD] text-white py-2 px-6 rounded-lg w-full">
                Proceed to Checkout
              </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
