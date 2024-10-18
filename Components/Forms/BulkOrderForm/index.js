"use client";

import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { getAllCity, getAllStates } from "../../../lib/actions/address.actions";
import { createBulkOrder } from "../../../lib/actions/bulkOrder.action";
import { toast } from "react-toastify";

const BulkOrderForm = ({ products }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [states, setStates] = useState(null);
  const [city, setCity] = useState(null);
  const [inputValue, SetInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [inputValueCity, SetInputValueCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [openCity, setOpenCity] = useState(false);
  const [product, setProduct] = useState("");

  // for getting states
  useEffect(() => {
    const getStates = async () => {
      try {
        const result = await getAllStates("India");
        if (result.result) {
          setStates(result?.states);
        } else {
          setStates(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getStates();
  }, []);

  // getting all cities
  useEffect(() => {
    const getCity = async () => {
      try {
        const result = await getAllCity(selected);
        if (result.result) {
          setCity(result?.cities);
        } else {
          setCity(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCity();
  }, [selected]);

  const createOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("city_id", selectedCity?.id);
    formData.append("product_id", product);

    const result = await createBulkOrder(formData);
    if (result.result) {
      toast.success(result.message);
      setName("");
      setPhone("");
      setSelected("");
      setSelectedCity("");
      setProduct("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <div className=" w-full px-4 lg:px-0 md:w-[30rem] lg:w-96  mb-24  text-black">
        <div className=" space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-black border-b-2 py-4">
            Make Bulk Order
          </h2>
          <form className="space-y-4 px-4" onSubmit={createOrder}>
            <div>
              <input
                type="text"
                required
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="block w-full bg-white p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                required
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="block w-full bg-white p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* ------Search Select State Start------- */}
            <div className=" w-full relative">
              <div
                className={`bg-white w-full h-12  flex items-center justify-between  p-3 mt-1 border border-gray-300 rounded-md shadow-sm   ${
                  !selected && "text-gray-400"
                }`}
                onClick={() => setOpen(!open)}
                // onMouseEnter={() => setOpen(true)}
              >
                {selected
                  ? selected.length > 30
                    ? selected.substring(0, 30) + "..."
                    : selected
                  : "Select States"}
                <BiChevronDown
                  size={20}
                  className={`${open && "rotate-180"}`}
                />
              </div>

              <ul
                onMouseLeave={() => setOpen(false)}
                className={`bg-white mt-1 overflow-y-auto px-1  z-50 absolute w-full ${
                  open ? `max-h-48` : `max-h-0`
                }`}
              >
                <div className="sticky top-0 bg-white border border-gray-300 rounded-sm ">
                  <input
                    value={inputValue}
                    onChange={(e) =>
                      SetInputValue(e.target.value.toLowerCase())
                    }
                    type="text"
                    placeholder="Enter States name"
                    className="placeholder:text-gray-500 p-2 outline-none bg-white w-full z-40 "
                  />
                </div>

                {states &&
                  states?.length > 0 &&
                  states?.map((ele, i) => (
                    <li
                      key={i}
                      className={`p-2 text-sm hover:bg-primary-red hover:text-white
                    ${
                      ele?.name?.toLowerCase() === selected?.toLowerCase() &&
                      "bg-primary-red text-white"
                    }
                     ${
                       ele?.name?.toLowerCase().startsWith(inputValue)
                         ? "block"
                         : "hidden"
                     }`}
                      onClick={() => {
                        if (
                          ele?.name?.toLowerCase() !== selected.toLowerCase()
                        ) {
                          setSelected(ele?.name);
                          setOpen(false);
                        }
                      }}
                    >
                      {ele?.name}
                    </li>
                  ))}
              </ul>
            </div>

            {/* ------Search Select City Start------- */}
            <div className=" w-full relative">
              <div
                className={`bg-white w-full h-12  flex items-center justify-between  p-3 mt-1 border border-gray-300 rounded-md shadow-sm   ${
                  !selectedCity?.name && "text-gray-400"
                }`}
                onClick={() => setOpenCity(!openCity)}
                // onMouseEnter={() => setOpenCity(true)}
              >
                {selectedCity?.name
                  ? selectedCity?.name.length > 30
                    ? selectedCity?.name.substring(0, 30) + "..."
                    : selectedCity?.name
                  : "Select City"}
                <BiChevronDown
                  size={20}
                  className={`${openCity && "rotate-180"}`}
                />
              </div>

              <ul
                onMouseLeave={() => setOpenCity(false)}
                className={`bg-white mt-1 overflow-y-auto px-1  z-50 absolute w-full ${
                  openCity ? `max-h-48` : `max-h-0`
                }`}
              >
                <div className="sticky top-0 bg-white border border-gray-300 rounded-sm ">
                  <input
                    value={inputValueCity}
                    onChange={(e) =>
                      SetInputValueCity(e.target.value.toLowerCase())
                    }
                    type="text"
                    placeholder="Enter City name"
                    className="placeholder:text-gray-500 p-2 outline-none bg-white w-full z-40 "
                  />
                </div>

                {city &&
                  city?.length > 0 &&
                  city?.map((ele, i) => (
                    <li
                      key={i}
                      className={`p-2 text-sm hover:bg-primary-red hover:text-white
                    ${
                      ele?.name?.toLowerCase() ===
                        selectedCity?.name?.toLowerCase() &&
                      "bg-primary-red text-white"
                    }
                     ${
                       ele?.name?.toLowerCase().startsWith(inputValueCity)
                         ? "block"
                         : "hidden"
                     }`}
                      onClick={() => {
                        if (
                          ele?.name?.toLowerCase() !==
                          selectedCity?.name?.toLowerCase()
                        ) {
                          setSelectedCity(ele);
                          setOpenCity(false);
                        }
                      }}
                    >
                      {ele?.name}
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <select
                id="product"
                name="product"
                required
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="block bg-white w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option className="text-gray-btn">Select product</option>
                {products &&
                  products?.length > 0 &&
                  products?.map((ele, i) => (
                    <option key={i} value={ele?.id} className="text-gray-btn">
                      {ele?.name}
                    </option>
                  ))}
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="btn w-full px-4 py-2 text-white  border-none bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-4"
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BulkOrderForm;
