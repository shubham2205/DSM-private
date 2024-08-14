"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import SliderPerview2 from "../../Slider/SliderPerview2";
import ProductCard from "../../Cards/ProductCard";

const FeatureCardSlider = ({ title, btn, data }) => {
  // console.log(data  , "feture data")
  // const currentPageData = Array(20).fill({
  //   discount: 50,
  //   originalPrice: 99,
  //   discountedPrice: 50,
  //   rating: "★★★★☆",
  //   description: "Multitec 150b Wire Stripper and Cutter",
  //   imgSrc: "/Images/wire.jpg",
  // });
  return (
    <div className="w-full bg-white pt-3 lg:pt-0  px-2 md:p-5 my-6 ">
      <div className=" pt-3">
        <div className="text-black flex justify-between items-center w-full   ">
          <h1 className="font-bold border-b-2 text-[13px]   border-primary-red pb-4">
            {title}
          </h1>
          {btn && (
            <button className="bg-primary-red px-3 py-1 rounded-sm text-white">
              {btn}
            </button>
          )}
        </div>
        <hr className="mb-5" />
      </div>
      <div>
        <SliderPerview2 slidepre={6} spacebet={20}>
          {data?.map((cardData, index) => {
            return (
              <SwiperSlide key={index} className="">
                <Link href={`/product/${cardData?.id}`}>
                  <ProductCard cardData={cardData} />
                </Link>
              </SwiperSlide>
            );
          })}
        </SliderPerview2>
      </div>
    </div>
  );
};

export default FeatureCardSlider;
