"use client";
import { useState } from "react";
import Image from "next/image";
import BlogLayout from "@/Pages/Blog/bloglayout";
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

      <BlogLayout />
      
    </main>
  );
}
