import Image from "next/image";
import React from "react";

const PopUpForm = () => {
  return (
    <div className=" absolute bottom-5 right-10 mt-6 rounded-lg">
      <div className="bg-white rounded-lg shadow-lg w-96 text-black">
        <div className="top py-5 rounded-t-lg p-2 bg-primary-red">
          <div className="flex gap-3 items-center text-white">
            <Image
              src={"/Images/logoWithBg.png"}
              width={80}
              height={80}
              className="rounded-full"
              alt="logo"
            />

            <h1>DSM Online Support</h1>
          </div>
        </div>
        <div className="bottom border-2 rounded-b-md border-primary-red ">
          <p className="text-xs my-7 px-1">Support Master</p>

          <div className="px-3">
            <h6 className="text-sm my-1"> Welcome to DSM Online </h6>
            <h6 className="text-sm "> How can I help you today </h6>
            <p className="mt-4 mb-5">
              How can we assist you? Please let us know the support you need
              from DSM Online
            </p>

            <form className="mt-4 space-y-4" onsubmit={""}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border text-sm  border-l-4 border-l-primary-red bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Phone"
                  className="w-full px-3 py-2 border border-l-4 border-l-orange-400 text-sm  bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex justify-end gap-5 pb-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-left bg-green-0 flex justify-end mt-10 ">
        <div className="cross text-white bg-primary-red  rounded-full  w-16 h-16">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-semibold">X</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
