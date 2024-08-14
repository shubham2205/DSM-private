"use client";

import React, { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import ReactImageMagnifier from "simple-image-magnifier/react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Modal from "../Modal";
import ItemAddPopUp from "./ItemAddPopUp";
const AddToCartPopUp = ({ setIsAddToCartPppUp }) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isItemAddPopUp, setIsItemAddPopUp] = useState(false);

  //--------For Tabs Start---------
  const [imgActive, setImgActive] = useState(0);

  const previews = [
    { src: "/Images/productdetailimg1.png" },
    { src: "/Images/productdetailimg2.png" },
    { src: "/Images/productdetailimg3.png" },
    { src: "/Images/productdetailimg4.png" },
  ];
  const originals = [
    "/Images/productdetailimg1.png",
    "/Images/productdetailimg2.png",
    "/Images/productdetailimg3.png",
    "/Images/productdetailimg4.png",
  ];

  console.log(imgActive);

  useEffect(() => {
    let interval;

    if (isAutoPlay) {
      interval = setInterval(() => {
        setImgActive((prevImgActive) => (prevImgActive + 1) % previews.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [previews.length, isAutoPlay]);

  const handleImageClick = (index) => {
    setImgActive(index);
    setIsAutoPlay(false);
  };

  return (
    <>
      <Modal
        open={isItemAddPopUp}
        onclose={setIsItemAddPopUp}
        width={"w-[90%] md:w-[30rem]"}
        height={"h-auto"}
      >
        <ItemAddPopUp />
      </Modal>

      {/*----------------Section First Product and Price Start--------------------------- */}
      <section className=" px-2 md:px-4   w-full mt-4">
        <div className="grid lg:grid-cols-7 gap-4">
          {/*------------------- Left Side Sidebar for images  -----------------------*/}
          <div className=" lg:col-span-3 mt-5 ">
            <div className="flex flex-col items-center justify-center">
              <div className=" w-full grid grid-cols-1 md:grid-cols-5 gap-2 ">
                {/* ----Four Swiper Map----- */}
                <div className="md:col-span-1 order-1">
                  <div className="flex flex-row md:flex-col justify-center  gap-1  ">
                    {previews.map((item, i) => {
                      return (
                        <div key={i}>
                          <Image
                            key={"preview-" + i}
                            src={item.src}
                            alt="previews"
                            width={100}
                            height={100}
                            className={`object-cover w-14 h-14  rounded cursor-pointer ${
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
                </div>

                {/*-----Product image Magnifier----  */}
                <div className=" md:col-span-4  md:order-1">
                  <div className="relative ">
                    <div className=" md:h-[15rem]  object-cover">
                      <ReactImageMagnifier
                        srcPreview={previews[imgActive].src}
                        srcOriginal={originals[imgActive]}
                        className="rounded-lg !w-full !h-full"
                      />
                    </div>
                    <div className="text-[#008000] text-2xl absolute top-3 right-0 z-20">
                      <BsWhatsapp />
                    </div>

                    {/* -----------------------Pagination Bullets Start----------------------- */}
                    {/* <div className="flex gap-1 absolute left-[40%] lg:left-2/4">
                    {previews.map((item, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                          imgActive === i ? "bg-primary-red" : "bg-gray-200"
                        }`}
                        onClick={() => handleImageClick(i)}
                      />
                    ))}
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------Right Side Main product details --------------- */}
          <div className=" lg:col-span-4 p-2  md:p-8 rounded-lg ">
            <h1 className="text-black text-xl  mt-2 lg:mt-0">
              Bluetooth 4.0 Audio Receiver With Stereo Power Amplifier
            </h1>

            {/*----Price--- */}
            <div className="mb-2 flex gap-14 mt-4">
              <div className="text-light-gray-header text-sm"> Price:</div>
              <div className="flex gap-2 items-center">
                <div className="line-through text-gray-500">₹ 199 /pc</div>
              </div>
            </div>
            {/* -----Discounted Price------ */}

            <div className=" flex gap-4 mb-4">
              <div className="text-sm  text-light-gray-header">
                Discounted Price:
              </div>
              <div className="text-red-600 text-2xl font-semibold ">
                105
                <span className="text-sm text-gray-400">/pc</span>
              </div>
            </div>
            <hr className="mb-4" />

            <div className="mb-4 flex flex-col md:flex-row md:items-center md:gap-[4.5rem]">
              <div className=" text-light-gray-header text-sm">Quantity:</div>
              <div className="flex items-center mt-2">
                <button className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]">
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center mx-2 text-black bg-white outline-none"
                  value={1}
                />
                <button className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]">
                  +
                </button>
                <span className="ml-2 text-gray-400 text-sm font-extralight">
                  (20 available)
                </span>
              </div>
            </div>

            <hr className="mb-4" />

            <div className=" flex gap-14 mb-4">
              <div className="text-sm mb-4 text-light-gray-header mt-2">
                Total Price:
              </div>
              <span className="text-primary-red text-2xl font-semibold">
                ₹105
              </span>
            </div>

            <button
              onClick={() => {
                setIsItemAddPopUp(true);
                // setIsAddToCartPppUp(false)
              }}
              className="bg-red-600 text-nowrap text-white px-8 lg:px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center"
            >
              <div className="flex items-center gap-1">
                <LiaShoppingCartSolid />
                <p>Add to cart</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCartPopUp;
