"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function Footer() {
  const pathname = usePathname();

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (pathname === "/registration") {
      setHide(true);
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

      <div className="bg-black text-white text-center font-square-peg text-9xl">
        <div className="py-8 px-4">
          <p className="font-light tracking-wide">
            Made by students for students
          </p>
        </div>
      </div>
    </footer>
  );
}
