"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const Card = async (url, formData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getAllCards = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/cartslist/${userId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        next: { tags: ["carts"] },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const addToCard = async (url, formData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    revalidateTag("carts");
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const changeItemQuantity = async (formData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/carts/change-quantity`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    revalidateTag("carts");
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const removeCard = async (id) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/carts/remove?id=${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    revalidateTag("carts");
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
