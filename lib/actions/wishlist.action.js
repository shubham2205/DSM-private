"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

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
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    revalidateTag("wishlist");
    return data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

export const getWishlist = async () => {
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
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    revalidateTag("wishlist");
    return data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    // throw error;
  }
};

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
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log("Product added to wishlist");
    revalidateTag("wishlist");
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
  }
};

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
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    revalidateTag("wishlist");
    return data;
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    throw error;
  }
};

export const isProductInWishlist = async (productId) => {
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
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    revalidateTag("wishlist");
    return data;
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    throw error;
  }
};
