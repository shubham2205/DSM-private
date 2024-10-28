"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import DealCard from "../../Cards/DealCard";

const TodayDealSection = ({ data, banner, loading }) => {
  if (loading) {
    return <div>Loading Hero Dropdown...</div>;
  }

  return (
    <div className="bg-white ">
      <h1 className="text-center text-black my-5 font-semibold pt-4">
        Todays Deal
        <span className="text-white  rounded-md font-normal ml-2 bg-primary-red text-sm px-2  ">
          Hot
        </span>
      </h1>

      <div>
        <div className="pb-5 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-pink-">
          {data &&
            data?.length > 0 &&
            data.map((item, i) => (
              <Link
                href={`/product/${item?.id}`}
                key={item?.id}
                className="w-full"
              >
                <DealCard data={item} />
              </Link>
            ))}
        </div>
      </div>

      {/* ------------after today deal ---------------------------- */}

      <div className=" grid grid-cols-1 pt-6 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-16  bg-defaultBg ">
        {banner &&
          banner?.length > 0 &&
          banner.map((imgSrc, index) => (
            <div key={index} className="f">
              <Image
                // src={imgSrc}
                src={`${process.env.NEXT_PUBLIC_URL}/${imgSrc}`}
                width={500}
                height={500}
                className="w-full "
                alt={`Image ${index}` || "imgSrc"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodayDealSection;
