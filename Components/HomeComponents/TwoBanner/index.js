import Image from "next/image";
import React from "react";

const TwoBanner = ({ data }) => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-2 gap-5">
        {data &&
          data.map((banner, i) => (
            <div className="" key={i}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}/${banner}`}
                width={500}
                height={500}
                className="w-full h-full"
                alt="banner"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TwoBanner;
