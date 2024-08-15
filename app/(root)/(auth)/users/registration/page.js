
"use client"


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../../../../Components/Modal";


const Registration = () => {
  const [useEmail, setUseEmail] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [receivedOtp, setReceivedOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [userid, setUserid] = useState();

  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError("Password must be at least 6 digits long.");
    } else {
      setPasswordError("");
    }

    if (confirmPassword && confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  }, [password, confirmPassword]);

  const toggleInput = () => {
    setUseEmail(!useEmail);
  };

  const checkUserExists = async (emailOrPhone) => {
    const formData = useEmail
      ? { email: emailOrPhone }
      : { phone: emailOrPhone };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v3/auth/check-user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      return response.ok && result.exists;
    } catch (error) {
      toast.error("An error occurred while checking user existence!");
      return false;
    }
  };

  const sendOtp = async (emailOrPhone) => {
    const isEmail = emailOrPhone.includes("@");
    const formData = isEmail
      ? { email: emailOrPhone }
      : { phone: emailOrPhone, countryCode: "+91" };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v3/auth/login-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        setOpen(true);
        setReceivedOtp(parseInt(result.otp));
      } else {
        toast.error(result.message || "OTP sending error!");
      }
    } catch (error) {
      toast.error("An error occurred while sending OTP!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const emailOrPhone = useEmail ? email : `${countryCode}${mobileNumber}`;
    const userExists = await checkUserExists(emailOrPhone);

    if (userExists) {
      toast.error("User already registered");
      return;
    }

    sendOtp(emailOrPhone);
  };

  const handleOtpSubmit = async () => {
    const emailOrPhone = useEmail ? email : `${countryCode}${mobileNumber}`;
    const formData = {
      name: fullName,
      email_or_phone: emailOrPhone,
      password,
      register_by: useEmail ? "email" : "phone",
      verification_code: enteredOtp,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v3/auth/confirm_code`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("OTP matched! Registration successful.");
        setUserid(result?.user_id);
        setOpen(false);
      } else {
        toast.error(result.message || "Invalid OTP!");
      }
    } catch (error) {
      toast.error("Network error!");
    }
  };

  return (
    <div className="flex justify-center py-10 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-sm">
        <h2 className="text-center text-2xl font-bold">Create an account.</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="full_name"
              className="w-full bg-white text-black mt-1 px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex">
              {useEmail ? (
                <input
                  type="email"
                  id="email"
                  className="flex-1 bg-white text-black mt-1 px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              ) : (
                <>
                  <select
                    id="country_code"
                    className="w-20 bg-white text-black mt-1 px- py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    required
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                  </select>
                  <input
                    type="number"
                    id="mobile_number"
                    className="flex-1 bg-white text-black mt-1 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </>
              )}
            </div>
            <div className="mt-1 text-right">
              <button
                type="button"
                onClick={toggleInput}
                className="text-xs underline font-thin text-gray-400 hover:text-red-500"
              >
                {useEmail ? "Use Phone Instead" : "Use Email Instead"}
              </button>
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full bg-white text-black mt-1 px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoMdEyeOff className="text-black" />
              </span>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type="password"
                id="confirm_password"
                className="w-full bg-white text-black mt-1 px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoMdEyeOff className="text-black" />
              </span>
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="remember_me"
              className="checkbox rounded-sm w-4 h-4"
              required
            />
            <label htmlFor="remember_me" className="ml-2 text-xs text-gray-600">
              By signing up you agree to our terms and conditions.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
            >
              Create Account
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <span className="text-gray-500 text-sm">Or Join With</span>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-full text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.35 11.1h-9.3v3.6h5.35c-.35 2-2.2 3.25-5.35 3.25-3.2 0-5.75-2.6-5.75-5.75s2.6-5.75 5.75-5.75c1.4 0 2.7.5 3.7 1.4l2.65-2.7c-1.6-1.5-3.65-2.4-6.35-2.4-5.05 0-9.2 4.15-9.2 9.2s4.15 9.2 9.2 9.2c5.3 0 8.85-3.75 8.85-9 0-.6-.05-1.1-.15-1.65z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-sm text-gray-600">Already have an account? </p>
            <p className="font-thin text-xs text-gray-600">
              <Link href={`/login`}>Log In</Link>
            </p>
          </div>
        </form>
      </div>
      {open && (
        <Modal open={open} onclose={() => setOpen(false)} width={"w-full"}>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 py-20 rounded shadow-md w-full max-w-xl">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Phone Verification
              </h2>
              <p className="text-center text-gray-600 mb-4">
                Verification code has been sent. Please wait a few minutes.
              </p>
              <div className="text-center mb-6">
                <button className="text-red-500">Resend Code</button>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  required
                  placeholder="Enter verification code"
                  className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                onClick={handleOtpSubmit}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Verify
              </button>
            </div>
          </div>
        </Modal>
      )}
      <ToastContainer theme="colored" hideProgressBar />
    </div>
  );
};




export default Registration