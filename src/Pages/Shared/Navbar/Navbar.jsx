import React from "react";
import "./Navbar.css";
import {
  FaBeer,
  FaFacebook,
  FaFastForward,
  FaForward,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container-lg mx-auto bg-[#ECEFF1]">
      <nav class="flex items-center justify-between flex-wrap px-[65px] container mx-auto text-black ">
        {/* <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Logo</span>
        </div> */}
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded  border-white hover:border-gray-500">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Bdjobs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Jobs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Job Seeker Account
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 bg-[#D4D8D9] p-3 hover:text-[#1A7FF2] text-[13px]	font-medium transition-colors duration-500 transition-delay-500"
            >
              <span>Recruitment Agency / Foreign Employers</span>
              <span>
                <FaForward className="inline ml-3" />
              </span>
            </a>
          </div>
          <div class="flex items-center">
            <FaFacebook className="text-2xl text-[#1A7FF2]" />
            <div class="ml-4">
              <a class=" hover:text-white" href="#">
                <FaYoutube className="text-2xl text-red-600" />
              </a>
            </div>
            <div class="ml-4">
              <button className="btn btn-xs text-white font-normal rounded-md rounded-e-none bg-[#1A7FF2] border-[#1A7FF2] hover:bg-[#1A7FF2] hover:border-[#1A7FF2]">
                ENG
              </button>
              <button className="btn btn-xs font-normal hover:bg-white rounded-md rounded-s-none bg-white text-[#1A7FF2] border-[#1A7FF2] hover:border-[#1A7FF2]">
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
