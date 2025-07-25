"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-[#1A2328] flex items-center justify-center px-4 sm:px-6">
      <div className="absolute w-80 h-80 sm:w-[532px] sm:h-[507px] top-10 left-10 rounded-full bg-gradient-to-b from-[#2C5364] to-[#0F2027] opacity-70"></div>

      <div className="relative z-10 bg-white shadow-xl rounded-xl w-full max-w-3xl sm:max-w-4xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
        {/* Left Image Section */}
        <div className="relative hidden sm:block">
          <Image
            src="/images/hero.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Right Form Section */}

        <Image
          src="/assets/Vector.svg"
          alt="Background"
          width={137}
          height={137}
          className=" absolute top-0 right-1/2 z-50"
        />

        <form
          className="space-y-5 items-center w-full justify-center flex flex-col"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl mt-10 text-center font-bold text-black mb-6">
            Welcome!
          </h1>

          <div className="w-full max-w-md">
            <label className="block font-medium text-[#1E1E1E] mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-sm rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
              placeholder="Enter your email"
            />

            <label className="block font-medium text-[#1E1E1E] mb-1 mt-4">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-transparent bg-gray-200 backdrop-blur-sm rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
              placeholder="Enter your password"
            />
          </div>

          <div className="w-full max-w-md flex justify-between items-center text-xs text-[#000000]">
            <label className="flex items-center gap-2 text-sm text-[#000000]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 border border-black"
              />
              <span>
                Agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 underline hover:text-blue-800 hover:underline hover:font-semibold"
                >
                  Terms and Conditions
                </Link>
              </span>
            </label>

            <Link
              href="#"
              className="text-blue-600 underline hover:text-blue-800 hover:underline hover:font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-3/4 bg-[#1E1E1E] cursor-pointer hover:scale-105 transition-transform text-white font-semibold py-3 rounded-md"
          >
            SIGN IN
          </button>
          <div className="w-full text-center font-semibold text-black mx-auto">
            OR
          </div>
          <button className="w-3/4 hover:shadow hover:scale-105 transition-transform cursor-pointer flex items-center justify-center gap-3 border border-[#5B5B5B] rounded-md py-3">
            <Image
              src="/icons/github-icon.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span className="font-semibold text-sm text-[#1A1C1E]">
              Sign in with GitHub
            </span>
          </button>

          <button className="w-3/4 flex items-center hover:shadow hover:scale-105 transition-transform cursor-pointer justify-center gap-3 border border-[#5B5B5B] rounded-md py-3">
            <Image
              src="/icons/google-icon.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="font-semibold text-sm text-[#1A1C1E]">
              Sign in with Google
            </span>
          </button>
          <div className=" mb-32 flex justify-center items-center text-sm gap-2 flex-wrap text-center">
            <span className="text-black font-semibold">
              Don't have an account?
            </span>
            <button className="text-[#088D8D] cursor-pointer hover:shadow hover:underline hover:scale-105 transition-transform font-extrabold">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <div className="mt-6 flex justify-center items-center text-sm gap-2 flex-wrap text-center">
            <span className="text-black font-semibold">
              Don't have an account?
            </span>
            <button className="text-[#088D8D] cursor-pointer hover:shadow hover:underline hover:scale-105 transition-transform font-extrabold">
              Sign up
            </button>
          </div> */
}
