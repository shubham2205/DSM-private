import Image from "next/image";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const OurBlogCards = ({ datas }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datas &&
          datas?.map((data) => {
            return (
              <div className="" key={data?.id}>
                <Link href={`/blog/${data?.id}`}>
                  <div className="w-full bg-white shadow-md rounded-md ">
                    <div className="">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}/${data?.banner}`}
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-t-md"
                        alt="blog-img"
                      />
                    </div>
                    <div className="px-4 mt-4">
                      <h6
                        className="text-black font-medium text-xl capitalize"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {data?.title}
                      </h6>
                      <p
                        className="text-[#B1B1B5] text-justify"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {data?.short_description}
                      </p>
                    </div>

                    <div className="px-4 flex flex-col justify-center items-center">
                      <button className="text-white rounded-sm px-5 py-2 bg-gray-btn  my-4 hover:bg-primary-red transition-all ease-linear">
                        View More
                      </button>
                      <div className="flex gap-2 items-center mt-4 mb-8">
                        <h5 className="text-gray-btn">Share:</h5>
                        <div className="text-white text-xl w-10 h-10 bg-[#0E76E6] flex justify-center items-center ">
                          <FaRegEnvelope />
                        </div>
                        <div className="text-white text-xl w-10 h-10 bg-[#0087BA] flex justify-center items-center ">
                          <TiSocialTwitter />
                        </div>
                        <div className="text-white text-xl w-10 h-10 bg-[#2D4373] flex justify-center items-center ">
                          <FaFacebookF />
                        </div>
                        <div className="text-white text-xl w-10 h-10 bg-[#005983] flex justify-center items-center ">
                          <FaLinkedinIn />
                        </div>
                        <div className="text-white text-xl w-10 h-10 bg-[#29A628] flex justify-center items-center ">
                          <FaWhatsapp />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurBlogCards;
