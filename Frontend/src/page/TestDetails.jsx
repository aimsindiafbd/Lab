import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContent";
import { RiTestTubeFill, RiTimeLine } from "react-icons/ri";
import { GiTestTubes } from "react-icons/gi";
import { FaTransgenderAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { GoPackageDependencies } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";

const TestDetails = () => {
    const { id } = useParams();  // Get test ID from URL
    const { TestPrices, addToCart, cartItem, updateQuantity } = useContext(AppContext);  // Get test data and cart context

    // Find the test in FullBody, Fever, or HIV category
    const test = TestPrices.FullBody.find(test => test.id === id) ||
        TestPrices.Fever.find(test => test.id === id) ||
        TestPrices.HIV.find(test => test.id === id);

    if (!test) {
        return <div className="text-center text-red-500 text-xl font-bold">Test not found</div>;
    }

    // Check if the test is already in the cart
    const isTestInCart = cartItem[test.id] && cartItem[test.id][test.name] > 0;

    // Handle add/remove from cart
    const handleCartAction = () => {
        if (isTestInCart) {
            updateQuantity(test.id, test.name, 0); // Remove from cart
        } else {
            addToCart(test.id, test.name); // Add to cart
        }
    };

    return (
        <div className="w-full sm:w-1/2 my-10 sm:px-10 px-2">
            <h2 className="text-3xl font-semibold text-[#00AECD]">{test.heading}</h2>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl my-2">{test.name}</p>
                    <p className="text-[#00B69D] font-medium text-lg">₹ {test.Price}</p>
                </div>
                <div>
                    <p className="bg-slate-200 text-center rounded font-medium my-2 py-1">
                        {test.discount} off
                    </p>
                    <p
                        onClick={handleCartAction}
                        className={`px-4 py-2 rounded font-semibold cursor-pointer text-white ${isTestInCart ? 'bg-green-800' : 'bg-red-800'}`}
                    >
                        {isTestInCart ? 'Remove' : 'Book Now'}
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg my-5 rounded-lg sm:p-4 p-1">
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <RiTestTubeFill className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Test Name: {test.name}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <GiTestTubes className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Sample Type: {test.sample}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <FaTransgenderAlt className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Gender: {test.Gender}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <TiGroup className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Age Group: {test.AgeGroup}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <RiTimeLine className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Report Timeline: {test.ReportTimeline}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <GoPackageDependencies className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Package: {test.Package}
                </p>
                <p className="p-4 flex items-center gap-4 text-lg font-medium">
                    <MdCurrencyRupee className="bg-[#00AECD] text-white text-4xl p-2 rounded-md" />
                    Price: ₹ {test.Price}
                </p>
            </div>
        </div>
    );
};

export default TestDetails;
