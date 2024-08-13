import React from "react";

const TrackOrderForm = () => {
  return (
    <>
      <div className=" w-full lg:w-96  bg-gray-100 text-black px-4 mb-20">
        <div className="w-full  space-y-6 bg-white rounded shadow-md">
          <h2 className=" border-b-2 text-2xl font-bold text-center text-black py-4">
            Check Your Order Status
          </h2>
          {/* <hr /> */}
          <form className="space-y-4 px-8">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Order Code"
                className="block w-full bg-defaultBg p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn w-full px-4 py-2 border-none text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-4"
              >
                Track Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TrackOrderForm;
