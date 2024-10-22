import React, { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import ReactImageMagnifier from "simple-image-magnifier/react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Modal from "../Modal";
import ItemAddPopUp from "./ItemAddPopUp";

import { useRouter } from "next/router";
import {
  addToCard,
  changeItemQuantity,
  getAllCards,
} from "../../lib/actions/cart.actions";
import { getProductDetails } from "../../lib/actions/productDetail.action";
import { toast } from "react-toastify";

const AddToCartPopUp = ({
  setIsAddToCartPppUp,
  wishlistData,
  selectedIndex,
  userId,
  
}) => {
  const selectedProduct = wishlistData?.data?.[selectedIndex];
  // console.log("selectedProduct from last ::", selectedProduct);

  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isItemAddPopUp, setIsItemAddPopUp] = useState(false);
  const [imgActive, setImgActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  const [loading, setLoading] = useState(false);

  // Fetch product images
  useEffect(() => {
    const fetchProductDetails = async () => {
      if (selectedProduct?.product_id) {
        try {
          const details = await getProductDetails(selectedProduct.product_id);
          setProductDetail(details);
        } catch (error) {
          // console.error("Failed to fetch product details:", error);
          setError("Failed to load product details.");
        }
      }
    };

    fetchProductDetails();
  }, [selectedProduct]);

  //  product detail images
  const previews = productDetail?.data[0]?.photos?.map((item) => ({
    src: `${process.env.NEXT_PUBLIC_URL}/${item}`,
  })) || [{ src: "" }];

  const originals = previews.map((image) => image.src);

  useEffect(() => {
    let interval;
    if (isAutoPlay && previews.length > 1) {
      interval = setInterval(() => {
        setImgActive((prevImgActive) => (prevImgActive + 1) % previews.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, previews.length]);

  const handleImageClick = (index) => {
    setImgActive(index);
    setIsAutoPlay(false);
  };

  const addToCart = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    userId && formData.append("user_id", userId);
    userId && formData.append("login", 1);
    formData.append("id", selectedProduct?.product_id);
    formData.append("quantity", quantity);
    // formData.append("variant", quant);

    const result = await addToCard(
      `${process.env.NEXT_PUBLIC_API}/v3/carts/add`,
      formData
    );
    if (result.result) {
      // toast.success(result.cart_id);
      setIsItemAddPopUp(true);
    } else {
      toast.error(result.message);
    }
  };

  const totalPrice = selectedProduct
    ? parseFloat(selectedProduct?.product?.base_discounted_price) * quantity
    : 0;

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1) {
      toast.error("Quantity can't be less than 1");
      return;
    }

    if (newQuantity > selectedProduct?.product?.current_stock) {
      toast.error("Quantity exceeds available stock");
      return;
    }

    setQuantity(newQuantity);

    const formData = new FormData();
    formData.append("id", selectedProduct?.product_id);
    formData.append("quantity", newQuantity);

    setLoading(true);

    const result = await changeItemQuantity(formData);

    if (result) {
      // toast.success("Quantity updated successfully");
    } else {
      toast.error("Failed to update quantity");
    }

    setLoading(false);
  };

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}
      <Modal
        open={isItemAddPopUp}
        onclose={setIsItemAddPopUp}
        width={"w-[90%] md:w-[30rem]"}
        height={"h-auto"}
      >
        <ItemAddPopUp
          data={selectedProduct}
          onClose={() => setIsItemAddPopUp(false)}
        />
      </Modal>

      <section className="px-2 md:px-4 w-full mt-4">
        <div className="grid lg:grid-cols-7 gap-4">
          {/* Left Side Sidebar for images */}
          <div className="lg:col-span-3 mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-2">
                <div className="md:col-span-1 order-1">
                  <div className="flex flex-row md:flex-col justify-center gap-1">
                    {previews.map((item, i) => (
                      <div key={i}>
                        <Image
                          key={"preview-" + i}
                          src={item.src || ""}
                          alt="previews"
                          width={100}
                          height={100}
                          className={`object-cover w-14 h-14 rounded cursor-pointer ${
                            imgActive === i
                              ? "border-2 border-primary-red"
                              : "border-2 border-gray-100"
                          }`}
                          onClick={() => handleImageClick(i)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 md:order-1">
                  <div className="relative">
                    <div className="md:h-[15rem] object-cover">
                      <ReactImageMagnifier
                        srcPreview={previews[imgActive].src}
                        srcOriginal={originals[imgActive]}
                        className="rounded-lg !w-full !h-full"
                      />
                    </div>
                    <div className="text-[#008000] text-2xl absolute top-3 right-0 z-20">
                      <BsWhatsapp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-2 md:p-8 rounded-lg">
            <h1 className="text-black text-xl mt-2 lg:mt-0">
              {selectedProduct?.product?.name}
            </h1>

            <div className="mb-2 flex items-center gap-14 mt-4">
              <div className="text-light-gray-header text-sm">Price:</div>
              <div className="flex gap-2 items-center">
                <div className="line-through text-gray-500">
                  ₹{parseFloat(selectedProduct?.product?.base_price).toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-sm text-light-gray-header">
                Discounted Price:
              </div>
              <div className="text-red-600 text-2xl font-semibold ">
                ₹
                {parseFloat(
                  selectedProduct?.product?.base_discounted_price
                ).toFixed(2)}
                <span className="text-sm text-gray-400">/pc</span>
              </div>
            </div>

            <hr className="mb-4" />

            <div className="mb-4 flex flex-col md:flex-row md:items-center md:gap-[4.5rem]">
              <div className="text-light-gray-header text-sm">Quantity:</div>
              <div className="flex items-center mt-2">
                <button
                  className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={loading}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center mx-2 text-black bg-white outline-none"
                  value={quantity}
                  readOnly
                />
                <button
                  className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={loading}
                >
                  +
                </button>

                <span className="ml-2 text-gray-400 text-sm font-extralight">
                  ( {selectedProduct?.product?.current_stock} available)
                </span>
              </div>
            </div>

            <hr className="mb-4" />

            <div className="flex gap-14 mb-4">
              <div className="text-sm mb-4 text-light-gray-header mt-2">
                Total Price:
              </div>
              <span className="text-primary-red text-2xl font-semibold">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={addToCart}
              className="bg-red-600 text-nowrap text-white px-8 lg:px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center"
              disabled={loading}
            >
              {loading ? (
                "Adding..."
              ) : (
                <div className="flex items-center gap-1">
                  <LiaShoppingCartSolid />
                  <p>Add to cart</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCartPopUp;
