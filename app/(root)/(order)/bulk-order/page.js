import React from "react";
import BulkOrderForm from "../../../../Components/Forms/BulkOrderForm";
import { getData } from "../../../../lib/actions/universel.actions";

const BulkOrder = async () => {
  const allProducts = await getData(`${process.env.NEXT_PUBLIC_API}/v3/products/search`);
  return (
    <div className="bg-defaultBg">
      <div className="flex justify-center  flex-col lg:flex-row md:justify-between items-center">
        <h1 className="text-black text-2xl font-medium px-20 pt-2">
          Bulk Order
        </h1>
        <div className="text-black">
          <span className="text-[#868790] text-sm">Home / Bulk Order</span>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <BulkOrderForm products={allProducts?.data}/>
      </div>
    </div>
  );
};

export default BulkOrder;
