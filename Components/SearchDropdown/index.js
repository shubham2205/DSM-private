"use client";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const SearchDropdown = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  // Dropdown Search State
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full  col-span-2 xl:col-span-2">
      <p className="capitalize text-footer-gray-txt text-sm">{label}</p>
      <div className="relative">
        <div
          onClick={() => setOpenDropdown(!openDropdown)}
          className={`bg-white w-full z-50 flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer shadow-sm ${
            !selectedOption && "text-gray-400"
          }`}
        >
          {selectedOption || `Search ${label}`}
          <BiChevronDown
            size={20}
            className={`${openDropdown && "rotate-180"}`}
          />
        </div>

        {openDropdown && (
          <ul className="bg-white shadow-lg mt-1 px-2 overflow-y-auto z-[99] overflow-x-hidden absolute w-full max-h-48">
            <div className="sticky top-0 bg-white border  border-red-500 rounded-lg">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                type="text"
                placeholder={`Search ${label}`}
                className="placeholder:text-gray-500 p-2 rounded-lg bg-white w-full"
              />
            </div>
            {/* <div className="sticky top-0 bg-white border border-gray-300 rounded-sm ">
                  <input
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value.toLowerCase())
                    }
                    type="text"
                    placeholder="Enter country name"
                    className="placeholder:text-gray-500 p-2 outline-none bg-white w-full z-40 "
                  />
                </div> */}

            {options
              .filter((option) => option.toLowerCase().startsWith(searchTerm))
              .map((option) => (
                <li
                  key={option}
                  className={`p-2 text-sm hover:bg-primary-red hover:text-white ${
                    option === selectedOption && "bg-primary-red  text-white"
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                    setOpenDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
