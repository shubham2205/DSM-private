import React from "react";
import { LiaUploadSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { PiSmileySad } from "react-icons/pi";
import Link from "next/link";
import PanelSidebar from "../../../../Components/MyPanel/PanelSidebar";

const CustomerProducts = () => {
  return (
    <>
      <div className="flex sm:px-14 mt-12 gap-6">
        <PanelSidebar />

        <section className="w-full  xl:w-4/5 h-auto">
          {/* --------------------------------Section First Start------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* First Box */}
            <div className="h-[9rem] bg-[#6382F4] flex flex-col items-center gap-2 py-4 rounded-md">
              <div className="text-white w-8 h-8 rounded-full bg-[#7774D4] flex justify-center items-center text-2xl">
                <LiaUploadSolid />
              </div>
              <div className="text-white font-bold text-xl">0</div>
              <p className="text-[#B1C1F9] text-sm">Remaining Uploads</p>
            </div>
            {/* Second Box  */}

            <Link href={"/customer-packages"}>
              <div className="h-[9rem] bg-white rounded-md flex flex-col gap-4 pt-4 items-center shadow-sm cursor-pointer hover:shadow-custom transition-all ease-in-out duration-100">
                <div className="bg-[#8F97AB] w-14 h-14 flex items-center justify-center rounded-full">
                  <AiOutlinePlus className="text-4xl text-white" />
                </div>
                <p className="text-primary-red text-lg">Add New product</p>
              </div>
            </Link>
            {/* Third Box */}
            <Link href={"/customer_packages"}>
              <div className="h-[9rem] bg-white rounded-md shadow-sm cursor-pointer hover:shadow-custom transition-all ease-in-out duration-100">
                <div className="bg-white flex flex-col items-center justify-center py-5 gap-1">
                  <div className="text-4xl  text-gray-500">
                    <PiSmileySad />
                  </div>
                  <h6 className="text-sm text-gray-500 font-[500]">
                    No package Found
                  </h6>
                  <button className="border border-primary-red rounded-[4px] px-4 py-[3px] text-primary-red">
                    Upgrade Package
                  </button>
                </div>
              </div>
            </Link>
          </div>
          {/*------------------------------------Table Section Second Start----------------------------  */}
          <div className="bg-white mt-6">
            <h1 className="py-4 px-4 text-gray-700 text-md">All Products</h1>
            <hr />
            <div className="min-w-full shadow-md rounded-lg overflow-x-scroll xl:overflow-x-hidden ">
              <table className="min-w-full leading-normal bg-white mt-5 ">
                <thead>
                  <tr className="">
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      #
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Name
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Price
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Available Status
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                      Admin Status
                    </th>
                    <th className=" px-5 py-3 border-b-2 border-gray-100 text-sm text-nowrap text-black text-center">
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
      </div>
    </>
  );
};



export default CustomerProducts