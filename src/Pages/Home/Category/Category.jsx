import React from "react";
import { BsFillTagFill } from "react-icons/bs";
import { IoArrowForwardCircleOutline, IoCaretForward } from "react-icons/io5";

const Category = () => {
  return (
    <div className="container-lg mx-24">
      <div className="flex flex-row  items-center justify-between gap-4 mt-10 mb-10 mr-72 ">
        <h1 className="text-2xl">
          <BsFillTagFill className="inline mr-2" />
          Category
        </h1>

        <div>
          <button className="btn bg-white border-[#1565C0] text-[#1565C0] rounded-s-lg rounded-e-none	capitalize">
            Special skilled
          </button>
          <button className="btn bg-[#1565C0] hover:bg-[#1565C0] rounded-e-lg rounded-s-none text-white border-none capitalize">
            General
          </button>
        </div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-4 gap-4">
        {/* 1st row */}
        <div className="grid-cols-1">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Accounting-finance.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Accounting/Finance (6)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Hospitality-Travel-Tourism.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Hospitality/ Travel/ T... (5)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Electrician-Construction-Repair.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Electrician/ Construct... (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/IT-Telecommunication.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    IT & Telecommunication (25)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Design-Creative.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">Design/Creative (0)</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cols-1">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Production-operation.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Production/Operation (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4  mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Beauty-Care-Health-Fitness.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Beauty Care/ Health & ... (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4  mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Secretary-Receptionist.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Secretary/Receptionist (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4  mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Marketing-Sales.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Marketing-Sales (51)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Medical-Pharma.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">Medical/Pharma (1)</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cols-1">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Agroplant.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Agro (Plant/Animal/Fi..) (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Education-Training.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    {" "}
                    Education/Training (0)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Engineer-Architects.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">
                    Engineer/Architects (31)
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Gen%20Mgt-Admin.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">Gen Mgt/Admin (0)</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="https://bdesh.bdjobs.com/images/Othersf.png"
                  alt="Accounting-finance"
                  className="w-10 h-10"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">Others (15)</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cols-1">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-2">
            <div className="">
              <div className="font-bold mb-3">
                <h1>বিদেশ জবস্ এর গাইডলাইন</h1>
              </div>
              <ul>
                <li className="flex items-center text-[#7588B3] mb-2 ">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    "বিদেশ জবস্"-নির্দেশিকা
                  </span>
                </li>
                <li className="flex items-center text-[#4e5057] mb-2 ">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশে যাওয়ার গাইডলাইন
                  </span>
                </li>
                <li className="flex items-center text-[#4e5057]  mb-2">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশে চাকরির পূর্ব প্রস্তুতি
                  </span>
                </li>
                <li className="flex items-center text-[#4e5057]  mb-2">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশে যাওয়ার প্রাসঙ্গিক কাজ
                  </span>
                </li>
                <li className="flex items-center text-[#4e5057]  mb-2">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশের যাত্রাপথে করনীয়
                  </span>
                </li>
                <li className="flex items-center text-[#4e5057] ">
                  <IoCaretForward className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশে জীবনযাত্রা
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-2">
            <div className="">
              <div className="font-bold mb-3">
                <h1>সরকারি গুরুত্বপূর্ণ লিংক সমূহ</h1>
              </div>
              <ul>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর
                  </span>
                </li>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                  </span>
                </li>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো
                  </span>
                </li>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়
                  </span>
                </li>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশের যাত্রাপথে করনীয়
                  </span>
                </li>
                <li className="flex items-center text-green-600 hover:text-red-600 transition duration-500 ease-in-out mb-2 hover:cursor-pointer">
                  <IoArrowForwardCircleOutline className=" " />
                  <span className="font-medium text-sm ml-1">
                    বিদেশে জীবনযাত্রা
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <div className="bg-[#036DC5] w-2/6 px-7 py-2 m-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src="https://bdesh.bdjobs.com/images/thousand_cv.png"
                alt="Movie"
                className="w-32 h-24"
              />

              <div>
                <p className="text-white text-base">
                  হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন
                  করুন আমাদের সাইটে।
                </p>

                <button className="btn btn-warning btn-sm rounded-md px-4 mt-3">
                  একাউণ্ট খুলুন
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#036DC5] w-2/6 px-7 py-2 m-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src="https://bdesh.bdjobs.com/images/make-bio.png"
                alt="Movie"
                className="w-32 h-24"
              />

              <div>
                <p className="text-white text-base">
                  বায়োডাটা তৈরি করতে চান? <br /> সহজ কয়েকটি ধাপে এখনই স্বল্প
                  সময়েই তৈরি করুন আপনার সিভি
                </p>

                <button className="btn btn-warning btn-sm rounded-md px-4 mt-3">
                  একাউণ্ট খুলুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
