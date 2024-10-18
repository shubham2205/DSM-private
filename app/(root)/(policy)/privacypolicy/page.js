import React from "react";
import { getData } from "../../../../lib/actions/universel.actions";

const PrivacyPolicy = async () => {
  const policy = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/policies/privacy`
  );

  return (
    <div className="w-full px-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold lg:text-2xl mt-5 tracking-tight">
          Privacy Policy
        </h2>
        <p className="text-neutral-500 text-xs font-bold mt-3">
          Home /<span className="text-black"> Privacy Policy </span>
        </p>
      </div>

      <div className="bg-white p-5">
        <div className="container mx-auto">
          <div
            dangerouslySetInnerHTML={{
              __html: policy?.data?.at(0)?.content || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
