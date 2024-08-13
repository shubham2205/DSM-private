import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const BulkOrderForm = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, SetInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // New state

  useEffect(() => {
    const count = fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
     
        setCountries(data);
      })
      .catch((error) => {
       
      });
  }, []);

  return (
    <>
      <div className=" w-full px-4 lg:px-0 md:w-[30rem] lg:w-96  mb-24  text-black">
        <div className=" space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-black border-b-2 py-4">
            Make Bulk Order
          </h2>
          <form className="space-y-4 px-4 ">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="block w-full bg-white p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="block w-full bg-white p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* ------Search Select City Start------- */}
            <div className=" w-full relative">
              <div
                className={`bg-white w-full h-12  flex items-center justify-between  p-3 mt-1 border border-gray-300 rounded-md shadow-sm   ${
                  !selected && "text-gray-400"
                }`}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
              >
                {selected
                  ? selected.length > 30
                    ? selected.substring(0, 30) + "..."
                    : selected
                  : "Select City"}
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
                    placeholder="Enter country name"
                    className="placeholder:text-gray-500 p-2 outline-none bg-white w-full z-40 "
                  />
                </div>

                {countries?.map((country) => (
                  <li
                    key={country?.name}
                    className={`p-2 text-sm hover:bg-primary-red hover:text-white
                    ${
                      country?.name?.toLowerCase() ===
                        selected?.toLowerCase() && "bg-primary-red text-white"
                    }
                     ${
                       country?.name?.toLowerCase().startsWith(inputValue)
                         ? "block"
                         : "hidden"
                     }`}
                    onClick={() => {
                      if (
                        country?.name?.toLowerCase() !== selected.toLowerCase()
                      ) {
                        setSelected(country?.name);
                        setOpen(false);
                      }
                    }}
                  >
                    {country?.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <select
                id="product"
                name="product"
                className="block bg-white w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option className="text-gray-btn">Select Product</option>
                <option className="text-gray-btn">Select Product2</option>
                <option className="text-gray-btn">Select Product3</option>
                <option className="text-gray-btn">Select Product4</option>
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
