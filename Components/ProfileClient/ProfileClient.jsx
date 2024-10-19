"use client";

import React, { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import { RxMagnifyingGlass, RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { UpdateProfile } from "../../lib/actions/profile.actions";
import {
  addressDelete,
  getAllCity,
  getAllCountry,
  getAllPincode,
  getAllStates,
  makeDefaultAddress,
  updateAddress,
  createAddress,
} from "../../lib/actions/address.actions";

const ProfileClient = ({ userDets, addressData, tag }) => {
  const [addresses, setAddresses] = useState(addressData?.data || []);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [formData, setFormData] = useState({
    name: userDets?.name,
    email: userDets?.email,
    phone: userDets?.phone,
    address: userDets?.address,
    city: userDets?.city,
    country: userDets?.country,
  });

  const [message, setMessage] = useState("");
  //-------------   ---------------------------old code--------------------------------
  const [open, SetOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);

  //-------------   -------------------------------------------------------------------------
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState("");
  const [activeTab, setActiveTab] = useState("selectFile");
  //------------- console.log(selectedFile, "photto");

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? file.name : "Choose file");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, "&&&&&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await UpdateProfile(formData);
      toast.success("Profile updated successfully!");
      tag;
    } catch (error) {
      setMessage("Error updating profile. Please try again.");
    }
  };

  //-------------address get
  const handleMakeDefault = async (addressId) => {
    try {
      const formData = new FormData();
      formData.append("user_id", userDets.id);
      formData.append("id", addressId);

      const result = await makeDefaultAddress(formData);
      //------------- console.log("API Result:", result);
      toast.success("Default address set successfully!");
      tag;
    } catch (error) {
      toast.error("Error setting default address");
      console.error("Error setting default address:", error);
    }
  };

  //------------- ------------------------------------------------------------

  const [selectedAddress, setSelectedAddress] = useState();

  // console.log("selectedAddress ID: ", selectedAddress);

  const [address, setAddress] = useState(selectedAddress?.address || "");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [country, setCountry] = useState(selectedAddress?.country || "");
  const [state, setState] = useState(selectedAddress?.state || "");
  const [city, setCity] = useState(selectedAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    selectedAddress?.postal_code || ""
  );
  const [area, setArea] = useState(selectedAddress?.area || "");
  const [phone, setPhone] = useState(selectedAddress?.phone || "");

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountry();
      setCountries(data?.countries || []);
    };
    fetchCountries();
  }, []);

  //------------- states when country select
  useEffect(() => {
    if (country) {
      const fetchStates = async () => {
        const data = await getAllStates(country);
        setStates(data?.states || []);
      };
      fetchStates();
    }
  }, [country]);

  //------------- cities when state select
  useEffect(() => {
    if (state) {
      const fetchCities = async () => {
        const data = await getAllCity(state);
        setCities(data?.cities || []);
      };
      fetchCities();
    }
  }, [state]);

  //------------- pin codes when city select
  useEffect(() => {
    if (city) {
      const fetchPincodes = async () => {
        const data = await getAllPincode(city);
        setPincodes(data?.pincodes || []);
        setArea(data?.area || []);
      };
      fetchPincodes();
    }
  }, [city]);

  //-----------------update address------------

  const handleEditClick = (address) => {
    setSelectedAddress(address);
    setIsEditOpen(true);
    setAddress(address?.address || "");
    setCountry(address?.country || "");
    setState(address?.state || "");
    setCity(address?.city || "");
    setPostalCode(address?.postal_code || "");
    setArea(address?.area || "");
    setPhone(address?.phone || "");
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user_id", userDets?.id);
    data.append("name", name);
    data.append("email", userDets?.email);
    data.append("phone", phone);
    data.append("country", country);
    data.append("state", state);
    data.append("city", city);
    data.append("pincode", postalCode);
    data.append("area", area);
    data.append("address", address);

    try {
      const result = await createAddress(data);
      if (result) {
        toast.success("Address created successfully!");
        setIsModalVisible(false);

        resetForm();
      } else {
        toast.error("Failed to create address");
      }
    } catch (error) {
      toast.error("Error creating address");
      console.error("API Error:", error);
    }
  };

  const handleUpdateAddress = async (e) => {
    e.preventDefault();

    if (!selectedAddress) {
      toast.error("No address selected for update.");
      return;
    }

    const formData = new FormData();
    formData.append("id", selectedAddress?.id);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pincode", postalCode);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("area", area);

    try {
      const result = await updateAddress(formData);
      if (result?.result) {
        toast.success("Address updated successfully!");
        setIsEditOpen(false);
        //------------- Reset form state
        resetForm();
      }
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Error updating address");
    }
  };

  //------------- reset form
  const resetForm = () => {
    setAddress("");
    setCountry("");
    setState("");
    setCity("");
    setPostalCode("");
    setArea("");
    setPhone("");
    setSelectedAddress(null); // Reset selected address
  };

  return (
    <>
      {/* Add Address Form Modal */}
      <Modal
        open={isModalVisible}
        onclose={setIsModalVisible}
        width={"w-[30rem]"}
        height={"h-[30rem] md:h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Create Address</h2>
        <hr />
        <div className="flex items-center justify-center">
          <div className="bg-white p-3 lg:p-8 rounded-lg w-full max-w-md">
            <form onSubmit={handleSaveAddress}>
              {/* Address Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  //------------- onChange={handleChange}

                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your Address"
                  required
                />
              </div>
              {/* Country Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">Country</label>
                <select
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>Select Country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">State</label>
                <select
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>Nothing selected</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">City</label>
                <select
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Nothing selected</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pin Code Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">Pin Code</label>
                <select
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                >
                  <option>Nothing selected</option>
                  {pincodes.map((pincode) => (
                    <option key={pincode.id} value={pincode.code}>
                      {pincode.code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">Area</label>
                <select
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option>Nothing selected</option>
                  {pincodes.map((area) => (
                    <option key={area.id} value={area.area}>
                      {area.area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Input */}
              <div className="mb-4 flex flex-col md:flex-row justify-between">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/* Edit Address Form Modal */}
      <Modal
        open={isEditOpen}
        onclose={setIsEditOpen}
        width={"w-[30rem]"}
        height={"h-[30rem] md:h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Edit Address</h2>
        <hr />
        <div className="flex items-center justify-center">
          <div className="bg-white p-3 lg:p-8 rounded-lg w-full max-w-md">
            {selectedAddress ? (
              <form onSubmit={handleUpdateAddress}>
                {/* Address Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    type="text"
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* Country Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">Country</label>
                  <select
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Select Country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">State</label>
                  <select
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option>Nothing selected</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">City</label>
                  <select
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option>Nothing selected</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pin Code Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">Pin Code</label>
                  <select
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  >
                    <option>Nothing selected</option>
                    {pincodes.map((pincode) => (
                      <option key={pincode.id} value={pincode.code}>
                        {pincode.code}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Area Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">Area</label>
                  <select
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option>Nothing selected</option>
                    {pincodes.map((area) => (
                      <option key={area.id} value={area.area}>
                        {area.area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Input */}
                <div className="mb-4 flex flex-col md:flex-row justify-between">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="text"
                    className="w-full md:w-[80%] px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  >
                    Update Address
                  </button>
                </div>
              </form>
            ) : (
              <p>Loading address data...</p>
            )}
          </div>
        </div>
      </Modal>

      {/* Photo Input File Modal */}
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
                  {/*-------- Sort By Start ---------*/}
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

                  {/* -------- Selected Only Start */}
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

      <section className="w-full xl:w-4/5 h-auto">
        {/* Basic Info Form */}
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
                <div className="md:w-[80%]">
                  <input
                    type="file"
                    id="file-upload"
                    name="file-upload"
                    accept=".jpg, .jpeg, .png, .pdf"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
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
                  //-------------   value={formData.password}
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
                  //-------------   value={formData.confirmPassword}
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

        {/* Address Section */}
        <div className="p-6 bg-white  flex flex-col mt-6  rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <hr />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4   pt-4 ">
            {/* ----Left Side------ */}
            {addressData?.data?.map((address, id) => (
              <div className="relative" key={id}>
                <div className="p-4 rounded-lg border !m-3 flex justify-between">
                  <div>
                    <p>
                      <strong>Address:</strong> {address?.address || "N/A"}
                    </p>
                    <p>
                      <strong>Pin Code:</strong> {address?.postal_code || "N/A"}
                    </p>
                    <p>
                      <strong>Area:</strong> {address?.area || "N/A"}
                    </p>
                    <p>
                      <strong>City:</strong> {address?.city || "N/A"}
                    </p>
                    <p>
                      <strong>State:</strong> {address?.state || "N/A"}
                    </p>
                    <p>
                      <strong>Country:</strong> {address?.country || "N/A"}
                    </p>
                    <p>
                      <strong>Phone:</strong> {address?.phone || "N/A"}
                    </p>
                  </div>

                  <div
                    className={`absolute right-8 bottom-4 ${
                      address?.set_default == 1 ? "" : "hidden"
                    }`}
                  >
                    <button className="bg-primary-red text-white px-2 rounded text-sm">
                      Default
                    </button>
                  </div>

                  <div className="">
                    <button
                      onMouseEnter={() => toggleDropdown(id)}
                      className="absolute right-4 top-2 mr-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline"
                    >
                      &#8942;
                    </button>
                    <div
                      onMouseLeave={() => !toggleDropdown(id)}
                      className={`absolute right-0 mt-8 bg-white border rounded-lg shadow-lg w-48 ${
                        openDropdowns[id] ? "block" : "hidden"
                      }`}
                    >
                      <ul>
                        <li
                          onClick={() =>
                            handleEditClick(address) &&
                            setIsEditOpen(true) &&
                            handleMakeDefault(address.id) &&
                            !toggleDropdown(id)
                          }
                          className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer"
                        >
                          Edit
                        </li>
                        {address?.set_default !== 1 && (
                          <li
                            onClick={() =>
                              handleMakeDefault(address.id) &&
                              !toggleDropdown(id)
                            }
                            className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer"
                          >
                            Make This Default
                          </li>
                        )}
                        <li
                          onClick={async () => {
                            if (address?.set_default === 1) {
                              toast.warning(
                                "Default address cannot be deleted."
                              );
                              toggleDropdown(id);
                              return;
                            }

                            const result = await addressDelete(address.id);
                            if (result?.result) {
                              setAddresses((prevAddresses) =>
                                prevAddresses.filter(
                                  (addr) => addr.id !== address.id
                                )
                              );
                            }
                            toggleDropdown(id);
                          }}
                          className="p-2 hover:bg-primary-red hover:text-white transition-all cursor-pointer"
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ------Right Side Add New Address------ */}
            <div onClick={() => setIsModalVisible(true)} className="">
              <button className="w-full p-3 !m-3 bg-[#F2F3F8] text-light-gray-header rounded-lg flex flex-col justify-center items-center border">
                <GoPlus className="text-4xl" />
                Add New Address
              </button>
            </div>
          </div>
        </div>

        {/* Change Email Section */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">Change your email</h2>
          <hr />
          <div className="w-full flex relative items-center my-4 border rounded-md">
            <input
              type="email"
              className="flex-grow p-2 bg-white outline-none "
              placeholder="Your Email"
            />
            <button className="absolute right-0 ml-2 p-2 border border-gray-400 transition-all hover:bg-gray-500 hover:text-white rounded-r ">
              Verify
            </button>
          </div>
          <div className="text-right">
            <button className="px-4 md:px-6 py-2 md:py-2 bg-red-500 text-white text-sm md:text-md rounded-[4px] hover:bg-red-600 focus:outline-none focus:shadow-outline">
              Update Email
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileClient;
