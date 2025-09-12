"use client";
import { useState, useEffect, Suspense } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdErrorOutline } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
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
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Buttons";

function AuthPageContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState("");
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [breachalert, setBreachAlert] = useState(false);
  const [newAcc, setNewAcc] = useState(false);

  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const otpParam = searchParams.get("otp");
      const emailParam = searchParams.get("email");
      const breachParam = searchParams.get("breach");
      const newAcc = searchParams.get("exists");

      if (otpParam === "true") {
        setIsVerificationStep(true);
      } else {
        setIsVerificationStep(false);
      }

      if (emailParam) {
        setEmail(emailParam);
      }

      if (breachParam === "true") {
        setBreachAlert(true);
      }

      if (newAcc) {
        setNewAcc(true);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!rememberMe && !isVerificationStep) {
      setError("You must agree to the Terms and Conditions to continue.");
      return;
    }

    if (!isLoaded || !signUp) return;

    try {
      if (!isVerificationStep) {
        // Step 1: Create user (email + password)
        await signUp.create({
          emailAddress: email,
          password,
        });

        // Step 2: Prepare email verification (send OTP)
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        // Redirect to same page with otp=true and email param to trigger OTP input
        router.push(
          `/registration?otp=true&email=${encodeURIComponent(email)}`,
        );
      } else {
        // Step 3: Attempt OTP verification
        await signUp.attemptEmailAddressVerification({
          code: oneTimePassword,
        });

        // Step 4: Check signup status
        if (signUp.status === "complete") {
          await setActive({ session: signUp.createdSessionId });
          router.push("/registration/details");
        } else {
          setError("Email verification is not complete. Please try again.");
        }
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
          "An account with this email already exists. Please sign in instead.",
        );
      } else {
        setError(message);
      }
    }
  };

  // Google OAuth Signup/Login (require checkbox rememberMe checked)
  const handleGoogleSignIn = () => {
    if (!rememberMe) {
      setError("You must agree to the Terms and Conditions to continue.");
      return;
    }
    if (isLoaded && signUp) {
      signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/registration/signin?exists=true",
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

        <AlertDialog open={breachalert} onOpenChange={setBreachAlert}>
          <AlertDialogContent className="bg-[#9EBCB8]/60 backdrop-blur-lg border absolute z-20 border-white/30 shadow-lg text-black rounded-2xl p-10 max-w-sm md:max-w-lg w-full">
            <AlertDialogHeader className="items-center font-albert-sans text-center">
              <AlertDialogTitle className="text-xl font-bold">
                Security Alert
              </AlertDialogTitle>
              <AlertDialogDescription className="font-medium text-center mt-2">
                You need to sign in or create an account to access and use all
                features of the app.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="mt-6 font-albert-sans flex justify-center gap-4">
              <AlertDialogCancel
                className="bg-white/20 backdrop-blur-lg border py-1 border-white/30 px-3 cursor-pointer hover:border-white hover:bg-black hover:text-white transition-colors transition-border duration-300 ease-in-out rounded-md"
                onClick={() => setBreachAlert(false)}
              >
                Sign Up
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-white/20 backdrop-blur-lg border border-white/30 px-3 cursor-pointer hover:border-white hover:bg-black hover:text-white transition-colors transition-border duration-300 ease-in-out rounded-md"
                onClick={() => {
                  setBreachAlert(false);
                  router.push("/registration/signin");
                }}
              >
                Sign In
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog open={newAcc} onOpenChange={setNewAcc}>
          <AlertDialogContent className="bg-[#9EBCB8]/60 backdrop-blur-lg border absolute z-20 border-white/30 shadow-lg text-black rounded-2xl p-10 max-w-sm md:max-w-lg w-full">
            <AlertDialogHeader className="items-center font-albert-sans text-center">
              <AlertDialogTitle className="text-xl font-bold">
                Important Alert
              </AlertDialogTitle>
              <AlertDialogDescription className="font-medium text-center mt-2">
                It seems Like you do not please create one to continue
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

          {!isVerificationStep && (
            <>
              <h1 className="text-4xl mt-10 text-center font-bold text-black mb-6">
                Create Your Account
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

              <div id="clerk-captcha"></div>

              <div className="w-full flex justify-start items-center text-xs text-[#000000]">
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
                      className="text-blue-600 underline hover:text-blue-800 hover:font-semibold"
                    >
                      Terms and Conditions
                    </Link>
                  </span>
                </label>
              </div>
            </>
          )}

          {isVerificationStep && (
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
          )}

          {!isVerificationStep && (
            <>
              <button
                type="submit"
                className={cn(buttonVariants({ variant: "login", size: "lg" }))}
                disabled={!isLoaded}
              >
                Sign Up
              </button>

              <div className="w-full text-center font-semibold text-black mx-auto">
                OR
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={!isLoaded || !signUp}
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
                  Already have an account?
                </span>
                <Link
                  href={"/registration/signin"}
                  className="text-[#088D8D] cursor-pointer hover:shadow hover:underline hover:scale-105 transition-transform font-extrabold"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="relative min-h-screen bg-[#1A2328] flex items-center justify-center px-4">
      <div className="h-fit w-[90vw] bg-[url('/images/hero.png')] bg-cover bg-center flex flex-col md:flex-row items-center justify-center">
        <div className="hidden md:block w-1/2"></div>
        <div className="relative z-10 w-full max-w-lg p-10 m-4 md:my-28 flex flex-col items-center justify-center space-y-5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-48 mb-6 mx-auto"></div>
            <div className="space-y-4 w-full">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-12 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="h-12 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component that wraps AuthPageContent in Suspense
export default function AuthPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AuthPageContent />
    </Suspense>
  );
}
