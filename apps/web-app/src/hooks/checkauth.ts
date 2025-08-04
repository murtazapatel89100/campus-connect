"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export const AuthRedirect = (redirectTo: string = "/registration") => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace(redirectTo);
    }
  }, [isLoaded, isSignedIn, router, redirectTo]);
};
