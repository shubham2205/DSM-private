"use client";

import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { LiaEye } from "react-icons/lia";
import { TfiDownload } from "react-icons/tfi";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import TrackOrderStepper from "../../TrackOrderStepper/TrackOrderStepper";
import Modal from "../../Modal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const PurchaseHistory = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const data = ["India", "Pakistan", "china", "Landon", "puri", "brazile"];
  const brands = data?.map((brand) => brand) || [];

  return (
    <>
      {/* ------------------------Eye View Modal Start---------------------- */}
      <Modal
        open={isEyeOpen}
        onclose={setIsEyeOpen}
        width={"md:w-[90%]"}
        height={"h-[80vh]"}
      >
        <h4 className="px-5 py-3 text-xl ">Order Id: 20240803-07483320</h4>
        <hr className="mb-4" />
        <TrackOrderStepper />
      </Modal>

      {/* -----------------------Delete Icon Modal Start--------------- */}
      <Modal
        open={isDeleteOpen}
        onclose={setIsDeleteOpen}
        width={"w-auto"}
        height={"h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Delete Confirmation</h2>
        <hr />
        <div className="">
          <div className="bg-white rounded-lg shadow-lg w-[350px] p-6 relative">
            <p className="text-sm text-gray-700 mb-4">
              Please select a valid reason for canceling the order
            </p>
            <div className="mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="z-[90]">
                  <SelectGroup>
                    <SelectItem
                      value="apple"
                      className="hover:!bg-primary-red hover:!text-white transition-all ease-linear"
                    >
                      Apple
                    </SelectItem>
                    <SelectItem
                      value="banana"
                      className="hover:!bg-primary-red hover:!text-white transition-all ease-linear"
                    >
                      Banana
                    </SelectItem>
                    <SelectItem
                      value="blueberry"
                      className="hover:!bg-primary-red hover:!text-white transition-all ease-linear"
                    >
                      Blueberry
                    </SelectItem>
                    <SelectItem
                      value="grapes"
                      className="hover:!bg-primary-red hover:!text-white transition-all ease-linear"
                    >
                      Grapes
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Other*"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button className="text-red-500 font-semibold">Cancel</button>
              <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex sm:px-14 mt-12 gap-6">
        <PanelSidebar />

        <section className="w-full  xl:w-4/5 h-auto">
          <div className="bg-white px-3">
            <div className="overflow-x-auto">
              <div className="min-w-full shadow-md rounded-lg overflow-x-scroll xl:overflow-x-hidden ">
                <table className="min-w-full leading-normal ">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Code
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Amount
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Delivery Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Payment Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Delivery OTP
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm text-nowrap  text-black ">
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          20240803-07483320
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          03-08-2024
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">₹188</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1  text-orange-800 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative ">Pending</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Unpaid</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">N/A</p>
                      </td>
                      <td className="px-5 py-5 border-gray-200 bg-white text-sm flex ">
                        <button
                          onClick={() => setIsDeleteOpen(true)}
                          className="text-red-600 bg-red-100 p-2 rounded-full hover:text-red-900 mx-2"
                        >
                          <BsTrash3 />
                        </button>
                        <button
                          onClick={() => setIsEyeOpen(true)}
                          className="text-blue-600 bg-blue-100 p-2 rounded-full hover:text-blue-900 mx-2"
                        >
                          <LiaEye />
                        </button>
                        <button className="text-yellow-600 bg-yellow-100 p-2 rounded-full hover:text-yellow-900 mx-2">
                          <TfiDownload />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PurchaseHistory;
