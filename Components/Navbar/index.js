"use client";

import React, { useEffect, useState, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { LiaHeart, LiaShoppingCartSolid, LiaUserCircle } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { FaRegFaceFrown } from "react-icons/fa6";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Card, removeCard } from "../../lib/actions/cart.actions";
import { toast } from "react-toastify";
import { logOut } from "../../lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { getSubCategory } from "../../lib/actions/category.actions";

const Navbar = ({ carts, token, allCategory, wishlistData }) => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navHamburger, setNavHamburger] = useState(false);

  const placeholders = useMemo(
    () => [
      "Hardware Tool",
      "Display & Touch",
      "Cable and Connectors",
      "Aurdino",
      "Motors",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < placeholders[placeholderIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + placeholders[placeholderIndex][charIndex]
        );
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, placeholderIndex, placeholders]);

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  // const categoryData = {
  //   Sensors: {
  //     subcategories: [
  //       "Gas Sensors",
  //       "IR Sensors",
  //       "Current Sensors",
  //       "Voltage Sensors",
  //       "Other Sensors",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Sensors",
  //   },
  //   Communication: {
  //     subcategories: [
  //       "WiFi Modules",
  //       "Bluetooth Modules",
  //       "RF Modules",
  //       "GSM Modules",
  //     ],
  //     imageSrc: "/Images/banner3.jpg",
  //     buttonText: "Shop Communication",
  //   },
  //   Arduinoo: {
  //     subcategories: [
  //       "Arduino Uno",
  //       "Arduino Nano",
  //       "Arduino Mega",
  //       "Arduino Shields",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Arduino",
  //   },
  //   Sensorss: {
  //     subcategories: [
  //       "Gas Sensors",
  //       "IR Sensors",
  //       "Current Sensors",
  //       "Voltage Sensors",
  //       "Other Sensors",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Sensors",
  //   },
  //   Communicationn: {
  //     subcategories: [
  //       "WiFi Modules",
  //       "Bluetooth Modules",
  //       "RF Modules",
  //       "GSM Modules",
  //     ],
  //     imageSrc: "/Images/banner3.jpg",
  //     buttonText: "Shop Communication",
  //   },
  //   Arduinoa: {
  //     subcategories: [
  //       "Arduino Uno",
  //       "Arduino Nano",
  //       "Arduino Mega",
  //       "Arduino Shields",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Arduino",
  //   },
  //   Sensorsa: {
  //     subcategories: [
  //       "Gas Sensors",
  //       "IR Sensors",
  //       "Current Sensors",
  //       "Voltage Sensors",
  //       "Other Sensors",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Sensors",
  //   },
  //   Communication: {
  //     subcategories: [
  //       "WiFi Modules",
  //       "Bluetooth Modules",
  //       "RF Modules",
  //       "GSM Modules",
  //     ],
  //     imageSrc: "/Images/banner3.jpg",
  //     buttonText: "Shop Communication",
  //   },
  //   Arduino: {
  //     subcategories: [
  //       "Arduino Uno",
  //       "Arduino Nano",
  //       "Arduino Mega",
  //       "Arduino Shields",
  //     ],
  //     imageSrc: "/Images/banner5.jpg",
  //     buttonText: "Shop Arduino",
  //   },

  //   // Add other categories with their respective data here...
  // };

  const removeCart = async (id) => {
    const result = await removeCard(id);
    if (result.result) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  useEffect(() => {
    const SubCategory = async () => {
      try {
        const result = await getSubCategory(hoveredCategory);
        if (result.success) {
          setSubCategory(result?.data);
        } else {
          setSubCategory(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    SubCategory();
  }, [hoveredCategory]);

  return (
    <>
      {/* -----------------nav c end--------------- */}
      <div className="w-full z-[9999] border-b">
        <nav className="w-full px-20 hidden md:flex items-center gap-10 text-black pt-[0.4rem] pb-5 bg-white">
          {/* Logo */}
          <div className=" flex items-center">
            <Link href={`/`}>
              <Image
                src={"/Images/logo.png"}
                width={220}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* --------------------------nav button which open hover menu----------------------------- */}

          {/* Button to trigger category menu */}
          <button
            onMouseEnter={() => setNavHamburger(true)}
            className="bg-gray-200  hidden lg:block text-gray-800 font-semibold py-3 px-2 rounded"
          >
            <div className="flex gap-1">
              <RxHamburgerMenu />

              <IoIosArrowDown />
            </div>
          </button>

          {/* ---------------------------------------------------- */}

          <div className="w-[calc(100%-25%)] flex">
            {/* Search bar */}
            <div className="flex items-center mr-3 w-full">
              <input
                type="text"
                placeholder={displayedText}
                className="w-full px-4 bg-white py-2 border text-black border-gray-300 rounded-l-sm focus:outline-none"
              />
              <button className="px-5 py-[0.64rem] bg-primary-red text-white rounded-r-md hover:bg-red-600">
                <IoIosSearch className="text-xl font-semibold" />
              </button>
            </div>

            {/* Icons */}
            <div
              onMouseLeave={() => setIsProfileOpen(false)}
              className="flex items-center pt-3 space-x-12"
            >
              <div className="flex space-x-6">
                <div className="heart flex justify-center items-center gap-2">
                  <LiaHeart className="text-gray-700 font-semibold text-2xl" />
                  <div>
                    <p className="flex -mb-[0.1rem] items-center justify-center h-[1.13rem] w-[1.50rem] text-sm text-white bg-primary-red rounded-full">
                      {/* 0 */}
                      {wishlistData}
                    </p>

                    <Link href={"/wishlists"}>
                      <span className="text-sm text-light-gray-header">
                        Wishlist
                      </span>
                    </Link>
                  </div>
                </div>

                <div
                  className="relative heart flex justify-center items-center gap-2 z-[90]"
                  onMouseEnter={() => {
                    setIsCartOpen(true);
                    setIsProfileOpen(false);
                  }}
                  onMouseLeave={() => setIsCartOpen(false)}
                >
                  <LiaShoppingCartSolid className="text-gray-700 font-semibold text-2xl cursor-pointer" />
                  <div className="cursor-pointer">
                    <p className="flex -mb-[0.1rem] items-center justify-center h-[1.13rem] w-[1.50rem] text-sm text-white bg-primary-red rounded-full">
                      {carts?.data?.length || 0}
                    </p>
                    <span className="text-sm text-light-gray-header">Cart</span>
                  </div>
                  {isCartOpen && (
                    <>
                      {/* ----------------------if card is empty---------------- */}
                      {/* <div className="absolute right-2 top-full mt-2 w-52 py-5 px-1 bg-white border border-gray-300 rounded shadow-lg z-[9999]">
                      <div className="flex justify-center items-center flex-col">
                        <FaRegFaceFrown className="text-gray-600 text-3xl mb-5" />
                        <p className="text-lg font-semibold">
                          Your cart is empty
                        </p>
                      </div>
                    </div> */}

                      {/* ----------------------if item in cart card---------------- */}
                      <div
                        onMouseLeave={() => setIsCartOpen(false)}
                        className="absolute right-1 top-[85%] mt-2 bg-white px-5 py-4 rounded-lg shadow-lg w-80 max-h-80 overflow-y-auto"
                      >
                        {carts?.data && carts?.data?.length > 0 ? (
                          <>
                            <div className="border-b pb-2 mb-5 ">
                              <h2 className="text-base capitalize font-semibold">
                                Cart Items
                              </h2>
                            </div>
                            {carts?.data &&
                              carts?.data?.length > 0 &&
                              carts?.data?.map((ele, i) => (
                                <div
                                  key={i}
                                  className="flex items-center mb-4 "
                                >
                                  <Image
                                    width={500}
                                    height={500}
                                    src={`${process.env.NEXT_PUBLIC_URL}/${ele?.product_thumbnail_image}`}
                                    alt="Product"
                                    className="w-12 h-12 object-cover"
                                  />
                                  <div className="ml-4 flex-1">
                                    <h3 className="text-sm font-medium">
                                      {ele?.product_name}
                                    </h3>
                                    <div className="text-gray-500">
                                      {ele?.quantity}x {ele?.currency_symbol}
                                      {ele?.price}
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => {
                                      removeCart(ele?.id);
                                    }}
                                    className="text-gray-500 hover:text-red-500"
                                  >
                                    &times;
                                  </button>
                                </div>
                              ))}
                            <div className="flex justify-between items-center border-t border-b py-1 mt-20">
                              <span className="font-thin text-sm text-gray-400">
                                Subtotal
                              </span>
                              <span className="font-semibold">
                                {carts?.sub_total}
                              </span>
                            </div>
                            <div className="flex justify-center gap-3 mt-4">
                              <Link href={"/checkout"}>
                                <button className="bg-[#464444] text-white py-[0.40rem] px-3 rounded-sm">
                                  View cart
                                </button>
                              </Link>

                              <Link href={"/checkout"}>
                                <button className="bg-red-500 text-white py-[0.40rem] px-3 rounded-sm">
                                  Checkout
                                </button>
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div>
                            <p className="text-center">Your Cart is empty</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div
                className="relative flex justify-center items-center pr-4"
                onMouseEnter={() => {
                  setIsProfileOpen(true);
                  setIsCartOpen(false);
                }}
                // onMouseLeave={() => setIsProfileOpen(false)}
              >
                <LiaUserCircle className=" font-semibold text-[1.85rem] cursor-pointer" />
                <IoIosArrowDown className="text-[#c0c1c2] text-md" />
                {isProfileOpen && (
                  <div
                    onMouseLeave={() => setIsProfileOpen(false)}
                    className="absolute right-2 top-[85%] mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
                  >
                    {token ? (
                      <ul className="text-xs text-gray-500 py-1">
                        <Link href={`/dashboard`}>
                          <li className="px-2 py-2 hover:bg-primary-red hover:text-white">
                            My Panel
                          </li>
                        </Link>
                        <li
                          onClick={() => {
                            logOut();
                            router.push("/users/login");
                          }}
                          className="px-2 py-2 hover:bg-primary-red hover:text-white"
                        >
                          Logout
                        </li>
                      </ul>
                    ) : (
                      <ul className="text-xs text-gray-500 py-1">
                        <Link href={`/users/login`}>
                          <li className="px-2 py-2 hover:bg-primary-red hover:text-white">
                            Login
                          </li>
                        </Link>
                        <Link href={`/users/registration`}>
                          <li className="px-2 py-2 hover:bg-primary-red hover:text-white">
                            Registration
                          </li>
                        </Link>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="navba w-full bg-white">
          <div className="md:hidden flex items-center justify-between gap-10 text-black px-4 py-5 bg-white">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={"/Images/logo.png"}
                height={200}
                width={200}
                alt="logo"
              />
            </div>

            <button className="px-4 py-[0.56rem] text-white rounded-r-md hover:bg-red-600">
              <IoIosSearch className="font-semibold text-black text-2xl" />
            </button>
          </div>
        </nav>
      </div>

      {/* ----------------------DropDown Start */}
      <div
        onMouseLeave={() => setNavHamburger(false)}
        className={`${
          navHamburger ? "block" : "hidden"
        } grid grid-cols-12 px-3`}
      >
        {/*left Category Menu */}
        <div className="col-span-3 mt-2 shadow-lg bg-white  z-10">
          <ul className="py-2">
            {allCategory &&
              allCategory?.length > 0 &&
              allCategory?.map((category, index) => (
                <li key={index}>
                  <p
                    className="relative group hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center space-x-2"
                    onMouseEnter={() => setHoveredCategory(category?.id)}
                    // onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <span className="text-gray-800">{category?.name}</span>
                  </p>
                </li>
              ))}
          </ul>
        </div>

        {/* Right Side Content */}
        {hoveredCategory && subCategory?.length > 0 && (
          <div className=" col-span-9 mt-2 bg-white shadow-lg rounded-md z-20">
            <div className="p-4 w-full h-6">
              <div className="text-sm">
                <div className="grid grid-cols-3 gap-5">
                  {subCategory &&
                    subCategory?.length > 0 &&
                    subCategory?.map((sub, subIndex) => (
                      <h3
                        key={subIndex}
                        onClick={() => setNavHamburger(false)}
                        className="cursor-pointer font-semibold pb-2 mb-1 border-b-[1px]"
                      >
                        {sub?.name}
                      </h3>
                    ))}
                </div>
                <div className=" mt-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/${
                      subCategory?.at(0)?.banner
                    }`}
                    alt={hoveredCategory}
                    className="w-full h-60"
                    width={900}
                    height={900}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
