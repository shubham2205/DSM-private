import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import SliderWithoutButton from "@/components/Slider/SliderWithoutButton";
import SocialMediaContact from "@/components/SocialMediaContact/SocialMediaContact";
import { singleCardData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SwiperSlide } from "swiper/react";

const VisitStore = () => {
  const [activeTab, setActiveTab] = useState("storehome");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Section First Start */}
      <div className="bg-white">
        <section className="rounded-lg flex gap-5 pt-4 justify-center">
          <div className="w-20">
            <Image
              width={500}
              height={500}
              src={"/Images/robot.jpg"}
              alt="Store profile"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-gray-700">
            <div className="flex gap-4">
              <h2 className="text-xl font-[500]">DSM Online</h2>
              <IoIosCheckmarkCircle className="text-green-700 mt-2" />
            </div>
            <div className="flex gap-1">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500 w-4 h-4"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500 w-4 h-4"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500 w-4 h-4"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500 w-4 h-4"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500 w-4 h-4"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Bhopal Madhya Pradesh - 462022
            </p>
          </div>
        </section>
      </div>

      {/* Section Second Start */}
      <section className="bg-white">
        <div className="text-black">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <ul className="flex gap-3 order-2 space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 bg-white">
              <li className="cursor-pointer">
                <div
                  className={`inline-flex items-center md:px-4 py-3 mt-4 text-nowrap text-xs md:text-sm w-full ${
                    activeTab === "storehome"
                      ? "text-[#333333] border-b-2 border-primary-red"
                      : "text-[#333333]"
                  }`}
                  aria-current={activeTab === "storehome" ? "page" : undefined}
                  onClick={() => handleTabClick("storehome")}
                >
                  Store Home
                </div>
              </li>

              <li className="cursor-pointer">
                <div
                  className={`inline-flex items-center md:px-4 py-3 text-nowrap text-xs md:text-sm w-full ${
                    activeTab === "topselling"
                      ? "text-[#333333] border-b-2 border-primary-red"
                      : "text-[#333333]"
                  }`}
                  aria-current={activeTab === "topselling" ? "page" : undefined}
                  onClick={() => handleTabClick("topselling")}
                >
                  Top Selling
                </div>
              </li>
              <li className="cursor-pointer">
                <div
                  className={`inline-flex items-center md:px-4 py-3 text-nowrap text-xs md:text-sm w-full ${
                    activeTab === "allproduct"
                      ? "text-[#333333] border-b-2 border-primary-red"
                      : "text-[#333333]"
                  }`}
                  aria-current={activeTab === "reviews" ? "page" : undefined}
                  onClick={() => handleTabClick("allproduct")}
                >
                  All Products
                </div>
              </li>
            </ul>
            <div className="order-1 md:order-2 mt-2 md:mt-0 px-2">
              <SocialMediaContact />
            </div>
          </div>
          <hr className="mb-4" />
          <div className="bg-white text-medium rounded-lg">
            {activeTab === "storehome" && (
              <main className="bg-defaultBg">
                {/* Section First Start */}
                <section className="w-full">
                  <Image
                    src={"/Images/visitstorebannerimg.jpg"}
                    width={1000}
                    height={1000}
                    className="w-full object-cover"
                    alt="banner"
                  />
                </section>

                {/* Section Second Start */}
                <section className="mt-8">
                  <div className="text-black flex justify-center items-center w-full pt-2">
                    <h1 className="font-semibold border-b-2 border-primary-red pb-4">
                      Featured Products
                    </h1>
                  </div>
                  <hr className="mb-5" />
                  {/* Desktop Design Start */}
                  <div className="hidden md:block">
                    <div className="grid md:flex md:justify-center grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full">
                      {singleCardData?.slice(0, 3).map((cardData, i) => (
                        <div className="" key={i}>
                          <Link href={`/product/${i}`}>
                            <ProductCard cardData={cardData} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Design Slider Start */}
                  <div className="block md:hidden">
                    <SliderWithoutButton>
                      <div className="grid md:flex md:justify-center grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full">
                        {singleCardData?.slice(0, 3).map((cardData, i) => (
                          <SwiperSlide className="mb-6" key={i}>
                            <Link href={`/product/${i}`}>
                              <ProductCard cardData={cardData} wid={"w-full"} />
                            </Link>
                          </SwiperSlide>
                        ))}
                      </div>
                    </SliderWithoutButton>
                  </div>
                </section>

                {/* Section Third Start */}
                <section className="mt-8">
                  <div className="text-black flex items-center w-full pt-2">
                    <h1 className="font-semibold border-b-2 border-primary-red pb-4">
                      New Arrival Products
                    </h1>
                  </div>
                  <hr className="mb-5" />
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2">
                    {singleCardData?.map((cardData, i) => (
                      <div className="" key={i}>
                        <Link href={`/product/${i}`}>
                          <ProductCard cardData={cardData} wid={"w-full"} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              </main>
            )}
            {activeTab === "topselling" && (
              <div>
                <section className="px-4 mt-8">
                  <div className="text-black flex items-center w-full pt-2">
                    <h1 className="font-semibold border-b-2 border-primary-red pb-4">
                      Top Selling
                    </h1>
                  </div>
                  <hr className="mb-5" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {singleCardData?.map((cardData, i) => (
                      <div className="" key={i}>
                        <Link href={`/product/${i}`}>
                          <ProductCard cardData={cardData} wid={"w-full"} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {activeTab === "allproduct" && (
              <section className="px-4 mt-8">
                <div className="text-black flex items-center w-full pt-2">
                  <h1 className="font-semibold border-b-2 border-primary-red pb-4">
                    All Products
                  </h1>
                </div>
                <hr className="mb-5" />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {singleCardData?.map((cardData, i) => (
                    <div className="" key={i}>
                      <Link href={`/product/${i}`}>
                        <ProductCard cardData={cardData} wid={"w-full"} />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitStore;
