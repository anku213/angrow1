"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Box } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [registerType, setRegisterType] = useState("user");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/angrow-bg.png')", // Make sure this is in your /public folder
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px", // Slightly wider than login to accommodate more fields
        }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left: Toggle + Welcome Text */}
        <Box className="flex flex-col justify-center items-center space-y-4">
          <div className="bg-gray-200 p-1 rounded-full inline-flex">
            <button
              onClick={() => setRegisterType("user")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                registerType === "user"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setRegisterType("company")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                registerType === "company"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Company
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Join Angrow
            </h2>
            <p className="text-gray-500">Create your account to get started</p>
          </div>
        </Box>

        {/* Right: Registration Form */}
        <Box className="space-y-3">
          <h1 className="text-2xl font-bold text-center">
            Register as {registerType === "user" ? "User" : "Company"}
          </h1>

          {registerType === "user" ? (
            <>
              <Input placeholder="Full Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Confirm Password" type="password" />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the Terms & Conditions
                </label>
              </div>
            </>
          ) : (
            <>
              <Input placeholder="Company Name" type="text" />
              <Input placeholder="Business Email" type="email" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Confirm Password" type="password" />
              <Input placeholder="Company Size" type="text" />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the Terms & Conditions
                </label>
              </div>
            </>
          )}

          <Box className="flex justify-center pt-2">
            <Button className="w-full md:w-[150px]">Register</Button>
          </Box>

          <div className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
}
