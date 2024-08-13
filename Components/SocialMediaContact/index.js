import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

const SocialMediaContact = () => {
  return (
    <div>
      {" "}
      <div className="social-icons mt-3 lg:mt-0 text-white  gap-3 flex w-full lg:w-auto justify-center items-center">
        <div className="flex justify-center items-center bg-[#3B5998] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
          <FaFacebookF />
        </div>

        <Link href="https://x.com/online_dsm">
          <div className="flex justify-center items-center bg-[#1DA1F2] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FaTwitter />
          </div>
        </Link>

        <Link href="https://www.instagram.com/dsmonlineofficial/">
          <div className="flex justify-center items-center bg-[#BD32A2] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FaInstagram />{" "}
          </div>
        </Link>

        <Link href="https://www.youtube.com/channel/UCwFaQOFCM3GFOlcDy7Y77Dw">
          <div className="flex justify-center items-center bg-[#FF0000] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <FiYoutube />
          </div>
        </Link>

        <Link href="https://www.linkedin.com/company/dsm-online/">
          <div className="flex justify-center items-center bg-[#0070AC] rounded-full p-2 lg:p-3 text-sm lg:text-xl hover:-translate-y-1">
            <IoLogoLinkedin />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaContact;
