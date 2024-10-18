import React from "react";
import PanelSidebar from "../../../../Components/MyPanel/PanelSidebar";
import { getUserProfile } from "../../../../lib/actions/profile.actions";

const Dashboard = async () => {
  const userData = await getUserProfile();
  return (
    <>
      <div className="">
        {/* <PanelSidebar data={userData} /> */}
        <p>Dashboard</p>
        <section className="w-full   h-auto">
          <div>
            {/* ----------------------------Section First Product Carts Start----------------- */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 ">
              {/* First Box */}
              <div className="bg-[#6382F3] w-full rounded-md">
                <div className="px-4 pb-2 pt-4 ">
                  <div className=" text-white text-2xl font-semibold ">
                    1 Product(s)
                  </div>
                  <div className=" text-white text-sm  opacity-50">
                    in your cart
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgba(255,255,255,0.3)"
                    d="M0 192l30 16c30 16 90 48 150 37.3C240 235 300 181 360 144s120-59 180-48 120 53 180 58.7c60 5.3 120-26.7 180-37.4 60-10.3 120-.3 180-5.3s120-27 180-37.3C1320 64 1380 64 1410 64h30v256H0z"
                  ></path>
                </svg>
              </div>
              {/* Second Box */}
              <div className="bg-[#FF471E] w-full rounded-md">
                <div className="px-4 pb-2 pt-4 ">
                  <div className=" text-white text-2xl font-semibold ">
                    1 Product(s)
                  </div>
                  <div className=" text-white text-sm  opacity-50">
                    in your wishlist
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgba(255,255,255,0.3)"
                    d="M0 128l34.3-16C68.6 96 137 64 206 96c68.3 32 137 128 205 154.7 69 26.3 138-15.7 206-37.4 68.7-21.3 137-21.3 206-32 68.4-10.3 137-32.3 206-64 68.1-32.3 137-74.3 205-58.6 68.9 16.3 137 90.3 172 128l34 37.3v96H0z"
                  ></path>
                </svg>
              </div>
              {/* Third Box */}
              <div className="bg-[#454444] w-full rounded-md">
                <div className="px-4 pb-2 pt-4 ">
                  <div className=" text-white text-2xl font-semibold ">
                    1 Product(s)
                  </div>
                  <div className=" text-white text-sm  opacity-50">
                    {" "}
                    you ordered
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgba(255,255,255,0.3)"
                    d="M0 192h26.7c26.6 0 80.3 0 133.3 10.7 53.3 10.3 107 32.3 160 16C373.3 203 427 149 480 117.3 533.3 85 587 75 640 90.7c53.3 16.3 107 58.3 160 58.6 53.3-.3 107-42.3 160-37.3 53.3 5 107 59 160 90.7 53.3 32.3 107 42.3 160 10.6 53.3-32.3 107-106.3 133-144l27-37.3v288H0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* -------------------------------Section Second Start------------------------ */}
            <div className="grid grid-cols-1 md:grid-cols-2  mt-6 gap-3">
              <div className="bg-white rounded-md shadow-sm">
                <h4 className="px-6 py-2">Default Shipping Address</h4>
                <hr className="mb-6" />
              </div>
              <div className="bg-white rounded-md shadow-sm">
                <h4 className="px-6 py-2">Purchased Package</h4>
                <hr className="mb-6" />

                <div className="w-full flex flex-col items-center">
                  <h3 className="text-red-500 text-xl">Package Not Found</h3>
                  <button className="bg-green-400 hover:bg-green-600 transition-all text-white px-4 py-2 rounded-sm mt-3 mb-4">
                    Upgrade Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
