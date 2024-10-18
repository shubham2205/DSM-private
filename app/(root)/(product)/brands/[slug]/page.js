import React from "react";
import SidebarWithProduct from "../../../../../Components/SidebarWithProduct/SidebarWithProduct";
import { getData } from "../../../../../lib/actions/universel.actions";

const BrandFilter = async () => {
  const allCategoriesData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/categories`
  );

  return (
    <div>
      <SidebarWithProduct data={allCategoriesData?.data} />
    </div>
  );
};

export default BrandFilter;
