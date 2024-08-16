"use client";

import React, { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import SearchDropdown from "../../../../Components/SearchDropdown";
import Modal from "../../../../Components/Modal";
import PanelSidebar from "../../../../Components/MyPanel/PanelSidebar";

const Profile = () => {
  const data = ["India", "Pakistan", "china", "Landon", "puri", "brazile"];

  const [open, SetOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const brands = data?.map((brand) => brand) || [];
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [activeTab, setActiveTab] = useState("selectFile");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? file.name : "Choose file");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ------------------------Add Address Form Modal Start---------------------- */}
      <Modal
        open={isModalVisible}
        onclose={setIsModalVisible}
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

      {/* ------------------------Edit Address Form Modal Start---------------------- */}
      <Modal
        open={isEditOpen}
        onclose={setIsEditOpen}
        width={"w-[30rem]"}
        height={"h-[30rem] md:h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Edit Address</h2>
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
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Select Country</option>
                </select>
              </div>

              {/* Third Input */}
              <div className="mb-4 flex flex-col md:flex-row  justify-between">
                <label className="block text-gray-700 mb-2">State</label>
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Nothing selected</option>
                </select>
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
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Nothing selected</option>
                </select>
              </div>

              {/* Fift Input */}
              <div className="mb-4 flex flex-col md:flex-row  justify-between">
                <label className="block text-gray-700 mb-2">Pin Code</label>
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Nothing selected</option>
                </select>
              </div>

              {/* Sixth Input */}
              <div className="mb-4 flex flex-col md:flex-row  justify-between">
                <label className="block text-gray-700 mb-2">Area</label>
                <select className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                  <option>Nothing selected</option>
                </select>
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

      {/* ------------------------Photo Input Flie Modal Start---------------------- */}
      <Modal
        open={isInputOpen}
        onclose={setIsInputOpen}
        width={" md:w-[90%]"}
        height={"h-auto"}
      >
        <div className=" h-full w-full relative ">
          <div className="border-b py-2  px-4 mb-4 flex bg-[#F2F3F8] ">
            <button
              className={`px-4 py-2 mr-2  ${
                activeTab === "selectFile" ? "bg-white" : "border-transparent"
              } `}
              onClick={() => setActiveTab("selectFile")}
            >
              Select File
            </button>
            <button
              className={`px-4 py-2  ${
                activeTab === "uploadNew" ? "bg-white" : "border-transparent"
              } `}
              onClick={() => setActiveTab("uploadNew")}
            >
              Upload New
            </button>
          </div>

          {activeTab === "selectFile" && (
            <div className="flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4 px-4">
                <div className="flex  md:gap-3">
                  {/*-------- Sort By Start */}
                  <div className="">
                    <select className="border rounded p-2 w-[80%] md:w-48 bg-white">
                      <option selected disabled>
                        Sort by{" "}
                      </option>
                      <option>Sort by newest</option>
                      <option>Sort by oldest</option>
                      <option>Sort by smallest</option>
                      <option>Sort by largest</option>
                    </select>
                  </div>

                  {/*-------- Selected Only Start */}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="selectedOnly"
                      name="filter"
                      className="mr-2 "
                    />
                    <label htmlFor="selectedOnly" className="text-sm">
                      Selected Only
                    </label>
                  </div>
                </div>

                {/*----- Search Your File Start-------------*/}
                <div className="">
                  <div className="block md:hidden text-2xl">
                    <RxMagnifyingGlass />
                  </div>
                  <input
                    type="text"
                    placeholder="Search your files"
                    className="w-80 border rounded p-2 bg-white hidden md:block"
                  />
                </div>
              </div>

              {/*---------- Show Here Upload Images Start */}
              <div className="border-t pt-4  text-2xl  h-[60vh] overflow-y-auto">
                {/* No File Come Here Show Error Start */}
                <div className="hidden">
                  <p className="text-center text-gray-500 flex justify-center items-center">
                    No files found
                  </p>
                </div>

                {/* Upload Image Start */}
                <div className="">
                  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-4 gap-2">
                    <div className="w-full border border-gray-300    p-2">
                      <div className="w-full lg:h-[8rem] flex items-center justify-center">
                        <Image
                          width={500}
                          height={500}
                          className="w-full h-full object-contain"
                          src={"/Images/wire.jpg"}
                          alt="name"
                        />
                      </div>
                      <p
                        className="text-sm "
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        productdetailtopsale.png{" "}
                      </p>
                      <p className="text-sm ">225 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "uploadNew" && (
            <div className="border-t pt-4 h-[65vh] overflow-y-auto">
              <div className=" flex items-center justify-center text-3xl h-[65vh] overflow-y-auto">
                <input
                  className=""
                  hidden
                  aria-hidden="true"
                  tabIndex="-1"
                  type="file"
                  name="files[]"
                  multiple
                  ref={fileInputRef}
                />
                <div className="">
                  <div className="">
                    Drop files here, paste or{" "}
                    <button
                      type="button"
                      className="text-[#338ddc]"
                      onClick={handleBrowseClick}
                    >
                      Browse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-[#F2F3F8] ">
            <div className=" w-full flex  justify-between flex-col md:flex-row  items-start md:items-center px-4 py-2 gap-2">
              <div className="flex gap-3 items-center justify-center">
                <div className="">
                  <div className="text-gray-500">0 File selected</div>
                  <div className="text-primary-red">clear</div>
                </div>
                <div>
                  <button className="px-4 py-[5px] mr-2 bg-[#999999] text-white border rounded hover:bg-gray-100">
                    Prev
                  </button>
                  <button className="px-4 py-[5px] bg-[#999999] text-white border rounded hover:bg-gray-100">
                    Next
                  </button>
                </div>
              </div>

              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Add Files
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex sm:px-14 mt-12 gap-6">
        <PanelSidebar />

        <section className="w-full  xl:w-4/5 h-auto">
          {/* --------------------Section First Form Start----------------- */}
          <div className="mt-10 bg-white  shadow-md rounded">
            <h1 className="px-8 py-4">Basic Info</h1>
            <hr />
            <div className="px-8 py-6  w-full ">
              <form onSubmit={handleSubmit}>
                {/* First Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-[5px] text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="md:w-[80%] px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Second Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-[5px] text-sm">
                    Your Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="md:w-[80%] bg-white px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Third Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-[5px] text-sm">
                    Photo
                  </label>
                  <div className="md:w-[80%]  ">
                    <div className=" flex items-cente flex-col gap-3">
                      <div
                        onClick={() => setIsInputOpen(true)}
                        className="md:w-full flex items-center cursor-pointer"
                      >
                        <div className="bg-gray-200 font-medium px-4 py-2 rounded-l-md">
                          Browse
                        </div>

                        <div className=" w-full  px-4 py-2 border border-gray-300 rounded-r-md">
                          Choose file
                        </div>
                      </div>

                      {/* User Profile Select show here */}
                      <div className="w-[7rem] relative border border-gray-300 rounded-sm hidden">
                        <div className="w-full">
                          <div className="w-full h-[3rem] flex items-center justify-center bg-red-500">
                            <Image
                              width={500}
                              height={500}
                              className="w-full h-full object-cover"
                              src={"/Images/banner5.jpg"}
                              alt="name"
                            />
                          </div>

                          <div className=" px-2 py-1">
                            <p
                              className="text-sm  "
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              productdetailtopsale.png{" "}
                            </p>
                            <p className="text-xs text-light-gray-header">
                              225 KB
                            </p>
                          </div>
                        </div>
                        {/* ---Cross Icon Design start */}
                        <div className="bg-[#d8dadb] w-6 h-6 flex justify-center items-center rounded-full text-xs hover:text-primary-red absolute -top-2 -right-2">
                          <RxCross2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fourth Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-[5px] text-sm">
                    Your Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="md:w-[80%] bg-white px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>
                {/* Fifth Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-[5px] text-sm">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="md:w-[80%] bg-white px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className=" bg-red-500 text-white py-2 px-4  rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* -------------------Section Second Address Start---------------- */}
          <div className="p-6 bg-white  flex flex-col mt-6  rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <hr />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4   pt-4 ">
              {/* ----Left Side------ */}
              <div className=" relative">
                <div className=" p-4 rounded-lg border  flex justify-between">
                  {/*------------ Adress Info Show Here Start--------------- */}
                  <div className="">
                    <p>
                      <strong>Address:</strong> 183/1, jain nagar lalghati
                      bhopal
                    </p>
                    <p>
                      <strong>Pin Code:</strong> 462001
                    </p>
                    <p>
                      <strong>Area:</strong> Kamla Park
                    </p>
                    <p>
                      <strong>City:</strong> Bhopal
                    </p>
                    <p>
                      <strong>State:</strong> Madhya Pradesh
                    </p>
                    <p>
                      <strong>Country:</strong> India
                    </p>
                    <p>
                      <strong>Phone:</strong> 8770558704
                    </p>
                  </div>
                  {/* --------Default Batch Start-------- */}
                  <div className="absolute  right-8 bottom-4 hidden">
                    <button className="bg-primary-red text-white px-2 rounded text-sm">
                      Default
                    </button>
                  </div>

                  {/* --------Edit Form Three Dots Start-------------- */}
                  <div className=" ">
                    <button
                      onClick={() => SetOpen(!open)}
                      onMouseEnter={() => SetOpen(!open)}
                      className="absolute right-4 top-2  mr-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline"
                    >
                      &#8942;
                    </button>
                    <div
                      className={`absolute right-0 mt-8 bg-white border rounded-lg shadow-lg w-48 ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      <ul>
                        <li
                          onClick={() => setIsEditOpen(true)}
                          className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer"
                        >
                          Edit
                        </li>
                        <li className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer">
                          Make This Default
                        </li>
                        <li className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer">
                          Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------Right Side Add New Address------ */}
              <div onClick={() => setIsModalVisible(true)} className="">
                <button className="w-full p-3 bg-[#F2F3F8] text-light-gray-header rounded-lg flex flex-col justify-center items-center border">
                  <GoPlus className="text-4xl" />
                  Add New Address
                </button>
              </div>
            </div>
          </div>

          {/* ----------------------Section Third Change Your Email Start--------------------- */}
          <div className="w-full  bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold mb-2">Change your email</h2>
            <hr />
            <div className="w-full flex relative items-center my-4 border rounded-md">
              <input
                type="email"
                className="flex-grow p-2  bg-white outline-none "
                placeholder="Your Email"
              />
              <button className="absolute right-0 ml-2 p-2 border border-gray-400 transition-all hover:bg-gray-500 hover:text-white rounded-r ">
                Verify
              </button>
            </div>
            <div className="text-right">
              <button className=" px-4 md:px-6 py-2 md:py-2 bg-red-500 text-white text-sm md:text-md rounded-[4px] hover:bg-red-600 focus:outline-none focus:shadow-outline ">
                Update Email
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};



export default Profile