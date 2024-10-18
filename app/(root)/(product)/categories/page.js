import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllCategoriesHoverCard from "../../../../Components/Cards/AllCategoriesHoverCard";
import { getData } from "../../../../lib/actions/universel.actions";

const Categories = async () => {
  const allCategoriesData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/categories`
  );

  return (
    <>
      <div className="flex items-center justify-between py-10 bg-defaultBg text-black">
        <div className="font-semibold text-2xl capitalize">All categories</div>
        <p className="text-xs">HomeAll categories</p>
      </div>

      <div>
        {allCategoriesData?.data &&
          allCategoriesData?.data?.length > 0 &&
          allCategoriesData?.data?.map((data) => (
            <div
              key={data?.id}
              className="w-full bg-white shadow-lg text-black py-5 mb-5"
            >
              <Link href={`/categories/${data?.id}`}>
                <div className="flex gap-3 items-center px-4">
                  <div className="rounded-full w-16 h-16 ">
                    <Image
                      scr={`${process.env.NEXT_PUBLIC_URL}/${data?.icon}`}
                      width={80}
                      height={80}
                      alt={data?.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="capitalize font-medium">{data?.name}</div>
                </div>
              </Link>
              <hr className="ring-0 w-full  ring-gray-300 mb-3 mt-1" />

              <AllCategoriesHoverCard subid={data?.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
