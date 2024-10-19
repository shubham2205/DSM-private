import Image from "next/image";
import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Modal from "../Modal";
import AddToCartPopUp from "../AddToCartPopUp";
import RatingStar from "../RatingStar";
import { removeFromWishlist } from "../../lib/actions/wishlist.action";
import { toast } from "react-toastify";

const WishlistClient = ({ wishlistData, userId, tag }) => {
  const [isAddToCartPppUp, setIsAddToCartPppUp] = useState({
    isOpen: false,
    selectedIndex: null,
  });

  const handleOpenAddToCart = (index) => {
    setIsAddToCartPppUp({
      isOpen: true,
      selectedIndex: index,
    });
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const result = await removeFromWishlist(productId);
      if (result?.success) {
        toast.success(result.message);
        tag;  // This should trigger the revalidation of the wishlist
      } else {
        toast.error("Failed to remove product from wishlist");
      }
    } catch (error) {
      toast.error("An error occurred while removing the product from the wishlist");
    }
  };

  return (
    <div>
      <Modal
        open={isAddToCartPppUp.isOpen}
        onclose={() =>
          setIsAddToCartPppUp({ isOpen: false, selectedIndex: null })
        }
        width={"md:w-[60%]"}
        height={" h-[80vh] md:h-[80vh] lg:h-auto"}
      >
        <AddToCartPopUp
          userId={userId}
          wishlistData={wishlistData}
          selectedIndex={isAddToCartPppUp.selectedIndex}
          setIsAddToCartPppUp={setIsAddToCartPppUp}
          tag={tag}
        />
      </Modal>

      <section className="w-full h-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {wishlistData?.data?.map((item, i) => (
            <div key={item.id}>
              <div className="w-full rounded ring-1 ring-gray-200 overflow-hidden bg-white hover:shadow-custom ease-in-out duration-200 px-2">
                <div className="relative md:p-3">
                  <div className="w-full lg:h-[13rem]">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                      src={`${process.env.NEXT_PUBLIC_URL}/${item?.product?.thumbnail_image}`}
                      alt={"image"}
                    />
                  </div>
                </div>
                <div className="md:px-4">
                  <p className="truncate-1-lines">{item?.product?.name}</p>
                  <div className="-my-2">
                    <RatingStar rating={item?.product?.rating} />
                  </div>
                  <div className="px-1 md:px-0">
                    <div className="flex items-center justify- gap-3">
                      <div className="line-through text-xs md:text-sm text-gray-500">
                        ₹{parseFloat(item?.product?.base_price).toFixed(2)}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-primary-red">
                        ₹
                        {parseFloat(
                          item?.product?.base_discounted_price
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-4 md:px-4 items-center justify-between mb-3">
                  <div
                    onClick={() => handleRemoveFromWishlist(item?.product_id)}
                    className="text-2xl text-gray-500 hover:text-gray-600 col-span-1 tooltip cursor-pointer z-10"
                    data-tip="Remove from wishlist"
                  >
                    <BsTrash3 />
                  </div>

                  <button
                    onClick={() => handleOpenAddToCart(i)}
                    className="bg-red-600 text-nowrap col-span-3 text-white py-1 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center"
                  >
                    <div className="flex items-center gap-1">
                      <LiaShoppingCartSolid />
                      <p>Add to cart</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WishlistClient;
