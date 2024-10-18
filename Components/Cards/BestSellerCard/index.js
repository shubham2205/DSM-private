import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSellerCard = ({ data }) => {
  return (
    <div>
      {data &&
        data?.length > 0 &&
        data?.map((item, index) => (
          <div className="" key={index}>
            <Link href={`/shop/${index}`}>
              <div className="bg-white my-5 rounded-sm gap-7 flex justify-center items-center border-[0.1px] border-gray-200  hover:shadow-custom  p-3 ">
                <div className="max-w-32">
                  <Image
                    width={500}
                    height={500}
                    // src={item?.imgUrl}

                    src={`${process.env.NEXT_PUBLIC_URL}/${item?.user?.shop?.logo}`}
                    alt="Store profile"
                    className="w-full h-auto object-cover text-xs "
                  />
                </div>
                <div className=" text-gray-700">
                  <h2 className="text-md font-semibold">
                    {item?.user?.shop?.name}
                  </h2>
                  <div className="flex items-center ">
                    <span className="text-yellow-500 text-xs mr-1">
                      {item?.user?.shop?.rating.toFixed(1)}

                      {/* {data && Number(data[0].calculable_price)} */}
                    </span>
                  </div>
                  <button className="my-1 text-nowrap text-white bg-[#302b2b] px-4 py-2 rounded-sm hover:bg-red-600">
                    Visit Store &gt;
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BestSellerCard;
