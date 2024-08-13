"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ data }) => {
  // console.log(data, "from BB");

  return (
    // <div className="flex flex-wrap justify-center lg:justify-between">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data &&
        data?.map((item, i) => (
          <div key={i}>
            <Link href={`/brands/${i}`}>
              <div className="flex items-center justify-between px-4 border border-gray-200 rounded-sm ring-1 ring-gray-300 bg-white text-black ">
                <div className="flex  items-center">
                  <div className="w-28 h-16 relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/${item?.banner}`}
                      width={500}
                      height={500}
                      alt={item?.name}
                      className="w-auto h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item?.name}</p>
                  </div>
                </div>
                <div>
                  <span className="text-red-500">{">"}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CategoryCard;
