"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import SearchDropdown from "../SearchDropdown";

const DeliveryStep = ({ data }) => {
  const address = [
    "India",
    "Pakistan",
    "china",
    "Landon",
    "puri",
    "brazile",
    "India",
    "Pakistan",
    "china",
    "Landon",
    "puri",
    "brazile",
    "India",
    "Pakistan",
    "china",
    "Landon",
    "puri",
    "brazile",
    "India",
    "Pakistan",
    "china",
    "Landon",
    "puri",
    "brazile",
  ];
  const [deliveryType, setDeliveryType] = useState("localPickup");
  const [selectedCountry, setSelectedCountry] = useState("");

  const brands = address?.map((brand) => brand) || [];
  const fileInputRef = useRef(null);

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full lg:w-3/4 mx-auto relative pb-10 xl:pb-14">
      <h2 className="text-md font-semibold mb-4 border-b pb-3">
        DSM Online Products
      </h2>
      {data?.data &&
        data?.data?.length > 0 &&
        data?.data?.map((ele, i) => (
          <div key={i} className="flex items-center mb-4 pb-6 border-b">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/${ele?.product_thumbnail_image}`}
              height={100}
              width={100}
              alt="Product"
              className="w-12 h-12 mr-4 text-xs"
            />
            <span className="text-gray-700  text-sm">{ele?.product_name}</span>
          </div>
        ))}

      <div className=" flex justify-between flex-wrap">
        <h3 className="text-md font-medium mb-2">Choose Delivery Type</h3>
        <div className="flex mb-4 ">
          <button
            className={`flex items-center border rounded px-4 py-2 mr-2 text-sm font-semibold ${
              deliveryType === "homeDelivery"
                ? "border-red-400 text-red-500"
                : "border-gray-300"
            }`}
            onClick={() => setDeliveryType("homeDelivery")}
          >
            <input
              type="radio"
              name="deliveryType"
              className="mr-2 "
              checked={deliveryType === "homeDelivery"}
              readOnly
            />
            Home Delivery
          </button>
          <button
            className={`flex items-center border rounded px-4 py-2 text-sm font-semibold ${
              deliveryType === "localPickup"
                ? "border-red-400 text-red-500"
                : "border-gray-300"
            }`}
            onClick={() => setDeliveryType("localPickup")}
          >
            <input
              type="radio"
              name="deliveryType"
              className="mr-2"
              checked={deliveryType === "localPickup"}
              readOnly
            />
            Local Pickup
          </button>
        </div>
        {deliveryType === "localPickup" && (
          <div className=" absolute right-0 px-5 xl:px-2 xl:right-6  bottom-2">
            {/* <select className="border border-gray-200 text-sm  rounded px-4 bg-white py-2 w-full">
              <option>Select your nearest pickup point</option>
            </select> */}

            <SearchDropdown
              options={brands}
              selectedOption={selectedCountry}
              setSelectedOption={setSelectedCountry}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryStep;
