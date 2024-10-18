"use client";

import Image from "next/image";
import React from "react";
const OurBlogCardDetail = ({ datas }) => {

  return (
    <div className="mt-4">
      <div className="w-full md:h-[90vh]">
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}/${datas?.banner}`}
          width={1000}
          height={1000}
          className="w-full h-full"
          alt="blogcard"
        />
      </div>
      <div className="bg-white px-4 mt-6 pt-4">
        <h4 className="text-[#4A4A55] text-xl mb-2">{datas?.title}</h4>
        <hr />
        <div
          className="lg:w-96 text-justify lg:text-start"
          dangerouslySetInnerHTML={{ __html: datas?.description || "" }}
        />
      </div>
    </div>
  );
};

export default OurBlogCardDetail;
