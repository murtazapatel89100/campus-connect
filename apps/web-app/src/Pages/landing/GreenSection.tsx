"use client";

import StudentIDCard from "@/components/Student-Card/StudentIDCard";

export default function GreenSection() {
  return (
    <>
      {/* Green Background Section with Hanging Card */}
      <section className="w-full bg-teal-500 text-white py-8 px-4 sm:px-8 lg:px-16 -mt-[10px]">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-6xl md:text-7xl text-black font-family-stick-heading font-extrabold tracking-wide mb-6">
              Connect. Collaborate. Campus Life.
            </h2>
            <p className="text-lg font-landing-body text-black font-family-goudy md:text-xl font-light leading-relaxed">
              Dive into the pulse of student life with Campus Connect — your
              gateway to clubs, events, opportunities, and conversations across
              campus. Built with purpose and packed with personality, we make it
              easy to stay informed, get involved, and feel at home in your
              university community.
            </p>
          </div>

          {/* Right: Hanging Card */}
          {/* <div className="flex-1 flex justify-center relative -mt-20 lg:mt-0">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-full z-0" />
              <div className="z-10">
                <StudentIDCard
                  name="John Doe"
                  program="AI & DS"
                  rollNumber="GHR2023AIDS001"
                  dob="01/01/2005"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Bottom Green Wave (Flipped) */}
      <div className="relative w-full overflow-hidden -mt-[6px] rotate-180">
        <img
          src="/waves/wave_green.svg"
          alt=""
          className="w-full h-auto pointer-events-none select-none"
          draggable="false"
        />
      </div>
    </>
  );
}
