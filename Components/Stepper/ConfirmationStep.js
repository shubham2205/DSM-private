import React from "react";
// import Confetti from "../confetti";

const ConfirmationStep = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* <Confetti /> */}
      <div className="text-center mb-6">
        <svg
          className="mx-auto mb-4 text-green-500 w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold">Thank You for Your Order!</h1>
        <p className="text-gray-600">
          Order Code: <span className="text-red-500">20240809-09173213</span>
        </p>
        <p className="text-gray-500 text-sm">
          A copy of your order summary has been sent to your email.
        </p>
      </div>

      <div className="order-summary">
        <h2 className="text-xl font-semibold my-2">Order Summary</h2>
        <div className="parts grid lg:grid-cols-2 gap-5">
          <div className="left divide-y-[1px]">
            <table className="w-full text-left">
              <tbody>
                <tr className="py-2 border-y-[1px]">
                  <td className="font-medium py-2">Order Code:</td>
                  <td className="">20240809-09173213</td>
                </tr>
                <tr className="py-2 border-y-[1px]">
                  <td className="font-medium py-2">Name:</td>
                  <td className="">Himanshu Jain</td>
                </tr>
                <tr className="py-2 border-y-[1px]">
                  <td className="font-medium py-2">Email:</td>
                  <td className="">himanshu@example.com</td>
                </tr>
                <tr className="py-2 border-y-[1px]">
                  <td className="font-medium py-2">Shipping Address:</td>
                  <td className="">
                    183/1, Jain Nagar, Lalghati, Bhopal, Bhopal, India
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right divide-y-[1px]">
            <table className="w-full text-left">
              <tbody>
                <tr className="py-2 border-y-[1px] ">
                  <td className="font-medium py-2">Order Date:</td>
                  <td className="">09-08-2024 09:17 AM</td>
                </tr>
                <tr className="py-2 border-y-[1px] ">
                  <td className="font-medium py-2 ">Order Status:</td>
                  <td className="">Pending</td>
                </tr>
                <tr className="py-2 border-y-[1px] ">
                  <td className="font-medium py-2">Total Order Amount:</td>
                  <td className="">₹153</td>
                </tr>
                <tr className="py-2 border-y-[1px] ">
                  <td className="font-medium py-2">Shipping:</td>
                  <td className="">Flat shipping rate</td>
                </tr>
                <tr className="py-2 border-y-[1px] ">
                  <td className="font-medium py-2">Payment Method:</td>
                  <td className="">Cash on delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Order Details</h2>

        <div className="overflow-x-auto">
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="border px-4 py-2">#</th>
                <th class="border px-4 py-2">Product</th>
                <th class="border px-4 py-2">Variation</th>
                <th class="border px-4 py-2">Quantity</th>
                <th class="border px-4 py-2">Delivery type</th>
                <th class="border px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">1</td>
                <td class="border px-4 py-2">
                  {" "}
                  Brushless DC Motor A2212/15T 930KV Racerstar Compatible
                </td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">1</td>
                <td class="border px-4 py-2">Home Delivery</td>
                <td class="border px-4 py-2">$320</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur, distinctio.
                </td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">6</td>
                <td class="border px-4 py-2">Home Delivery</td>
                <td class="border px-4 py-2">$170</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">
                  Lorem ipsum dolor sit amet consectetur.
                </td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">Home Delivery</td>
                <td class="border px-4 py-2">$86</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis aliquid minus earum deleniti laudantium!
                </td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">7</td>
                <td class="border px-4 py-2">Home Delivery</td>
                <td class="border px-4 py-2">$433</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:grid lg:grid-cols-3 mt-4">
          <div className="hidden lg:block col-span-2"></div>
          <div className="sub-total divide-y-[1px] ">
            <p className="py-2 flex justify-between items-center ">
              <div className="font-bold">Subtotal</div>
              <div className="">₹599</div>
            </p>
            <p className="py-2 flex justify-between items-center ">
              <div className="font-bold">Shipping</div>
              <div className="">₹0</div>
            </p>
            <p className="py-2 flex justify-between items-center ">
              <div className="font-bold">tax</div>
              <div className="">₹108</div>
            </p>
            <p className="py-2 flex justify-between items-center ">
              <div className="font-bold">Coupon Discount</div>
              <div className="">₹0</div>
            </p>
            <p className="py-2 flex justify-between items-center ">
              <div className="font-bold">TOTAL</div>
              <div className="">₹707</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
