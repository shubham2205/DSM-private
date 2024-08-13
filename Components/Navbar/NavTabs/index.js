import React from "react";
import Link from "next/link";

const NavTabs = () => {
  return (
    <div className="w-full  text-white bg-primary-red flex lg:justify-center overflow-x-scroll lg:overflow-x-hidden flex-wrap items-center">
      <ul className="py-3 text-xs md:text-sm font-semibold flex gap-8 text-nowrap px-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/brands">All Brands</Link>
        </li>
        <li>
          <Link href="/categories">All Categories</Link>
        </li>
        <li>
          <Link href="/">Our Career</Link>
        </li>
        <li>
          <Link href="/blog">Our Blog</Link>
        </li>
        <li>
          <Link href="/">Special Offers</Link>
        </li>
        <li>
          <Link href="/bulkorder">Bulk Order</Link>
        </li>
        <li>
          <Link href="/trackorder">Track Order</Link>
        </li>
        <li>
          <Link href="/videogallery">Video Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavTabs;
