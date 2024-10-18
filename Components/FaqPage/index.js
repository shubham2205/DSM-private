"use client";

import React from "react";

const FaqPage = ({ faqData }) => {
  return (
    <div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <h2 class="font-bold lg:text-2xl mt-5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-neutral-500 text-xs font-bold mt-3">
            Home /{" "}
            <span className="text-black "> Frequently Asked Questions </span>
          </p>
        </div>
        {/* ------------------------dropdowns------------------------- */}
        <div class="grid grid-cols-1 gap-2 mx-auto mt-8">
          {faqData?.data &&
            faqData?.data?.map((data, i) => (
              <div class="py-3 bg-white px-5" key={i}>
                <details class="group">
                  <summary class="flex justify-between items-center  cursor-pointer list-none">
                    <span className="text-[0.80rem]">
                      {i + 1}. {data?.question}
                    </span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p
                    class="text-xs lg:text-sm mt-3 ps-3 group-open:animate-fadeIn"
                    dangerouslySetInnerHTML={{
                      __html: data?.answer || "",
                    }}
                  />
                </details>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
