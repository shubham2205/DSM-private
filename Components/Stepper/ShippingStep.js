"use client"

import React, { useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
// import Modal from "../Modal/Modal";
import { FaPlus } from "react-icons/fa6";
// import SearchDropdown from "../SearchDropdown/SearchDropdown";
import Modal from "../Modal";
import SearchDropdown from "../SearchDropdown";

const ShippingStep = () => {
  const data = ["India", "Pakistan", "china", "Landon", "puri", "brazile"];
  const [isModalEditAddress, setIsModalEditAddress] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const brands = data?.map((brand) => brand) || [];
  const fileInputRef = useRef(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* ------------modal for edit address------------------- */}
      {
        <Modal
          open={isModalEditAddress}
          onclose={setIsModalEditAddress}
          width={"w-[30rem]"}
          height={"h-[30rem] md:h-auto"}
        >
          <h2 className="text-2xl px-4 py-2">New Address</h2>
          <hr />
          <div className="flex items-center justify-center  ">
            <div className="bg-white p-3 lg:p-8 rounded-lg  w-full max-w-md">
              <form>
                {/* First Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between ">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    type="text"
                    className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your Address"
                  ></textarea>
                </div>

                {/* Second Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Country</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={brands}
                      selectedOption={selectedCountry}
                      setSelectedOption={setSelectedCountry}
                    />
                  </div>
                </div>

                {/* Third Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">State</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={brands}
                      selectedOption={selectedState}
                      setSelectedOption={setSelectedState}
                    />
                  </div>
                </div>
                <div className="relative w-[80%] md:left-[5.5rem] lg:left-[5rem] flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">
                    <input
                      type="checkbox"
                      className="checkbox mr-2 w-[14px] h-[14px] rounded border-gray-400 "
                    />
                    Click Only if City Not Found
                  </label>
                </div>

                {/* Fourth Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">City</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={brands}
                      selectedOption={selectedCity}
                      setSelectedOption={setSelectedCity}
                    />
                  </div>
                </div>

                {/* Fift Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Pin Code</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={brands}
                      selectedOption={selectedPincode}
                      setSelectedOption={setSelectedPincode}
                    />
                  </div>
                </div>

                {/* Sixth Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Area</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={brands}
                      selectedOption={selectedArea}
                      setSelectedOption={setSelectedArea}
                    />
                  </div>
                </div>

                {/* Seventh Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="text"
                    className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      }
      <div className="flex justify-center items-center">
        <div className="flex gap-4 flex-wrap bg-white lg:w-[70%] shadow p-2 lg:p-6 ">
          <div className="border w-full lg:w-[49%] border-red-400 rounded lg:p-1 relative">
            <div
              className="text-right"
              onMouseEnter={() => setIsHovered(true)}
              onClick={() => setIsHovered(false)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              <button className="absolute right-0 ">
                <HiOutlineDotsVertical />
              </button>
              {isHovered && (
                <div className="absolute top-0 right-0 mt-8 p-2 bg-white border rounded shadow-lg">
                  <button
                    onClick={() => {
                      setIsModalEditAddress(true);
                    }}
                    className="block text-gray-700 hover:bg-gray-100 text-left xl:w-40 py-1"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-start mb-2">
              <input
                type="radio"
                // className="mt-1 text-red-500"
                className="appearance-none w-4 h-4 border-2 bg-white border-red-500 rounded-full"
                checked
                readOnly
              />
              <div className="ml-2">
                <p className="text-sm font-semibold capitalize my-1">
                  <span className="text-gray-500 text-xs">Address:</span> 183/1,
                  jain nagar lalghati bhopal
                </p>
                <p className="text-sm font-semibold capitalize">
                  <span className="text-gray-500 text-xs">Pin Code:</span>{" "}
                  462001
                </p>
                <p className="text-sm font-semibold capitalize my-1">
                  <span className="text-gray-500 text-xs">City:</span> Bhopal
                </p>
                <p className="text-sm font-semibold capitalize my-1">
                  <span className="text-gray-500 text-xs">State:</span> Madhya
                  Pradesh
                </p>
                <p className="text-sm font-semibold capitalize my-1">
                  <span className="text-gray-500 text-xs">Country:</span> India
                </p>
                <p className="text-sm font-semibold capitalize my-1">
                  <span className="text-gray-500 text-xs">Phone:</span>{" "}
                  8770558704
                </p>
              </div>
            </div>
          </div>

          {/* ---------------right side------- */}
          <div
            className="border w-full lg:w-[49%]  border-gray-200 rounded flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsModalVisible(true)}
          >
            <div className="text-gray-500 flex flex-col items-center ">
              <FaPlus />
              <span>Add New Address</span>
            </div>
          </div>
          {
            <Modal
              open={isModalVisible}
              onclose={setIsModalVisible}
              width={"w-[30rem]"}
              height={"h-[30rem] md:h-auto"}
            >
              <h2 className="text-md px-4 py-6">New Address</h2>
              <hr />
              <div className="flex items-center justify-center text-sm ">
                <div className="bg-white p-3 lg:p-8 rounded-lg  w-full max-w-md">
                  <form>
                    {/* First Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between ">
                      <label className="text-sm block text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                        placeholder="Your Address"
                      />
                    </div>

                    {/* Second Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        Country
                      </label>
                      <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Select Country</option>
                      </select>
                    </div>

                    {/* Third Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        State
                      </label>
                      <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Nothing selected</option>
                      </select>
                    </div>
                    <div className="relative w-[80%] md:left-[5.5rem] lg:left-[5rem] flex flex-col md:flex-row justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        <input
                          type="checkbox"
                          className="checkbox mr-2 w-[14px] h-[14px] rounded border-gray-400 "
                        />
                        Click Only if City Not Found
                      </label>
                    </div>

                    {/* Fourth Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        City
                      </label>
                      <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Nothing selected</option>
                      </select>
                    </div>

                    {/* Fift Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        Pin Code
                      </label>
                      <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Nothing selected</option>
                      </select>
                    </div>

                    {/* Sixth Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        Area
                      </label>
                      <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Nothing selected</option>
                      </select>
                    </div>

                    {/* Seventh Input */}
                    <div className="mb-4 flex flex-col md:flex-row  justify-between">
                      <label className="text-sm block text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>
          }
        </div>
      </div>
    </>
  );
};

export default ShippingStep;
