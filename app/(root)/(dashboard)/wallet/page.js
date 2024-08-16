"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PiSmileySad } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Modal from "../../../../Components/Modal";
import PanelSidebar from "../../../../Components/MyPanel/PanelSidebar";

const MyWallet = () => {
  const [isMyWalletOpen, SetIsMyWalletOpen] = useState(false);
  return (
    <>
      <Modal
        open={isMyWalletOpen}
        onclose={SetIsMyWalletOpen}
        width={"w-[35rem]"}
        height={"h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Recharge Wallet</h2>
        <hr />

        <div className="container mx-auto mt-5">
          <form>
            <table className="min-w-full  ">
              <tbody className="">
                <tr className=" ">
                  <td className="p-2 block md:table-cell md:w-24">
                    <label className="block text-gray-700 mb-2">
                      Amount <span className="text-primary-red">*</span>
                    </label>
                  </td>
                  <td className="p-2 block md:table-cell ">
                    <input
                      type="text"
                      className=" w-full   px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder="Subject"
                    />
                  </td>
                </tr>
                <tr className=" ">
                  <td className="p-2 block md:table-cell md:w-24">
                    <label className="block text-gray-700 mb-2">
                      Payment method<span className="text-primary-red">*</span>
                    </label>
                  </td>
                  <td className="p-2 block md:table-cell ">
                    <select className=" w-full  px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                      <option>Select Country</option>
                    </select>
                  </td>
                </tr>

                <tr className=" ">
                  <td className="p-2 block md:table-cell md:w-24"></td>
                  <td className="p-2 block md:table-cell ">
                    {" "}
                    <div className="flex justify-end">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline">
                        Confirm
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Modal>

      <div className="flex sm:px-14 mt-12 gap-6">
        <PanelSidebar />

        <section className="w-full  xl:w-4/5 h-auto">
          <div className="flex flex-col md:flex-row justify-evenly gap-3">
            {/* First Box */}
            <div className="bg-[#6382F4] md:w-[23rem] flex flex-col items-center gap-2 py-6 rounded-md">
              <div className="text-white w-8 h-8 rounded-full bg-[#7774D4] flex justify-center items-center text-2xl">
                <FaIndianRupeeSign />
              </div>
              <div className="text-white font-bold text-xl flex items-center">
                <FaIndianRupeeSign />
                <p>0</p>
              </div>
              <p className="text-[#B1C1F9] text-sm">Wallet Balance</p>
            </div>
            {/* Second Box  */}
            <div
              onClick={() => SetIsMyWalletOpen(true)}
              className="bg-white md:w-[23rem] rounded-md flex flex-col gap-4 py-6 items-center shadow-sm cursor-pointer hover:shadow-custom transition-all ease-in-out duration-100"
            >
              <div className="bg-[#8F97AB] w-14 h-14 flex items-center justify-center rounded-full">
                <AiOutlinePlus className="text-4xl text-white" />
              </div>
              <p className="text-primary-red text-lg">Recharge Wallet</p>
            </div>
          </div>

          {/*------------------------------------Table Section Second Start----------------------------  */}
          <div className="bg-white mt-6">
            <h1 className="py-4 px-4 text-gray-700 text-md">
              Wallet Recharge History
            </h1>
            <hr />
            <div className="min-w-full shadow-md rounded-lg overflow-x-scroll xl:overflow-x-hidden ">
              <table className="min-w-full leading-normal bg-white mt-5 ">
                <thead>
                  <tr className="">
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      #
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Date
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Amount
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Payment method
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Approval
                    </th>
                  </tr>
                </thead>
                <tbody className="hidden">
                  <tr>
                    <td className="px-5 py-3 text-gray-500 text-2xl"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --------------Not Found Section Start */}
            <div className="bg-white flex flex-col items-center justify-center py-5 ">
              <div className="text-5xl my-3 text-gray-500">
                <PiSmileySad />
              </div>
              <h6 className="text-xl">Nothing Found</h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyWallet;
