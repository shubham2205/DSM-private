import Image from "next/image";
import React from "react";

const PaymentStep = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap xl:flex-nowrap xl:p-8 gap-10">
        <div className="w-full xl:w-3/5 bg-white p-5">
          <h2 className="text-md xl:text-xl   font-semibold mb-4">
            Select a payment option
          </h2>
          <div className="flex justify-center gap-5 items-center  flex-wrap  mb-6">
            <div className=" mb-4   p-4 border border-gray-300 rounded-md text-center cursor-pointer">
              <Image
                src={""}
                width={200}
                height={50}
                alt="PhonePe"
                className="mx-auto mb-2"
              />
              <span className="block text-sm font-medium">PhonePe</span>
            </div>
            <div className=" mb-4   p-4 border border-gray-300 rounded-md text-center cursor-pointer">
              <Image
                src={""}
                width={200}
                height={50}
                alt="Razorpay"
                className="mx-auto mb-2"
              />
              <span className="block text-sm font-medium">Razorpay</span>
            </div>
            <div className=" mb-4   p-4 border border-red-500 rounded-md text-center cursor-pointer">
              <Image
                src={""}
                width={200}
                height={50}
                alt="Cash on Delivery"
                className="mx-auto mb-2"
              />
              <span className="block text-sm font-medium">
                Cash on Delivery
              </span>
            </div>
          </div>

          <div className="flex gap-2 xl:gap-10 justify-center items-center mb-10">
            <div className="line1 h-[0.07rem] w-full bg-gray-300"></div>
            <div className="or text-gray-400">or</div>
            <div className="line2 h-[0.07rem] w-full bg-gray-300"></div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm">
              Your wallet balance : <span className="text-black"> ₹0</span>
            </p>
            <button className="mt-2 bg-gray-300 text-gray-600 py-2 px-4 rounded-md cursor-not-allowed">
              Insufficient balance
            </button>
          </div>
          <textarea
            className="w-full p-2 border bg-white border-gray-300 rounded-md focus:border-red-500 focus:outline-0 focus:outline-red-500"
            placeholder="Order Note"
          ></textarea>
        </div>
        <div className="w-full xl:w-2/5 p-4 bg-gray-50 rounded-md shadow-md divide-y-2">
          <div className="flex justify-between mb-4 ">
            <h2 className="text-md font-semibold ">Summary</h2>
            <div className="bg-primary-red text-white text-sm rounded-md px-2 flex justify-center items-center ">
              <p>1 Items</p>
            </div>
          </div>

          <div className="mb-4 divide-y-2 py-3">
            <div className="flex justify-between">
              <span className="font-medium">Product</span>
              <span className="font-medium">TOTAL</span>
            </div>
            <div className="flex justify-between items-center mt-2  ">
              <div className="w-full justify-between items-center mt-5 flex ">
                <p className="text-sm">
                  HIW Hi-Waote 6F22 9 Volts High Power Long Life Batteries pack
                  5 × 2
                </p>
                <span className="font-bold ml-2 xl:ml-0">₹153</span>
              </div>
            </div>
          </div>
          <div className="mb-4 divide-y-2">
            <div className="flex justify-between py-1">
              <span className="font-medium">Subtotal</span>
              <span>₹153</span>
            </div>
            <div className="flex justify-between mt-2 py-2">
              <span className="font-medium">Total Shipping</span>
              <span>₹35</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold  mb-4 py-1" >
            <span className="text-sm font-bold">TOTAL</span>
            <span>₹188</span>
          </div>
          <div className="flex">
            <input
              type="text"
              className="w-3/4 p-2 border bg-white border-gray-300 rounded-l-md focus:outline"
              placeholder="Have coupon code? Enter here"
            />
            <button className="w-1/4 bg-red-500 text-white p-2 rounded-r-md">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
