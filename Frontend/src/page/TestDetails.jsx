import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContent";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { TbReportMedical } from "react-icons/tb";
import { CiBarcode } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
// import { RiTestTubeFill, RiTimeLine } from "react-icons/ri";
// import { GiTestTubes } from "react-icons/gi";
// import { FaTransgenderAlt } from "react-icons/fa";
// import { TiGroup } from "react-icons/ti";
// import { GoPackageDependencies } from "react-icons/go";
// import { MdCurrencyRupee } from "react-icons/md";

const TestDetails = () => {
    const { id } = useParams();  // Get test ID from URL
    const { TestPrices, addToCart, cartItem, updateQuantity } = useContext(AppContext);  // Get test data and cart context
    const questions = [
        {
            question: "What does the CBC test measure?",
            answer: `Complete blood count (CBC) test can help detect hundreds of conditions, disorders, and infections using a small amount of blood. It measures several components of the blood, including:
    
          - **White Blood Cells count:** The total number of white blood cells in a sample of blood.
          - **White Blood Cell Differential:** There are five different types of white blood cells.
          - **Red blood cell (RBC) count:** The actual number of red blood cells.
          - **Hemoglobin:** The total amount of the oxygen-carrying protein in the blood.
          - **Hematocrit:** The percentage of a person's total blood volume that consists of red blood cells.
          - **Platelet count:** The number of platelets in a person's sample of blood.
          `,
        },
        {
            question: "What are white blood cells?",
            answer: "White blood cells (WBCs) are an essential part of the immune system, helping the body fight infections.",
        },
        {
            question: "What is hemoglobin?",
            answer: "Hemoglobin is a protein in red blood cells that carries oxygen throughout the body.",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    // Find the test in FullBody, Fever, or HIV category
    const test = TestPrices.HealthPackage.find(test => test.id === id) ||
        TestPrices.GoodHealthPackage.find(test => test.id === id) ||
        TestPrices.HealthPackageMale.find(test => test.id === id) ||
        TestPrices.CardiacRiskDetection.find(test => test.id === id) ||
        TestPrices.Gastrointestinal.find(test => test.id === id);

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
        <div className="w-full sm:px-10 px-2">
            <div className="w-10/12 mx-auto shadow-lg my-4 mt-32 px-4 py-3">
                <h2 className="text-lg font-semibold text-[#00AECD]">{test.heading}</h2>
                <div className="sm:flex block justify-between">
                    <div>
                        <p className="text-2xl">{test.name}</p>
                        <p className="text-[#00B69D] font-normal text-md pt-2">Special Instruction : No special preparation required</p>
                        <p className="text-[#00B69D] font-normal text-md">Parameters covered : 20</p>
                        <p className="text-[#00B69D] font-normal text-md">Report Frequency : Daily</p>
                    </div>
                    <div className="sm:my-6 my-2">
                        {/* <p className="bg-slate-200 text-center rounded font-medium my-2 py-1">
                        {test.discount} off
                    </p> */}
                        <p className="text-[#00B69D] font-medium text-lg sm:py-4 sm:text-center">₹ {test.Price}</p>
                        <p
                            onClick={handleCartAction}
                            className={`px-4 py-2 rounded font-semibold cursor-pointer text-white ${isTestInCart ? 'bg-red-500' : 'bg-[#00AECD]'}`}
                        >
                            {isTestInCart ? 'Remove' : 'Book Now'}
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="bg-white shadow-lg my-5 rounded-lg sm:p-4 p-1">
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
            </div> */}

            <div className="w-10/12 mx-auto shadow-lg my-4 px-4 py-3">
                <p className="text-black flex items-center gap-2 font-medium text-lg py-3">Overview</p>
                <p className="text-[#00AECD] text-md font-medium py-1">What is COMPLETE BLOOD COUNT; CBC ?</p>
                <p className="font-normal text-sm text-justify">Complete blood count (CBC) is a blood test used to evaluate your overall health & wellness and detect a wide range of disorders like anemia, infection and leukemia. This test measures several components and features of your blood like Red blood cells which carry oxygen; White blood cells which fight infection; Hemoglobin the oxygen carrying protein in red blood cells; Hematocrit proportion of red blood cells to the fluid component or plasma in your blood; Platelets which help with blood clotting. Abnormal increases or decreases in cell counts as revealed in a Complete blood count may indicate that you have an underlying medical condition that calls for further evaluation. This test also helps to monitor a known medical condition.</p>
            </div>

            <div className="w-10/12 mx-auto shadow-lg my-4 px-4 py-3">
                <p className="text-black flex items-center gap-2 text-lg py-3"><RiShoppingBag3Fill />Parameters</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                        <ul>
                            <li>ABS.BASOPHIL COUNT</li>
                            <li>ABS.EOSINOPHIL COUNT</li>
                            <li>ABS.LYMPHOCYTE COUNT</li>
                            <li>ABS.MONOCYTE COUNT</li>
                            <li>Basophils</li>
                            <li>Eosinophils</li>
                            <li>Hemoglobin</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Lymphocytes</li>
                            <li>MCH</li>
                            <li>MCHC</li>
                            <li>MCV</li>
                            <li>MPV (Mean Platelet Volume)</li>
                            <li>Monocytes</li>
                            <li>Neutrophils</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Packed Cell Volume (PCV)</li>
                            <li>Platelet Count</li>
                            <li>RBC Count</li>
                            <li>Red Cell Distribution Width (RDW)</li>
                            <li>Segmented Neutrophils</li>
                            <li>Total Leukocyte Count (TLC)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-10/12  mx-auto shadow-lg my-4 px-4 py-3">
                <p className="text-black flex items-center gap-2 font-medium text-lg pt-4">Frequently Asked Questions</p>
                <p>Here you can find answers for all the questions related to the test</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                    {/* Questions */}
                    <div className="my-4">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 border ${selectedIndex === index ? "border-[#00AECD] bg-[#E0F7FA]" : "border-[#00AECD]"
                                    } my-2 p-4 rounded-md cursor-pointer`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <input
                                    type="radio"
                                    name="question"
                                    checked={selectedIndex === index}
                                    onChange={() => setSelectedIndex(index)}
                                />
                                <p>{item.question}</p>
                            </div>
                        ))}
                    </div>

                    {/* Answer */}
                    <div className="h-full max-h-[280px] overflow-y-auto border border-gray-300 p-4 rounded-md">
                        <p className="font-bold mb-2">{questions[selectedIndex].question}</p>
                        <p className="text-justify">{questions[selectedIndex].answer}</p>
                    </div>
                </div>
            </div>

            {/* Doctor Information */}
            <div className="w-11/12 lg:w-10/12 mx-auto shadow-lg my-4 px-4 py-3">
  {/* Header */}
  <p className="text-black flex items-center gap-2 text-lg py-3">
    <FaUserDoctor /> Doctor Information
  </p>

  {/* Information Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Pre-test Information */}
    <div className="flex items-center gap-4">
      <div>
        <FaCircleInfo />
      </div>
      <div>
        <p className="text-sm font-light">Pre-test Information</p>
        <p className="text-sm font-normal">No special preparation required</p>
      </div>
    </div>

    {/* Report Delivery */}
    <div className="flex items-center gap-4">
      <div>
        <TbReportMedical />
      </div>
      <div>
        <p className="text-sm font-light">Report Delivery</p>
        <p className="text-sm font-normal">Daily</p>
      </div>
    </div>

    {/* Code */}
    <div className="flex items-center gap-4">
      <div>
        <CiBarcode />
      </div>
      <div>
        <p className="text-sm font-light">Code</p>
        <p className="text-sm font-normal">1001</p>
      </div>
    </div>

    {/* Category */}
    <div className="flex items-center gap-4">
      <div>
        <IoMdPaper />
      </div>
      <div>
        <p className="text-sm font-light">Category</p>
        <p className="text-sm font-normal">
          Hematological Function & Disorders
        </p>
      </div>
    </div>
  </div>

  {/* Stability Information */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
    <div>
      <p className="text-sm font-light">Stability Room</p>
      <p className="text-sm font-normal">6 hrs</p>
    </div>
    <div>
      <p className="text-sm font-light">Stability Refrigerated</p>
      <p className="text-sm font-normal">48 hrs</p>
    </div>
    <div>
      <p className="text-sm font-light">Stability Frozen</p>
      <p className="text-sm font-normal">NA</p>
    </div>
    <div>
      <p className="text-sm font-light">Method</p>
      <p className="text-sm font-normal">Electrical Impedance, VCS</p>
    </div>
  </div>

  {/* Specimen and Usage */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    <div>
      <p className="text-sm font-light">Specimen</p>
      <p className="text-sm font-normal">
        3 mL (2 mL min.) Whole blood in 1 Lavender Top (EDTA) tube. Ship
        refrigerated. DO NOT FREEZE.
      </p>
    </div>
    <div>
      <p className="text-sm font-light">Usage</p>
      <p className="text-sm font-normal">
        CBC provides information about red cells, white cells, and platelets.
        Results are useful in diagnosing anemia, infections, leukemias, clotting
        disorders, and many other medical conditions.
      </p>
    </div>
  </div>
</div>


            {/* About Test Details */}
            <div className="w-10/12 mx-auto text-justify my-5">
                <div>
                    <p className="text-sm font-normal">What is Complete Blood Count (CBC) Test?</p>
                    <p className="text-sm font-light">Complete blood count, or CBC, is a common blood test that provides important information about the composition of the blood. It measures various parameters of the blood, such as red blood cells, white blood cells, and platelets. The test helps to evaluate overall health and detect potential underlying medical conditions.

                        CBC test is a routine test suggested by the doctor as a diagnostic test to assess the blood's cellular makeup and identify any abnormalities.</p>
                </div>
                <div>
                    <p className="text-sm font-normal pt-5">What is the Purpose of the Test?</p>
                    <p className="text-sm font-light">A CBC test is commonly prescribed for various reasons, including: </p>
                    <p className="text-sm font-light">Routine Check-ups: Doctors may order a CBC test as part of a routine health examination to assess the overall health status.
                        Symptoms Evaluation: If a person is experiencing unexplained symptoms such as fatigue, weakness, frequent infections, bruising, or prolonged bleeding, a CBC test can help identify potential causes.
                        Monitoring Chronic Conditions: Individuals with chronic conditions like diabetes, kidney disease, or heart disease may undergo regular CBC tests to monitor their health-related parameters and the impact of treatments.
                        Preoperative Assessment: Prior to surgery, a CBC test is often performed to evaluate the blood's ability to clot properly and detect any underlying conditions that may affect the surgical procedure.
                        Follow-up Care: If a person has a known blood disorder or is undergoing treatment for a specific condition, regular CBC tests may be prescribed to monitor your progress and adjust the treatment plan accordingly.</p>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;
