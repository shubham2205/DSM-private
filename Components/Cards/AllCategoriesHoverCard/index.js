import Image from "next/image";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AllCategoriesHoverCard = ({ subid }) => {
  // --------------------------ALL Categories Data API Fetch Start--------------------------------------
  const { data: subCategoriesData, error: subCategoriesError } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/v3/sub-categories/${subid}`,
    fetcher
  );

  if (subCategoriesError) return <div>failed to load</div>;
  if (!subCategoriesData && !subCategoriesError) return <div>loading...</div>;

  return (
    <div className="my-5 bg-white lg:py-10 flex flex-wrap justify-center lg:justify-start px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subCategoriesData?.data &&
          subCategoriesData?.data?.map((data, index) => (
            <div
              key={index}
              className="cards  h-[5rem] grid grid-cols-12 px-2  items-center bg-white ring-1 ring-gray-300 group relative shadow-custom"
            >
              <div className="w-full col-span-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}/${data?.icon}`}
                  width={90}
                  height={90}
                  alt={data?.name}
                  className="w-full"
                />
              </div>
              <div className="col-span-10">
                <div className="text-black ml-2">{data?.name}</div>
                <div className="absolute inset-0 flex justify-center items-center bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-medium">{data?.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCategoriesHoverCard;
