import React from "react";
import AllBarndHoverCrad from "../../../../Components/Cards/AllBrandHoverCard";
import SidebarWithProduct from "../../../../Components/SidebarWithProduct/SidebarWithProduct";

const Brands = () => {
  return (
    <div className="bg-defaultBg text-black py-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium ">All Brands</h1>
        <p className="text-sm font-semibold">Home /All Brands</p>
      </div>

      <div className="w-full  bg-white shadow-md">
        <AllBarndHoverCrad />
      </div>


      {/* <SidebarWithProduct/> */}
    </div>
  );
};



export default Brands;


