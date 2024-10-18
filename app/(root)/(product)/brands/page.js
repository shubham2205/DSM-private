import React from "react";
import AllBarndHoverCrad from "../../../../Components/Cards/AllBrandHoverCard";
import SidebarWithProduct from "../../../../Components/SidebarWithProduct/SidebarWithProduct";
import { getData } from "../../../../lib/actions/universel.actions";

const Brands = async () => {
  const allBrands = await getData(`${process.env.NEXT_PUBLIC_API}/v3/brands`);

  return (
    <div className="bg-defaultBg text-black py-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium ">All Brands</h1>
        <p className="text-sm font-semibold">Home /All Brands</p>
      </div>

      <div className="w-full  bg-white shadow-md">
        <AllBarndHoverCrad data={allBrands} />
      </div>

      {/* <SidebarWithProduct/> */}
    </div>
  );
};

export default Brands;
