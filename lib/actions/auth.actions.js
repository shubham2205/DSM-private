"use server";

import { cookies } from "next/headers";

export const cookiesData = async (cookieName) => {
  const cookieStore = cookies();
  const result = cookieStore.get(cookieName)?.value;
  return result;
};

export const logOut = () => {
  const cookieStore = cookies();
  cookieStore.delete("userId");
  cookieStore.delete("token");
};

export const login = async (url, formData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    cookies().set("token", result.access_token);
    cookies().set("userId", result.user.id);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
