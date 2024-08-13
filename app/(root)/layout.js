import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import NavTabs from "@/Components/Navbar/NavTabs";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = ({ children }) => {
  return (
    <>
      <ToastContainer theme="colored" hideProgressBar />
      <div className="bg-defaultBg text-black relative">
        <div className="fixed w-full z-40 ">
          <Navbar />
        </div>
        <div className="pt-20 ">
          <NavTabs />
        </div>
        <main className="bg-defaultBg px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default layout;
