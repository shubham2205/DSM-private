"use client";

import React, { useEffect } from "react";
import { VscClose } from "react-icons/vsc";

const Modal = ({ open, onclose, children, width, height, padding }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll-modal");
    } else {
      document.body.classList.remove("no-scroll-modal");
    }

    return () => {
      document.body.classList.remove("no-scroll-modal");
    };
  }, [open]);

  if (!open) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => onclose(false)}
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[90] ${
        padding ? padding : "px-2"
      } `}
    >
      <div
        onClick={handleContentClick}
        className={`${width ? width : "w-1/3"}
        ${height ? height : "h-auto"}
         bg-white  rounded shadow-lg  relative overflow-y-auto`}
      >
        <button
          className="absolute top-3 right-4 text-gray-400 text-2xl z-[60]"
          onClick={() => onclose(false)}
        >
          <VscClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
