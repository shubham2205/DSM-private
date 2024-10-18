"use client";

import React, { useState } from "react";

const VideoGallery = ({ data }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="lg:px-12">
        <div className="flex justify-center  flex-col lg:flex-row md:justify-between items-center">
          <h1 className="text-black text-2xl font-medium pt-2">Videos</h1>
          <div className="text-black">
            <span className="text-[#868790] text-sm">Home / Videos</span>
          </div>
        </div>

        <div className="bg-defaultBg text-black">
          <div className="flex justify-center">
            <ul className="flex gap-2 md:gap-3 space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
              <li>
                <div
                  className={`inline-flex items-center  gap-1 px-2 md:px-4 py-3 mt-4 rounded-md w-full ${
                    activeTab === "profile"
                      ? "text-white bg-primary-red "
                      : "text-[#EF486A] bg-gray-50 hover:bg-[#EF486A] hover:text-white  border border-primary-red"
                  }`}
                  aria-current={activeTab === "profile" ? "page" : undefined}
                  onClick={() => handleTabClick("profile")}
                >
                  {data?.data?.at(0)?.category_name || "No data available"}
                </div>
              </li>
              <li>
                <div
                  className={`inline-flex items-center gap-1 px-2 md:px-4 py-3 rounded-md w-full ${
                    activeTab === "dashboard"
                      ? "text-white bg-primary-red "
                      : "text-[#EF486A] bg-gray-50 hover:bg-[#EF486A] hover:text-white  border border-primary-red"
                  }`}
                  aria-current={activeTab === "dashboard" ? "page" : undefined}
                  onClick={() => handleTabClick("dashboard")}
                >
                  {data?.data?.at(1)?.category_name || "No data available"}
                </div>
              </li>
              <li>
                <div
                  className={`inline-flex items-center gap-1 px-2 md:px-4 py-3 rounded-md w-full ${
                    activeTab === "settings"
                      ? "text-white bg-primary-red "
                      : "text-[#EF486A] bg-gray-50 hover:bg-[#EF486A] hover:text-white  border border-primary-red"
                  }`}
                  aria-current={activeTab === "settings" ? "page" : undefined}
                  onClick={() => handleTabClick("settings")}
                >
                  {data?.data?.at(2)?.category_name || "No data available"}
                </div>
              </li>
            </ul>
          </div>

          <div className=" text-medium  rounded-lg mt-4">
            {activeTab === "profile" && (
              <>
                {data?.data?.at(0)?.videos &&
                  data?.data?.at(0)?.videos?.length > 0 &&
                  data?.data?.at(0)?.videos?.map((ele, i) => (
                    <div
                      key={i}
                      className="w-full md:w-96 bg-white py-2 px-6 mb-3 rounded-2xl shadow-lg"
                    >
                      <iframe
                        width="100%"
                        height="250px"
                        className="mt-2 rounded-2xl"
                        src={ele?.link}
                        title={ele?.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                      ></iframe>
                      <h4 className="text-center py-2 text-lg">{ele?.title}</h4>
                    </div>
                  ))}
              </>
            )}
            {activeTab === "dashboard" && (
              <>
                {data?.data?.at(1)?.videos &&
                  data?.data?.at(1)?.videos?.length > 0 &&
                  data?.data?.at(1)?.videos?.map((ele, i) => (
                    <div
                      key={i}
                      className="w-full md:w-96 bg-white py-2 px-6 mb-3 rounded-2xl shadow-lg"
                    >
                      <iframe
                        width="100%"
                        height="250px"
                        className="mt-2 rounded-2xl"
                        src={ele?.link}
                        title={ele?.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                      ></iframe>
                      <h4 className="text-center py-2 text-lg">{ele?.title}</h4>
                    </div>
                  ))}
              </>
            )}
            {activeTab === "settings" && (
              <>
                {data?.data?.at(2)?.videos &&
                  data?.data?.at(2)?.videos?.length > 0 &&
                  data?.data?.at(2)?.videos?.map((ele, i) => (
                    <div
                      key={i}
                      className="w-full md:w-96 bg-white py-2 px-6 mb-3 rounded-2xl shadow-lg"
                    >
                      <iframe
                        width="100%"
                        height="250px"
                        className="mt-2 rounded-2xl"
                        src={ele?.link}
                        title={ele?.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                      ></iframe>
                      <h4 className="text-center py-2 text-lg">{ele?.title}</h4>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
