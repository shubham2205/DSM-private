import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

const SocialMediaContact = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="social-icons mt-3 lg:mt-0 text-white  gap-3 flex w-full lg:w-auto justify-center items-center">
        <Link
          href={`${data
            ?.filter((ele) => ele?.type === "facebook_link")
            ?.map((ele) => ele.value)
            ?.at(0)}`}
        >
          <div className="flex justify-center items-center bg-[#3B5998] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FaFacebookF />
          </div>
        </Link>

        <Link href={`${data
            ?.filter((ele) => ele?.type === "twitter_link")
            ?.map((ele) => ele.value)
            ?.at(0)}`}>
          <div className="flex justify-center items-center bg-[#1DA1F2] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FaTwitter />
          </div>
        </Link>

        <Link href={`${data
            ?.filter((ele) => ele?.type === "instagram_link")
            ?.map((ele) => ele.value)
            ?.at(0)}`}>
          <div className="flex justify-center items-center bg-[#BD32A2] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FaInstagram />{" "}
          </div>
        </Link>

        <Link href={`${data
            ?.filter((ele) => ele?.type === "youtube_link")
            ?.map((ele) => ele.value)
            ?.at(0)}`}>
          <div className="flex justify-center items-center bg-[#FF0000] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FiYoutube />
          </div>
        </Link>

        <Link href={`${data
            ?.filter((ele) => ele?.type === "linkedin_link")
            ?.map((ele) => ele.value)
            ?.at(0)}`}>
          <div className="flex justify-center items-center bg-[#0070AC] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <IoLogoLinkedin />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaContact;
