"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Box } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [loginType, setLoginType] = useState("user");

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
          maxWidth: "500px",
        }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left: Toggle + Welcome Text */}
        <Box className="flex flex-col justify-center items-center space-y-4">
          <div className="bg-gray-200 p-1 rounded-full inline-flex">
            <button
              onClick={() => setLoginType("user")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                loginType === "user"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setLoginType("company")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                loginType === "company"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Company
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Welcome to Angroww
            </h2>
            <p className="text-gray-500">Please sign in to continue</p>
          </div>
        </Box>

        <Box className="space-y-4">
          <h1 className="text-2xl font-bold text-center">
            Login as {loginType === "user" ? "User" : "Company"}
          </h1>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Box className="flex justify-center pt-2">
            <Button className="w-full md:w-[150px]">Login</Button>
          </Box>
        </Box>

        <div className="text-center text-sm text-gray-500 mt-4">
          don't have an account ?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            register
          </Link>
        </div>
      </Box>
    </div>
  );
}
