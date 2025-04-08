import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { TestPrices } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
    const [location, setLocation] = useState({ city: "", state: "" });
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTests, setFilteredTests] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Function to get user's location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();

                        if (data && data.address) {
                            setLocation({
                                city: data.address.city || data.address.town || data.address.village || "Unknown",
                                state: data.address.state || "Unknown",
                            });
                        }
                    } catch (err) {
                        setError("Failed to fetch location. Try again.");
                    }
                },
                () => {
                    setError("Location access denied. Enable GPS & try again.");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    // Fetch location on mount
    useEffect(() => {
        getLocation();
    }, []);

    // Handle search input change
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            let filtered = [];
            if (selectedCategory === "All") {
                // Search across all categories
                Object.values(TestPrices).forEach(category => {
                    if (Array.isArray(category)) { // Ensure it's an array
                        filtered = [
                            ...filtered,
                            ...category.filter(test =>
                                test.name?.toLowerCase().includes(value.toLowerCase())
                            ),
                        ];
                    }
                });
            } else {
                // Search within the selected category
                filtered = (TestPrices[selectedCategory] || []).filter(test =>
                    test.name?.toLowerCase().includes(value.toLowerCase())
                );
            }
            setFilteredTests(filtered);
        } else {
            setFilteredTests([]);
        }
    };

    // Handle category change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setFilteredTests([]); // Reset search results when category changes
        setSearchTerm(""); // Clear search term
    };

    // Handle clicking on a suggestion
    const handleSelectTest = (testId, testName) => {
        setSearchTerm(""); // Clear search input
        setFilteredTests([]); // Hide suggestions
        navigate(`/testDetails/${testId}`); // Navigate to the test page
    };

    // Clear search input
    const clearSearch = () => {
        setSearchTerm("");
        setFilteredTests([]);
    };

    return (
        <div className="bg-[#00AECD] flex justify-between py-1 px-3 rounded shadow-lg">
            {/* Contact Number */}
            <div className="items-start justify-between gap-4 sm:flex hidden">
                <p className="text-base font-semibold flex items-center gap-4 py-2 text-white">
                    <FaPhone className="text-2xl" />
                    <a href="tel:+9101294253000">0129 - 4253000</a>
                </p>
            </div>

            {/* Search Box */}
            <div className="flex gap-2 relative">
                <div className="flex items-center gap-2">
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="flex items-center">
                            <CiLocationOn className="text-2xl cursor-pointer" />
                            <p>{location.state}</p>
                        </div>
                    )}
                </div>

                {/* Category Dropdown */}
                <select
                    className="px-2 py-1 rounded-md text-black bg-white border border-gray-300"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="All">All</option>
                    <option value="Fever">Fever</option>
                    <option value="HIV">HIV</option>
                    <option value="Thyroid">Thyroid</option>
                    <option value="WomenTest">Women Test</option>
                    <option value="Gastrointestinal">Gastrointestinal</option>
                    <option value="Categories">Categories</option>
                    <option value="WomenCare">Women Care</option>
                </select>

                {/* Search Input */}
                <div className="relative w-64">
                    <div className="flex justify-between items-center bg-white w-full rounded-full p-1">
                        <input
                            type="text"
                            className="w-full outline-none text-black bg-transparent p-1"
                            placeholder="Search for tests and packages..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {searchTerm ? (
                            <MdClose
                                className="text-4xl text-red-500 p-1.5 rounded-full font-semibold cursor-pointer"
                                onClick={clearSearch}
                            />
                        ) : (
                            <IoMdSearch className="text-4xl bg-[#EAF1FF] text-[#3772FF] p-1.5 rounded-full font-semibold cursor-pointer" />
                        )}
                    </div>

                    {/* Dropdown Suggestions */}
                    {filteredTests.length > 0 && (
                        <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-10">
                            {filteredTests.map((test) => (
                                <li
                                    key={test.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer text-black flex justify-between"
                                    onClick={() => handleSelectTest(test.id, test.name)}
                                >
                                    <span>{test.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
