"use client";

import React, { useState, useEffect, useRef } from "react";
import OrderPlacedStep from "./OrderPlacedStep";
import ConfirmedStep from "./ConfirmedStep";
import PickUpStep from "./PickUpStep";
import OnDeliveryStep from "./OnDeliveryStep";
import DeliveredStep from "./DeliveredStep";
import {
  LiaClipboardCheckSolid,
  LiaFileInvoiceSolid,
  LiaNewspaperSolid,
  LiaShippingFastSolid,
  LiaTruckSolid,
} from "react-icons/lia";

const Stepper = ({ steps, currentStep }) => {
  const [stepState, setStepState] = useState([]);
  const stepRef = useRef();

  const updateSteps = (stepNumber, steps) => {
    return steps.map((step, index) => ({
      ...step,
      selected: index <= stepNumber,
      completed: index < stepNumber,
      highlight: index === stepNumber,
    }));
  };

  useEffect(() => {
    const initialSteps = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlight: index === 0,
      selected: index === 0,
    }));

    stepRef.current = initialSteps;
    setStepState(updateSteps(currentStep - 1, stepRef.current));
  }, [steps, currentStep]);

  return (
    <div className=" pb-2  flex justify-between items-center md:px-4">
      {stepState.map((step, index) => (
        <div
          key={index}
          className={`flex items-center ${
            index !== stepState.length - 1 ? "w-full" : ""
          }`}
        >
          <div className="relative flex flex-col items-center text-white">
            <div
              className={`rounded-full transition overflow-hidden duration-500 ease-in-out  h-8 w-8 md:h-12  md:w-12 flex items-center justify-center py-3 ${
                step.selected
                  ? "bg-red-600 text-white font-bold border border-red-600"
                  : "bg-[#d2d5dd]"
              }`}
            >
              {step.completed ? (
                <span className="text-white font-bold text-xl"> &#10003; </span>
              ) : (
                <>
                  {index === 0 && (
                    <LiaFileInvoiceSolid className="text-xl md:text-2xl" />
                  )}
                  {index === 1 && (
                    <LiaNewspaperSolid className="text-xl md:text-2xl" />
                  )}
                  {index === 2 && (
                    <LiaTruckSolid className="text-xl md:text-2xl" />
                  )}
                  {index === 3 && (
                    <LiaShippingFastSolid className="text-xl md:text-2xl" />
                  )}
                  {index === 4 && (
                    <LiaClipboardCheckSolid className="text-xl md:text-2xl" />
                  )}
                </>
              )}
            </div>
            <div
              className={`absolute top-0 text-center mt-9  md:mt-16  text-[0.50rem] md:text-xs font-medium capitalize 
              
              ${step.highlight ? "text-gray-900" : "text-gray-400"}  md:block`}
            >
              {step.description}
            </div>
          </div>
          {index !== stepState.length - 1 && (
            <div
              className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
                step.completed ? "border-red-600" : "border-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

// -----------------------------Button start----------------
const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-14 mb-8 items-center">
      <button
        onClick={() => handleClick("back")}
        className={`bg-red-300 capitalize py-2 px-6 rounded-lg font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-500 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className={`bg-green-500 capitalize py-2 px-6 rounded-lg font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-500 hover:text-white transition duration-200 ease-in-out ${
          currentStep === steps.length ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {currentStep === steps.length - 1 ? "Next" : "Confirm"}
      </button>
    </div>
  );
};

function TrackOrderStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Order Placed",
    "Confirmed",
    "Pick Up",
    "On Delivery",
    "Delivered",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <OrderPlacedStep />;
      case 2:
        return <ConfirmedStep />;
      case 3:
        return <PickUpStep />;
      case 4:
        return <OnDeliveryStep />;
      case 5:
        return <DeliveredStep />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="w-full bg-[f0f1f1] flex flex-col justify-center items-center px-2 rounded-xl pb-2">
      <div className="lg:container w-full horizontal mt-0 lg:mt-5  ">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="!mt-4 !md:mt-13 w-full md:px-5">
        {displayStep(currentStep)}
      </div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}

export default TrackOrderStepper;
