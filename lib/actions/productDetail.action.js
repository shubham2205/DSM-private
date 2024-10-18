"use server";
import { cookies } from "next/headers";

export const getProductDetails = async (productID) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/products/${productID}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const productDetailData = await response.json();
    return productDetailData;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};
