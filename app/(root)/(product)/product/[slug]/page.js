"use client";
// import React from 'react'

// const ProductDetails = () => {
//   return (
//     <div>ProductDetails</div>
//   )
// }

// export default ProductDetails

// "use client"

// import React, { useEffect, useState } from "react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaRegEnvelope,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import { TiSocialTwitter } from "react-icons/ti";
// import { AiOutlineShopping } from "react-icons/ai";
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { CiHeart } from "react-icons/ci";
// import ReactImageMagnifier from "simple-image-magnifier/react";
// import Image from "next/image";
// import { BsWhatsapp } from "react-icons/bs";
// import { SwiperSlide } from "swiper/react";
// import DOMPurify from "dompurify";
// import { FaStar } from "react-icons/fa";
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import SliderPerview2 from "../../../../../Components/Slider/SliderPerview2";
// import RatingStar from "../../../../../Components/RatingStar";
// import ProductCard from "../../../../../Components/Cards/ProductCard";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// const ProductDetails = ({ data }) => {
//   // const [brandSelectSize, setBrandSelectSize] = useState(1);
//   // const [sortSelectSize, setSortSelectSize] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");
//   // const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [rating, setRating] = useState(data && data?.at(0)?.rating);
//   //--------For Tabs Start---------
//   const [imgActive, setImgActive] = useState(0);

//   const router = useRouter();
//   const { id } = router.query;
//   const {
//     data: topSellingData,
//     error: topSellingError,
//     isValidating: reletedProductValidating,
//   } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/products/best-seller`, fetcher);

//   const {
//     data: reletedProductData,
//     error: reletedProductError,
//     isValidating: topSellingValidating,
//   } = useSWR(
//     `${process.env.NEXT_PUBLIC_API}/v3/products/related/${id}`,
//     fetcher
//   );
//   const {
//     data: reletedItemData,
//     error: reletedItemError,
//     isValidating: reletedItemValidating,
//   } = useSWR(
//     `${process.env.NEXT_PUBLIC_API}/v3/products/related_item/${id}`,
//     fetcher
//   );

//   const {
//     data: recentViewData,
//     error: recentViewError,
//     isValidating: recentViewValidating,
//   } = useSWR(
//     `${process.env.NEXT_PUBLIC_API}/v3/recent-products/${id}`,
//     fetcher
//   );

//   if (reletedItemError || recentViewError) return <div>failed to load</div>;

//   // useEffect(() => {
//   //   if (data && data.length > 0) {
//   //     setRating(data[0].rating);
//   //   }
//   // }, [data]);

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   //------------End---------------
//   // const handleBrandChange = (e) => {
//   //   setBrandSelectSize(1);
//   // };

//   // const handleSortChange = (e) => {
//   //   setSortSelectSize(1);
//   // };

//   const handleImageClick = (index) => {
//     setImgActive(index);
//     // setIsAutoPlay(false);
//   };

