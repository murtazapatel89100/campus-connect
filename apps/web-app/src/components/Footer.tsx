"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "../models/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/registration") || pathname.startsWith("/admin")) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);

  return (
    <footer className={cn(hide ? "hidden" : "block")}>
      <div className="w-full -mb-[2px]">
        <img
          src="/waves/wave_black.svg"
          alt="Black Wave Divider"
          className="w-full h-auto block pointer-events-none select-none"
          draggable="false"
        />
      </div>

      <div className="bg-black text-white text-center font-square-peg text-5xl md:text-9xl">
        <div className="py-8 px-4">
          <p className="font-light tracking-wide">
            Made by students for students
          </p>
        </div>
      </div>
    </footer>
  );
}
