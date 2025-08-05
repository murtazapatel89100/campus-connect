"use client";

import LazyLoading from "@/components/Animation/LazyLoading";
import Image from "next/image";
import { buttonVariants } from "../ui/Buttons";
import { cn } from "@/lib/utils";

export default function OrangeSection() {
  const content = [
    {
      key: 1,
      icon: "/icons/encrypted_add.svg",
      alt: "Secure svg",
      heading: "Secure by Design",
      content:
        "Your data stays yours. We use encrypted tokens, protected routes, and best practices to keep your campus life private and safe.",
      width: 100,
      height: 100,
    },
    {
      key: 2,
      icon: "/icons/flash_on.svg",
      alt: "Lightning svg",
      heading: "Blazing Fast",
      content:
        "Built with Next.js and Express, our app delivers lightning-fast performance whether you're browsing events or checking updates.",
      width: 70,
      height: 70,
    },
    {
      key: 3,
      icon: "/icons/devices.svg",
      alt: "Devices svg",
      heading: "Sync Across Devices",
      content:
        "From web to mobile (coming soon), your activity stays in sync. One login, one dashboard, everywhere you go.",
      width: 100,
      height: 100,
    },
  ];

  return (
    <>
      {/* Top Orange Wave */}
      <div className="w-full overflow-hidden pointer-events-none select-none">
        <img
          src="/waves/wave_orange.svg"
          alt="Top Orange Wave"
          className="w-full h-auto"
          draggable="false"
        />
      </div>

      {/* Orange Section */}
      <section className="w-full bg-orange-500 text-black py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 font-family-stick-heading gap-12 md:gap-16">
            {content.map((item) => (
              <div
                key={item.key}
                className="flex hover:scale-110 transition-transform flex-col items-center text-center space-y-4 px-4"
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-xl">
                  <LazyLoading
                    image={item.icon}
                    alt={item.alt}
                    height={item.height}
                    width={item.width}
                  />
                </div>
                <h2 className="text-3xl md:text-4xl whitespace-nowrap">
                  {item.heading}
                </h2>
                <p className="text-base md:text-lg text-black font-family-goudy leading-relaxed max-w-xs">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button
              className={cn(
                buttonVariants({ variant: "tertiary", size: "lg" })
              )}
            >
              READ DOCUMENTATION
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Orange Wave */}
      <div className="w-full overflow-hidden rotate-180 pointer-events-none select-none -mt-[1px]">
        <img
          src="/waves/wave_orange.svg"
          alt="Bottom Orange Wave"
          className="w-full h-auto"
          draggable="false"
        />
      </div>
    </>
  );
}
