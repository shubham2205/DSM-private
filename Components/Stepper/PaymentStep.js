import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPaymentTypes } from "../../lib/actions/paymentOption.action";
import { createStoreOrder } from "../../lib/actions/createOrder.action";

const PaymentStep = ({ data, userId, company }) => {
  const [paymentOption, setPaymentOption] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => {
          setError("Failed to load payment gateway");
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  useEffect(() => {
    const fetchPaymentOptions = async () => {
      try {
        const res = await getPaymentTypes();
        setPaymentOption(res.data);
      } catch (error) {
        console.error("Error fetching payment options:", error);
        setError("Failed to load payment options");
      }
    };

    fetchPaymentOptions();
  }, []);

  const handlePaymentSelect = (paymentType) => {
    setError(null);
    setPaymentMethod(paymentType.toUpperCase());
  };

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const result = await createStoreOrder({
        userId: data.data[0].user_id,
        ownerId: data.data[0].owner_id,
        paymentType: paymentMethod,
        cartId: orderId,
      });

      if (result.orderId) {
        setOrderId(result.orderId);
        continuePayment(result.orderId);
      } else {
        setError(result.error || "Failed to create order");
      }
    } catch (error) {
      console.error("Error in order creation:", error);
      setError("Failed to process order");
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrder = (transactionId, orderId) => {
    axios
      .put(`${process.env.REACT_APP_API}/updateTransactionId/${orderId}`, {
        transactionId,
      })
      .then((res) => {
        setOrderSuccessModal(true);
      })
      .catch((error) => {
        console.error("Error updating transaction ID:", error);
        setError("Failed to complete payment process");
      });
  };

  const OrderPayment = (orderId, orderDetails) => {
    if (orderId) {
      const options = {
        key: process.env.NEXT_PUBLIC_API_RAZORPAY_KEY,
        amount: Math.ceil(orderDetails?.payableAmount) * 100,
        currency: "INR",
        name: "DSM",
        description: "company description",
        handler: (response) => {
          updateOrder(response?.razorpay_payment_id, orderId);
        },
        prefill: {
          name: "DSM online",
          contact: "0987654321",
        },
        notes: {
          order_id: orderId,
        },
        modal: {
          ondismiss: () => {
            console.log("Payment cancelled");
          },
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } else {
      console.log("Missing Order Id");
    }
  };

  const continuePayment = (orderId) => {
    if (paymentMethod === "RAZORPAY") {
      OrderPayment(orderId, data);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{error}</span>
          <button
            className="absolute top-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
      )}

      <div className="flex justify-between flex-wrap xl:flex-nowrap xl:p-8 gap-10">
        <div className="w-full xl:w-3/5 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-md xl:text-xl font-semibold mb-4">
            Select a payment option
          </h2>
          <div className="flex justify-center gap-5 items-center flex-wrap mb-6">
            {paymentOption.length > 0 ? (
              paymentOption.map((option, i) => (
                <div
                  key={i}
                  className={`mb-4 p-4 border border-gray-300 rounded-md text-center cursor-pointer transition-all duration-300 hover:shadow-md ${
                    paymentMethod === option.payment_type.toUpperCase()
                      ? "border-red-500 shadow-md"
                      : ""
                  }`}
                  onClick={() => handlePaymentSelect(option.payment_type)}
                >
                  <Image
                    src={option.image}
                    width={100}
                    height={100}
                    alt={option.payment_type}
                    className="mx-auto mb-2 w-auto h-10 object-contain"
                  />
                  <span className="block text-sm font-medium">
                    {option.title}
                  </span>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-4">
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-200 rounded w-32 mb-4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={createOrder}
            disabled={!paymentMethod || isLoading}
            className={`w-full mt-4 py-3 rounded-md text-white font-medium transition-all duration-300 ${
              paymentMethod && !isLoading
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Processing..." : "Continue to Payment"}
          </button>
        </div>
      </div>

      {orderSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <div className="text-center">
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Payment successful!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Thank you for your purchase. Your order ID is {orderId}.
              </p>
              <button
                onClick={() => setOrderSuccessModal(false)}
                className="mt-4 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentStep;
