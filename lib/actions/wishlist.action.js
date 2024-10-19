"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

// Fetch user's wishlist
export const getUserWishlist = async () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const userId = cookieStore.get("userId")?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/wishlists/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Log the error response (likely an HTML error)
      const errorText = await response.text();
      console.error(`API Error: ${response.status} - ${errorText}`);
      throw new Error(`Error fetching wishlist: ${response.statusText}`);
    }

    // Safely parse JSON if the response is valid
    const data = await response.json();
    revalidateTag("wishlist");
    return data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

// Add product to wishlist
export const addToWishlist = async (productId) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const userId = cookieStore.get("userId")?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/wishlists-add-product?product_id=${productId}&user_id=${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} - ${errorText}`);
      throw new Error(`Error adding to wishlist: ${response.statusText}`);
    }

    revalidateTag("wishlist");
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (productId) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const userId = cookieStore.get("userId")?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/wishlists-remove-product?product_id=${productId}&user_id=${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} - ${errorText}`);
      throw new Error(`Error removing from wishlist: ${response.statusText}`);
    }

    revalidateTag("wishlist");
    return await response.json();
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    throw error;
  }
};
