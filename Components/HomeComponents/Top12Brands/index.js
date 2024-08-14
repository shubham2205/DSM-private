// import BrandCard from '@/components/Cards/BrandsCard/BrandCard'
import React from 'react'
import BrandCard from '../../Cards/BrandsCard'

const Top12Brands = ({ title, btnName, data }) => {
  return (
    <div className="w-full  pt-3 ">
    <div className="mt-3">
      <div className="w-full text-black flex justify-between items-center  ">
        <div className="left ">
          <h1 className="border-b-2 border-red-500 pb-6 font-semibold">
            {title}{" "}
          </h1>
        </div>
        <div className="right text-white bg-primary-red px-5 py-2 rounded-sm">
          <button> {btnName}</button>
        </div>
      </div>
      <hr className=" w-full border-gray-300 border-1 mb-4 " />

      <div className="">

      <BrandCard data={data} />
      </div>
    </div>
  </div>
  )
}

export default Top12Brands