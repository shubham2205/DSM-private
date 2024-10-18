"use server";

import { cookies } from "next/headers";

export const createBulkOrder = async (formData) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v3/bulkorder/store`,
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
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };