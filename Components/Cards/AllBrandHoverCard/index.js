import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllBarndHoverCrad = ({data}) => {

  return (
    <div className="my-5 bg-white py-10 grid place-items-center ">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {data?.data?.map((ele,index) => (
          <Link href={`/brands/${ele?.id}`} key={index}>
            <div
              key={index}
              className="cards w-64 h-[5rem] flex justify-center items-center bg-white ring-1 ring-gray-300 group relative"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}/${ele?.logo}`}
                width={100}
                height={100}
                alt="Sun"
                className="w-24 h-full"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-red-600  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-medium">{ele?.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBarndHoverCrad;
