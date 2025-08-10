"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  mediaSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  mediaSrc = "/images/hero.png",
  bgImageSrc = "/images/library.png",
  title = "Campus Connect",
  textBlend = false,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mediaRef.current) return;

    const ctx = gsap.context(() => {
      const media = mediaRef.current!;
      const container = containerRef.current!;

      const mediaInitialWidth = 300;
      const mediaInitialHeight = 400;
      const mediaFinalWidth = isMobile ? 950 : 1550; // 300 + 650 / 1250 approx
      const mediaFinalHeight = isMobile ? 600 : 800; // 400 + 200 / 400 approx

      // GSAP timeline for scroll-expand
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setExpanded(self.progress === 1);
          },
        },
      });

      tl.to(media, {
        width: mediaFinalWidth,
        height: mediaFinalHeight,
        ease: "power1.out",
        duration: 1,
      });

      tl.to(
        media,
        {
          boxShadow: "0px 0px 80px rgba(0,0,0,0.5)",
          ease: "power1.out",
          duration: 1,
        },
        0
      );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start min-h-[100dvh]"
      style={{ backgroundColor: expanded ? "#F4ECE8" : "transparent" }}
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src={bgImageSrc}
          alt="Background"
          width={1920}
          height={1080}
          className="w-screen h-screen"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main container content */}
      <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
          {/* Media */}
          <div
            ref={mediaRef}
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{ width: 300, height: 400, maxWidth: "95vw", maxHeight: "85vh" }}
          >
            <Image
              src={mediaSrc}
              alt={title || "Media content"}
              width={1280}
              height={720}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-black/50 rounded-xl" />
          </div>

          {/* Title, Date, Scroll to Expand */}
          <div
            className={`relative z-10 mt-4 text-center text-blue-200 ${
              textBlend ? "mix-blend-difference" : "mix-blend-normal"
            }`}
          >
            
            {title && (
              <h1 className="text-6xl font-bold font-gothic-expanded">{title}</h1>
            )}
          </div>
        </div>

        {/* Expanded content area with default example content if children not passed */}
        <div className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 text-black bg-[#F4ECE8]">
          {children ?? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-6 font-gothic-expanded">
                About Campus Connect
              </h2>
              <p className="text-2xl mb-8 font-family-goudy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                perspiciatis quis soluta nam harum dolore ab. Quo consectetur rem non
                saepe laudantium recusandae? Provident laborum ea cupiditate
                exercitationem dicta aspernatur?
              </p>
              <p className="text-2xl mb-8 font-family-goudy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe qui
                veniam, praesentium perspiciatis eligendi sequi commodi sapiente
                repellat quia dolores voluptatem id, dolore, rem numquam autem magnam
                ipsam placeat accusamus?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
