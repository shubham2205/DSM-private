import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LiaCheckCircle } from "react-icons/lia";
import { useRouter } from "next/navigation";

function ItemAddPopUp({ data, onClose }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = () => {
    if (mounted) {
      router.push("/checkout");
    }
  };

  return (
    <div className="px-2 py-3 bg-white shadow-lg rounded-md">
      <div className="flex flex-col items-center">
        <div className="text-green-500 text-3xl mb-2 font-semibold">
          <LiaCheckCircle />
        </div>
        <h2 className="text-3xl text-center text-green-600 mb-4">
          Item added to your cart!
        </h2>
      </div>
      <div className="grid grid-cols-12 items-center mb-4">
        <div className="w-full col-span-3">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/${data?.product?.thumbnail_image}`}
            alt="LCD 16x2 Blue Display"
            width={200}
            height={200}
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-9">
          <h3 className="text-lg">{data?.product?.name}</h3>
          <span>Price :</span>{" "}
          <span className="text-xl font-bold text-red-500">
            {data?.product?.base_discounted_price}{" "}
            <span className="text-gray-400 font-normal text-sm"> /pc</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-2 w-full">
        <button
          onClick={onClose}
          className="bg-white text-sm text-red-500 border border-red-500 py-2 px-3 rounded hover:bg-red-500 hover:text-white transition"
        >
          Back to shopping
        </button>
        <button
          onClick={handleCheckout}
          className="bg-red-500 text-sm text-white py-2 px-3 rounded hover:bg-gray-500 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ItemAddPopUp;
