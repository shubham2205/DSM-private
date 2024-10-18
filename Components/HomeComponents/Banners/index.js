import Image from "next/image";
import React from "react";

const Banners = ({ data }) => {
  return (
    <div>
      <div className="w-full ">
        {data &&
          data?.length > 0 &&
          data.map((banner, i) => (
            <div className="" key={i}>
              <Image
                // src={"/Images/banner3.jpg"}
                src={`${process.env.NEXT_PUBLIC_URL}/${banner}`}
                width={900}
                height={900}
                layout="responsive"
                className="w-full h-auto"
                alt="banner"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Banners;
