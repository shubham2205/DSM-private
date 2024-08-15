"use client";

import React, { useState } from "react";
import {
  LiaShoppingCartSolid,
  LiaTruckSolid,
  LiaCreditCard,
  LiaCheckCircle,
} from "react-icons/lia";
import { ImMap2 } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CartStep from "../../../../Components/Stepper/CartStep";
import ShippingStep from "../../../../Components/Stepper/ShippingStep";
import DeliveryStep from "../../../../Components/Stepper/DeliveryStep";
import PaymentStep from "../../../../Components/Stepper/PaymentStep";
import ConfirmationStep from "../../../../Components/Stepper/ConfirmationStep";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      label: "My Cart",
      icon: <LiaShoppingCartSolid className="text-4xl" />,
    },
    {
      label: "Shipping info",
      icon: <ImMap2 className="text-4xl" />,
    },
    {
      label: "Delivery info",
      icon: <LiaTruckSolid className="text-4xl" />,
    },
    {
      label: "Payment",
      icon: <LiaCreditCard className="text-4xl" />,
    },
    {
      label: "Confirmation",
      icon: <LiaCheckCircle className="text-4xl" />,
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return {
          component: <CartStep />,
          buttonText: "Continue to Shipping",
        };
      case 2:
        return {
          component: <ShippingStep />,
          buttonText: "Continue to Delivery Info",
        };
      case 3:
        return {
          component: <DeliveryStep />,
          buttonText: "Continue to Payment",
        };
      case 4:
        return {
          component: <PaymentStep />,
          buttonText: "Continue to Confirmation",
        };
      case 5:
        return {
          component: <ConfirmationStep />,
          buttonText: "Complete Order",
        };
      default:
        return { component: null, buttonText: "" };
    }
  };

  const { component, buttonText } = renderStepContent();

  return (
    <div className="w-full mx-auto p-2 my-5 lg:my-0 lg:p-4">
      <div className="flex mx-auto justify-between  xl:px-2 xl:justify-center xl:gap-20 lg:text-nowrap items-center mb-4 w-full">
        {/* -------------------step-icons---------------------- */}
        {steps.map((step, index) => (
          <div key={index} className="relative ">
            <div
              className={`${
                currentStep === index + 1
                  ? "text-red-500"
                  : currentStep > index + 1
                  ? "text-green-500"
                  : "text-gray-400"
              } flex flex-col items-center font-bold `}
            >
              {step.icon}
              <span className="hidden lg:block">
                {index + 1}. {step.label}
              </span>
            </div>

            {/* ---------------step-arrow--------------------- */}
            {index < steps.length - 1 && (
              <div
                className={`absolute need-lessthan top-1/2 xl:-mt-2 left-full transform -translate-y-1/2 ${
                  currentStep > index + 1 ? "text-green-500" : "text-gray-300"
                }`}
              >
                <AiOutlineRight className="text-2xl " />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lg:p-4 mt-5 lg:mt-0 rounded">{component}</div>

      <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-center lg:justify-between mt-4">
        <button onClick={prevStep} className="text-red-500 hover:underline">
          ← Return to {steps[currentStep - 2]?.label || "shop"}
        </button>
        <button
          onClick={nextStep}
          className="bg-primary-red font-semibold text-white px-4 py-2 rounded mb-3 xl:mb-0"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
