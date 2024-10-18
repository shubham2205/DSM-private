"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { login } from "../../../lib/actions/auth.actions";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", emailOrPhone);
    formData.append("password", password);

    const result = await login(
      `${process.env.NEXT_PUBLIC_API}/v3/auth/login`,
      formData
    );

    if (result && result.ok) {
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.error(result);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full bg-white mt-1 text-black px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          placeholder="Email or phone"
        />
      </div>
      <div>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white text-black mt-1 px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="Password"
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <IoMdEye className="text-black" />
            ) : (
              <IoMdEyeOff className="text-black" />
            )}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember_me"
            className="checkbox rounded-sm w-4 h-4"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm text-gray-400"
          >
            Remember Me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-gray-400 hover:text-red-500">
            Forgot Password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => router.push("/")}
        >
          Login
        </button>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300 w-full h-2"></div>
          <button
            type="button"
            className="w-full text-nowrap flex justify-center py-2 px-4 border border-transparent text-gray-400 text-sm"
          >
            Or Login With
          </button>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      {/* ------------------------------- */}
      {/* "login with google" */}

      <div className="flex justify-center">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-full text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.35 11.1h-9.3v3.6h5.35c-.35 2-2.2 3.25-5.35 3.25-3.2 0-5.75-2.6-5.75-5.75s2.6-5.75 5.75-5.75c1.4 0 2.7.5 3.7 1.4l2.65-2.7c-1.6-1.5-3.65-2.4-6.35-2.4-5.05 0-9.2 4.15-9.2 9.2s4.15 9.2 9.2 9.2c5.3 0 8.85-3.75 8.85-9 0-.6-.05-1.1-.15-1.65z"></path>
          </svg>
        </button>
      </div>
      {/* ------------------------------- */}
      <div className="flex flex-col items-center justify-between mt-6">
        <p className="text-xs text-gray-600">Don&apos;t have an account?</p>
        <p>
          <Link
            href={`/users/registration`}
            className="font text-xs text-gray-400"
          >
            Register Now
          </Link>
        </p>
        <p className="font text-xs text-gray-400">Or</p>
        <p>
          <Link href={`/`} className="font text-xs text-gray-400">
            Delete Account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
