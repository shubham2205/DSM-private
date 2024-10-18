"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PiSmileySad } from "react-icons/pi";
import Modal from "../../../../Components/Modal";
import PanelSidebar from "../../../../Components/MyPanel/PanelSidebar";
// import PanelSidebar from "../PanelSidebar/PanelSidebar";
// import Modal from "../../Modal";

const SupportTicket = () => {
  const [isSupportTicket, SetIsSupportTicket] = useState(false);
  const [isSupportTicketPhotoInput, SetIsSupportTicketPhotoInput] =
    useState(false);
  return (
    <>
      <Modal
        open={isSupportTicket}
        onclose={SetIsSupportTicket}
        width={"w-[35rem]"}
        height={"h-[30rem] md:h-auto"}
      >
        <h2 className="text-2xl px-4 py-2">Create a Ticket</h2>
        <hr />

        <div className="container mx-auto mt-5">
          <form>
            <table className="min-w-full  ">
              <tbody className="">
                <tr className=" ">
                  <td className="p-2 block md:table-cell w-24">
                    <label className="block text-gray-700 mb-2">
                      Subject <span className="text-primary-red">*</span>
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
                <tr className="">
                  <td className="p-2 block md:table-cell md:w-24 ">
                    <label className="block text-gray-700 mb-2">
                      Provide a detailed description
                      <span className="text-primary-red">*</span>
                    </label>
                  </td>
                  <td className="p-2 block md:table-cell  ">
                    <textarea
                      rows={1}
                      type="text"
                      className=" w-full   px-3 py-2 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder="Type your reply"
                    ></textarea>
                  </td>
                </tr>
                <tr className=" ">
                  <td className="p-2 block md:table-cell w-24">
                    <label className="block text-gray-700 mb-[5px] text-sm">
                      Photo
                    </label>
                  </td>
                  <td className="p-2 block md:table-cell ">
                    <div
                      onClick={() => SetIsSupportTicketPhotoInput(true)}
                      className=" cursor-pointer "
                    >
                      <div className="flex items-center">
                        <div className="bg-gray-200 font-medium px-4 py-2 rounded-l-md">
                          Browse
                        </div>

                        <div className=" w-full  px-4 py-2 border border-gray-300 rounded-r-md">
                          Choose file
                        </div>
                      </div>
                      <Modal
                        open={isSupportTicketPhotoInput}
                        onclose={SetIsSupportTicketPhotoInput}
                        width={"w-[35rem]"}
                        height={"h-[30rem] md:h-[40rem]"}
                      >
                        <h1>Come Soon</h1>
                      </Modal>
                    </div>
                  </td>
                </tr>
                <tr className=" ">
                  <td className="p-2 block md:table-cell w-24"></td>
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

      <section className="w-full   h-auto">
        <div className="flex justify-evenly">
          {/* First Box  */}
          <div
            onClick={() => SetIsSupportTicket(true)}
            className="bg-white w-[22rem] rounded-md flex flex-col gap-4 py-6 items-center shadow-sm cursor-pointer hover:shadow-custom transition-all ease-in-out duration-100"
          >
            <div className="bg-[#8F97AB] w-16 h-16 flex items-center justify-center rounded-full">
              <AiOutlinePlus className="text-5xl text-white" />
            </div>
            <p className="text-primary-red text-lg">Create a Ticket</p>
          </div>
        </div>

        {/*------------------------------------Table Section Second Start----------------------------  */}
        <div className="bg-white mt-6">
          <h1 className="py-4 px-4 text-gray-700 text-md">Tickets</h1>
          <hr />
          <div className="min-w-full shadow-md rounded-lg overflow-x-scroll xl:overflow-x-hidden ">
            <table className="min-w-full leading-normal bg-white mt-5 ">
              <thead>
                <tr className="">
                  <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                    Ticket ID
                  </th>
                  <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                    Sending Date
                  </th>
                  <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                    Subject
                  </th>
                  <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                    Status
                  </th>
                  <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                    Options
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
    </>
  );
};

export default SupportTicket;
