"use client";
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialogue/alert-dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdErrorOutline } from "react-icons/md";
import { useSignIn } from "@clerk/nextjs";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Buttons";

const Signin = () => {
  // const [breachalert, setBreachAlert] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [oneTimePassword, setOneTimePassword] = useState("");
  const [newAcc, setNewAcc] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const otpParam = searchParams.get("otp");
      const emailParam = searchParams.get("email");
      const newAcc = searchParams.get("exists");

      if (newAcc) {
        setNewAcc(true);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isLoaded || !signIn) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/registration/details");
      } else {
        setError("Email verification is not complete. Please try again.");
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.message ||
        err?.message ||
        "Failed to create account. Please try again.";

      if (
        message.toLowerCase().includes("invalid") ||
        message.toLowerCase().includes("code")
      ) {
        setError("Invalid OTP code. Please check your email and try again.");
      } else if (
        message.toLowerCase().includes("already") ||
        message.toLowerCase().includes("duplicate") ||
        message.toLowerCase().includes("exist")
      ) {
        setError(
          "An account with this email already exists. Please sign in instead."
        );
      } else {
        setError(message);
      }
    }
  };

  const handleGoogleSignIn = () => {
    if (isLoaded && signIn) {
      signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/registration?exists=false",
        redirectUrlComplete: "/registration/details",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1A2328] flex items-center justify-center px-4">
      <div className="relative w-[90vw] h-screen max-h-[900px] min-h-[600px] flex flex-col md:flex-row items-center justify-center">
        {/* Background Image */}
        <img
          src="/images/hero.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="hidden md:block w-1/2"></div>
        <AlertDialog open={newAcc} onOpenChange={setNewAcc}>
          <AlertDialogContent className="bg-[#9EBCB8]/60 backdrop-blur-lg border absolute z-20 border-white/30 shadow-lg text-black rounded-2xl p-10 max-w-sm md:max-w-lg w-full">
            <AlertDialogHeader className="items-center font-albert-sans text-center">
              <AlertDialogTitle className="text-xl font-bold">
                Important Alert
              </AlertDialogTitle>
              <AlertDialogDescription className="font-medium text-center mt-2">
                It seems liek you already have an account please signIn to
                continue
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="mt-6 font-albert-sans flex justify-center gap-4">
              <AlertDialogCancel
                className="bg-white/20 backdrop-blur-lg border py-1 border-white/30 px-3 cursor-pointer hover:border-white hover:bg-black hover:text-white transition-colors transition-border duration-300 ease-in-out rounded-md"
                onClick={() => setNewAcc(false)}
              >
                Okay
              </AlertDialogCancel>
              {/* <AlertDialogAction
                className="bg-white/20 backdrop-blur-lg border border-white/30 px-3 cursor-pointer hover:border-white hover:bg-black hover:text-white transition-colors transition-border duration-300 ease-in-out rounded-md"
                onClick={() => {
                  setBreachAlert(false);
                  router.push("/registration/signin");
                }}
              >
                Sign In
              </AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <form
          className="relative z-10 w-full max-w-lg p-10 m-4 md:my-28 flex flex-col items-center justify-center space-y-5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
          onSubmit={handleSubmit}
        >
          {error && (
            <Alert
              variant="destructive"
              className="w-full bg-white text-red-500"
            >
              <AlertTitle>
                <div className="flex items-center gap-1">
                  <MdErrorOutline color="red" size={18} />
                  Error
                </div>
              </AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <h1 className="text-4xl mt-10 text-center font-bold text-black mb-6">
            Login Into Your Account
          </h1>
          {/* EMAIL AND PASSWORD INPUTS */}
          <div className="w-full space-y-4">
            <div>
              <label className="block font-medium text-[#1E1E1E] mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-transparent bg-white/30 backdrop-blur-md rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                placeholder="Enter your email"
                disabled={!isLoaded}
              />
            </div>
            <div>
              <label className="block font-medium text-[#1E1E1E] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-transparent bg-white/30 backdrop-blur-md rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                  placeholder="Enter your password"
                  disabled={!isLoaded}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <IoIosEyeOff size={20} color="black" />
                  ) : (
                    <IoIosEye size={20} color="black" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end items-center text-xs text-[#000000]">
            <label className="flex items-center gap-2 text-sm text-[#000000]">
              <Link
                href="/forgot-password"
                className="text-blue-600 underline hover:text-blue-800 hover:font-semibold"
              >
                Forgot Password?
              </Link>
            </label>
          </div>

          {/* {isVerificationStep && (
            <div className="w-full my-24">
              <h1 className="text-4xl mt-10 text-center font-bold text-black mb-6">
                Verify Your Email
              </h1>
              <label className="block font-medium text-[#1E1E1E] mb-1">
                OTP
              </label>
              <input
                type="text"
                required
                value={oneTimePassword}
                onChange={(e) => setOneTimePassword(e.target.value)}
                className="w-full px-4 py-3 border border-transparent bg-white/30 backdrop-blur-md rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                placeholder="Enter the verification code sent to your email"
                disabled={!isLoaded}
              />
              <button
                type="submit"
                className="w-full mt-10 bg-[#1E1E1E] cursor-pointer hover:scale-105 transition-transform text-white font-semibold py-3 rounded-md"
              >
                Verify
              </button>
            </div>
          )} */}

          <button
            type="submit"
            className={cn(buttonVariants({ variant: "login", size: "lg" }))}
            disabled={!isLoaded}
          >
            Sign In
          </button>

          <div className="w-full text-center font-semibold text-black mx-auto">
            OR
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={!isLoaded || !signIn}
            className="w-full hover:shadow hover:scale-105 transition-transform cursor-pointer flex items-center justify-center gap-3 border border-[#5B5B5B] rounded-md py-3 bg-white/30 backdrop-blur-sm"
          >
            <Image
              src="/icons/google-icon.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="font-semibold text-sm text-[#1A1C1E]">
              Sign up with Google
            </span>
          </button>

          <div className="mb-10 flex justify-center items-center text-sm gap-2 flex-wrap text-center">
            <span className="text-black font-semibold">
              Don't have an account?
            </span>
            <Link
              href={"/registration"}
              className="text-[#088D8D] cursor-pointer hover:shadow hover:underline hover:scale-105 transition-transform font-extrabold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
