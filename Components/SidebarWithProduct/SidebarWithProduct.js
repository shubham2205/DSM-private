"use client";

import { useState } from "react";
import styles from "../../app/styles/CustomScrollbar.module.css";
import { BiChevronDown } from "react-icons/bi";
import { LiaFilterSolid } from "react-icons/lia";
import Link from "next/link";
import ProductCard from "../Cards/ProductCard";
import Drawer from "../Drawer";

const SidebarWithProduct = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [openBrandDropdown, setOpenBrandDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandSelect = (brandName) => {
    setSelectedBrand(brandName);
    setOpenBrandDropdown(false);
  };

  const handleSortSelect = (sortOption) => {
    setSelectedSort(sortOption);
    setOpenSortDropdown(false);
  };

  return (
    <main className="flex text-black w-full">
      <aside
        className={`w-1/4 p-4 bg-defaultBg px-4 shadow h-screen overflow-y-auto hidden xl:block ${styles.scrollbar}`}
      >
        <div className="bg-white px-4 py-3">
          <h2 className="font-bold text-lg mb-1">Categories</h2>
          <hr className="mb-4" />
          <ul>
            {data &&
              data?.length > 0 &&
              data?.map((ele, i) => (
                <li key={i} className="py-2 text-gray-700 cursor-pointer">
                  {ele?.name}
                  <hr />
                </li>
              ))}
          </ul>
        </div>

        <div className="w-full mt-6 px-4 bg-white shadow-lg">
          <p className="py-2 font-semibold">Price range</p>
          <hr />

          {/* ------------price range slider---------------- */}

          {/* <Slider defaultValue={[93]} max={100} step={1} /> */}

          <div className="py-3">
            <div className="flex w-64 m-auto items-center h-16 justify-center">
              <div className="py-1 relative min-w-full">
                <div className="h-4 bg-gray-100 outline outline-1 outline-gray-400 rounded-sm">
                  <div
                    className="absolute h-4 rounded-full bg-primary-red w-0"
                    style={{ width: "24.1935%", left: "11.2903%" }}
                  />
                  <div
                    className="absolute h-6 flex items-center justify-center w-6 rounded-sm bg-gray-200 shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                    unselectable="on"
                    onselectstart="return false;"
                    style={{ left: "11.2903%" }}
                  >
                    <div className="relative -mt-2 w-1">
                      <div
                        className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                        style={{ marginLeft: "-25px" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="absolute h-6 flex items-center justify-center w-6 rounded-sm bg-gray-200 shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                    unselectable="on"
                    onselectstart="return false;"
                    style={{ left: "35.4839%" }}
                  >
                    <div className="relative -mt-2 w-1">
                      <div
                        className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                        style={{ marginLeft: "-25px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
                    8
                  </div>
                  <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
                    70
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 px-4 bg-white shadow-lg">
          <p className="py-2 font-semibold">Filter by color</p>
          <hr className="py-2 pb-4" />
        </div>
      </aside>

      {/* ------------------------------------------------------All Products Section Start--------------------------------------------------- */}
      <section
        className={`w-full lg:w-3/4 xl:p-4 py-2 bg-defaultBg h-screen overflow-y-scroll ${styles.scrollbar}`}
      >
        <div className="">
          <span className="text-gray-400 text-sm">Home</span>
          <span> / All categories</span>
        </div>

        <div className="grid grid-cols-4 items-center my-10 gap-3">
          <h1 className=" xl:text-lg text-[#212529] font-semibold  col-span-1 md:col-span-2 mt-5 md:mt-0">
            All Products
          </h1>

          <div className="grid xl:grid-cols-4 items-center gap-2  col-span-3 md:col-span-2">
            {/* ----------------------Search Brand Section Start----------------------- */}
            <div className="w-full hidden xl:block col-span-2 xl:col-span-2">
              <p className="capitalize text-footer-gray-txt text-sm">Brands</p>
              <div className="relative">
                <div
                  onClick={() => setOpenBrandDropdown(!openBrandDropdown)}
                  className={`bg-white w-full z-50 flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer shadow-sm ${
                    !selectedBrand && "text-gray-400"
                  }`}
                >
                  {selectedBrand || "Search Brand"}
                  <BiChevronDown
                    size={20}
                    className={`${openBrandDropdown && "rotate-180"}`}
                  />
                </div>

                {openBrandDropdown && (
                  <ul className="bg-white shadow-lg mt-1 px-2  overflow-y-auto z-[99] overflow-x-hidden absolute w-full max-h-48">
                    <div className="sticky top-0 bg-white border my-3 border-red-500 rounded-lg">
                      <input
                        value={searchTerm}
                        onChange={(e) =>
                          setSearchTerm(e.target.value.toLowerCase())
                        }
                        type="text"
                        placeholder="Search Brand"
                        className="placeholder:text-gray-500 p-2 rounded-lg bg-white w-full"
                      />
                    </div>

                    {data?.data
                      .filter((brand) =>
                        brand.name.toLowerCase().startsWith(searchTerm)
                      )
                      .map((brand) => (
                        <li
                          key={brand.name}
                          className={`p-2 text-sm hover:bg-primary-red hover:text-white ${
                            brand.name === selectedBrand &&
                            "bg-primary-red  text-white"
                          }`}
                          onClick={() => handleBrandSelect(brand.name)}
                        >
                          {brand.name}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="w-full grid grid-cols-5 xl:grid-cols-1 items-center  xl:col-span-2 gap-2">
              {/* ----------------------Sort by Filter Section Start----------------------- */}
              <div className="w-full col-span-4 cursor-pointer">
                <p className="capitalize text-footer-gray-txt text-sm">
                  Sort by
                </p>
                <div
                  className="w-full relative"
                  onClick={() => setOpenSortDropdown(!openSortDropdown)}
                >
                  <div
                    className={`bg-white w-full z-50 flex items-center justify-between p-2 border border-gray-300 rounded-md shadow-sm ${
                      !selectedSort && "text-gray-400"
                    }`}
                  >
                    {selectedSort || "Sort by"}
                    <BiChevronDown
                      size={20}
                      className={`${openSortDropdown && "rotate-180"}`}
                    />
                  </div>

                  {openSortDropdown && (
                    <ul className="bg-white shadow-lg mt-1 px-2 overflow-y-auto z-[99] overflow-x-hidden absolute w-full max-h-48">
                      {[
                        "Price: Low to High",
                        "Price: High to Low",
                        "Newest",
                      ].map((sortOption) => (
                        <li
                          key={sortOption}
                          className="p-2 text-sm hover:bg-primary-red hover:text-white"
                          onClick={() => handleSortSelect(sortOption)}
                        >
                          {sortOption}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {/* ---------------------------------Filter Icon Start------------------------ */}
              <div className="block xl:hidden col-span-1 mt-3 xl:mt-0 ">
                <LiaFilterSolid
                  className="text-4xl"
                  onClick={() => setIsOpen(true)}
                />
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                  <h1 className="text-black">data</h1>
                  <h1 className="text-black">data</h1>
                  <h1 className="text-black">data</h1>
                  <h1 className="text-black">data</h1>
                </Drawer>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------All Product Start---------------------- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((datas) => (
            <div className="" key={datas?.id}>
              <Link href={`/product/${datas?.id}`}>
                <ProductCard wid={"w-full"} cardData={datas} />
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="">
          <SidebarPagination />
        </div> */}
      </section>
    </main>
  );
};

export default SidebarWithProduct;
