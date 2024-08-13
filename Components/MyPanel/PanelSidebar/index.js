import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { LiaAtomSolid, LiaFileAlt } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { RxSketchLogo } from "react-icons/rx";
import { TfiDownload } from "react-icons/tfi";
import { VscHome } from "react-icons/vsc";

const PanelSidebar = ({ hide, width, setIsOpen, isOpen }) => {
  const router = useRouter();

  const getActiveClass = (path) => {
    return router.pathname === path ? "!bg-red-200 !border-red-500" : "";
  };
  return (
    <>
      <aside
        className={` ${width ? width : "w-1/5"} h-[30rem] bg-white ${
          hide ? hide : "hidden"
        } xl:block col-span-3  pt-8`}
      >
        {/*---------- User Profile Image Start-------- */}
        <div className="text-center mb-4 ">
          <Image
            className="rounded-full mx-auto w-20 h-20"
            src={"/Images/useravatar.png"}
            alt="Profile"
            width={200}
            height={200}
          />
          <h2 className="text-xl font-semibold mt-2">User Name</h2>
        </div>
        {/* -----------------Router Name Link Start----------- */}
        <div className="space-y-2">
          {/* Dashboard  */}
          <Link href={`/dashboard`}>
            {/* ---------Desktop View---------- */}
            <div className="hidden lg:block ">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white  
                ${getActiveClass("/dashboard")}
                `}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <VscHome />
                  </span>
                  <p className="text-sm text-footer-light-gray-txt ">
                    Dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* --------mobile View--------- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white  
                ${getActiveClass("/dashboard")}
                `}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <VscHome />
                </span>
                <p className="text-sm text-footer-light-gray-txt ">Dashboard</p>
              </div>
            </div>
          </Link>

          {/* Purchase History */}
          <Link href={"/purchasehistory"}>
            {/* -----Desktop View----- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/purchasehistory")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <LiaFileAlt />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Purchase History
                  </div>
                </div>
              </div>
            </div>

            {/*------ Mobile View --------*/}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/purchasehistory")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <LiaFileAlt />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Purchase History
                </div>
              </div>
            </div>
          </Link>

          {/* Downloads */}
          <Link href={"/download"}>
            {/* ----------Desktop view--------- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/download")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <TfiDownload />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Downloads
                  </div>
                </div>
              </div>
            </div>

            {/* ----------Mobile View---------- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/download")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <TfiDownload />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Downloads
                </div>
              </div>
            </div>
          </Link>

          {/* Wishlist */}
          <Link href={"/wishlists"}>
            {/* -----------Desktop View-------- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/wishlists")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <HiOutlineHeart />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Wishlist
                  </div>
                </div>
              </div>
            </div>

            {/* ----------Mobile View--------- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/wishlists")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <HiOutlineHeart />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Wishlist
                </div>
              </div>
            </div>
          </Link>

          {/* Classified Products */}
          <Link href={"/classified_products"}>
            {/* -------Desktop View----------- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/classified_products")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <RxSketchLogo />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Classified Products
                  </div>
                </div>
              </div>
            </div>

            {/* ---------Mobile View-------- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/classified_products")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <RxSketchLogo />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Classified Products
                </div>
              </div>
            </div>
          </Link>

          {/* My Wallet */}
          <Link href={"/wallet"}>
            {/* ---------Desktop View------ */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/wallet")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <MdCurrencyRupee />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    My Wallet
                  </div>
                </div>
              </div>
            </div>

            {/* ------Mobile View------ */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/wallet")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <MdCurrencyRupee />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  My Wallet
                </div>
              </div>
            </div>
          </Link>

          {/* Support Ticket */}
          <Link href={"/support_ticket"}>
            {/* -----------Desktop view--------- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/support_ticket")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <LiaAtomSolid />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Support Ticket
                  </div>
                </div>
              </div>
            </div>

            {/* -------Mobile View----- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/support_ticket")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <LiaAtomSolid />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Support Ticket
                </div>
              </div>
            </div>
          </Link>

          {/* Manage Profile */}
          <Link href={"/profile"}>
            {/* ---------Desktop View-------- */}
            <div className="hidden lg:block">
              <div
                className={`px-8 p-2 cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/profile")}
                `}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                  >
                    <LuUser2 />
                  </div>
                  <div className="text-sm text-footer-light-gray-txt ">
                    Manage Profile
                  </div>
                </div>
              </div>
            </div>

            {/* -------Mobile View------- */}
            <div
              onClick={() => setIsOpen(false)}
              className={`px-8 p-2 lg:hidden cursor-pointer flex items-center justify-between border-l-[3px] border-white gap-2 hover:bg-red-200 hover:!border-red-500 
                 bg-white ${getActiveClass("/profile")}
                `}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                  text-[0.80rem] text-footer-light-gray-txt hover:text-red-500  `}
                >
                  <LuUser2 />
                </div>
                <div className="text-sm text-footer-light-gray-txt ">
                  Manage Profile
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/*--------- Be A Seller btn Start------- */}
        {/* <Link href={"/shops/registeryourshop"}>
          <button className="mt-4 w-full bg-black text-white p-2 rounded-b hover:bg-primary-red transition-all">
            Be a Seller
          </button>
        </Link> */}
      </aside>
    </>
  );
};

export default PanelSidebar;
