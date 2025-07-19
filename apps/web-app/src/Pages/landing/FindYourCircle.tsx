'use client';

export default function FindYourCircle() {
  return (
    <section className="w-full bg-[#F4ECE8] py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/find_your_circle.png"
            alt="Find your circle"
            className="rounded-2xl w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-black text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-['Stick_No_Bills'] tracking-wide mb-6">
            Find Your Circle,<br />Build Your Campus Story
          </h2>
          <p className="text-lg md:text-xl font-light font-['Sorts_Mill_Goudy'] leading-relaxed">
            Explore interest-based clubs, attend exclusive student events, and meet
            peers who vibe with your passions. Campus Connect helps you discover and
            join communities that make college more than just classes — it becomes
            connection, creativity, and real collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
