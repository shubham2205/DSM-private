// import BestSellerCard from "@/components/Cards/BestSellerCard/BestSellerCard";
import React from "react";
import BestSellerCard from "../../Cards/BestSellerCard";

const BestSellerSection = ({ data }) => {
 ;
  return (
    <div className="w-full mt-4  shadow-md ">
      <div className=" bg-white flex flex-col items-center justify-center p-3 ">
        <div className="w-full text-black flex justify-between items-center mb-2">
          <div className="left ">
            <h1 className="border-b-2 border-red-500 ">Best Sellers </h1>
          </div>
          <div className="right text-white bg-primary-red px-5 py-2 rounded-sm">
            <button> View All Sellers</button>
          </div>
        </div>
        <hr className=" w-full border-gray-300 border-1" />

        <BestSellerCard data={data} />
      </div>
    </div>
  );
};

export default BestSellerSection;
