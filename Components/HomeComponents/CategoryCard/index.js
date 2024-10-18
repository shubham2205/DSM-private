"use client";

import Image from "next/image";
import React, { useState } from "react";

const CategoryCard = ({ data }) => {
  // const { name, icon, banner } = data;
  // console.log(data, "11111");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleScroll = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  return (
    <div className=" w-full">
      <div
        className="flex flex-col items-center group relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-24 h-24">
          <Image
            width={500}
            height={500}
            src={`${process.env.NEXT_PUBLIC_URL}/${data?.icon}`}
            alt={data?.name}
            className="w-full h-full text-xs rounded-full"
          />
        </div>
        <p className="text-center text-nowrap mt-1 text-[0.850rem] text-light-gray-header group-hover:text-black">
          {data?.name}
        </p>
      </div>

      {showDropdown && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-92 mt-4 left-0 right-0 h-64 outline-1 outline-gray-950 bg-cover bg-clip-content bg-center animate-pulse bg-no-repeat py-2 px- text-black shadow-stone-900"
          style={{ backgroundImage: `url(${data?.banner})` }}
        >
          <div className="top-0 left-0 right-0 bottom-0">
            <div className="grid grid-rows-5 grid-flow-col-dense mt-5 w-[40%] max-w-[60%]">
              {/* ---------------------banner li items----------------------- */}
              {/* {listItems.map((item, index) => (
                <Link key={index} href="/">
                  <div className="py-2 px-4 text-nowrap">
                    <li className="list-none text-white capitalize">{item}</li>
                  </div>
                </Link>
              ))} */}
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
