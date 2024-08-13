"use client"



import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdBorderAll } from "react-icons/md";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import Link from "next/link";
import Drawer from "../../Drawer";
// import PanelSidebar from "@/Components/PanelSidebar";

const MobileStickyFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* ----------------Drawer Start----------------- */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex px-4 justify-between pt-2">
          <div className="">
            <LiaSignOutAltSolid className="text-2xl" />
          </div>
          <div onClick={() => setIsOpen(false)} className="">
            <IoMdClose size={24} className="text-black" />
          </div>
        </div>

        {/* <PanelSidebar
          hide={"block"}
          width={"w-full"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        /> */}
      </Drawer>

      {/* -------------------------Here Mobile Footer Start---------------- */}
      <div className="md:hidden fixed w-full bottom-0 z-40 shadow-custom">
        <div className="flex  justify-between items-center bg-white shadow px-3 pt-4 pb-2">
          <div className="text-center flex flex-col justify-center items-center">
            <Link href={"/"}>
              <AiOutlineHome className="text-2xl text-gray-400" />
              <p className="text-[0.60rem] font-medium text-gray-400">Home</p>
            </Link>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Link href={"/checkout"}>
              <HiOutlineShoppingBag className="text-2xl text-gray-400" />
              <p className="text-[0.60rem] font-medium text-gray-400">Cart</p>
            </Link>
          </div>
          <div className="text-center  -mt-4">
            <Link href={"/categories"}>
              <div className="bg-red-500 rounded-full w-12 h-12 flex justify-center items-center p-2">
                <MdBorderAll className="text-2xl text-white" />
              </div>
              <p className="text-[0.60rem] font-medium text-gray-400">
                Category
              </p>
            </Link>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Link href={'/wishlists'}>
              <IoMdHeartEmpty className="text-2xl text-gray-400" />
              <p className="text-[0.60rem] font-medium  text-gray-400">
                Wishlist
              </p>
            </Link>
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="text-center flex flex-col justify-center items-center"
          >
            <BiSolidUserCircle className="text-2xl text-gray-500" />
            <p className="text-[0.60rem] font-medium text-gray-400">Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileStickyFooter;
