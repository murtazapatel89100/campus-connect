'use client';

import Hero from './Hero';
import GreenSection from './GreenSection';
import FindYourCircle from './FindYourCircle';
import OrangeSection from "./OrangeSection";
import TeamSection from "./TeamSection";
import FaqSection from './FaqSection';

export default function Banner() {
  return (
    <>
      <Hero />
      <GreenSection />
      <FindYourCircle />
      <OrangeSection />
      <TeamSection />
      <FaqSection />

       {/* Wave Divider Before Footer */}
<div className="w-full -mb-[2px]">
  <img
    src="/waves/wave_black.svg"
    alt="Black Wave Divider"
    className="w-full h-auto block pointer-events-none select-none"
    draggable="false"
  />
</div>

<footer className="bg-black text-white text-center text-sm">
        <div className="py-8 px-4">
             <p className="font-light tracking-wide">
                Made by students for students
            </p>
        </div>
</footer>  
      {/* Add more sections as needed */}
    </>
  );
}
