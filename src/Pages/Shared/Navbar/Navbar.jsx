import React from "react";
import "./Navbar.css";
import { FaFacebook, FaForward, FaYoutube } from "react-icons/fa";
import logo from "/logo_bdesh.svg";
import { BsPersonCircle } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container-lg mx-auto bg-[#ECEFF1]">
      <nav className="flex items-center justify-between flex-wrap px-[65px] container mx-auto text-black ">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded  border-white hover:border-gray-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Bdjobs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Jobs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-[#1A7FF2] mr-4 text-[13px]	font-medium  transition-colors duration-500 transition-delay-500"
            >
              Job Seeker Account
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 bg-[#D4D8D9] p-3 hover:text-[#1A7FF2] text-[13px]	font-medium transition-colors duration-500 transition-delay-500"
            >
              <span>Recruitment Agency / Foreign Employers</span>
              <span>
                <FaForward className="inline ml-3" />
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <FaFacebook className="text-2xl text-[#1A7FF2]" />
            <div className="ml-4">
              <a className=" hover:text-white" href="#">
                <FaYoutube className="text-2xl text-red-600" />
              </a>
            </div>
            <div className="ml-4">
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
      <div className="container-lg mx-auto px-[105px] mr-[-25px] bg-base-100">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="hover:cursor-pointer normal-case text-xl">
              <img src={logo} alt="logo" className="w-[170px]" />
            </a>
          </div>

          <div className="navbar-center mr-40 hidden lg:flex">
            <img
              src="https://bdesh.bdjobs.com/images/Joint_venture.png"
              alt="navbar-image"
            />
          </div>
          <div className="navbar-end mr-0">
            <ul className="menu menu-horizontal px-1 ">
              <div className="relative" data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-sm leading-normal transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600 active:bg-primary-700  motion-reduce:transition-none font-semibold mt-1 hover:text-[#2157AC] text-[#6a92cf]"
                  type="button"
                  id="dropdownMenuButton1d"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <BsPersonCircle className="text-xl mr-3 bg-[#2157AC] border border-spacing-16 border-[#2157AC]  text-white rounded-xl" />
                  Sign in / Create Account
                </button>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1d"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Something else here
                    </a>
                  </li>
                  <hr className="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <li className="hover:bg-none">
                <a
                  className="hover:text-[#2157AC] hover:cursor-pointer 
                  hover:bg-none"
                >
                  <IoCallSharp className="text-2xl rotate-[270deg] rounded-xl" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
