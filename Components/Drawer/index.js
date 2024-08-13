"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-75 translate-x-0  "
          : " transition-all delay-75 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " max-w-lg right-0 absolute bg-white h-full shadow-xl delay-75 duration-75 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
       
        <article className="relative  w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
