"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import LazyLoading from "@/components/Animation/LazyLoading";

export default function FindYourCircle() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section className="w-full bg-[#F4ECE8] py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <LazyLoading
          image="/images/find_your_circle.png"
          alt="Find your circle"
          height={400}
          width={600}
          className="rounded-xl shadow-lg"
        />

        {/* Text */}
        <div className="w-full lg:w-1/2 text-black text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-gothic-expanded font-extrabold tracking-wide mb-6">
            Find Your Circle,
            <br />
            Build Your Campus Story
          </h2>
          <p className="text-lg md:text-xl font-family-goudy leading-relaxed">
            Explore interest-based clubs, attend exclusive student events, and
            meet peers who vibe with your passions. Campus Connect helps you
            discover and join communities that make college more than just
            classes — it becomes connection, creativity, and real collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
