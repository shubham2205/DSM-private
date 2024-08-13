"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/free-mode";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderWithoutButton = ({
  children,
  slidepre = 1,
  spacebet = 10,
  hei = "h-auto",
}) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={true}
        spaceBetween={spacebet}
        slidesPerView={slidepre}
        loop={Infinity}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: slidepre,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: slidepre,
            spaceBetween: 20,
          },
        }}
        className={`mySwiper ${hei}`}
      >
        {children}
      </Swiper>
    </>
  );
};

export default SliderWithoutButton;
