import React from "react";
import OrderSteps from "../../../../Components/OrderSteps";
import { cookiesData } from "../../../../lib/actions/auth.actions";
import { getAddress } from "../../../../lib/actions/address.actions";
import { getAllCards } from "../../../../lib/actions/cart.actions";

const checkout = async () => {
  const userId = await cookiesData("userId");

  const allCarts = await getAllCards();
  const allAddress = await getAddress();

  return (
    <>
      <OrderSteps
        carts={allCarts}
        address={allAddress?.data}
        userId={userId}
      />
    </>
  );
};

export default checkout;
