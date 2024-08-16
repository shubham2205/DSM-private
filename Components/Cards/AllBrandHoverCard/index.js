// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const AllBarndHoverCrad = ({ data }) => {
//   // console.log("brands", data);
  
//   return (
//     <div className="my-5 bg-white py-10 grid place-items-center ">
//       <div className="flex flex-wrap justify-center items-center gap-4">
//         {/* {data?.map((item, index) => (
//           <div className="" key={item?.id}>
//             <Link href={`/brands/${item?.id}`}>
//               <div
//                 className="cards w-64 h-[5rem] flex justify-center items-center bg-white ring-1 ring-gray-300 group relative"
//                 style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
//               >
//                 <Image
//                   src={`${process.env.NEXT_PUBLIC_URL}/${item?.logo}`}
//                   width={100}
//                   height={100}
//                   alt="Sun"
//                   className="w-24 h-full"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center bg-red-600  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-white text-lg font-medium">{item?.name}</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default AllBarndHoverCrad;



import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllBarndHoverCrad = () => {
  const logos = [
    { src: "/Images/sun.png", alt: "sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
    { src: "/Images/sun.png", alt: "Sun", hoverName: "nameOfLogo" },
  ];

  return (
    <div className="my-5 bg-white py-10 grid place-items-center ">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Array.from(Array(12)).map((_, index) => (
          <Link href={`/brands/${index}`} key={index}>
            <div
              key={index}
              className="cards w-64 h-[5rem] flex justify-center items-center bg-white ring-1 ring-gray-300 group relative"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <Image
                src={"/Images/sun.png"}
                width={100}
                height={100}
                alt="Sun"
                className="w-24 h-full"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-red-600  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-medium">nameOfLogo</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBarndHoverCrad;
