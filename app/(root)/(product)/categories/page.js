"use client";

import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import AllCategoriesHoverCard from "../../../../Components/Cards/AllCategoriesHoverCard";
import Loading from "../../../../Components/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Categories = () => {
  // --------------------------ALL Categories Data API Fetch Start--------------------------------------
  const { data: allCategoriesData, error: allCategoriesError } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/v3/categories`,
    fetcher
  );

  if (allCategoriesError) return <div>failed to load</div>;
  if (!allCategoriesData && !allCategoriesError)
    return (
      <div>
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      </div>
    );

  return (
    <>
      <div className="flex items-center justify-between py-10 bg-defaultBg text-black">
        <div className="font-semibold text-2xl capitalize">All categories</div>
        <p className="text-xs">HomeAll categories</p>
      </div>

      <div>
        {allCategoriesData?.data &&
          allCategoriesData?.data?.map((data) => (
            <div
              key={data?.id}
              className="w-full bg-white shadow-lg text-black py-5 mb-5"
            >
              <div className="flex gap-3 items-center px-4">
                <div className="rounded-full w-16 h-16 ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/${data?.icon}`}
                    width={80}
                    height={80}
                    alt={data?.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="capitalize font-medium">{data.name}</div>
              </div>
              <hr className="ring-0 w-full  ring-gray-300 mb-3 mt-1" />
              <Link href={`/brands/${data?.id}`}>
                <AllCategoriesHoverCard subid={data?.id} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
