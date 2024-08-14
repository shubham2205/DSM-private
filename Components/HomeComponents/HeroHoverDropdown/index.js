import React from "react";
import CategoryCard from "../CategoryCard/index";

const HeroDropdown = ({ data }) => {
  console.log("home banner data" , data)
  return (
    <div className="relative w-full mt-4 shadow-stone-900 xl:h-[24vh]">
      <div className=" mt-3 w-full hidden xl:block !z-[31] absolute">
        <div className="hero-dropdown text-black shadow-stone-900">
          <div className="  w-full">
            <div className="hero-dropdown w-full text-black ">
              <div className="flex justify-around py-3 ">
                {data &&
                  data.map((data) => (
                    <div className="" key={data.name}>
                      <CategoryCard {...data} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDropdown;
