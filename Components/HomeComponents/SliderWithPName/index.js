"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import SliderPerview3 from "../../Slider/SliderPerview3";
import ProductCardWithOnlyName from "../../Cards/ProductCardWithOnlyName";

const SliderWithPName = ({ data }) => {
  return (
    <div className="w-full">
      <div>
        <SliderPerview3 slidepre={8} spacebet={20}>
          {data &&
            data?.length > 0 &&
            data?.map((cardData, index) => {
              return (
                <SwiperSlide key={index} className=" ">
                  <Link
                    href={`/categorie/${index}`}
                    className="hover:shadow-custom cursor-pointer"
                  >
                    <ProductCardWithOnlyName cardData={cardData} />
                  </Link>
                </SwiperSlide>
              );
            })}
        </SliderPerview3>
      </div>
    </div>
  );
};

export default SliderWithPName;
