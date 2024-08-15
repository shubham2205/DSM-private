"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Modal from "../../../Modal";

const AddNewProduct = () => {
  const [isAddNewProduct, setIsAddNewProduct] = useState(false);
  return (
    <>
      <Modal
        open={isAddNewProduct}
        onclose={setIsAddNewProduct}
        width={"w-[35rem]"}
        height={"h-auto md:h-auto"}
      >
        <h2 className=" md:text-2xl px-4 py-2">Purchase Your Package</h2>
        <hr />
        <div className="flex items-center justify-center  ">
          <div className="bg-white p-3 lg:p-8 rounded-lg  w-full max-w-md">
            <form>
              {/* First Input */}
              <div className="mb-4 flex flex-col md:flex-row  justify-between">
                <label className="block text-gray-700 mb-2">
                  Payment method<span className="text-primary-red">*</span>
                </label>
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Select Country</option>
                </select>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsAddNewProduct(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <div className="w-full bg-primary-red h-56 grid place-items-center ">
        <h1 className="text-white font-bold text-[2.5rem] text-center">
          Premium Packages for Customers
        </h1>
      </div>

      <div className="grid place-items-center mt-14">
        <div className="bg-white !w-[18rem] sm:w-60 flex flex-col items-center justify-center gap-3 py-4 rounded-md shadow-custom">
          <div className="w-28 h-28">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-contain"
              src={"/Images/wire.jpg"}
              alt="name"
            />
          </div>

          <h6 className="text-[1.50rem]">SMO Plan Wellmee</h6>
          <div className="flex  items-center gap-3">
            <IoMdCheckmark />
            <p className="text-xl">65 Product Upload</p>
          </div>
          <div className="text-sm py-10 font-normal">₹13,618</div>
          <button
            onClick={() => setIsAddNewProduct(true)}
            className="px-6 py-2 text-white rounded-[5px]  bg-primary-red"
          >
            Purchase Package
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
