"use client";

import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { TiSupport } from "react-icons/ti";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import MobileStickyFooter from "./MobileFooter";
import SocialMediaContact from "../SocialMediaContact";

const Footer = ({ setting }) => {
  return (
    <>
      <MobileStickyFooter />
      <div className="w-full bg-white mt-5 ">
        <div className="bg-[#111723]">
          <div className="footer-top Policy-link flex justify-center items-center">
            <div className="grid grid-cols-2 xl:grid-cols-4  px-1 xl:px-6 w-full h-auto bg-white">
              <Link href={`/termsCondition`}>
                <div className="flex flex-col items-center ring-1 min-w-36 h-30 py-7 ring-gray-200">
                  <FaFileAlt className="text-primary-red text-3xl" />

                  <span className="mt-2 text-gray-700">Terms & Conditions</span>
                </div>
              </Link>
              <Link href={`/returnPolicy`}>
                <div className="flex flex-col items-center ring-1 min-w-36 h-30 py-7 ring-gray-200">
                  <RiArrowGoBackLine className="text-primary-red text-3xl" />
                  <span className="mt-2 text-gray-700">Return Policy</span>
                </div>
              </Link>
              <Link href={`/supportPolicy`}>
                <div className="flex flex-col items-center ring-1 min-w-36 h-30 py-7 ring-gray-200">
                  <TiSupport className="text-primary-red text-3xl" />
                  <span className="mt-2 text-gray-700">Support Policy</span>
                </div>
              </Link>
              <Link href={`/privacyPolicy`}>
                <div className="flex flex-col items-center ring-1 min-w-36 h-30 py-7 ring-gray-200">
                  <AiOutlineExclamationCircle className="text-primary-red text-3xl" />
                  <span className="mt-2 text-gray-700">Privacy Policy</span>
                </div>
              </Link>
            </div>
          </div>
          {/* --------------------footer main section------------------------ */}
          <div className="footer-mid w-full  flex justify-center items-center !px-10  !md:px-3">
            <div className="bg-gray-900 text-white pt-10 pb-4 ">
              <div className="container  justify-betwee  lg:mx-auto flex gap-10 px-0 flex-wrap lg:flex-nowrap">
                {/* ----------------1------------------------- */}
                <div className="lg:w-1/3 ">
                  <div className="mb-4">
                    <Image
                      src={"/Images/footerlogo.png"}
                      width={250}
                      height={250}
                      className=""
                      alt="f-logo"
                    />
                  </div>
                  <p
                    className="mb-4 text-sm"
                    dangerouslySetInnerHTML={{
                      __html:
                        setting?.data
                          ?.filter(
                            (ele) => ele?.type === "about_us_description"
                          )
                          ?.map((ele) => ele.value)
                          ?.at(0) || "",
                    }}
                  />

                  <div className="flex items-center my-3">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="p-3 rounded-l-lg bg-gray-100 text-gray-900"
                    />
                    <button className="bg-red-600 p-3 rounded-r-lg">
                      Subscribe
                    </button>
                  </div>
                  <div className=" flex gap-2 lg:gap-0 lg:space-x-4">
                    <Link
                      href={`${setting?.data
                        ?.filter((ele) => ele?.type === "play_store_link")
                        ?.map((ele) => ele.value)
                        ?.at(0)}`}
                    >
                      <Image
                        src={"/Images/google-play.png"}
                        width={150}
                        height={100}
                        alt="Google Play"
                        className="h-12 my-2"
                      />
                    </Link>
                    <Link
                      href={`${setting?.data
                        ?.filter((ele) => ele?.type === "app_store_link")
                        ?.map((ele) => ele.value)
                        ?.at(0)}`}
                    >
                      <Image
                        src={"/Images/app-store.png"}
                        width={150}
                        height={100}
                        alt="app store"
                        className="h-12 my-2"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 lg:flex lg:justify-end ">
                  <div className="flex flex-wrap md:flex-nowrap  w-auto gap-14 ">
                    {/* -------------------col-2---------------- */}
                    <div className="hidden lg:block   lg:w-11/12">
                      <h3 className="text-sm mb-2  font-semibold ">
                        CONTACT INFO
                      </h3>
                      <hr className="ring-0  ring-white mb-3 mt-1" />
                      <p className="text-footer-gray-txt text-xs">
                        <span className="text-footer-light-gray-txt ">
                          {" "}
                          Address:
                        </span>
                        <br />
                        {setting?.data
                          ?.filter((ele) => ele?.type === "contact_address")
                          ?.map((ele) => ele.value)
                          ?.at(0)}
                      </p>
                      <p className="text-footer-gray-txt">
                        <span className="text-footer-light-gray-txt">
                          {" "}
                          Phone:
                        </span>
                        <br />{" "}
                        {setting?.data
                          ?.filter((ele) => ele?.type === "contact_phone")
                          ?.map((ele) => ele.value)
                          ?.at(0)}
                      </p>
                      <p className="text-footer-gray-txt">
                        <span className="text-footer-light-gray-txt">
                          {" "}
                          Email:
                        </span>
                        <br />
                        {setting?.data
                          ?.filter((ele) => ele?.type === "contact_email")
                          ?.map((ele) => ele.value)
                          ?.at(0)}
                      </p>
                    </div>

                    {/* ------accordian------- */}

                    <div className="block lg:hidden w-full bg-green-5  lg:mt-24">
                      <div className="divide-y divide-gray-100">
                        <details className="group" open>
                          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            Contact Info
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="block h-5  group-open:hidden"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="hidden h-5 w-5 group-open:block"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </div>
                          </summary>
                          <div className="pb-4 xl:pb-0 text-secondary-500">
                            <p className="text-footer-gray-txt">
                              <span className="text-footer-light-gray-txt">
                                {" "}
                                Address:
                              </span>
                              <br />{" "}
                              {setting?.data
                                ?.filter(
                                  (ele) => ele?.type === "contact_address"
                                )
                                ?.map((ele) => ele.value)
                                ?.at(0)}
                            </p>
                            <p className="text-footer-gray-txt">
                              <span className="text-footer-light-gray-txt">
                                {" "}
                                Phone:
                              </span>
                              <br />{" "}
                              {setting?.data
                                ?.filter((ele) => ele?.type === "contact_phone")
                                ?.map((ele) => ele.value)
                                ?.at(0)}
                            </p>
                            <p className="text-footer-gray-txt">
                              <span className="text-footer-light-gray-txt">
                                {" "}
                                Email:
                              </span>
                              <br />{" "}
                              {setting?.data
                                ?.filter((ele) => ele?.type === "contact_email")
                                ?.map((ele) => ele.value)
                                ?.at(0)}
                            </p>

                            <SocialMediaContact />
                          </div>
                        </details>
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            Help Section
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="block h-5 w-5 group-open:hidden"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="hidden h-5 w-5 group-open:block"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </div>
                          </summary>
                          <div className="pb-4 text-secondary-500">
                            <ul className="text-gray-500 text-sm font-semibold leading-7">
                              <li>
                                <Link
                                  href={`/faq`}
                                  className="ho  hover:text-gray-400 "
                                >
                                  FAQs
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`/aboutus`}
                                  className="h  hover:text-gray-400  "
                                >
                                  About us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`/termsCondition`}
                                  className="ho  hover:text-gray-400 "
                                >
                                  Terms of Use
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`/privacyPolicy`}
                                  className="h  hover:text-gray-400  "
                                >
                                  Privacy Policy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`/returnPolicy`}
                                  className="hover:underline "
                                >
                                  Return Policy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`/shippingAndDelivery`}
                                  className="h  hover:text-gray-400 "
                                >
                                  Shipping and Delivery
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            My Account
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="block h-5 w-5 group-open:hidden"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="hidden h-5 w-5 group-open:block"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </div>
                          </summary>
                          <div className="pb-4 text-secondary-500">
                            <ul className="text-gray-500 text-sm font-semibold leading-7">
                              <li>
                                <Link
                                  href={`/login`}
                                  className="  hover:text-gray-400 "
                                >
                                  Login
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="purchase_history"
                                  className="  hover:text-gray-400 "
                                >
                                  Order History
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="  hover:text-gray-400 "
                                >
                                  My Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="  hover:text-gray-400 "
                                >
                                  Track Order
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="  hover:text-gray-400 "
                                >
                                  Be an affiliate partner
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </details>
                      </div>
                    </div>

                    {/* ----------------col-3------------ */}
                    <div className=" hidden lg:block  lg:w-5/12">
                      <h3 className="text-sm mb-2  font-semibold ">
                        HELP SECTION
                      </h3>
                      <hr className="ring-0  ring-white mb-3 mt-1" />
                      <ul className="text-gray-500 text-sm font-semibold leading-7">
                        <li>
                          <Link
                            href={`/faq`}
                            className="ho  hover:text-gray-400 "
                          >
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/aboutus`}
                            className="h  hover:text-gray-400  "
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/termsCondition`}
                            className="ho  hover:text-gray-400 "
                          >
                            Terms of Use
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/privacyPolicy`}
                            className="h  hover:text-gray-400  "
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/returnPolicy`}
                            className="hover:underline "
                          >
                            Return Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`shippingAndDelivery`}
                            className="h  hover:text-gray-400 "
                          >
                            Shipping and Delivery
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* ----------col-4-------------- */}
                    <div className=" hidden lg:block  lg:w-5/12">
                      <h3 className="text-sm mb-2  font-semibold">
                        MY ACCOUNT
                      </h3>
                      <hr className="ring-0  ring-white mb-3 mt-1" />
                      <ul className="text-gray-500 text-sm font-semibold leading-7">
                        <li>
                          <Link
                            href={`/login`}
                            className="  hover:text-gray-400 "
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="purchase_history"
                            className="  hover:text-gray-400 "
                          >
                            Order History
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="  hover:text-gray-400 ">
                            My Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="  hover:text-gray-400 ">
                            Track Order
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="  hover:text-gray-400 ">
                            Be an affiliate partner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-3 lg:hidden">
                <Link
                  href="#"
                  className="  hover:text-gray-400 text-sm font-semibold"
                >
                  BE A SELLER
                </Link>
                <hr className="ring-0  ring-white mb-3 mt-1" />
                <button className="px-3  py-2 rounded-sm text-sm bg-primary-red">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------footer company name section------------------------------------ */}
          <div className="footer-bottom py-4   bg-[#0d111b] px-4 ">
            <div className="flex justify-center  lg:justify-between  items-center  flex-wrap">
              <div className="company-branding flex w-full lg:w-auto justify-center items-center  text-xs md:text-sm text-center">
                <span
                  className="text-white"
                  dangerouslySetInnerHTML={{
                    __html:
                      setting?.data
                        ?.filter(
                          (ele) => ele?.type === "frontend_copyright_text"
                        )
                        ?.map((ele) => ele.value)
                        ?.at(0) || "",
                  }}
                />
                {/* DSM Online Brand of <br className="md:hidden" />
                  <Link
                    href="https://www.satyakabir.com/"
                    className="text-gray-600 font-[900]"
                  >
                    {setting?.data
                      ?.filter((ele) => ele?.type === "frontend_copyright_text")
                      ?.map((ele) => ele.value)
                      ?.at(0)}
                  </Link>
                </span> */}
              </div>
              <div className="pb-20 md:pb-0">
                <SocialMediaContact data={setting?.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
