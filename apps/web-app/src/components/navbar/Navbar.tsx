"use client";

import { cn } from "../../models/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);

  const navItemClass = cn(
    "transition-transform hover:scale-125 hover:underline hover:text-teal-500 cursor-pointer whitespace-nowrap"
  );

  return (
    <div
      className={cn(
        "fixed top-3 left-1/2 -translate-x-1/2 z-50",
        hide && "hidden"
      )}
    >
      <nav
        className={cn(
          "bg-gray-300 border border-black flex items-center justify-center gap-10 p-4 w-fit rounded-full font-semibold text-black",
          className
        )}
      >
        <p className={navItemClass}>HOME</p>
        <p className={navItemClass}>ABOUT</p>
        <p className={navItemClass}>CONTACT US</p>
      </nav>
    </div>
  );
}
