"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/free-mode";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SliderPerview3 = ({ children, slidepre, spacebet, hei }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spacebet ? spacebet : 10}
        slidesPerView={slidepre ? slidepre : 1}
        loop={Infinity}
        onSlideChange={() => ""}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
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
        className={`mySwiper ${hei ? hei : "h-auto"}`}
      >
        {children}

        <div className="absolute w-full h-full top-[35%] md:top-[50%]   z-20">
          <div className="swiper-nav-btns flex justify-between gap-4 items-center ">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="text-[#333333] bg-white shadow-custom p-3 rounded-full"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="text-[#333333] bg-white shadow-custom p-3 rounded-full"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default SliderPerview3;