//   const sanitizedDescription = data
//     ? DOMPurify.sanitize(data[0].description)
//     : "";

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${day}-${month}-${year}`;
//   };

//   // console.log(data, "prodddct data");
//   return (
//     <>
//       {/*----------------Section First Product and Price Start--------------------------- */}
//       <section className="    bg-defaultBg w-full mt-4">
//         <div className="grid  lg:grid-cols-5 gap-10 bg-white lg:px-3">
//           {/*--------------------------- Left Side Sidebar for images ------------------------------*/}
//           <div className="mt-5 lg:col-span-2 relative">
//             <div className=" ">
//               <div className="parent grid lg:grid-cols-6  w-full ">
//                 {/* ----Four Swiper Map----- */}
//                 <div className="lg:col-span-1 hidden lg:block">
//                   <div className="md:grid grid-cols-1  h-16 gap-2  ">
//                     {data &&
//                       data[0]?.photos?.map((item, i) => {
//                         return (
//                           <div key={i} className="w-16 h-16">
//                             <Image
//                               key={"preview-" + i}
//                               src={`${process.env.NEXT_PUBLIC_URL}/${item}`}
//                               alt="previews"
//                               width={100}
//                               height={100}
//                               className={`object-cover w-full h-full   rounded cursor-pointer ${
//                                 imgActive === i
//                                   ? "border-2 border-primary-red"
//                                   : "border-2 border-gray-100"
//                               }`}
//                               onClick={() => handleImageClick(i)}
//                             />
//                           </div>
//                         );
//                       })}
//                   </div>
//                 </div>

//                 {/*-----Product image Magnifier----  */}
//                 <div className="lg:col-span-5">
//                   <div className="relative   ">
//                     <div className="w-full lg:h-[32rem] object-cover">
//                       <ReactImageMagnifier
//                         srcPreview={`${process.env.NEXT_PUBLIC_URL}/${data
//                           ?.at(0)
//                           ?.photos?.at(imgActive)}`}
//                         srcOriginal={`${process.env.NEXT_PUBLIC_URL}/${data
//                           ?.at(0)
//                           ?.photos?.at(imgActive)}`}
//                         magnifierSize="400px"
//                         magnifierBorderSize={5}
//                         zoomFactor={15}
//                         className="rounded-lg !w-full !h-full"
//                       />
//                     </div>
//                     <div className="text-[#008000] text-2xl absolute top-3 right-6 lg:right-0 z-20">
//                       <BsWhatsapp />
//                     </div>
//                   </div>
//                 </div>

//                 {/* -----------------------bullet pagination start------------------ */}
//                 <div className="flex gap-1 absolute left-[40%] lg:left-2/4  -bottom-12 lg:bottom-16">
//                   {data?.at(0).photos?.map((item, i) => (
//                     <div
//                       key={i}
//                       className={`w-3 h-3 rounded-full cursor-pointer ${
//                         imgActive === i ? "bg-primary-red" : "bg-gray-200"
//                       }`}
//                       onClick={() => handleImageClick(i)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ------------------------------ Right Side Main product details ------------------------ */}
//           <div className="p- mt-5 px-3 lg:px-0 lg:col-span-3 pt-12 lg:pt-0 rounded-lg">
//             <h1 className="text-black text-xl  mt-2 lg:mt-0">
//               {data && data[0].name}
//             </h1>

//             <div className="flex items-center justify-between gap-3 mb-3 ">
//               <div className="flex gap-1 items-center">
//                 <div className="rating ">
//                   <RatingStar rating={rating} />
//                 </div>

//                 <div className="text-gray-500 text-sm">
//                   ({data && data[0].rating_count} Reviews)
//                 </div>
//               </div>
//               <button className="bg-[#0ABB75] rounded-2xl px-[10px] py-[3.5px] text-white text-xs font-light">
//                 In stock
//               </button>
//             </div>
//             <hr className="mb-4" />

//             <div className="mb-4  ">
//               <span className=" text-light-gray-header text-sm">Category:</span>
//               <span className="text-[#0ABB75] font-bold text-sm">
//                 {data && data[0].category}
//               </span>
//             </div>
//             <div className="mb-4 ">
//               <span className=" text-light-gray-header text-sm">SKU:</span>
//               <span className="text-[#0ABB75] font-bold text-sm">
//                 {data && data[0].sku}
//               </span>
//             </div>
//             <hr className="mb-4" />

//             <div className="mb-4 flex gap-14">
//               <div className="text-light-gray-header text-sm">MRP Price:</div>

//               <div className="flex gap-2 items-center">
//                 <div className="line-through text-gray-500">
//                   {data && data[0].stroked_price}
//                 </div>
//                 <div className="bg-[#6CD6AC]  px-[3px] py-[4px] rounded-md text-xs font-semibold text-white">
//                   {data && data[0].discount_persent} OFF
//                 </div>
//               </div>
//             </div>
//             <div className=" flex gap-4">
//               <div className="text-sm  text-light-gray-header">
//                 Discounted Price:
//               </div>
//               <div className="text-red-600 text-2xl font-semibold ">
//                 {data && data[0].main_price}{" "}
//                 <span className="text-sm text-gray-400">
//                   / {data && data[0].unit}
//                 </span>
//               </div>
//             </div>
//             <hr className="mb-4 mt-2" />

//             <div className="mb-4 flex flex-col md:flex-row md:items-center md:gap-[4.5rem]">
//               <div className=" text-light-gray-header text-sm">Quantity:</div>
//               <div className="flex items-center mt-2">
//                 <button className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]">
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   className="w-12 text-center mx-2 text-black bg-white outline-none"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                 />
//                 <button className="border w-10 h-10 rounded-full text-[#797D81] bg-[#E2E6EA]">
//                   +
//                 </button>
//                 <span className="ml-2 text-gray-400 text-sm font-extralight">
//                   ({data && data[0].current_stock} available)
//                 </span>
//               </div>
//             </div>
//             <hr className="mb-4" />

//             <div className="mb-4 text-light-gray-header text-sm flex gap-[5.1rem]">
//               <div className="text-light-gray-header text-sm">Weight:</div>
//               <div>{data && data[0].weight}</div>
//             </div>
//             <hr className="mb-4" />

//             <div className=" flex gap-14 mb-4">
//               <div className="text-sm mb-4 text-light-gray-header mt-2">
//                 Total Price:
//               </div>
//               <span className="text-primary-red text-2xl font-semibold">
//                 {data && Number(data[0].calculable_price).toFixed(2)}
//               </span>
//             </div>

//             {/* ---------Button ---------- */}
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex gap-3">
//                 <button className="bg-gray-800  col-span-2  text-white w-[7rem] py-2 rounded-md hover:bg-gray-900 flex justify-center text-nowrap items-center gap-1">
//                   <div className="flex items-center gap-1">
//                     <AiOutlineShopping />
//                     <p>Add to cart</p>
//                   </div>
//                 </button>
//                 <button className="bg-red-600  col-span-2 text-nowrap text-white w-[7rem] py-2 rounded-md hover:bg-red-700 flex items-center gap-1 justify-center">
//                   <div className="flex items-center gap-1">
//                     <LiaShoppingCartSolid />
//                     <p>Buy Now</p>
//                   </div>
//                 </button>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="bg-blue-600 col-span-2  text-nowrap  text-white w-[7rem] py-2 rounded-md hover:bg-blue-700 flex items-center gap-1 justify-center">
//                   <div className="flex items-center gap-1">
//                     <LiaShoppingCartSolid />
//                     <p>Bulk Order</p>
//                   </div>
//                 </button>
//                 <div className="col-span-1">
//                   <CiHeart className="text-black text-xl " />
//                 </div>
//               </div>
//             </div>

//             {/* -----Social icon--------- */}
//             <div className="flex md:gap-[5rem] flex-col md:flex-row md:items-center  mt-4 mb-8">
//               <h5 className="text-gray-btn mb-4 md:mb-0">Share:</h5>
//               <div className="flex gap-2">
//                 <div className="text-white text-xl p-2 bg-[#0E76E6] flex justify-center items-center">
//                   <FaRegEnvelope />
//                 </div>
//                 <div className="text-white text-xl p-2 bg-[#0087BA] flex justify-center items-center">
//                   <TiSocialTwitter />
//                 </div>
//                 <div className="text-white text-xl p-2 bg-[#2D4373] flex justify-center items-center">
//                   <FaFacebookF />
//                 </div>
//                 <div className="text-white text-xl p-2 bg-[#005983] flex justify-center items-center">
//                   <FaLinkedinIn />
//                 </div>
//                 <div className="text-white text-xl p-2 bg-[#29A628] flex justify-center items-center">
//                   <FaWhatsapp />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ----------------------------Section Second List Of Product Start --------------------------- */}
//       <section className="flex text-black w-full mt-6  gap-6 mb-10">
//         {/* ------------------------Left Side Section start------------------ */}
//         <aside className="w-[27%]  bg-defaultBg  shadow h-screen overflow-y-auto no-scrollbar hidden  lg:block">
//           <div className="bg-white px-4 py-3">
//             <h2 className="text-sm mb-1 text-[#AEAEB2]">Sold By</h2>
//             <hr />
//             <p className="text-md mb-2 ">DSM Online</p>
//             <div className="border border-gray-200 rounded-md">
//               <div className="flex flex-col justify-center items-center py-2">
//                 {/* <div className="rating ">
//                   <input
//                     type="radio"
//                     name="rating-1"
//                     className="mask mask-star bg-yellow-500 w-4 h-4 "
//                   />
//                   <input
//                     type="radio"
//                     name="rating-1"
//                     className="mask mask-star bg-yellow-500 w-5 h-5 "
//                     defaultChecked
//                   />
//                   <input
//                     type="radio"
//                     name="rating-1"
//                     className="mask mask-star bg-yellow-500 w-5 h-5 "
//                   />
//                   <input
//                     type="radio"
//                     name="rating-1"
//                     className="mask mask-star bg-yellow-500 w-5 h-5 "
//                   />
//                   <input
//                     type="radio"
//                     name="rating-1"
//                     className="mask mask-star bg-yellow-500 w-5 h-5 "
//                   />
//                 </div> */}

//                 <RatingStar rating={rating} />

//                 {/* ------------------rating star------------------------ */}

//                 <div className="text-gray-500 text-xs">
//                   ({data?.[0]?.reviews?.reviews_count?.length || 0}
//                   <span className="ml-2">customer reviews</span>)
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full mt-6 pb-2 px-4  bg-white shadow-lg">
//             <p className="py-2 font-semibold ">Top Selling Products</p>
//             <hr className="py-2 pb-4" />

//             {topSellingData?.data?.map((ele, i) => (
//               <Link href={`/product/${ele?.id}`} key={i}>
//                 <div
//                   className={`w-full shadow-sm px-1  gap-10 py-3 grid grid-cols-5 items-center ${
//                     i !== topSellingData.data.length - 1 ? "border-b" : ""
//                   }`}
//                 >
//                   <div className="col-span-2">
//                     <Image
//                       src={`${process.env.NEXT_PUBLIC_URL}/${ele.thumbnail_image}`}
//                       width={100}
//                       height={100}
//                       alt="Arduino Uno Protoshield"
//                       className="w-full h-32 object-contain mb-4 "
//                     />
//                   </div>
//                   <div className="col-span-3">
//                     <h2
//                       className="text-[0.80rem]  mb-2 text-[#5E5E67]"
//                       style={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                       }}
//                     >
//                       {ele?.name}
//                     </h2>
//                     <div className="flex items-center ">
//                       {/* -----------------star rating------------------------ */}

//                       <RatingStar rating={ele.rating} />

//                       <span className="ml-2 text-sm text-white py-[2px] px-1 bg-green-500 font-semibold">
//                         {ele.discount_percent} OFF
//                       </span>
//                     </div>
//                     <div className=" flex gap-2 mt-3 items-center ">
//                       <p className="text-lg font-bold text-gray-500 line-through">
//                         {ele.stroked_price}
//                       </p>

//                       <p className="text-md font-bold text-red-500 ">
//                         {ele.main_price}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </aside>
//         {/* ----------------------------------right-side section Start------------------------------ */}
//         <section className="w-full lg:w-[73%] py-6 lg:py-0 lg:p- bg-defaultBg h-screen overflow-y-scroll no-scrollbar ">
//           <div className="bg-white">
//             <ul className="flex gap-3 space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 bg-white">
//               <li className="cursor-pointer">
//                 <div
//                   className={`inline-flex items-center px-4 py-3 mt-4 w-full ${
//                     activeTab === "description"
//                       ? "text-[#333333] border-b-2 border-primary-red"
//                       : "text-[#333333] bg-gray-50"
//                   }`}
//                   aria-current={
//                     activeTab === "description" ? "page" : undefined
//                   }
//                   onClick={() => handleTabClick("description")}
//                 >
//                   Description
//                 </div>
//               </li>

//               <li className="cursor-pointer">
//                 <div
//                   className={`inline-flex items-center px-4 py-3 w-full ${
//                     activeTab === "reviews"
//                       ? "text-[#333333] border-b-2 border-primary-red"
//                       : "text-[#333333] bg-gray-50"
//                   }`}
//                   aria-current={activeTab === "reviews" ? "page" : undefined}
//                   onClick={() => handleTabClick("reviews")}
//                 >
//                   Reviews
//                 </div>
//               </li>
//             </ul>
//             <hr />
//             <div className="p-6 bg-white text-medium rounded-lg ">
//               {activeTab === "description" && (
//                 <div
//                   className="lg:w-96 text-justify lg:text-start"
//                   dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
//                 />
//               )}
//               {activeTab === "reviews" && (
//                 <div>
//                   {data && data[0].reviews.reviews.length > 0 ? (
//                     data &&
//                     data[0].reviews.reviews.map((review, index) => (
//                       <div
//                         key={index}
//                         className="bg-green- flex flex-wrap justify-between items-center border-b "
//                       >
//                         <div className="flex items-center mb-2">
//                           <div className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center">
//                             <Image
//                               src={`${process.env.NEXT_PUBLIC_URL}/${review.avatar}`}
//                               width={100}
//                               height={100}
//                               alt={
//                                 review.id
//                                   ? `Review Avatar ${review.id}`
//                                   : "logo"
//                               }
//                               className="rounded-full text-xs"
//                             />
//                           </div>
//                           <div className="ml-4">
//                             <p className="text-sm  my-1 font-semibold">
//                               {review.user_name}
//                             </p>
//                             <p className="text-xs text-gray-500 mb-3">
//                               {formatDate(review.created_at)}
//                             </p>
//                             <p className="text-xs text-gray-500 my-3">
//                               {review.comment}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center">
//                           {Array(review.rating)
//                             .fill("")
//                             .map((_, i) => (
//                               <FaStar key={i} className="text-yellow-500" />
//                             ))}
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <h1 className="text-black text-justify lg:text-start">
//                       There have been no reviews for this product yet.
//                     </h1>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* ----------------------releted product section----------------------  */}
//           <div className="">
//             <div className=" bg-white mt-4 ">
//               <h2 className="py-3 px-2 text-sm font-semibold">
//                 Related To This Item
//               </h2>
//               <hr />
//               <div className="px-2 pb-4">
//                 <SliderPerview2 slidepre={4}>
//                   <div className="flex">
//                     {reletedItemData?.data &&
//                       reletedItemData?.data?.map((cardData, index) => (
//                         <SwiperSlide key={index}>
//                           <Link href={`/product/${cardData?.id}`}>
//                             <ProductCard cardData={cardData} />
//                           </Link>
//                         </SwiperSlide>
//                       ))}
//                   </div>
//                 </SliderPerview2>
//               </div>
//             </div>

//             <div className=" bg-white mt-4 ">
//               <h2 className="py-3 px-2 text-sm font-semibold">
//                 Related Products
//               </h2>
//               <hr />
//               <div className="px-2 pb-4">
//                 <SliderPerview2 slidepre={4}>
//                   <div className="flex">
//                     {reletedProductData?.data?.map((cardData, index) => (
//                       <SwiperSlide key={index}>
//                         <Link href={`/product/${cardData?.id}`}>
//                           <ProductCard cardData={cardData} />
//                         </Link>
//                       </SwiperSlide>
//                     ))}
//                   </div>
//                 </SliderPerview2>
//               </div>
//             </div>

//             <div className=" bg-white mt-4 ">
//               <h2 className="py-3 px-2 text-sm font-semibold">Recent Views</h2>
//               <hr />

//               <div className="px-2 pb-4">
//                 {recentViewData?.data?.map((cardData, index) => (
//                   <div className="" key={index}>
//                     <ProductCard cardData={cardData} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default ProductDetails;

import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import ProductDetail from "../../../../../Components/ProductDetail";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Product = () => {
  const { id } = useParams();

  const {
    data: productDetailData,
    error: productDetailDataError,
    isValidating: productDetailDataValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/products/${id}`, fetcher);

  if (productDetailDataError) return <div>Error loading product details</div>;
  if (!productDetailData) return <div>Loading...</div>;

  return (
    <main>
      <ProductDetail data={productDetailData?.data} />
    </main>
  );
};

export default Product;
