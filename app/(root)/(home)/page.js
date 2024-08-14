"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import HeroDropdown from "../../../Components/HomeComponents/HeroHoverDropdown/index";
import Banners from "../../../Components/HomeComponents/Banners/index";
import SliderWithPName from "../../../Components/HomeComponents/SliderWithPName/index";
import FeatureCardSlider from "../../../Components/HomeComponents/FeatureCardSlider/index";
import HomeBanner from "../../../Components/HomeComponents/HomeBannerSlider/index";
import TodayDealSection from "../../../Components/HomeComponents/TodayDealSection/index";
import BestSellerSection from "../../../Components/HomeComponents/BestSellerSection/index";
import TopCategories from "../../../Components/HomeComponents/Top12CategoriesSection/index";
import TwoBanner from "../../../Components/HomeComponents/TwoBanner/index";
import Top12Brands from "../../../Components/HomeComponents/Top12Brands/index";
import Loading from "../../../Components/Loading";
import Confetti from "../../../Components/confetti/index";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    data: homeData,
    error: homeError,
    isValidating: homeValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/home`, fetcher);


  // console.log(homeData , "home data")
  
  const {
    data: featuredData,
    error: featuredError,
    isValidating: featuredValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/categories/featured`, fetcher);

  const {
    data: todayDeal,
    error: todayDealError,
    isValidating: todayDealValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/products/todays-deal`, fetcher);

  const {
    data: top12brands,
    error: top12brandsError,
    isValidating: top12brandsValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/brands`, fetcher);

  const {
    data: topCategories,
    error: topCategoriesError,
    isValidating: topCategoriesValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/categories`, fetcher);

  if (
    homeError ||
    featuredError ||
    todayDealError ||
    top12brandsError ||
    topCategoriesError
  )
    return <div>failed to load</div>;
  if (
    (!homeData && !homeError) ||
    (!featuredData && !featuredError) ||
    (!todayDeal && !todayDealError) ||
    (!top12brands && !top12brandsError) ||
    (!topCategories && !topCategoriesError)
  )
  return(
    <div className="flex justify-center items-center">
    <Loading />
  </div>
  )


  // useEffect(() => {
  //   console.log("Data fetched - ", homeData, featuredData, todayDeal, top12brands, topCategories);
  // }, [homeData, featuredData, todayDeal, top12brands, topCategories]);

  console.log(homeData, "HHoommee DDaattaa")
  
    return (
      <main>
        

        <div>
          <div className="w-[98%]">
            <Confetti />
          </div>
          <div className="bg-white">
            <HeroDropdown data={homeData?.data?.category} />
            <HomeBanner data={homeData?.data?.banners?.data?.banner1} />
          </div>
          <SliderWithPName data={featuredData?.data} />
          <TodayDealSection
            data={todayDeal?.data}
            banner={homeData?.data?.banners?.data?.banner1}
          />
          <FeatureCardSlider
            title={"Featured Products"}
            data={homeData?.data?.featured?.data}
          />
          <FeatureCardSlider
            title={"Best Selling"}
            btn={"Top 20"}
            data={homeData?.data?.top_sell?.data}
          />
          <div className="my-6">
            <Banners data={homeData?.data?.banners?.data?.banner2} />
          </div>
          <FeatureCardSlider
            title={"Arduino Board"}
            btn={"Top 20"}
            data={homeData?.data?.category[0].products.data}
          />
          <FeatureCardSlider
            title={"E-Bike Part"}
            btn={"Top 20"}
            data={homeData?.data?.category[1].products.data}
          />
          <FeatureCardSlider
            title={"Arduino"}
            btn={"Top 20"}
            data={homeData?.data?.category[2].products.data}
          />
          <FeatureCardSlider
            title={"Dc Geared Motors"}
            btn={"Top 20"}
            data={homeData?.data?.category[3].products.data}
          />
          <FeatureCardSlider
            title={"Resberry pi"}
            btn={"Top 20"}
            data={homeData?.data?.category[4].products.data}
          />
          <FeatureCardSlider
            title={"Other Components"}
            btn={"Top 20"}
            data={homeData?.data?.category[5].products.data}
          />
          <FeatureCardSlider
            title={"Sensors"}
            btn={"Top 20"}
            data={homeData?.data?.category[6].products.data}
          />
          <FeatureCardSlider
            title={"Drone Motors"}
            data={homeData?.data?.category[7].products.data}
          />
          <FeatureCardSlider
            title={"Jumper Wire"}
            data={homeData?.data?.category[8].products.data}
          />
          <FeatureCardSlider
            title={"Relay Board"}
            data={homeData?.data?.category[9].products.data}
          />
          <FeatureCardSlider
            title={"Jumper Wire"}
            data={homeData?.data?.category[10].products.data}
          />
          <TwoBanner data={homeData?.data?.banners?.data?.banner3} />
          <BestSellerSection data={homeData?.data?.best_seller} />
          <Top12Brands
            title={"Top 12 Brands"}
            btnName={"View All Brands"}
            data={top12brands?.data}
          />
          <TopCategories
            title={"Top 12 Categories"}
            btnName={"View All Sellers"}
            data={topCategories?.data}
          />
        </div>
      </main>
    );
}
