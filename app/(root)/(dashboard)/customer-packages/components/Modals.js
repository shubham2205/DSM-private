"use client";
import React, { useState } from "react";
import Modal from "../../../../../Components/Modal";

const Modals = () => {
  const [isAddNewProduct, setIsAddNewProduct] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsAddNewProduct(true)}
        className="px-6 py-2 text-white rounded-[5px]  bg-primary-red"
      >
        Purchase Package
      </button>
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
    </>
  );
};

export default Modals;
