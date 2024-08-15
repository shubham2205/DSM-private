import React from 'react'

const PickUpStep = () => {
  return (
    <div className="!mt-6 ">
    {/*------------------ Order Summary Start------------------ */}
    <div className="border  rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-semibold my-3 text px-4">
        Order Summary
      </h2>
      <hr />
      <div className="grid md:grid-cols-2 lg:gap-4 lg:p-4">
        {/* right table  */}
        <div>
          <table cellpadding="10" cellspacing="10">
            <tr>
              <td className="">
                <strong>Order Code:</strong>
              </td>
              <td>
                <p>20240803-07483320</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Customer:</strong>
              </td>
              <td>
                <p>himanshu jain</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td>
                <p>example@example.com</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Shipping Address:</strong>
              </td>
              <td>
                <p>
                  183/1, jain nagar lalghati, bhopal, Bhopal, 462001, India
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Note:</strong>
              </td>
              <td>
                <p></p>
              </td>
            </tr>
          </table>
        </div>

        {/* left table */}
        <div className="mt-4 lg:mt-0">
          <table border="1" cellpadding="10" cellspacing="0">
            <tr>
              <td className="">
                <strong>Order Date:</strong>
              </td>
              <td>
                <p>03-08-2024 07:48 AM</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Order Status:</strong>
              </td>
              <td>
                <p>PickUp</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total order amount:</strong>
              </td>
              <td>
                <p>₹153</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Shipping method:</strong>
              </td>
              <td>
                <p>Flat shipping rate</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment method:</strong>
              </td>
              <td>
                <p>Phonepe</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/*---------------- Order Details Start--------------------------------- */}
      <div className=" lg:col-span-10 border  rounded-lg shadow-sm bg-white mt-4 h-52 overflow-x-auto">
        <h1 className="px-4 py-2 font-medium text-md">Order Details</h1>
        <hr />
        <div className="">
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class=" px-4 py-2">#</th>
                <th class=" px-4 py-2 text-start ">Product</th>
                <th class=" px-4 py-2">Variation</th>
                <th class=" px-4 py-2">Quantity</th>
                <th class=" px-4 py-2">Delivery type</th>
                <th class=" px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4  py-2">1</td>
                <td class=" px-4 py-2 ">
                  {" "}
                  <p className="">
                    Brushless DC Motor A2212/15T 930KV Racerstar Compatible
                  </p>
                </td>
                <td class=" px-4 py-2">-</td>
                <td class=" px-4 py-2">1</td>
                <td class=" px-4 py-2">Home Delivery</td>
                <td class=" px-4 py-2">$320</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Amount */}
      <div className=" lg:col-span-2 border p-4 rounded-lg shadow-sm bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Order Amount</h2>
        <table className="min-w-full bg-white">
          <tbody>
            <tr>
              <td className="py-2">
                <strong>Subtotal</strong>
              </td>
              <td className="py-2 text-right">₹130</td>
            </tr>
            <tr>
              <td className="py-2">
                <strong>Shipping</strong>
              </td>
              <td className="py-2 text-right">₹35</td>
            </tr>
            <tr>
              <td className="py-2">
                <strong>Tax</strong>
              </td>
              <td className="py-2 text-right">₹23</td>
            </tr>
            <tr>
              <td className="py-2">
                <strong>Coupon</strong>
              </td>
              <td className="py-2 text-right">₹0</td>
            </tr>
            <tr>
              <td className="py-2">
                <strong>TOTAL</strong>
              </td>
              <td className="py-2 text-right">
                <strong>₹188</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default PickUpStep
