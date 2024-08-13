import Image from "next/image";
import React from "react";

const DealCard = ({ data }) => {
  return (
    <div className="w-full bg-white  rounded-sm overflow-hidden outline outline-1 outline-gray-200 hover:shadow-custom ease-in-out duration-200">
      <div className="relative">
        <Image
          // src={`${item?.imageSrc}`}
          width={300}
          height={300}
          className="p-2 w-full h-48 object-cover"
          // src={data.thumbnail_image}
          src={`${process.env.NEXT_PUBLIC_URL}/${data.thumbnail_image}`}
          alt="Product"
        />
        <div className="absolute top-4 left-2 py-3 bg-[#FFEAEA] text-primary-red text-xs font-bold rounded-r-full px-2">
          OFF{" "}
          <span className="bg-primary-red text-white rounded-full px-1 py-1">
            {data.discount_percent}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-4">
          <span className="text-base font-semibold text-red-500">
            {data.main_price}
          </span>
          <span className="text-sm line-through text-gray-500">
            {data.stroked_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
