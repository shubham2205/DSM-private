"use client";

import React, { useState } from "react";
import Modal from "./index";

const WalletModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onclose={onClose}
      width={"w-[35rem]"}
      height={"h-auto"}
    >
      <h2 className="text-2xl px-4 py-2">Recharge Wallet</h2>
      <hr />
      <div className="container mx-auto mt-5">
        <form>
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="p-2 block md:table-cell md:w-24">
                  <label className="block text-gray-700 mb-2">
                    Amount <span className="text-primary-red">*</span>
                  </label>
                </td>
                <td className="p-2 block md:table-cell">
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Amount"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 block md:table-cell md:w-24">
                  <label className="block text-gray-700 mb-2">
                    Payment method <span className="text-primary-red">*</span>
                  </label>
                </td>
                <td className="p-2 block md:table-cell">
                  <select className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline">
                    <option>Select Method</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="p-2 block md:table-cell"></td>
                <td className="p-2 block md:table-cell">
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
  );
};

export default WalletModal;
