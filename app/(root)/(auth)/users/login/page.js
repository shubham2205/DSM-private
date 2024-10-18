import React from "react";
import LoginForm from "../../../../../Components/Forms/Login";

const Login = () => {
  return (
    <div className="bg-defaultBg">
      <div className="flex justify-center items-center py-14 bg-gray-100">
        <div className="w-full max-w-[26rem] py-8 px-6 space-y-6 bg-white shadow-md rounded-md">
          <h2 className="text-center text-2xl font-bold text-black">
            Login to your account.
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
