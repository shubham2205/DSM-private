"use server"

import { cookies } from "next/headers";

export const createStoreOrder = async ({
  userId,
  ownerId,
  paymentType,
  cartId,
}) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/order/store`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          owner_id: ownerId,
          payment_type: paymentType,
          cart_id: cartId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate the response structure
    if (!data.order_id || data.result !== true) {
      throw new Error("Invalid response format from server");
    }

    return {
      success: true,
      orderId: data.order_id,
      message: data.message,
    };
  } catch (error) {
    console.error("Error creating store order:", error);
    return {
      success: false,
      error: error.message || "Failed to create store order",
    };
  }
};

// Usage example:
/*
  const result = await createStoreOrder({
    userId: "3121",
    ownerId: "9",
    paymentType: "cash_payment",
    cartId: "2205"
  });
  
  if (result.success) {
    console.log(`Order created successfully! Order ID: ${result.orderId}`);
  } else {
    console.error(`Failed to create order: ${result.error}`);
  }
  */
