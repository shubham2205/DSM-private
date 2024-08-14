// import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../../Slider/SliderPerview1";

const HomeBanner = ({ data }) => {
  // const bannerImages = [
  //   "/Images/banner-Img1.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  //   "/Images/banner-Img2.jpg",
  // ];

  // console.log(data, "banner wala data");
  let height = "md:h-[21rem]";
  return (
    <div className=" w-full h-full ">
      <Slider slidepre={1} hei={height}>
        {data?.map((item, i) => (
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
