import React from "react";
import { BsFillTagFill } from "react-icons/bs";

const Category = () => {
  return (
    <div className="container-lg mx-24">
      <div
        className="flex flex-row  items-center justify-between gap-4 mt-10 mb-10 mr-72 "
      >
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
    </div>
  );
};

export default Category;
