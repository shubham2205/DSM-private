"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiSmileySad } from "react-icons/pi";
import WalletModal from "../Modal/WalletModal";

const WalletOverview = () => {
  const [isMyWalletOpen, SetIsMyWalletOpen] = useState(false);

  return (
    <>
      {/* Modal for Recharging Wallet */}
      <WalletModal
        isOpen={isMyWalletOpen}
        onClose={() => SetIsMyWalletOpen(false)}
      />

      <div className="flex flex-col md:flex-row justify-evenly gap-3">
        {/* Wallet Balance Section */}
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

        {/* Recharge Wallet Section */}
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

      {/* Wallet Recharge History Section */}
      <div className="bg-white mt-6 ">
        <h1 className="py-4 px-4 text-gray-700 text-md">
          Wallet Recharge History
        </h1>
        <hr />
        <div className="min-w-full shadow-md rounded-lg overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full leading-normal bg-white mt-5">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                  #
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                  Payment Method
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
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

        {/* No Recharge History */}
        <div className="bg-white flex flex-col items-center justify-center py-5">
          <div className="text-5xl my-3 text-gray-500">
            <PiSmileySad />
          </div>
          <h6 className="text-xl">Nothing Found</h6>
        </div>
      </div>
    </>
  );
};

export default WalletOverview;
