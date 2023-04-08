import React from "react";
import { IoMdPeople } from "react-icons/io";
import { ImWrench } from "react-icons/im";
import { BiWorld } from "react-icons/bi";

const Info = () => {
  return (
    <div className="grid grid-cols-3 mt-10 mb-10 mx-16">
      <div className="flex flex-row items-center justify-center gap-3 text-black">
        <div className="w-14 h-14 bg-gray-200 rounded-full">
          <IoMdPeople className="w-full h-full bg-red-500 rounded-full text-white p-2" />
        </div>
        <div>
          <p className="text-lg font-light">No. of vacancies</p>
          <h3 className="text-xl font-semibold text-red-500">130+</h3>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 text-black">
        <div className="w-14 h-14 bg-gray-200 rounded-full">
          <ImWrench className="w-full h-full bg-green-500 rounded-full text-white p-2" />
        </div>
        <div>
          <p className="text-lg font-light">No. of jobs</p>
          <h3 className="text-xl font-semibold text-green-500">12</h3>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 text-black">
        <div className="w-14 h-14 bg-gray-200 rounded-full">
          <BiWorld className="w-full h-full bg-orange-400 rounded-full text-white p-2" />
        </div>
        <div>
          <p className="text-lg font-light">No. of countries</p>
          <h3 className="text-xl font-semibold text-orange-500">8</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
