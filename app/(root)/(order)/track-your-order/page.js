import React from "react";
import TrackOrderForm from "../../../../Components/Forms/TrackOrderForm";

const TrackYourOrder = () => {
  return (
    <div className="bg-defaultBg">
      <div className="flex justify-center  flex-col lg:flex-row md:justify-between items-center">
        <h1 className="text-black text-xl font-medium px-20">Track Order</h1>

        <div className="text-black">
          <span className="text-[#868790] text-sm">Home / Track Order</span>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <TrackOrderForm />
      </div>
    </div>
  );
};



export default TrackYourOrder