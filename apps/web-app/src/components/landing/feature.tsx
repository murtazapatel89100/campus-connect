"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  FaCode,
  FaCloud,
  FaDollarSign,
  FaExchangeAlt,
  FaHeart,
  FaQuestionCircle,
  FaRoute,
  FaBolt,
} from "react-icons/fa";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Feature() {
  const features: FeatureItem[] = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <FaCode size={24} />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <FaExchangeAlt size={24} />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <FaDollarSign size={24} />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <FaCloud size={24} />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <FaRoute size={24} />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: <FaQuestionCircle size={24} />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you do not like EveryAI, we will convince you to like us.",
      icon: <FaBolt size={24} />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <FaHeart size={24} />,
    },
  ];

  return (
    <section className="min-h-screen w-full py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
              (index === 0 || index === 4) &&
                "lg:border-l dark:border-neutral-800",
              index < 4 && "lg:border-b dark:border-neutral-800"
            )}
          >
            {/* Hover gradient */}
            {index < 4 ? (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) : (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}

            {/* Icon */}
            <div className="mb-4 relative z-10 px-10 text-[#7a4a31] dark:text-neutral-400">
              {feature.icon}
            </div>

            {/* Title */}
            <div className="text-lg font-bold font-albert-sans mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#7a4a31] transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#7a4a31] dark:text-neutral-100">
                {feature.title}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
