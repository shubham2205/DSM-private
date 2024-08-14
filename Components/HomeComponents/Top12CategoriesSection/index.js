import React from "react";
import CategoryCard from "../../Cards/CategoryCard";

const TopCategories = ({ title, btnName, data }) => {
  return (
    <div>
      <div className="w-full    pt-3 ">
        <div className="mt-3">
          <div className="w-full text-black flex justify-between items-center  ">
            <div className="left ">
              <h1 className="border-b-2 border-red-500 pb-6 font-semibold">
                {title}{" "}
              </h1>
            </div>
            <div className="right text-white bg-primary-red px-5 py-2 rounded-sm">
              <button> {btnName}</button>
            </div>
          </div>
          <hr className=" w-full bg-pink-300 border-gray-300 border-1 mb-4 " />

          <CategoryCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
