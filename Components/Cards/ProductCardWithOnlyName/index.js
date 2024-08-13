import Image from "next/image";
import React from "react";

const ProductCardWithOnlyName = ({ cardData }) => {

  // console.log(cardData, "carddata")
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="lg:max-w-[15rem]  mt-3 mb-3 hover:shadow-custom  rounded ring-1 ring-gray-200 overflow-hidden  bg-white">
          <div className="px-2 lg:p-3">
            <Image
              width={500}
              height={500}
              className="w-full h-20 lg:h-32 object-contain"
              src={`${process.env.NEXT_PUBLIC_URL}/${cardData.banner}`}
              alt={cardData.description}
            />
          </div>
          <div className="product-name text-center text-gray-500 pb-2">
            <p className="text-[0.60rem] lg:text-sm">{cardData.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardWithOnlyName;
