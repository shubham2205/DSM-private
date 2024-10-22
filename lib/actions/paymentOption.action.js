"use server";

export const getPaymentTypes = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v3/payment-types`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        next: { tags: ["payment-types"] },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching payment types:", error);
    return null;
  }
};
