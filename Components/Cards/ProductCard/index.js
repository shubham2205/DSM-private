import React, { useState } from "react";
import { LiaHeart, LiaShoppingCartSolid } from "react-icons/lia";
import Image from "next/image";
import RatingStar from "../../RatingStar";
import {
  isProductInWishlist,
  addToWishlist,
} from "../../../lib/actions/wishlist.action";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";
import { addToCard } from "../../../lib/actions/cart.actions";

const ProductCard = ({ cardData, wid, tag, userId }) => {
  // console.log(userId, "userId"); 

  const [isItemInWishlist, setIsItemInWishlist] = useState(false);

  // Wishlist handler
  const handleCheckWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (isItemInWishlist) {
        toast.info("Product is already in the wishlist");
      } else {
        await addToWishlist(cardData.id);
        const result = await isProductInWishlist(cardData.id);
        // console.log(result, "wish");
        setIsItemInWishlist(true);
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      toast.error("Error adding product to wishlist");
    }
  };

  // Add to Cart handler
  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const url = `${process.env.NEXT_PUBLIC_API}/v3/carts/add`;
    // console.log("URL:", url); 

    const formData = new FormData();
    formData.append("user_id", userId); 
    formData.append("id", cardData.id); 
    formData.append("quantity", 1); 
    formData.append("variant", "");
    formData.append("login", 1);
    // console.log(formData, "FormData before API call");

    try {
      const result = await addToCard(url, formData);
      // console.log(result, "Result from API");

      if (result) {
        toast.success("Product added to cart successfully!");
      } else {
        toast.error("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Error adding product to cart.");
    }
  };

  return (
    <div className="py-2">
      <div
        className={`${
          wid ? wid : "max-w-[15rem]"
        } rounded ring-1 ring-gray-200 overflow-hidden bg-white hover:shadow-custom ease-in-out duration-200`}
      >
        <div className="relative md:p-3">
          <div className="absolute top-0 left-0 py-3 bg-[#FFEAEA] text-primary-red text-xs font-bold rounded-r-full px-2">
            OFF{" "}
            <span className="bg-primary-red text-white rounded-full px-1 py-1">
              {cardData?.discount_percent}
            </span>
          </div>
          <div className="w-full lg:h-[13rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-contain"
              src={`${process.env.NEXT_PUBLIC_URL}/${cardData?.thumbnail_image}`}
              alt={cardData?.name}
            />
          </div>
        </div>
        <div className="md:px-4 py-4">
          <div className="flex justify-evenly">
            <div
              className="tooltip mb-2 cursor-pointer"
              data-tip="Add to wishlist"
              onClick={handleCheckWishlist}
            >
              {isItemInWishlist ? (
                <FaHeart className="text-primary-red text-lg" />
              ) : (
                <LiaHeart className="text-primary-red text-lg" />
              )}
            </div>
            <div className="border-r-[1px] border-gray-200"></div>
            <div
              className="mb-2 text-xl cursor-pointer"
              onClick={handleAddToCart}
            >
              <LiaShoppingCartSolid className="text-primary-red" />
            </div>
          </div>
          <hr className="border-1 border-red-500 mb-3" />
          <div className="px-1 md:px-0">
            <div className="flex items-center justify-gap-3">
              <div className="line-through text-xs md:text-sm text-gray-500">
                {cardData?.stroked_price}
              </div>
              <div className="text-xs md:text-sm font-bold text-primary-red">
                {cardData?.main_price}
              </div>
            </div>
            <div className="flex items-center">
              <RatingStar rating={cardData?.rating} />
            </div>
            <div className="-mt-1 text-xs md:text-sm font-medium text-gray-600">
              <h1
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cardData?.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
