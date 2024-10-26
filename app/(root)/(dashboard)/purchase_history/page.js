import React from "react";
import PurchaseHistory from "../../../../Components/PurchaseHistory/PurchaseHistory";
import { getNoOfOrders } from "../../../../lib/actions/getOrders.action";

const AllOrders = async () => {

    const orderDetails = await  getNoOfOrders(); 
    console.log(orderDetails, "orderDetails")

  return (
    <div>
      <PurchaseHistory dataa={orderDetails}/>
    </div>
  );
};

export default AllOrders;
