import React from "react";
import { PiSmileySad } from "react-icons/pi";

const Downloads = () => {
  return (
    <section className="w-full h-auto">
           {" "}
      <div className="bg-white">
               {" "}
        <h1 className="py-4 px-4 text-gray-700 text-md">
                    Download Your Product        {" "}
        </h1>
                <hr />       {" "}
        <table className="min-w-full leading-normal bg-white ">
                   {" "}
          <thead>
                       {" "}
            <tr>
                           {" "}
              <th className="px-5 py-3 border-b-2 border-gray-100 text-left text-sm text-nowrap text-black">
                                Code              {" "}
              </th>
                           {" "}
              <th className="px-5 py-3 border-b-2 border-gray-100 text-sm text-nowrap text-black text-center">
                                Options              {" "}
              </th>
                         {" "}
            </tr>
                     {" "}
          </thead>
                   {" "}
          <tbody className="hidden">
                       {" "}
            <tr>
                           {" "}
              <td className="px-5 py-3 text-gray-500 text-2xl"></td>           {" "}
            </tr>
                     {" "}
          </tbody>
                 {" "}
        </table>
                {/* Not Found Section Start */}       {" "}
        <div className="bg-white flex flex-col items-center justify-center py-5">
                   {" "}
          <div className="text-5xl my-3 text-gray-500">
                        <PiSmileySad />         {" "}
          </div>
                    <h6 className="text-xl">Nothing Found</h6>       {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
};

export default Downloads;
