"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  FaCode, FaCloud, FaDollarSign, FaExchangeAlt, FaHeart, FaQuestionCircle, FaRoute, FaBolt
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { title: "Built for developers", description: "Built for engineers, developers, dreamers, thinkers and doers.", icon: <FaCode size={28} /> },
    { title: "Ease of use", description: "It's as easy as using an Apple, and as expensive as buying one.", icon: <FaExchangeAlt size={28} /> },
    { title: "Pricing like no other", description: "Our prices are best in the market. No cap, no lock, no credit card required.", icon: <FaDollarSign size={28} /> },
    { title: "100% Uptime guarantee", description: "We just cannot be taken down by anyone.", icon: <FaCloud size={28} /> },
    { title: "Multi-tenant Architecture", description: "You can simply share passwords instead of buying new seats", icon: <FaRoute size={28} /> },
    { title: "24/7 Customer Support", description: "We are available a 100% of the time. At least our AI Agents are.", icon: <FaQuestionCircle size={28} /> },
    { title: "Money back guarantee", description: "If you do not like EveryAI, we will convince you to like us.", icon: <FaBolt size={28} /> },
    { title: "And everything else", description: "lorem opsum", icon: <FaHeart size={28} /> },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".feature-card");

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-b from-[#F4ECE8]-50 dark:from-neutral-900 to-[#F4ECE8]-100 dark:to-neutral-950">
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 px-6"
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              "feature-card group relative flex flex-col bg-white/10 dark:bg-neutral-800/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-neutral-200/20 dark:border-neutral-700/30 cursor-pointer overflow-hidden"
            )}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#7a4a31]/20 to-transparent" />

            {/* Icon */}
            <div className="mb-4 text-[#7a4a31] dark:text-amber-300 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold font-albert-sans text-neutral-900 dark:text-white group-hover:translate-x-1 transition duration-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
