"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "@cloudinary/url-gen/actions/effect";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(pathname.startsWith("/admin"));
  }, [pathname]);

  const navItemClass =
    "transition-transform hover:scale-110 hover:underline hover:text-teal-400 cursor-pointer whitespace-nowrap";

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-3 px-5",
        hide && "hidden"
      )}
    >
      <nav
        className={cn(
          "bg-white/20 backdrop-blur-3xl border border-black shadow-lg flex items-center justify-between px-8 py-4 font-semibold text-black rounded-2xl",
          className
        )}
      >
        {/* Left Side */}
        <div className="flex gap-6">
          <p className={navItemClass}>HOME</p>
          <p className={navItemClass}>ABOUT</p>
          <p className={navItemClass}>CONTACT US</p>
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
}
