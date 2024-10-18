"use client";

import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../../Slider/SliderPerview1";

const HomeBanner = ({ data }) => {
  let height = "md:h-[21rem]";
  return (
    <div className=" w-full h-full ">
      <Slider slidepre={1} hei={height}>
        {data &&
          data?.length > 0 &&
          data?.map((item, i) => (
            <SwiperSlide key={i} className="w-full h-full object-contain  ">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}/${item}`}
                width={1000}
                height={1000}
                className="w-full h-full"
                alt="banner"
              />
            </SwiperSlide>
          ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
