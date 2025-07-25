"use client";

import { BannerButton } from "@/components/ui/Buttons";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 relative -mb-[10px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.56), rgba(0,0,0,0.56)), url('/images/hero.png')",
      }}
    >
      <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-16 mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif stick lg:text-6xl font-bold">
          Welcome to Campus Connect
        </h1>
        <p className="text-xl md:text-2xl font-sans lg:text-3xl font-light leading-tight">
          Explore. Connect. Belong. Campus life, simplified.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8">
          <BannerButton variant="primary" text="READ OUR ORIGIN STORY" />
          <BannerButton variant="secondary" text="CONTACT US" />
        </div>
      </div>

      {/* Bottom Wave (Green) */}
      <div className="pointer-events-none select-none absolute bottom-[-2px] left-0 w-full overflow-hidden leading-none">
        <img
          src="/waves/wave_green.svg"
          alt=""
          className="w-full h-auto align-bottom"
          draggable="false"
        />
      </div>
    </section>
  );
}
