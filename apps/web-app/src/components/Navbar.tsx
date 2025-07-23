"use client";

import { cn } from "../../lib/utils";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const navItemClass = cn(
    "transition-transform hover:scale-125 hover:underline hover:text-teal-500 cursor-pointer"
  );

  return (
    <nav
      className={cn(
        "fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-gray-300 border border-black flex justify-center gap-10 p-4 w-[20vw] rounded-full font-semibold text-black",
        className
      )}
    >
      <p className={navItemClass}>HOME</p>
      <p className={navItemClass}>ABOUT</p>
      <p className={navItemClass}>CONTACT US</p>
    </nav>
  );
}
