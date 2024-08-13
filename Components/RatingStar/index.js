"use client";

import React, { useState } from "react";

const RatingStar = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  // const handleRatingClick = (index, isHalf) => {
  //   const newRating = isHalf ? index + 0.5 : index + 1;
  //   setCurrentRating(newRating);
  // };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const isFullStar = currentRating >= index + 1;
        const isHalfStar = currentRating > index && currentRating < index + 1;

        return (
          <div className="w-4 h-4 my-2 relative" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFullStar ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-full h-full ${
                isFullStar ? "text-yellow-500" : "text-gray-400"
              }`}
              // onClick={() => handleRatingClick(index, false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            {isHalfStar && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-yellow-500 absolute top-0 left-0"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                onClick={() => handleRatingClick(index, true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStar;
