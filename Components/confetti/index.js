"use client";

import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  const [confettiPieces, setConfettiPieces] = useState(500);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiPieces(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleConfettiComplete = () => {
    // console.log(" completed");
  };

  return (
    <Confetti
      width={100}
      height={100}
      numberOfPieces={confettiPieces}
      onConfettiComplete={handleConfettiComplete}
    />
  );
};

ConfettiComponent.displayName = "ConfettiComponent";

export default ConfettiComponent;
