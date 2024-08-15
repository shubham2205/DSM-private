// import React from "react";
// import useSWR from "swr";
// import AllBarndHoverCrad from "../../../../Components/Cards/AllBrandHoverCard";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// const Brands = () => {
//   const { data, error, isValidating } = useSWR(
//     `${process.env.NEXT_PUBLIC_AP}/v3/brands`,
//     fetcher
//   );

//   if (error) return <div>failed to load</div>;
//   if (!data && !error) return <div>loading...</div>;
//   return (
//     <div className="bg-defaultBg text-black py-5">
//       <div className="flex justify-between">
//         <h1 className="text-xl font-medium ">All Brands</h1>
//         <p className="text-sm font-semibold">Home /All Brands</p>
//       </div>

//       <div className="w-full  bg-white shadow-md">
//         <AllBarndHoverCrad data={data?.data} />
//       </div>
//     </div>
//   );
// };

// export default Brands;

import React from "react";

const Brands = () => {
  return <div>Brands..</div>;
};

export default Brands;
