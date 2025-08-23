"use client";
import React, { useEffect, useState } from "react";
import { useAuth, useClerk, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdErrorOutline } from "react-icons/md";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Buttons";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return null;
  }

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
        setError("");
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function reset(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
          setError("");
        } else if (result.status === "complete") {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({
            session: result.createdSessionId,
            navigate: async ({ session }) => {
              if (session?.currentTask) {
                // Check for tasks and navigate to custom UI to help users resolve them
                // See https://clerk.com/docs/custom-flows/overview#session-tasks
                console.log(session?.currentTask);
                return;
              }

              router.push("/");
            },
          });
          setError("");
        }
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
      });
  }

  return (
    <div>
      <section>
        <div className="relative min-h-screen bg-[#1A2328] flex items-center justify-center px-4">
          {/* Background Image Container with Fixed Size */}
          <div className="relative w-[90vw] h-screen max-h-[900px] min-h-[600px] flex flex-col md:flex-row items-center justify-center">
            {/* Background Image */}
            <img
              src="/images/hero.png"
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />

            {/* Left side spacer for desktop */}
            <div className="hidden md:block w-1/2 relative z-10"></div>

            {/* Form Container */}
            <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-4">
              <form
                className="w-full max-w-lg p-10 transition-transform flex flex-col items-center justify-center space-y-5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
                onSubmit={!successfulCreation ? create : reset}
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
                  Forgot Password
                </h1>

                {!successfulCreation && (
                  <>
                    <div className="w-full space-y-4">
                      <div>
                        <label className="block font-medium text-[#1E1E1E] mb-1">
                          Provide your email address
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
                      <button
                        type="submit"
                        className={cn(
                          buttonVariants({ variant: "login", size: "lg" })
                        )}
                      >
                        Send password reset code
                      </button>
                    </div>
                  </>
                )}

                {successfulCreation && (
                  <>
                    <div className="w-full space-y-4">
                      <div>
                        <label className="block font-medium text-[#1E1E1E] mb-1">
                          Enter your new password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 pr-12 border border-transparent bg-white/30 backdrop-blur-md rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                            placeholder="Enter your new password"
                            disabled={!isLoaded}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B5B5B] hover:text-[#1E1E1E] transition-colors"
                          >
                            {showPassword ? (
                              <IoIosEyeOff size={20} />
                            ) : (
                              <IoIosEye size={20} />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1E1E1E] mb-1">
                          Enter the password reset code that was sent to your
                          email
                        </label>
                        <input
                          type="text"
                          required
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          className="w-full px-4 py-3 border border-transparent bg-white/30 backdrop-blur-md rounded-md text-sm placeholder-[#5B5B5B] transition-all duration-300 focus:border-[#5B5B5B] focus:bg-white focus:backdrop-blur-0"
                          placeholder="Enter the reset code"
                          disabled={!isLoaded}
                        />
                      </div>

                      <button
                        type="submit"
                        className={cn(
                          buttonVariants({ variant: "login", size: "lg" })
                        )}
                      >
                        Reset
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
