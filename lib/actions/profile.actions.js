"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
// const cookieStore = cookies();
// const token = cookieStore.get("token")?.value;
// const userId = cookieStore.get("userId")?.value;

export const getUserProfile = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const userId = cookieStore.get("userId")?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/auth/user/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        next: { tags: ["profile"] },
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

export const UpdateProfile = async (profileData) => {
  const token = cookieStore.get("token")?.value;
  const userId = cookieStore.get("userId")?.value;
  const cookieStore = cookies();

  try {
    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("password", profileData.password);
    formData.append("phone", profileData.phone);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/profile/update`,
      {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: formData,
        next: { tags: ["profile"] },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    revalidateTag("profile");
    return result;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const updateProfileImage = async (file) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const userId = cookieStore.get("userId")?.value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v3/profile/update-image`,
    {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: file,
      next: { tags: ["profile"] },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  return await response.json();
};
