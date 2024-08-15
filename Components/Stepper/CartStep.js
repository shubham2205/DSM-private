import Image from "next/image";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartStep = () => {
  return (
    <div>
      {/* --------------dekstop view------------------------ */}
      <div className="hidden lg:block p-4 bg-white shadow">
        <table className="min-w-full ">
          <thead>
            <tr className="border-b">
              <th className=" border-gray-200 p-2 text-left">Product</th>
              <th className=" border-gray-200 p-2 text-left">Price</th>
              <th className=" border-gray-200 p-2 text-left">Quantity</th>
              <th className=" border-gray-200 p-2 text-left">TOTAL</th>
              <th className=" border-gray-200 p-2 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="my-5 p-2 flex items-center">
                <Image
                  width={700}
                  height={700}
                  src={""}
                  alt="Product"
                  className="w-16 h-16 object-cover mr-2 text-xs"
                />
                <span className="text-gray-500 font-thin">
                  HIW Hi-Waote 6F22 9 Volts High Power Long Life Batteries pack
                  5
                </span>
              </td>
              <td className="my-5p-2  text-left ">₹77</td>
              <td className="my-5p-2  text-left  ">
                <div className="flex justify-start items-end">
                  <button className="flex justify-center  items-center bg-gray-300 p-3 rounded-full w-10 h-10 text-black">
                    −
                  </button>
                  <span className="mx-3 p-3">2</span>
                  <button className="flex justify-center  items-center bg-gray-300 p-3 rounded-full w-10 h-10 text-black">
                    +
                  </button>
                </div>
              </td>
              <td className="my-5 p-2  text-left text-red-600 font-bold">
                ₹153
              </td>
              <td className="my-5 p-2  text-center">
                <button className=" bg-slate-900 p-3 rounded-full text-white hover:bg-primary-red transition-all">
                  {/* <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg> */}
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
            <tr>
              <td
                className="border-t border-gray-200 p-2 text-left text-gray-500"
                colSpan="4"
              >
                Subtotal
              </td>
              <td className="border-t border-gray-200 p-2 text-right  font-semibold">
                ₹153
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* -------------------- mobile-view------------ */}
      <div className="lg:hidden bg-white shadow p-3">
        <div className="flex gap-5">
          <Image
            width={700}
            height={700}
            src={""}
            alt="Product"
            className="w-16 h-16 object-cover mr-2 text-xs"
          />
          <p className="text-gray-500 font-thin text-xs">
            HIW Hi-Waote 6F22 9 Volts High Power Long Life Batteries pack 5
          </p>
        </div>

        <div className="flex gap-10 ">
          <div className="price">
            <p className="capitalize text-sm text-gray-500">Price</p>
            <p className=" font-bold">77</p>
          </div>
          <div className="total">
            <p className="capitalize text-sm text-gray-500 ">Total</p>
            <p className="text-primary-red font-bold">153</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 ">
          <div className="flex  justify-between items-center">
            <button className="flex justify-center  items-center bg-gray-300 p-2 rounded-full w-8 h-8 text-black">
              −
            </button>
            <span className="mx-3 p-2 qty">2</span>
            <button className="flex justify-center  items-center bg-gray-300 p-2 rounded-full w-8 h-8 text-black">
              +
            </button>
          </div>
          <div className="">
            <button className=" bg-slate-900 p-2 rounded-full text-white hover:bg-primary-red transition-all">
              <FaRegTrashAlt className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartStep;
