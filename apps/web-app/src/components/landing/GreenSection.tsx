"use client";

import React, { useState, useEffect } from "react";
import MobileShowcase from "@/components/ui/mobile"; // Adjust the path as needed

// Example articles data (should match the expected format)
const articles = [
  {
    id: 1,
    title: "Tech Fest 2025 Breaks Attendance Records",
    excerpt: "Annual technology festival attracts over 5,000 students with cutting-edge workshops and startup showcases.",
    author: "Alex Rodriguez",
    date: "Dec 15, 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    category: "Technology",
    views: 2500
  },
  {
    id: 2,
    title: "Drama Club's Winter Play Sold Out",
    excerpt: "'Romeo and Juliet' production receives standing ovations as drama department showcases exceptional talent.",
    author: "Emma Thompson",
    date: "Dec 14, 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop",
    category: "Cultural",
    views: 1800
  },
  {
    id: 3,
    title: "AI Research Lab Wins National Competition",
    excerpt: "Computer Science students develop groundbreaking machine learning model for sustainable energy optimization.",
    author: "Dr. Kevin Chen",
    date: "Dec 13, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    category: "Research",
    views: 3200
  }
];

export default function GreenSection() {
  // Auto-cycle through articles every 4 seconds like your original logic
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Green Background Section with Hanging Card */}
      <section className="w-full bg-teal-500 text-white py-8 px-4 sm:px-8 lg:px-16 -mt-[10px]">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-6xl md:text-6xl text-black font-gothic-expanded font-extrabold tracking-wider mb-6">
              Connect. Collaborate. Campus Life.
            </h2>
            <p className="text-xl font-landing-body text-black font-family-goudy md:text-2xl font-light leading-relaxed">
              Dive into the pulse of student life with Campus Connect — your gateway to clubs, events, opportunities, and conversations across campus. Built with purpose and packed with personality, we make it easy to stay informed, get involved, and feel at home in your university community.
            </p>
          </div>
          {/* Right Content: MobileShowcase */}
          <div className="flex-1 flex justify-center">
            <MobileShowcase
              articles={articles}
              currentArticle={currentArticle}
            />
          </div>
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
