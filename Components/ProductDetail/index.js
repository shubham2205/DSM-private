"use client";

import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineShopping } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import ReactImageMagnifier from "simple-image-magnifier/react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import RatingStar from "../RatingStar";
import ProductCard from "../Cards/ProductCard";
import Slider from "../Slider/SliderPerview1";
import { toast } from "react-toastify";
import { addToCard } from "../../lib/actions/cart.actions";
import { addToWishlist } from "../../lib/actions/wishlist.action";

const ProductDetail = ({
  data,
  topSeller,
  related,
  relatedItems,
  relatedViews,
  proId,
  userId,
  Tag,
  checkWishlistItem,
}) => {
  const [brandSelectSize, setBrandSelectSize] = useState(1);
  const [sortSelectSize, setSortSelectSize] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const photoLength = data?.at(0)?.photos?.length;

  //--------For Tabs Start---------
  const [imgActive, setImgActive] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  //------------End---------------
  const handleBrandChange = (e) => {
    setBrandSelectSize(1);
  };

  const handleSortChange = (e) => {
    setSortSelectSize(1);
  };

  useEffect(() => {
    let interval;

    if (isAutoPlay) {
      interval = setInterval(() => {
        setImgActive((prevImgActive) => (prevImgActive + 1) % photoLength);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [photoLength, isAutoPlay, data]);

  const handleImageClick = (index) => {
    setImgActive(index);
    setIsAutoPlay(false);
  };

  const addToCart = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    userId && formData.append("user_id", userId);
    userId && formData.append("login", 1);
    formData.append("id", proId);
    formData.append("quantity", quantity);
    // formData.append("variant", quant);

    const result = await addToCard(
      `${process.env.NEXT_PUBLIC_API}/v3/carts/add`,
      formData
    );
    if (result.result) {
      toast.success(result.message);
      // toast.success(result.cart_id);
    } else {
      toast.error(result.message);
    }
  };

  // const handleLikeWishlist = async () => {
  //   try {
  //     await addToWishlist(proId);
  //     Tag;
  //     // console.log("Added");
  //     toast.success("item added to wishlist")
  //   } catch (error) {
  //     console.error("Error in handleLikeWishlist:", error);
  //   }
  // };

  const [isItemInWishlist, setIsItemInWishlist] = useState(false);

  useEffect(() => {
    const checkItem = async () => {
      try {
        const result = await checkWishlistItem(proId);
        setIsItemInWishlist(result?.success);
        setIsItemInWishlist(true);
        toast.success("Added to wishlist");
        Tag;
      } catch (error) {
        console.error("Error checking wishlist item:", error);
      }
    };

    checkItem();
  }, [proId, checkWishlistItem, Tag]);

  const handleCheckWishlist = async () => {
    try {
      if (isItemInWishlist) {
        toast.info("Product is already in the wishlist");
      } else {
        await addToWishlist(proId);
        setIsItemInWishlist(true);
        toast.success("Added to wishlist");
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      toast.error("Error adding product to wishlist");
    }
  };
  return (
    <>
      {/*----------------Section First Product and Price Start--------------------------- */}
      <section className=" px-4  bg-defaultBg w-full">
        <div className="flex flex-col lg:flex-row justify-between bg-white">
          {/*------------------- Left Side Sidebar for images  -----------------------*/}
          <div className="lg:w-[40%] mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row gap-2 w-full">
                <div className="md:flex flex-col gap-2 hidden ">
                  {data?.at(0)?.photos?.map((item, i) => {
                    return (
                      <div key={i}>
                        <Image
                          key={"preview-" + i}
                          src={`${process.env.NEXT_PUBLIC_URL}/${item}`}
                          alt="previews"
                          width={100}
                          height={100}
                          className={`object-cover w-16 h-16  rounded cursor-pointer ${
                            imgActive === i
                              ? "border-2 border-primary-red"
                              : "border-2 border-gray-100"
                          }`}
                          onClick={() => handleImageClick(i)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="relative">
                  <div className=" md:h-[30rem] md:w-[30rem] object-cover">
                    <ReactImageMagnifier
                      srcPreview={`${process.env.NEXT_PUBLIC_URL}/${
                        data?.at(0)?.photos?.[imgActive]
                      }`}
                      srcOriginal={`${process.env.NEXT_PUBLIC_URL}/${
                        data?.at(0)?.photos?.[imgActive]
                      }`}
                      className="rounded-lg !w-full !h-full"
                    />
                  </div>
                  <div className="text-[#008000] text-2xl absolute top-3 right-0 z-20">
                    <BsWhatsapp />
                  </div>
                  <div className="flex gap-1 absolute left-[40%] lg:left-2/4">
                    {data?.at(0)?.photos.map((item, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                          imgActive === i ? "bg-primary-red" : "bg-gray-200"
                        }`}
                        onClick={() => handleImageClick(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------Right Side Main product details --------------- */}
          <div className="lg:w-[55%] p-2 md:ml-8  md:p-8 rounded-lg">
            <h1 className="text-black text-xl mb-4 mt-2 lg:mt-0">
              {data?.at(0)?.name}
            </h1>

            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center">
                <RatingStar rating={data?.at(0)?.rating} />

                <div className="text-gray-500 text-sm ml-1">
                  ({data?.at(0)?.reviews?.reviews?.length} Reviews)
                </div>
              </div>
              {data?.at(0)?.current_stock > 0 ? (
                <button className="bg-[#0ABB75] rounded-2xl px-2 py-[1px]">
                  In stock
                </button>
              ) : (
                <button className="bg-[#ff0000] rounded-2xl px-2 py-[1px] text-white">
                  Out of Stock
                </button>
              )}
            </div>

            <hr className="mb-4" />
            <div className="mb-4 text-[#0ABB75]">
              <span className=" text-black">Category:</span>{" "}
              {data?.at(0)?.category}
            </div>
            <div className="mb-4 text-[#0ABB75]">
              <span className=" text-black">SKU:</span> {data?.at(0)?.sku}
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
              <span className="text-black">MRP Price:</span>&nbsp;&nbsp;&nbsp;
              <span className="line-through text-gray-500">
                {data?.at(0)?.stroked_price}
              </span>
              /{data?.at(0)?.unit}
              <span className="bg-[#6CD6AC] ml-2 px-[6px] py-[2px] rounded-sm text-sm font-semibold">
                {data?.at(0)?.discount_persent} OFF
              </span>
            </div>
            <div className="text-lg mb-4 text-black">
              Discounted Price:
              <span className="text-red-600 text-2xl ">
                {data?.at(0)?.price_high_low} /{data?.at(0)?.unit}
              </span>
            </div>
            <hr className="mb-4" />
            <div className="mb-4 flex flex-col md:flex-row items-center gap-5">
              <span className=" text-black">Quantity:</span>
              <div className="flex items-center mt-2">
                <button
                  disabled={quantity <= 1}
                  onClick={() => {
                    setQuantity(quantity - 1);
                    changeQuantity();
                  }}
                  className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]"
                >
                  -
                </button>
                <button className="mx-6">{quantity}</button>
                <button
                  disabled={data?.at(0)?.current_stock === quantity}
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]"
                >
                  +
                </button>
                <span className="ml-2 text-gray-500">
                  ({data?.at(0)?.current_stock} available)
                </span>
              </div>
            </div>
            <hr className="mb-4" />

            <div className="mb-4 text-black">
              <span className="text-black">Weight:</span> {data?.at(0)?.weight}
            </div>
            <hr className="mb-4" />
            <div className="text-2xl mb-4 text-black">
              Total Price:{" "}
              <span className="text-primary-red">
                {data?.at(0)?.current_stock > 0 && data?.at(0)?.currency_symbol}
                {data?.at(0)?.current_stock > 0
                  ? data?.at(0)?.main_price?.slice(1) * quantity
                  : data?.at(0)?.main_price}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 items-center">
              <button
                onClick={addToCart}
                className="bg-gray-800  text-white px-12 lg:px-4 py-2 rounded-md hover:bg-gray-900 flex justify-center text-nowrap items-center gap-1"
              >
                <div className="flex items-center gap-1">
                  <AiOutlineShopping />
                  <p>Add to cart</p>
                </div>
              </button>
              <button className="bg-red-600 text-nowrap text-white px-8 lg:px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <LiaShoppingCartSolid />
                  <p>Buy Now</p>
                </div>
              </button>
              <button className="bg-blue-600 text-nowrap  text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <LiaShoppingCartSolid />
                  <p>Bulk Order</p>
                </div>
              </button>

              <button onClick={handleCheckWishlist}>
                {isItemInWishlist ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <CiHeart className="text-black text-2xl" />
                )}
              </button>
            </div>

            <div className="flex gap-2 items-center mt-4 mb-8">
              <h5 className="text-gray-btn">Share:</h5>
              <div className="text-white text-xl w-10 h-10 bg-[#0E76E6] flex justify-center items-center">
                <FaRegEnvelope />
              </div>
              <div className="text-white text-xl w-10 h-10 bg-[#0087BA] flex justify-center items-center">
                <TiSocialTwitter />
              </div>
              <div className="text-white text-xl w-10 h-10 bg-[#2D4373] flex justify-center items-center">
                <FaFacebookF />
              </div>
              <div className="text-white text-xl w-10 h-10 bg-[#005983] flex justify-center items-center">
                <FaLinkedinIn />
              </div>
              <div className="text-white text-xl w-10 h-10 bg-[#29A628] flex justify-center items-center">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------Section Second List Of Product Start --------------------------- */}
      <section className="flex text-black w-full">
        {/* ------------------------Left Side Section start */}
        <aside className="w-[27%] p-4 bg-defaultBg px-4 shadow h-screen overflow-y-auto hidden lg:block">
          <div className="bg-white px-4 py-3">
            <h2 className="text-sm mb-1 text-[#AEAEB2]">Sold By</h2>
            <hr />
            <p className="text-md mb-2 ">DSM Online</p>
            <div className="border border-gray-200 rounded-md">
              <div className="flex flex-col justify-center items-center py-2">
                <RatingStar />

                <div className="text-gray-500 text-sm">(0 Reviews)</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 pb-2 px-4  bg-white shadow-lg">
            <p className="py-2 font-semibold ">Top Selling Products</p>
            <hr className="py-2 pb-4" />
            {topSeller &&
              topSeller?.length > 0 &&
              topSeller?.map((ele, i) => (
                <div
                  key={i}
                  className="w-full border-b shadow-sm px-1 flex justify-between items-center gap-2 align-center "
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/${ele?.thumbnail_image}`}
                    width={80}
                    height={80}
                    alt={ele?.name}
                    className="w-40 h-32 object-contain mb-4 "
                  />
                  <div className="w-60">
                    <h2
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                      className="text-sm  mb-2 text-[#5E5E67]"
                    >
                      {ele?.name}
                    </h2>
                    <div className="flex items-center mb-2">
                      {/* Rating stars (for simplicity, use gray stars) */}
                      <div className="flex text-sm">
                        <RatingStar rating={ele?.rating} />
                      </div>
                      <span className="ml-2 text-sm text-white py-[2px] px-1 bg-green-500 font-semibold">
                        {ele?.discount_percent} OFF
                      </span>
                    </div>
                    <div className=" flex gap-2 items-center ">
                      <p className="text-md font-bold text-gray-500 line-through">
                        {ele?.stroked_price}
                      </p>

                      <p className="text-md font-bold text-red-500 ">
                        {ele?.main_price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </aside>
        {/* ----------------------------------right-side section Start------------------------------ */}
        <section className="w-full lg:w-[73%] p-4 bg-defaultBg h-screen  overflow-y-scroll">
          <div className="">
            <div className="bg-defaultBg text-black">
              <div className="bg-white">
                <ul className="flex gap-3 space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 bg-white">
                  <li className="cursor-pointer">
                    <div
                      className={`inline-flex items-center px-4 py-3 mt-4  w-full ${
                        activeTab === "description"
                          ? "text-[#333333] border-b-2 border-primary-red"
                          : "text-[#333333] bg-gray-50"
                      }`}
                      aria-current={
                        activeTab === "description" ? "page" : undefined
                      }
                      onClick={() => handleTabClick("description")}
                    >
                      Description
                    </div>
                  </li>

                  <li className="cursor-pointer">
                    <div
                      className={`inline-flex items-center px-4 py-3  w-full ${
                        activeTab === "reviews"
                          ? "text-[#333333] border-b-2 border-primary-red"
                          : "text-[#333333] bg-gray-50"
                      }`}
                      aria-current={
                        activeTab === "reviews" ? "page" : undefined
                      }
                      onClick={() => handleTabClick("reviews")}
                    >
                      Reviews
                    </div>
                  </li>
                </ul>
                <hr />
                <div className="p-6 bg-white text-medium  rounded-lg ">
                  {activeTab === "description" && (
                    <div className="w-96">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.at(0)?.description || "",
                        }}
                      />
                    </div>
                  )}
                  {activeTab === "reviews" && (
                    <div className="w-full">
                      {data?.at(0)?.reviews?.reviews?.length > 0 ? (
                        <>
                          {data?.at(0)?.reviews?.reviews?.map((ele, i) => (
                            <div
                              className="w-full flex justify-between align-top"
                              key={i}
                            >
                              <div className="w-75 flex gap-4 align-top">
                                <div>
                                  <Image
                                    src={`${ele?.avatar}`}
                                    alt="previews"
                                    width={60}
                                    height={60}
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <p>{ele?.user_name}</p>
                                  <span className="text-gray-500 text-xs">
                                    {new Date(
                                      ele?.created_at
                                    ).toLocaleDateString()}
                                  </span>
                                  <p className="text-gray-600 text-sm">
                                    {ele?.comment}
                                  </p>
                                </div>
                              </div>
                              <div className="w-25">
                                <RatingStar rating={ele?.rating} />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <h1 className="text-black">
                          There have been no reviews for this product yet.
                        </h1>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {related && related?.length > 0 && (
            <div className=" bg-white mt-4 ">
              <h2 className="py-3 px-2 text-sm font-semibold">
                Related products
              </h2>
              <hr />
              <div className="px-2 pb-4">
                <Slider slidepre={4}>
                  <div className="flex">
                    {related?.map((cardData, index) => (
                      <SwiperSlide className="" key={index}>
                        <ProductCard key={index} cardData={cardData} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          )}

          {relatedItems && relatedItems?.length > 0 && (
            <div className=" bg-white mt-4 ">
              <h2 className="py-3 px-2 text-sm font-semibold">
                Related To This Items
              </h2>
              <hr />
              <div className="px-2 pb-4">
                <Slider slidepre={4}>
                  <div className="flex">
                    {relatedItems?.map((cardData, index) => (
                      <SwiperSlide className="" key={index}>
                        <ProductCard key={index} cardData={cardData} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          )}

          {relatedViews && relatedViews?.length > 0 && (
            <div className=" bg-white mt-4 ">
              <h2 className="py-3 px-2 text-sm font-semibold">Recent Views</h2>
              <hr />
              {/* <div className="px-2 pb-4">
              <ProductCard cardData={singleCardData} />
            </div> */}
              <div className="px-2 pb-4">
                <Slider slidepre={4}>
                  <div className="flex">
                    {relatedViews?.map((cardData, index) => (
                      <SwiperSlide className="" key={index}>
                        <ProductCard key={index} cardData={cardData} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default ProductDetail;
