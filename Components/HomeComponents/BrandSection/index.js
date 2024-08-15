import React from "react";
import BrandCard from "../../Cards/BrandsCard";

const BrandSection = () => {
  return (
    <div className="w-full  py-2">
    <div className="my-3">
    <div className="w-full text-black flex justify-between items-center  ">
          <div className="left  ">
            <h1 className="border-b-2 pb-6  border-red-500 ">Top 12 Brands </h1>
          </div>
          <div className="right text-white bg-primary-red px-5 py-2 rounded-sm">
            <button> View All Sellers</button>
          </div>
        </div>
            <hr className=" w-full border-gray-300 border-1 mb-4" />
      <BrandCard />
    </div>
    </div>
  );
};

export default BrandSection;
