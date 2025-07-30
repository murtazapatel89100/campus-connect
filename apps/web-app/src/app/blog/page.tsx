"use client";
import { useState } from "react";
import Image from "next/image";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <main className="w-full min-h-screen bg-[#9EBCB8] text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-[#B4DAD4] shadow-[0_15px_64px_rgba(0,0,0,0.25)] rounded-none md:rounded-[32px] p-6 md:p-10 mt-4">
        {/* Header */}
        <header className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">CampusConnect</h1>
          <nav className="hidden md:flex gap-6 text-lg">
            <a href="#">Category</a>
            <a href="#">Events</a>
            <a href="#">Clubs</a>
            <a href="#">News</a>
          </nav>
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 border border-[#313582] rounded-md px-3 py-2 w-full max-w-[300px] bg-white"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
            />
            <button type="submit">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 109.5 2a7.5 7.5 0 000 15z"
                />
              </svg>
            </button>
          </form>
        </header>

        {/* Hero Content */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-serif font-bold leading-tight">
              Stay Updated with What’s Happening on campus!
            </h2>
            <button className="mt-6 bg-[#668890] text-white px-8 py-3 rounded-xl text-xl">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/icons/blog/phone.svg"
              alt="Hero Graphic"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
        {/* Left Column - Popular List */}
        <div className="bg-white shadow p-6 rounded-xl border">
          <h2 className="text-2xl font-semibold text-[#0F1935] mb-6">Popular</h2>
          <div className="space-y-4">
            {["Fruit juices to boost your immune", "Juice variations using avocado", "Simple recipe strawberry juice"].map((title, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <p className="text-lg text-[#121212]">{title}</p>
                <span className="rotate-[-90deg] text-xl">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Featured Article */}
        <div className="flex flex-col items-start">
          <div className="bg-[#F5F6F8] rounded-xl overflow-hidden mb-6 w-full">
            <Image
              src="/images/juice-hero.png"
              alt="Fruit Combo"
              width={500}
              height={300}
              className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
            />
            <div className="p-6">
              <h2 className="text-3xl font-medium text-[#121212]">Fruit combination for daily juice</h2>
              <p className="text-sm text-[#121212]/70 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className="flex items-center mt-4 gap-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <span className="text-sm font-medium">Samantha William</span>
              </div>
            </div>
          </div>

          {/* Trending Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {["orange", "avocado", "strawberry"].map((fruit, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-[#F5F6F8]">
                <Image
                  src={`/images/${fruit}.jpg`}
                  alt={`${fruit} image`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg capitalize">{fruit} juice recipe</h3>
                  <p className="text-sm text-black/50 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video + Contributors */}
        <div className="space-y-6">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/orange-juice.jpg"
              alt="Orange Juice"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            <div className="absolute bottom-4 left-6 right-6">
              <div className="text-white text-3xl font-bold">Simple Orange Juice Recipe</div>
              <div className="mt-4 h-1 w-full bg-white/20 rounded-full">
                <div className="h-1 w-[70%] bg-white rounded-full"></div>
              </div>
              <div className="text-white text-sm text-right mt-1">19:05</div>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F1935] mb-6">Top Contributors</h2>
            <div className="space-y-4">
              {["Andrea Wise", "Karen Smith", "Samantha William", "Renata Hope", "Angela Smith"].map((name, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EC4F3C]" />
                  <div>
                    <p className="font-medium text-[#273240]">{name}</p>
                    <p className="text-sm text-[#2C3A4B]/50">135 articles</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
