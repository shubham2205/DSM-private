"use server";

import { cookies } from "next/headers";

export const getNoOfOrders = async () => {
  try {
    const cookieStore = cookies();
    const userId = cookieStore.get("userId")?.value;
    const token = cookieStore.get("token")?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/auth/orders/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    //   console.error("Error fetching order details:", error);
    return null;
  }
};
