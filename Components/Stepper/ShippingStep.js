"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import Modal from "../Modal";
import SearchDropdown from "../SearchDropdown";
import { Card } from "../../lib/actions/cart.actions";
import { toast } from "react-toastify";
import {
  addressDelete,
  createAddress,
  getAllCity,
  getAllCountry,
  getAllPincode,
  getAllStates,
  updateAddress,
} from "../../lib/actions/address.actions";

const ShippingStep = ({ data, userId }) => {
  const [isModalEditAddress, setIsModalEditAddress] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const fileInputRef = useRef(null);

  const [selectAddIndex, setSelecteAddIndex] = useState(0);
  const [selectAddress, setSelectAddress] = useState(null);
  const [addUpdate, setAddUpdate] = useState(false);
  const [allCountry, setAllCountry] = useState(null);
  const [allStates, setAllStates] = useState(null);
  const [allCity, setAllCity] = useState(null);
  const [allPincode, setAllPincode] = useState(null);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Fetch countries
  useEffect(() => {
    const getCountry = async () => {
      try {
        const result = await getAllCountry();
        if (result.result) {
          setAllCountry(result);
        } else {
          setAllCountry(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCountry();
  }, []);

  // Fetch states
  useEffect(() => {
    const getStates = async () => {
      try {
        const result = await getAllStates(selectedCountry);
        if (result.result) {
          setAllStates(result);
        } else {
          setAllStates(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getStates();
  }, [selectedCountry]);

  // Fetch cities
  useEffect(() => {
    const getCity = async () => {
      try {
        const result = await getAllCity(selectedState);
        if (result.result) {
          setAllCity(result);
        } else {
          setAllCity(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCity();
  }, [selectedState]);

  // Fetch pincodes
  useEffect(() => {
    const getPincode = async () => {
      try {
        const result = await getAllPincode(selectedCity);
        if (result.result) {
          setAllPincode(result);
        } else {
          setAllPincode(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPincode();
  }, [selectedCity]);

  // Reset form when adding a new address or edit the existing address
  useEffect(() => {
    if (addUpdate) {
      setSelectedCountry("");
      setSelectedState("");
      setSelectedCity("");
      setSelectedPincode("");
      setAddress("");
      setNumber("");
      setSelectedArea("");
      setEmail("");
    } else {
      setSelectedCountry(selectAddress?.country);
      setSelectedState(selectAddress?.state);
      setSelectedCity(selectAddress?.city);
      setSelectedPincode(selectAddress?.postal_code);
      setAddress(selectAddress?.address);
      setNumber(selectAddress?.phone);
      setSelectedArea(selectAddress?.area);
      setEmail(selectAddress?.email);
    }
  }, [addUpdate, selectAddress]);

  // Update the address
  const addressUpdate = async () => {
    const formData = new FormData();
    formData.append("id", selectAddress?.id);
    formData.append("country", selectedCountry);
    formData.append("state", selectedState);
    formData.append("city", selectedCity);
    formData.append("pincode", selectedPincode);
    formData.append("address", address);
    formData.append("phone", number);
    formData.append("area", selectedArea);
    formData.append("email", email);

    const result = await updateAddress(formData);
    if (result.result) {
      toast.success(result.message);
      setIsModalEditAddress(false);
    } else {
      toast.error(result.message);
    }
  };

  // Add a new address
  const addAddress = async () => {
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("country", selectedCountry);
    formData.append("state", selectedState);
    formData.append("city", selectedCity);
    formData.append("pincode", selectedPincode);
    formData.append("address", address);
    formData.append("phone", number);
    formData.append("area", selectedArea);
    formData.append("email", email);

    const result = await createAddress(formData);
    if (result.result) {
      toast.success(result.message);
      setIsModalEditAddress(false);
    } else {
      toast.error(result.message);
    }
  };

  // Delete an address
  const deleteAddress = async (id) => {
    try {
      const result = await addressDelete(id);
      if (result.result) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Select address to be default
  // const handleAddressSelect = (index) => {
  //   setDefaultAddressIndex(index);
  // };

  const countryList =
    (allCountry?.countries && allCountry?.countries?.map((ele) => ele.name)) ||
    [];
  const statesList =
    (allStates?.states && allStates?.states?.map((ele) => ele?.name)) || [];
  const cityList =
    (allCity?.cities && allCity?.cities?.map((ele) => ele?.name)) || [];
  const pincodeList =
    (allPincode?.pincodes &&
      allPincode?.pincodes?.map((ele) => String(ele?.code))) ||
    [];

    const handleAddressSelect = (index) => {
      setDefaultAddressIndex(index); 
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
          <h2 className="text-2xl px-4 py-2">
            {addUpdate ? "New" : "Update"} Address
          </h2>
          <hr />
          <div className="flex items-center justify-center  ">
            <div className="bg-white p-3 lg:p-8 rounded-lg  w-full max-w-md">
              <form>
                {/* First Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between ">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                      options={countryList}
                      selectedOption={selectedCountry || "Country"}
                      setSelectedOption={setSelectedCountry}
                    />
                  </div>
                </div>

                {/* Third Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">State</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={statesList}
                      selectedOption={selectedState || "State"}
                      setSelectedOption={setSelectedState}
                    />
                  </div>
                </div>
                {/* <div className="relative w-[80%] md:left-[5.5rem] lg:left-[5rem] flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">
                    <input
                      type="checkbox"
                      className="checkbox mr-2 w-[14px] h-[14px] rounded border-gray-400 "
                    />
                    Click Only if City Not Found
                  </label>
                </div> */}

                {/* Fourth Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">City</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={cityList}
                      selectedOption={selectedCity || "City"}
                      setSelectedOption={setSelectedCity}
                    />
                  </div>
                </div>

                {/* Fift Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Pin Code</label>
                  <div className="w-full md:w-[80%]">
                    <SearchDropdown
                      options={pincodeList}
                      selectedOption={selectedPincode || "Pincode"}
                      setSelectedOption={setSelectedPincode}
                    />
                  </div>
                </div>

                {/* Sixth Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between ">
                  <label className="block text-gray-700 mb-2">Area</label>
                  <textarea
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    type="text"
                    className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your Area"
                  ></textarea>
                </div>

                {/* Seventh Input */}
                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-4 flex flex-col md:flex-row  justify-between">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className=" w-full md:w-[80%]  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (addUpdate) {
                        addAddress();
                      } else {
                        addressUpdate();
                      }
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  >
                    {addUpdate ? "Add" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      }
      <div className="flex justify-center items-center">
        <div className="flex gap-4 flex-wrap bg-white lg:w-[70%] shadow p-2 lg:p-6 ">
          {/* {data?.map((ele, i) => (
            <div
              key={i}
              className="border w-full lg:w-[49%] border-red-400 rounded lg:p-1 relative"
            >
              <div
                className="text-right"
                onClick={() => {
                  setSelecteAddIndex(i);
                  if (selectAddIndex === i) {
                    setIsHovered(!isHovered);
                  }
                }}
              >
                <button className="absolute right-0 ">
                  <HiOutlineDotsVertical />
                </button>
                {isHovered && selectAddIndex === i && (
                  <div className="absolute top-0 right-0 mt-8 p-2 bg-white border rounded shadow-lg">
                    <button
                      onClick={() => {
                        setSelectAddress(ele);
                        setAddUpdate(false);
                        setIsModalEditAddress(true);
                      }}
                      className="block text-gray-700 hover:bg-gray-100 text-left xl:w-40 py-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteAddress(ele?.id);
                      }}
                      className="block text-gray-700 hover:bg-gray-100 text-left xl:w-40 py-1"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-start mb-2">
                <input
                  type="radio"
                  className="appearance-none w-4 h-4 border-2 bg-white border-red-500 rounded-full"
                  checked={defaultAddressIndex === i} // Check if this address is the default
                  onChange={() => handleAddressSelect(i)} // Set this address as the default when selected
                />
                <div className="ml-2">
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Address:</span>{" "}
                    {ele?.address}
                  </p>
                  <p className="text-sm font-semibold capitalize">
                    <span className="text-gray-500 text-xs">Pin Code:</span>{" "}
                    {ele?.postal_code}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">City:</span>{" "}
                    {ele?.city}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">State:</span>{" "}
                    {ele?.state}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Country:</span>{" "}
                    {ele?.country}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Phone:</span>{" "}
                    {ele?.phone}
                  </p>
                </div>
              </div>
            </div>
          ))} */}

          {data?.map((ele, i) => (
            <div
              key={i}
              className="border w-full lg:w-[49%] border-red-400 rounded lg:p-1 relative"
            >
              <div className="flex items-start mb-2">
                <input
                  type="radio"
                  className="appearance-none w-4 h-4 border-2 bg-white border-red-500 rounded-full checked:bg-blue-500 "
                  checked={defaultAddressIndex === i} 
                  onChange={() => handleAddressSelect(i)} 
                />
                <div className="ml-2">
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Address:</span>{" "}
                    {ele?.address}
                  </p>
                  <p className="text-sm font-semibold capitalize">
                    <span className="text-gray-500 text-xs">Pin Code:</span>{" "}
                    {ele?.postal_code}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">City:</span>{" "}
                    {ele?.city}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">State:</span>{" "}
                    {ele?.state}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Country:</span>{" "}
                    {ele?.country}
                  </p>
                  <p className="text-sm font-semibold capitalize my-1">
                    <span className="text-gray-500 text-xs">Phone:</span>{" "}
                    {ele?.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* ---------------right side------- */}
          <div
            className="border w-full lg:w-[49%]  border-gray-200 rounded flex items-center justify-center p-4 cursor-pointer"
            onClick={() => {
              setAddUpdate(true);
              setIsModalEditAddress(true);
            }}
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
