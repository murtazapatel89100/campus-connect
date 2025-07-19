'use client';

import { BannerButton } from '@/components/ui/Buttons';

export default function OrangeSection() {
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
      <section className="w-full bg-[#C06522] text-white py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          {/* Grid of Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-[84px] h-[84px] bg-[#D9D9D9] rounded-xl" />
              <h2 className="text-4xl md:text-5xl font-['Stick_No_Bills'] font-bold tracking-wider">
                Secure by Design
              </h2>
              <p className="text-base md:text-lg font-['Sorts_Mill_Goudy'] text-black leading-relaxed max-w-xs">
                Your data stays yours. We use encrypted tokens, protected routes, and best
                practices to keep your campus life private and safe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-xl" />
              <h2 className="text-4xl md:text-5xl font-['Stick_No_Bills'] font-bold tracking-wider">
                Blazing Fast
              </h2>
              <p className="text-base md:text-lg font-['Sorts_Mill_Goudy'] text-black leading-relaxed max-w-xs">
                Built with Next.js and Express, our app delivers lightning-fast performance
                whether you're browsing events or checking updates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-[84px] h-[84px] bg-[#D9D9D9] rounded-xl" />
              <h2 className="text-4xl md:text-5xl font-['Stick_No_Bills'] font-bold tracking-wider">
                Sync Across Devices
              </h2>
              <p className="text-base md:text-lg font-['Sorts_Mill_Goudy'] text-black leading-relaxed max-w-xs">
                From web to mobile (coming soon), your activity stays in sync. One login,
                one dashboard, everywhere you go.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <BannerButton variant="tertiary" text="SEE DOCUMENTATION" />
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
