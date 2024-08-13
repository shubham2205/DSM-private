"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandCard = ({ data }) => {
  // console.log(data, "from BB");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {data &&
        data?.map((item, i) => (
          <div key={i} className="w-full">
            <Link href={`/brands/${i}`}>
              <div className="flex items-center bg-white justify-between p-4 border border-gray-200 rounded-sm ring-1 ring-gray-300  text-black  mb-4 ">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-10 relative ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/${item?.logo}`}
                      width={300}
                      height={300}
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

export default BrandCard;
