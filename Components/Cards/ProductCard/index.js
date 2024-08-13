import React from "react";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Image from "next/image";
import RatingStar from "@/components/RatingStar/RatingStar";

const ProductCard = ({ cardData, wid }) => {
  // console.log(typeof cardData?.rating)
  // console.log('product',cardData);
  return (
    <div className="py-2">
      <div
        className={`${
          wid ? wid : "max-w-[15rem]"
        }  rounded ring-1 ring-gray-200 overflow-hidden  bg-white hover:shadow-custom ease-in-out duration-200 `}
      >
        <div className="relative md:p-3">
          <div className="absolute top-0 left-0 py-3 bg-[#FFEAEA] text-primary-red text-xs font-bold rounded-r-full px-2">
            OFF{" "}
            <span className="bg-primary-red text-white rounded-full px-1 py-1">
              {cardData?.discount_percent}
            </span>
          </div>
          <div className="w-full  lg:h-[13rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-contain"
              src={`${process.env.NEXT_PUBLIC_URL}/${cardData?.thumbnail_image}`}
              alt={cardData?.name}
            />
          </div>
        </div>
        <div className=" md:px-4 py-4  ">
          <div className="flex justify-evenly  ">
            <div className="tooltip mb-2 " data-tip="Add to wishlist">
              <LiaHeart className="text-primary-red text-lg " />
            </div>
            <div className="border-r-[1px]  border-gray-200 "></div>
            <div className="mb-2 text-xl">
              <LiaShoppingCartSolid className="text-primary-red" />
            </div>
          </div>
          <hr className="border-1 border-red-500 mb-3 " />

          <div className="px-1 md:px-0">
            <div className="flex items-center justify- gap-3 ">
              <div className="line-through  text-xs md:text-sm text-gray-500">
                {cardData?.stroked_price}
              </div>
              <div className="text-xs md:text-smfont-bold text-primary-red">
                {cardData?.main_price}
              </div>
            </div>
            <div className="flex items-center">
              {/* <div className="text-lg text-yellow-500">{cardData?.rating}</div> */}

              <RatingStar rating={cardData?.rating} />
            </div>
            <div className="-mt-1 text-xs md:text-sm font-medium text-gray-600">
              <h1
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cardData?.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
