import RatingStar from "@/components/RatingStar/RatingStar";
import Image from "next/image";
import React, { useState } from "react";

import { BsTrash3 } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import AddToCartPopUp from "@/components/AddToCartPopUp/AddToCartPopUp";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";

const Wishlist = () => {
  const [isAddToCartPppUp, setIsAddToCartPppUp] = useState(false);
  return (
    <>
      <Modal
        open={isAddToCartPppUp}
        onclose={setIsAddToCartPppUp}
        width={"md:w-[60%]"}
        height={" h-[80vh] md:h-[80vh] lg:h-auto"}
      >
        <AddToCartPopUp setIsAddToCartPppUp={setIsAddToCartPppUp} />
      </Modal>
      <div className="flex sm:px-14 mt-12 gap-6">
        <PanelSidebar />

        <section className="w-full  xl:w-4/5 h-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <div className="py-2 ">
              <div
                className={`w-full rounded ring-1 ring-gray-200 overflow-hidden  bg-white hover:shadow-custom ease-in-out duration-200 px-2 `}
              >
                <div className="relative md:p-3">
                  <div className="w-full  lg:h-[13rem]">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                      src={"/Images/wire.jpg"}
                      alt="name"
                    />
                  </div>
                </div>
                <div className=" md:px-4   ">
                  <p> LiPo Rechargeable Battery High-Quality 3.7V 1500 mAh</p>
                  <div className="-my-2">
                    <RatingStar rating={5} />
                  </div>
                  <div className="px-1 md:px-0">
                    <div className="flex items-center justify- gap-3 ">
                      <div className="line-through  text-xs md:text-sm text-gray-500">
                        ₹600
                      </div>
                      <div className="text-xs md:text-smfont-bold text-primary-red">
                        ₹378
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-4 md:px-4 items-center justify-between mb-3">
                  <div
                    className="text-2xl text-gray-500 hover:text-gray-600 col-span-1 tooltip cursor-pointer z-10"
                    data-tip="Remove from wishlist"
                  >
                    <BsTrash3 />
                  </div>

                  <button
                    onClick={() => setIsAddToCartPppUp(true)}
                    className="bg-red-600 text-nowrap col-span-3 text-white py-1 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center"
                  >
                    <div className="flex items-center gap-1">
                      <LiaShoppingCartSolid />
                      <p>Add to cart</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wishlist;
