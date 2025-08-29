import React from "react";
import { Search } from "lucide-react";

const LoadingSkeleton = () => {
  return (
    <main className="w-full min-h-screen bg-[#9EBCB8] text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-[#B4DAD4] shadow-[0_15px_64px_rgba(0,0,0,0.25)] rounded-none md:rounded-[32px] p-6 md:p-10 mt-4">
        {/* Header */}
        <header className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">CampusConnect</h1>

          <div className="relative text-black mr-32 hidden w-full max-w-md md:flex">
            <Search className="absolute top-1/2 left-2 h-5 w-5 text-black -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-1 rounded-full bg-white py-2 pr-2 pl-10 focus:border-2 border-black focus:ring-0 focus:outline-none"
              disabled
            />
          </div>
        </header>

        {/* Hero Content */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-serif font-bold leading-tight">
              Stay Updated with What's Happening on campus!
            </h2>
            <p className="mt-4 text-lg text-gray-800 max-w-xl">
              From groundbreaking research and thrilling sports events to
              cultural festivals and student-led initiatives — CampusConnect
              brings all the latest stories straight to you.
            </p>
          </div>

          {/* Right - Loading Animation */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Pulsing Circles */}
              <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-white/50 flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 rounded-full border-4 border-white animate-spin border-t-transparent">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#668890] to-white/20"></div>
                  </div>
                </div>
              </div>

              {/* Loading Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <p className="text-lg font-medium animate-pulse">
                  Loading stories...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Loading Section */}
      <section className="w-full min-h-screen bg-[#668890] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
          {/* Loading Cards */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden bg-white shadow-lg flex flex-col h-96 animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer">
                <div className="absolute inset-0 bg-gray-300 rounded-t-xl"></div>
              </div>

              {/* Content Skeleton */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {/* Title Lines */}
                <div className="space-y-2 mb-4">
                  <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
                  <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] w-3/4"></div>
                </div>

                {/* Author and Date */}
                <div className="mt-auto pt-3 flex justify-between items-center border-t border-gray-100">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] w-20"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <span className="ml-2 text-white font-medium">
              Fetching the latest campus stories
            </span>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default LoadingSkeleton;
