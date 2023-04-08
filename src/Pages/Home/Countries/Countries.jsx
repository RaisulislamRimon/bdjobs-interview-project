import React from "react";
import countrysJobBg from "/images/countrys-job-bg.png";
import "./Countries.css";

const Countries = () => {
  return (
    <div className="countries mt-10">
      <h2 className="text-xl font-semibold text-center text-white">
        Jobs in different countries
      </h2>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="flex flex-col items-center justify-center w-52 m-2 text-center rounded-md bg-white">
          <p className="text-green-500 text-2xl font-bold pt-4">45</p>
          <p className="mt-2 text-sm font-semibold pb-3">vacancies</p>
          <p className="bg-black text-white p-3 w-full mt-2 text-base font-semibold mb-0 rounded-b-md ">
            United Arab Emirates
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-52 m-2 text-center rounded-md bg-white">
          <p className="text-green-500 text-2xl font-bold pt-4">35</p>
          <p className="mt-2 text-sm font-semibold pb-3">vacancies</p>
          <p className="bg-black text-white p-3 w-full mt-2 text-base font-semibold mb-0 rounded-b-md ">
            Saudi Arabia
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-52 m-2 text-center rounded-md bg-white">
          <p className="text-green-500 text-2xl font-bold pt-4">25</p>
          <p className="mt-2 text-sm font-semibold pb-3">vacancies</p>
          <p className="bg-black text-white p-3 w-full mt-2 text-base font-semibold mb-0 rounded-b-md ">
            Japan
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-52 m-2 text-center rounded-md bg-white">
          <p className="text-green-500 text-2xl font-bold pt-4">45</p>
          <p className="mt-2 text-sm font-semibold pb-3">vacancies</p>
          <p className="bg-black text-white p-3 w-full mt-2 text-base font-semibold mb-0 rounded-b-md ">
            South Korea
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-52 m-2 text-center rounded-md bg-white">
          <p className="text-green-500 text-2xl font-bold pt-4">45</p>
          <p className="mt-2 text-sm font-semibold pb-3">vacancies</p>
          <p className="bg-black text-white p-3 w-full mt-2 text-base font-semibold mb-0 rounded-b-md ">
            Malaysia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countries;
