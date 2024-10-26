"use server";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import NavTabs from "../../Components/Navbar/NavTabs";
import { getData } from "../../lib/actions/universel.actions";
import { cookiesData } from "../../lib/actions/auth.actions";
import { getAllCards } from "../../lib/actions/cart.actions";
import { getCategory } from "../../lib/actions/category.actions";
import { getUserWishlist } from "../../lib/actions/wishlist.action";

const layout = async ({ children }) => {
  const userId = await cookiesData("userId");
  const token = await cookiesData("token");

  const setting = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/business-settings`
  );
  const allCategoriesData = await getCategory();
  const allCarts = await getAllCards();
  const wishlistData = async () => token && (await getUserWishlist());
  // console.log("allCarts ::", allCarts);
  return (
    <>
      <div className="bg-defaultBg text-black relative">
        <ToastContainer theme="colored" hideProgressBar />
        <div className="fixed w-full z-40 ">
          <Navbar
            carts={allCarts}
            token={token}
            allCategory={allCategoriesData?.data}
            wishlistData={
              wishlistData?.data?.length ? wishlistData?.data?.length : 0
            }
          />
        </div>
        <div className="pt-20 ">
          <NavTabs />
        </div>
        <main className="bg-defaultBg px-4">{children}</main>
        <Footer setting={setting} />
      </div>
    </>
  );
};

export default layout;
